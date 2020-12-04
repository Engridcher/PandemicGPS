const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fetch = require('node-fetch');
const cors = require('cors')

const ZipCode = require('./zipcode')
const SuggestSite = require('./suggestsite')
const ZipCodeLatLog = require('./zipcodelatlog')
const Donation = require('./donationusers')

const app = express();

//local
// mongoose.connect('mongodb://localhost:27017/PandemicGPS', { useNewUrlParser: true })
// Atlas
mongoose.connect('mongodb+srv://engridcher:hampton1225@cluster0.nrfqb.mongodb.net/PandemicGPS?retryWrites=true&w=majority', { useNewUrlParser: true })
  .then(() => { console.log("connected"); })
  .catch(() => { console.log("error connecting"); });

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({ zip: 20059 });
})

app.post('/api/zipcode', (req, res) => {
  let covidtestsite = 'https://api.findcovidtesting.com';
  const zipcode = new ZipCode({
    zipcode: req.body.zipCode
  });
  //send the document to the database
  zipcode.save()
    //in case of success
    .then(() => {
      console.log('Successful Save');

      ZipCodeLatLog.find({ "fields.zip": req.body.zipCode }, (err, mydocs) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Results: ", mydocs);

          let long = mydocs[0].fields.longitude.toString();
          let lat = mydocs[0].fields.latitude.toString();

          fetch(covidtestsite + "/api/v1/location?source_latitude=" + lat + "&source_longitude=" + long + "&distance=5")
            .then(response => {
              if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response);
              }
              return Promise.reject(new Error(response.statusText));
            })
            .then(response => response.json())
            .then(result => {
              // console.log(result)
              return res.json(result)
            })
            .catch(error => {
              // common error
              return null;
            });
        }
      })
    })
    //if error
    .catch(err => { console.log('Error:' + err); });
});

app.delete("/api/zipcode/:zipcode", async (req, res, next) => {
  console.log(req.params.zipcode);
  ZipCode.findOneAndDelete({ zipcode: req.params.zipcode }).then(result => {
    console.log(result);
    res.status(200).json("Deleted!");
  })
  .catch((err) => {
    console.log("No zip code to delete!!", err);
   });
});

app.get("/api/zipcode/", (req, res, next) => {
  const zipcodes = ZipCode.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

/*HTTP methods for suggestsite */
app.get("/api/suggestsite/", (req, res, next) => {

  const suggestsite = SuggestSite.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.post('/api/suggestsite', (req, res) => {

  const { covidSite, siteAddress, siteCity, siteState, sitePhone, siteWebsite } = req.body;

  const suggestsite = new SuggestSite({
    covidSite,
    siteAddress,
    siteCity,
    siteState,
    sitePhone,
    siteWebsite
  });

  //send the document to the database
  suggestsite.save()
    //in case of success
    .then(() => { console.log('Success'); })
    //if error
    .catch(err => { console.log('Error:' + err); });

  //    res.send('finish');
})

app.post("/api/suggestsite/forupdate", (req, res, next) => {

  const suggestsite = SuggestSite.findById({_id: req.body.id}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
       res.json(result);
    }
  });
});


app.delete("/api/suggestsite/:id", async (req, res, next) => {
  console.log(req.params.id);
  SuggestSite.findOneAndDelete({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json("Deleted!");
  });
});

app.put("/api/suggestsite/:id", async (req, res, next) => {
  console.log(req.params.id);

   const updateInfo = {
    covidSite: req.body.covidSite,
    sitePhone: req.body.sitePhone,
    siteWebsite: req.body.siteWebsite,
    siteCity: req.body.siteCity,
    siteState: req.body.siteState,
    siteAddress: req.body.siteAddress
  };

  SuggestSite.findOneAndUpdate({ _id: req.params.id }, updateInfo).then(result => {
    console.log(result);
    res.status(200).json("Updated!");
  });
});

app.get('/api/coviddata/:zip', async (req, res) => {
  let covidtestsite = 'https://api.findcovidtesting.com';

  // return res.json({covid: 'data'})
  //console.log(req.params.zip);
  let myZip = parseInt(req.params.zip);

  console.log(myZip);

  // { "fields.zip": myZip }
  // _id: '5fa18b1205948b1771b50871'
  // { recordid: "41b0d059612f82e2cb59bb59666de811cf05dda8"}

  let long;
  let lat;

  await ZipCodeLatLog.find({ "fields.zip": myZip }, (err, mydocs) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Results: ", mydocs);

      long = mydocs[0].fields.longitude.toString();
      lat = mydocs[0].fields.latitude.toString()

      // covidtestsite + "/api/v1/location?source_latitude=" + lat + "&source_longitude=" + long + "&distance=5"
      // covidtestsite + `/api/v1/location?source_latitude=38.907711&source_longitude=-77.01732&distance=5`

      fetch(covidtestsite + "/api/v1/location?source_latitude=" + lat + "&source_longitude=" + long + "&distance=5")
        .then(response => {
          // network failure, request prevented
          // return res.send(response)
          if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
          }

          return Promise.reject(new Error(response.statusText));
        })
        .then(response => response.json())
        .then(result => {
          // console.log(result)
          return res.json(result)
        })
        .catch(error => {
          // common error
          return null;
        });
    }
  })
});

