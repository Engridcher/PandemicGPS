const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fetch = require('node-fetch');
const cors = require('cors')

const ZipCode = require('./zipcode')
const SuggestSite = require('./suggestsite')
const ZipCodeLatLog = require('./zipcodelatlog')

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


app.listen(8000, () => {
  console.log('Server is running');
})
