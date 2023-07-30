const User = require("../models/user");

exports.getUsers = async (req, res) => {
  try {
    const result = await User.find();
    if (result && result.length !== 0) {
      return res.status(200).json({
        count: result.length,
        users: result.map((user) => {
          return { 
            ...user.toObject(),
            request: {
              type: "GET",
              url: `http://localhost:5000/user/${user._id}`
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

exports.getUser = async (req, res) => {
  try {
    const result = await User.findById(req.params.id).select("-__v");
    if (result) {
      return res.status(200).json({
        ...result.toObject(),
        request: {
          type: "GET",
          url: "http://127.0.0.1:5000/user"
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

exports.postUser= async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
    });
    const result = await user.save();
    if (result) {
      return res.status(201).json({
        createdUser: {
          ...result.toObject(),
          payload: {
            type: "GET",
            url: `http://127.0.0.1:5000/user/${result._id}`
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

exports.deleteUser = async (req, res) => {
  try {
    const result = await User.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).json({
        msg: `User ${result.name} ${result.lastName} was deleted`,
      });
    }
    res.status(404).json({
      msg: "User not found",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
};