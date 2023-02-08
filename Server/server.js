const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDb = require("./config/db.js");
const userRoutes = require("./routes/userRoutes.js");

dotenv.config();
connectDb();
const PORT = process.env.PORT;
app.use(express.json());

app.use("/users", userRoutes);


app.listen(PORT, console.log(`Server is listening at Port:-${PORT}`));

