const Review2 = require('../models/review2');
const User = require('../models/user');

exports.index = async (req, res, next) => {
  try {
    const reviews2 = await Review2.find();
    res.status(200).json(reviews2);
  } catch (error) {
    next(error);
  }
};

exports.show = async (req, res, next) => {
  try {
    const review2 = await Review2.findById(req.params.id);

    res.status(200).json(review2);
  } catch (error) {
    next(error);
  }
}

exports.create = async (req, res, next) => {
  console.log(req.body);
  try {
    const { rating, review } = req.body;

    const user = await User.findById(req.user._id);

    const r = await Review2.create({
      critic: user.name,
      rating: rating,
      review: review
    });

    res.status(200).json({ message: "Review was created successfully", review: r });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { _id, rating, review } = req.body;
    console.log(req.body);
    const r = await Review2.findOneAndUpdate({ _id: _id }, {
      rating,
      review
    });

    res.status(200).json({ message: "Review was updated successfully", review: r });
  } catch (error) {
    next(error);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const { _id } = req.body;
    await Review2.findOneAndDelete({ _id: _id });

    res.status(200).json({ message: "Review was deleted successfully", });
  } catch (error) {
    next(error);
  }
};
