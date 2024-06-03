const mongoose = require("mongoose");

const dbConnect = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
   .then(() => console.log("MongoDB Connected..."))
   .catch((error) => {
    console.log(error),
    console.log("Issue in Db Connection!")
   });
}

module.exports = dbConnect;