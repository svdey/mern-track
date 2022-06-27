const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// connect the db
const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.info("db connected");
  })
  .catch((e) => console.log("Error : ", e));

// Import Routers
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

// start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
