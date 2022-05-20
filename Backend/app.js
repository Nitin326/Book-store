const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const router = require('./Routes/Routes')
const cors = require('cors');
dotenv.config();
const app = express();

const port = process.env.PORT || 4000;
const url = process.env.URL;

mongoose.connect(url,{
       useUnifiedTopology:true,
       useNewUrlParser:true
}).then(() => {
    console.log("database Connected")
})
.catch((err) => console.log(err));

app.use(express.json());
app.use(cors());
//Middleare
app.use('/books',router)

app.listen(port, () => console.log(`server is running at ${port}`));

