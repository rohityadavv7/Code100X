const express = require("express");
const app = express();
const cors = require("cors");

// const { ClerkExpressRequireAuth } = require('@clerk/clerk-sdk-node');

// // Clerk configuration
const clerkFrontendApi = 'https://perfect-reptile-67.clerk.accounts.dev';
const clerkBackendApi = 'https://api.clerk.com';
CLERK_PUBLISHABLE_KEY='pk_test_cGVyZmVjdC1yZXB0aWxlLTY3LmNsZXJrLmFjY291bnRzLmRldiQ';
CLERK_SECRET_KEY='sk_test_t7GSdb45SqTa3p44k1258zY47WfSoY3Rgf4zEEvYuA';


require("dotenv").config();

const PORT = process.env.PORT || 4000;

//middlewares
app.use(express.json());
app.use(cors({
    origin:"*",
    methods:["GET", "HEAD", "OPTIONS", "POST"]
}))

// Middleware to handle Clerk authentication
// app.use(ClerkExpressRequireAuth());

const userRoutes = require("./routes/UserRoutes");
const dbConnect = require("./config/Database");

app.use("/auth", userRoutes);


//Database se connection
dbConnect();

//default route
app.get("/", (req,res)=> {
    return res.json({
        message:"Its Working!"
    })
})

//server ko live krdo
app.listen(PORT, ()=> {
    console.log(`server is up and running at ${PORT}`);
})

