const mongoose = require("mongoose");
const userSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    userType: { type: String, default: "User" },
    name: { type: String, required: true },
    email: {
        type: String,
        required: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },
    password: { type: String },

    mobileNumber: {
        type: Number,
    }
})
module.exports = mongoose.model("User", userSchema);
