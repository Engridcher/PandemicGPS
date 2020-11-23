const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const GeoJSON = require('mongoose-geojson-schema');

const zipcodelatlog = new Schema({
    datasetid: { type: String, default: 'us-zip-code-latitude-and-longitude' },
    recordid: { type: String },
    fields: {
        city: { type: String },
        zip: { type: String },
        dst: { type: Number },
        geopoint: [
            { type: Number },
            { type: Number }
        ],
        longitude: { type: Number },
        state: { type: String },
        latitude: { type: Number },
        timezone: { type: Number }
    },
    geometry: {
        type: "Point",
        coordinates: [
            { type: Number },
            { type: Number }
        ]
    },
    record_timestamp: { type: Date, default: Date.now }
});

const ZipCodeLatLog = model('ZipCodeLatLog', zipcodelatlog);

module.exports = ZipCodeLatLog;