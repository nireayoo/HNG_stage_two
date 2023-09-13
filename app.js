const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const personRoutes = require('./routes/person-routes');

const app = express();
dotenv.config();

const PORT = 5005;
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api', personRoutes);

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
});

mongoose.set("strictQuery", false);
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.we0x91f.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    serverSelectionTimeoutMS: 6000,
    maxPoolSize:10,
    
},
console.log("DB is now connected")).catch((err)=>{
    console.log(err);

});





