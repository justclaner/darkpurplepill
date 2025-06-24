import mongoose from 'mongoose';
const formSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        currentFocus: {
            type: String,
            required: false
        },
        currentProgress: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
)

export const Form = mongoose.model("Form", formSchema);