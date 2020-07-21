const express = require("express");
const port = 5000;
const app = express();
const router = require("./routes/userRouter");
const logger = require("morgan");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use("/api", router);

app.listen(port, () => {
  console.log(`look for changes on ${port}`);
});
