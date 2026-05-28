import express from "express";
const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    res.send("app is runing successfully !");
})

app.post("/api/users",(req, res)=>{
    const {name, email, password} = req.body;
    res.send("creating user");
});

export default app;