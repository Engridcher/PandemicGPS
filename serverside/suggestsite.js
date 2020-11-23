const { model, Schema } = require('mongoose') ; 

const suggestsite = new Schema({
    covidSite:{
        type: String, 
        required: true
    },
    siteAddress:{
        type: String, 
        required: true
    },
    siteCity:{
        type: String, 
        required: true
    },
    siteState:{
        type: String, 
        required: true
    },
    sitePhone:{
        type: String, 
        required: true
    },
    siteWebsite:{
        type: String, 
        required: true
    },
});

const SuggestSite = model('SuggestSite', suggestsite);

module.exports = SuggestSite;