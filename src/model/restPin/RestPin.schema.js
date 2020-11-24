const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResetPinSchema = new Schema({
  pin: {
    type: String,
    maxlength: 6,
    minlength: 6,
  },
  email: {
    type: String,
    maxlength: 50,
    required: true,
  },
});

module.exports = {
  ResetPinSchema: mongoose.model("Reset_pin", ResetPinSchema),
};
