const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

const SECRET = "secret_key";

app.post("/api/login", (req,res) =>{
    console.log("Post /api/login");
    console.log("Body : ",req.body);

    const {username, password} = req.body;

    if( username !== 'khushpreet' || password !== 'khush23'){
        console.log('Invalid Credentials');
        return res.status(401).json({mesaage: "Invalid Credentials"});
    }

    const token = jwt.sign(
        {username : "khushpreet", password: "khush23"},
        SECRET,
        {expiresIn: '2h'}
    )

    console.log("JWT issued: ", token);
    res.json({token})
})

app.get("/api/profile", (req,res) =>{
    console.log("Get /api/profile");

    const authHeaders = req.headers.authorization;
    console.log("Authorization header: ", authHeaders);

    if(!authHeaders || !authHeaders.startsWith("Bearer")){
        console.log("No token provided");
        return res.status(401).json({mesaage: "No token Provided"});
    }

    const token = authHeaders.split(" ")[1];

    try{
        const decoded = jwt.verify(token,SECRET);
        console.log("Token decoded", decoded);

        res.json({message: "Profile fetched", user: decoded});
    }
    catch(err){
        console.log("Invalid token", err.message);
        res.status(401).json({message: "Invalid token"});
    }
});

app.listen(5000, ()=>{
    console.log("JWT running on https://localhost:5000");
})