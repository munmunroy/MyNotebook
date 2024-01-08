import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from './route/posts.js';
import userRoutes from './route/users.js';

const app = express();



app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts',postRoutes);
app.use("/users", userRoutes);
const PORT = process.env.PORT || 5000;
// app.listen(PORT,()=>{
//   console.log(`Server is running on localhost:${PORT}`)
// })

const CONNECTION_URL = "mongodb+srv://myNoteBook:myNoteBook123@cluster0.f5jrl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


// const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Running on Port:${PORT}`))
  )
  .catch((error) => console.log(error.message));





