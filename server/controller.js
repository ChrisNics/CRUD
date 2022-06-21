const mongoose = require("mongoose");
const Model = mongoose.model(
  "Test",
  new mongoose.Schema({
    item: {
      type: String,
      unique: true,
    },
  })
);

exports.addItem = async (req, res, next) => {
  try {
    const doc = await Model.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  } catch (error) {
    return next(error);
  }
};

exports.deleteItems = async (req, res, next) => {
  try {
    const doc = await Model.remove();

    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    return next(error);
  }
};

exports.deleteItem = async (req, res, next) => {
  try {
    const doc = await Model.deleteOne({ _id: req.params.id });

    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    return next(error);
  }
};

exports.updateItem = async (req, res, next) => {
  try {
    const doc = await Model.findByIdAndUpdate({ _id: req.params.id }, { item: req.body.item }, { new: true });
    console.log(doc);

    res.status(200).json({
      status: "success",
      data: doc,
    });
  } catch (error) {
    return next(error);
  }
};
