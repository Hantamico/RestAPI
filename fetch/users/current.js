const getCurrentUser = async (req, res) => {
  res
    .status(200)
    .json({ email: req.user.email, subscription: req.user.subscription, avatarUrl: req.user.avatarUrl, });
};

module.exports = getCurrentUser;