const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    roll: {
        type: String,
        required: true,
        trim: true,
    },
    des: {
        type: String,
        required: true,
    },
    linkdinUrl: {
        type: String,
        required: true,
    },
    instaUrl: {
        type: String
    },
    accountType: {
        type: String,
        enum: ["TeamMember", "Faculty"],
        required: true,
    },
    // email: {
    //     type: String,
    //     required: true,
    //     trim: true,
    // },
    image: {
        type: String
    },
});

module.exports = mongoose.model("member", memberSchema);