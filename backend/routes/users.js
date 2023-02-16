const express = require("express");
const router = express.Router();
const User = require("../models/UserSchema");
const Hospital = require("../models/HospitalSchema");

router.post("/login", async (req, res) => {
  const user = await User.find({ username: req.body.username });
  if (user.length > 0) {
    if (user[0].password !== req.body.password) {
      return res.sendStatus(403);
    } else {
      // return res.send(await Hospital.find({id : { $in: user[0].hospitalIds}})).status(200)
      return res.send(user[0]);
    }
  } else {
    return res.sendStatus(404);
  }
});

router.post("/register", async (req, res) => {
  const user = await User.find({ username: req.body.username });
  if (user.length > 0) return res.sendStatus(403);
  else {
    await User.create(req.body);
    return res.send("User created.");
  }
});

router.put("/update", async (req, res) => {
  const user = await User.find({ username: req.body.username });
  const updatedUser = await User.updateOne(
    { username: req.body.username },
    { hospitalIds: [...user[0].hospitalIds, req.body.hospitalId] }
  );
  console.log(updatedUser.data);
  return res.send(await User.find({ username: req.body.username }));
});

router.put("/update_remove", async (req, res) => {
  try {
    // const user = await User.findOne({ username: req.body.username });
    const updatedUser = await User.updateOne(
      { username: req.body.username },
      { $pull: { hospitalIds: req.body.hospitalId } },
      { new: true }
    );
    console.log(updatedUser.data);
    return res.json(updatedUser.data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Szerverhiba");
  }
});

module.exports = router;
