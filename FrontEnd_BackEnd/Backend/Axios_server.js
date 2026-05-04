const express = require('express');
const cors = require('cors');

const app = express()
app.use(cors());
app.use(express.json());

let user ={
    id: 1,
    name: 'Khushpreet',
    age: 21,
    role: 'developer'
};

// GET which is used to fetch user data from backend
app.get('/api/user', (req,res)=>{
    console.log("Get /api/user");
    res.json(user);
})

// Post which is used to send data to the backend
app.post('/api/user',(req,res)=>{
    console.log("Post /api/user");
    console.log("Data Recieved", req.body);

    user = {id: Date.now(), ...req.body};

    res.json({
        message: "User Created",
        user,
    });
})

// Put which is used to replace the entire data with new data 
app.put('/api/user',(req,res)=>{
    console.log("Put /api/user");
    console.log("Data Replaced", req.body);

    user = req.body;

    res.json({
        message:"Data Replaced Succesfully",
        user,
    });
})


// Patch which is used to update specific data column
app.patch('/api/user',(req,res)=>{
    console.log("Patch /api/user");
    console.log("Specific Data Replaced", req.body);

    user = {...user,...req.body};

    res.json({
        message: "Partial Data Replaced Succesfully",
        user,
    });
})


// Delete which is used to remove the data 
app.delete('/api/user',(req,res)=>{
    console.log("Delete /api/user");

    user = null;
    res.json({
        message: "Data Deleted Successfully"
    });
})

app.listen(5000, ()=>{
    console.log("Backend Started on http://localhost:5000")
})