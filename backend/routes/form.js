import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();

import {Form} from '../models/form.js';

const focuses = new Set([
    "Glow-up / Aesthetics",
    "Profile Photo Improvement",
    "Style / Grooming",
    "Dating App Results",
    "General Self-improvement"
])

const progress = new Set([
    "Just starting out",
    "Mid glow-up",
    "Already transformed, wanting next steps",
    "Just curious"
])

const error = (e, res) => {
    console.error(e);
        return res.status(500).json({
            success: false,
            error: e
    })
}

router.get('/', async (req, res) => {
    try {
        const data = await Form.find({});
        return res.status(200).json(data)
    } catch (e) {
        error(e, res)
    }
})

router.post('/', async (req, res) => {
    try {
        const {firstName, lastName, age, email, currentFocus, currentProgress} = req.body;
        if (!firstName || !lastName || !age || !email) {
            return res.status(400).json({
                success: false,
                message: "firstName, lastName, age, and email are required fields!"
            })
        }

        if (!focuses.has(currentFocus)) {
            return res.status(400).json({
                success: false,
                message: "currentFocus is not valid!"
            })
        }

        if (!progress.has(currentProgress)) {
            return res.status(400).json({
                success: false,
                message: "currentProgress is not valid!"
            })
        }

        const data = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            email: email,
            currentFocus: currentFocus,
            currentProgress: currentProgress
        }

        const createData = await Form.create(data);
        return res.status(200).json({
            success: true,
            message: "Form data successfully recorded!"
        })
    } catch(e) {
        error(e, res);
    }
})

router.delete('/', async (req, res) => {
    try {
        const {id} = req.body;
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "id is required!"
            });
        }

        const deleteFormData = await Form.findByIdAndDelete(id);
        
        return res.status(200).json({
            success: true,
            message: "Form data successfully deleted!"
        });
    } catch(e) {
        error(e, res);
    }
})

export default router;