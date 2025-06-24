import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import cors from 'cors'

import formRouter from "../routes/form.js";

const allowCors = (req, res, next) => {
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Origin', 'https://flashcards-seven-nu.vercel.app') //change this
    res.header('Access-Control-Allow-Methods', 'GET,PATCH,DELETE,POST,PUT,OPTIONS')
    res.header(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    if (req.method === 'OPTIONS') {
        res.status(200).end()
        return
      }
    next();
  }

  const app = express();
  const port = 5000;
  const uri = process.env.MONGO_URI;

  app.use(express.json());
  //app.use(allowCors);
  app.use('/forms', formRouter);

  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });

  mongoose.connect(uri).then(() => {
    console.log(`Connected to MongoDB Project "Dark Purple Pill" Cluster "introform"`)
  }).catch((e) => {
    console.log(e)
  });