/* NOTE  Karna's Routes */

app.post('/api/donation', (req, res) => {
  console.log(req.body);

  const donation = new Donation({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    a3: req.body.a3,
    cardname: req.body.cardname,
    cardnumber: req.body.cardnumber,
    expmonth: req.body.expmonth,
    expyear: req.body.expyear,
    cvv: req.body.cvv,
  });
  //send the document to the database
  donation.save()
    //in case of success
    .then(() => {
      console.log('Success');
      res.json({ mydata: "From my Donation Page" })
    })
    //if error
    .catch(err => {
      console.log('Error:' + err);
    });
})

app.delete('/api/donation/:id', (req, res) => {
  console.log(req.params.id);
  Donation.findOneAndDelete({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json("Deleted!");
  });
})

app.get('/api/donation/', (req, res) => {
  const donation = Donation.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
})

app.put('/api/donation/:id', (req, res) => {

  const updateInfo = {
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    a3: req.body.a3,
    cardname: req.body.cardname,
    cardnumber: req.body.cardnumber,
    expmonth: req.body.expmonth,
    expyear: req.body.expyear,
    cvv: req.body.cvv,
  };

  Donation.findOneAndUpdate({ _id: req.params.id }, updateInfo).then(result => {
    console.log(result);
    res.status(200).json("Updated!");
  });

})

// need update Donation
app.post("/api/donation/forupdate", (req, res, next) => {

  const suggestsite = Donation.findById({ _id: req.body.id }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

/*  ENE OF Karma's Route */

/*  NOTE Start of Maryline's Routes */

app.get('/users', (req, res, next) => {
  User.find()
    //if data is returned, send data as a response
    .then(data => res.status(200).json(data))
    //if error, send internal server error
    .catch(err => {
      console.log('Error: ${err}');
      res.status(500).json(err);
    });
});

// serve incoming post requests to /user
app.post('/users', (req, res, next) => {
  // create a new user variable and save request’s fields
  const user = new User({

    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    phonenumber: req.body.phonenumber,
    address: req.body.address,
    zipcode: req.body.zipcode,
    password: req.body.password
  });
  //send the document to the database
  user.save()
    //in case of success
    .then(() => { console.log('Success'); })
    //if error
    .catch(err => { console.log('Error:' + err); });

});

//:id is a dynamic parameter that will be extracted from the URL
app.delete("/users/:id", (req, res, next) => {
  User.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json("Deleted!");
  });

});

// serve incoming put requests to /users
app.put('/users/:id', (req, res, next) => {
  console.log("id: " + req.params.id)
  // check that the parameter id is valid
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    //find a document
    User.findOneAndUpdate({ _id: req.params.id },
      {
        $set: {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          username: req.body.username,
          email: req.body.email,
          phonenumber: req.body.phonenumber,
          address: req.body.address,
          zipcode: req.body.zipcode,
          password: req.body.password
        }
      },
      { new: true })
      .then((user) => {
        if (user) { //what was updated
          console.log(user);
        } else {
          console.log("no data exist for this id");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    console.log("please provide correct id");
  }

});

/*  END OF Maryline's Routes  */


app.listen(8000, () => {
  console.log('Server is running');
})
