import mongoose from "mongoose";

const Schema = mongoose.Schema;
const courseSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true},
    rating:{ type: Number, required: true},
    duration:{ type: String, required: true},
    trainer:{ type: String, required: true},
    createdAt:{type: Date, required: true},
    updatedAt:{type: Date, default: Date.now}
});

const courseModel = mongoose.model("courses", courseSchema);

export default courseModel;