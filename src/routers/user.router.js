const express = require("express");
const { route, post } = require("./ticket.router");
const router = express.Router();

const {
  insertUser,
  getUserByEmail,
  getUserById,
} = require("../model/user/User.model");
const { hashPassword, comparePassword } = require("../helpers/bcrypt.helper");
const { crateAccessJWT, crateRefreshJWT } = require("../helpers/jwt.helper");
const {
  userAuthorization,
} = require("../middlewares/authorization.middleware");

router.all("/", (req, res, next) => {
  // res.json({ message: "return form user router" });

  next();
});

// Get user profile router
router.get("/", userAuthorization, async (req, res) => {
  //this data coming form database
  const _id = req.userId;

  const userProf = await getUserById(_id);

  res.json({ user: userProf });
});

// Create new user router
router.post("/", async (req, res) => {
  const { name, company, address, phone, email, password } = req.body;

  try {
    //hash password
    const hashedPass = await hashPassword(password);

    const newUserObj = {
      name,
      company,
      address,
      phone,
      email,
      password: hashedPass,
    };
    const result = await insertUser(newUserObj);
    console.log(result);

    res.json({ message: "New user created", result });
  } catch (error) {
    console.log(error);
    res.json({ statux: "error", message: error.message });
  }
});

//User sign in Router
router.post("/login", async (req, res) => {
  console.log(req.body);

  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ status: "error", message: "Invalid form submition!" });
  }

  const user = await getUserByEmail(email);

  const passFromDb = user && user._id ? user.password : null;

  if (!passFromDb)
    return res.json({ status: "error", message: "Invalid email or password!" });

  const result = await comparePassword(password, passFromDb);

  if (!result) {
    return res.json({ status: "error", message: "Invalid email or password!" });
  }

  const accessJWT = await crateAccessJWT(user.email, `${user._id}`);
  const refreshJWT = await crateRefreshJWT(user.email, `${user._id}`);

  res.json({
    status: "success",
    message: "Login Successfully!",
    accessJWT,
    refreshJWT,
  });
});

module.exports = router;
