// REMOVE-START
const User = require('./../models/user');
// REMOVE-END

const authMiddleware = async (req, res, next) => {
  // REMOVE-START
  try {
    const { uid } = req.session;
    const user = await User.findOne({ _id: uid });
    if (!user) throw new Error();
    req.user = user;
    next();
  } catch (error) {
    return res.sendStatus(401);
  }
  // REMOVE-END
};

module.exports = authMiddleware;
