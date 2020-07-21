const router = require("express").Router();
const bcrypt = require("bcrypt");
const users = [];

router.get("/user", (req, res) => {
  res.send(users);
});
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = {
    name,
    email,
    password: hashedPassword
  };
  users.push(user);
  res.status("200").json(user);
  console.log("users :>> ", users);
});

module.exports = router;
