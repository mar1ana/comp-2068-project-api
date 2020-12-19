const Review3 = require('../models/review3');
const User = require('../models/user');

exports.index = async (req, res, next) => {
  try {
    const reviews3 = await Review3.find();
    res.status(200).json(reviews3);
  } catch (error) {
    next(error);
  }
};

exports.show = async (req, res, next) => {
  try {
    const review3 = await Review3.findById(req.params.id);

    res.status(200).json(review3);
  } catch (error) {
    next(error);
  }
}

exports.create = async (req, res, next) => {
  console.log(req.body);
  try {
    const { rating, review } = req.body;

    const user = await User.findById(req.user._id);

    const r = await Review3.create({
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
    const r = await Review3.findOneAndUpdate({ _id: _id }, {
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
    await Review3.findOneAndDelete({ _id: _id });

    res.status(200).json({ message: "Review was deleted successfully", });
  } catch (error) {
    next(error);
  }
};
