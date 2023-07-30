const mongoose = require("mongoose");

const concertSchema = mongoose.Schema ({
    date: {type: String, required: true},
    street: {type: String, required: true},
    city: {type: String, required: true},
    postalCode: {type: Number, required: true},
    name: {type: String, required: true},
});

const Concert = mongoose.model("Concert", concertSchema);

module.exports = Concert

