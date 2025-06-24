import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'

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

  app.use(express.json());
  app.use(allowCors);