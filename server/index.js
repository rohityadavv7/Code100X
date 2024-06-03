const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 4000;

//middlewares
app.use(express.json());
app.use(cors({
    origin:"*",
    methods:["GET", "HEAD", "OPTIONS", "POST"]
}))

const userRoutes = require("./routes/UserRoutes");
const dbConnect = require("./config/Database");

app.use("/auth", userRoutes);


//Database se connection
dbConnect();


//server ko live krdo
app.listen(PORT, (req, res) => {
    console.log(`Server is running on port: ${PORT}`);
})

