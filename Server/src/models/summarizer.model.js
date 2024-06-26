import mongoose from "mongoose";

const summarizedSchema = new mongoose.Schema({
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    inputText:{
        type: String,
        required: true,
        default: ''
    },
    generatedText:{
        type: String,
        default: ''
    },
    title:{
        type: String
    }
},{timestamps: true});

export const summarizeSchema = mongoose.model('summarizeSchema', summarizedSchema); 