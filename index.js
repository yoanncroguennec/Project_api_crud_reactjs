const app = require("./app/app");
require("dotenv").config();

//  MONGODB
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI);

// RUN SERVER
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server started 🧦 ${PORT}`);
});
