const mongoose = require("mongoose");

const appSchema = new mongoose.Schema({
  username: {
    type: String,
  },

  city: {
    type: String,
  },

  comment: {
    type: String,
  },

  subscriber: {
    type: Boolean,
  },

  residency: {
    type: String,
  },
});

// appSchema.methods.getPostBy = function() {
//     return `posted by ${this.username}, ${this.residency} of ${this.city}`
// }

module.exports = mongoose.model("App", appSchema);
