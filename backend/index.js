import app from './src/server.js';
import dotenv from 'dotenv';
import dbConnect from './src/config/db.js'
dotenv.config();
const PORT =process.env.PORT || 3000;

dbConnect().then(()=>{
    app.listen(PORT, ()=>{ 
        console.log("server is runing on port "+PORT);
    });
}).catch(error=>console.log("connecting to database failed",error));
