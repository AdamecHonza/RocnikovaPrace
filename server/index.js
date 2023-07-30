const express = require("express");
const morgan = require("morgan");
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");
const port = process.env.port || 5000;
const concertRouter = require("./routes/concert");  
const userRouter = require("./routes/user");  


mongoose.connect(
    `mongodb+srv://admin_db:${process.env.MONGODB_PW}@rocnikovka.t6vsd4k.mongodb.net/test`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/concert", concertRouter)
app.use("/user", userRouter)

app.listen(port, () => console.log(`Running on port: ${port}`));


