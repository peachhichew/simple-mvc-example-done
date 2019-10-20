const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let DogModel = {};

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
  breed: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
  age: {
    type: Number,
    min: 0,
    required: true,
  },
  createdDate: {
    // type: Number,
    // min: 0,
    // required: true
    type: Date,
    default: Date.now,
  },
});

DogSchema.statics.findByName = (name, callback) => {
  const search = {
    name,
  };

  return DogModel.findOne(search, callback);
};

DogModel = mongoose.model('Dog', DogSchema);

module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;
