import app from './src/server.js';
import dotenv from 'dotenv';
import dbConnect from './src/config/db.js'

// load environment variables from .env file 
dotenv.config();

// get port from environment variable or use default value
const PORT =process.env.PORT || 3000;


// connect to database and start the server 
dbConnect().then(()=>{
    // start the server
    app.listen(PORT, ()=>{ 
        console.log("server is runing on port "+PORT);
    });
}).catch(error=>console.log("connecting to database failed",error));
