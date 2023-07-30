const Concert = require("../models/concert");

exports.getConcerts = async (req, res) => {
  try {
    const result = await Concert.find();
    if (result && result.length !== 0) {
      return res.status(200).json({
        count: result.length,
        concerts: result.map((concert) => {
          return { 
            ...concert.toObject(),
            request: {
              type: "GET",
              url: `http://localhost:5000/concert/${concert._id}`
            },
          };
        }),
      });
    }
    res.status(404).json();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
};

exports.getConcert = async (req, res) => {
  try {
    const result = await Concert.findById(req.params.id).select("-__v");
    if (result) {
      return res.status(200).json({
        ...result.toObject(),
        request: {
          type: "GET",
          url: "http://127.0.0.1:5000/concert"
        },
      });
    }
    res.status(404).json();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
};

exports.postConcert= async (req, res) => {
  try {
    const concert = new Concert({
      date: req.body.date,
      street: req.body.street,
      city: req.body.city,
      postalCode: req.body.postalCode,
      name: req.body.name
    });
    const result = await concert.save();
    if (result) {
      return res.status(201).json({
        createdConcert: {
          ...result.toObject(),
          payload: {
            type: "GET",
            url: `http://127.0.0.1:5000/concert/${result._id}`
          },
        },
      });
    }
    res.status(500).json();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error,
    });
  }
};

exports.deleteConcert = async (req, res) => {
  try {
    const result = await Concert.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).json({
        msg: `Concert ${result.name}, id: ${result._id} was deleted`,
      });
    }
    res.status(404).json({
      msg: "Concert not found",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
};