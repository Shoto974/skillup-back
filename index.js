const express = require("express");
const courseRoutes = require("../routes/courseRoutes");
const connectDB = require("./config/db");
const app = express();
const port = 7777;

//Routing
connectDB();
app.use(express.json());

app.use("/api/", courseRoutes);

app.listen(port, () => console.log(`Server running port ${port}`));
