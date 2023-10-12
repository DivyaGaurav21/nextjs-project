import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    addedDate: {
        type: Date,
        required: true,
        default: Date.now()
    },
    status: {
        type: String,
        enum: ['pending', 'completed'],
        default: 'pending'
    },
    userId: {
        type: mongoose.ObjectId,
        required: true,
    }

});

// export const Todo = mongoose.model.todos ? mongoose.model.todos : mongoose.model('todos', TodoSchema);
export const Todo = mongoose.models.todos || mongoose.model('todos', TodoSchema);
// export const Todo = mongoose.model('todos', TodoSchema);