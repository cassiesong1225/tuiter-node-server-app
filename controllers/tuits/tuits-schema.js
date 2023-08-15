import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    title: String,
    topic: String,
    username: String,
    handle: String,
    image: String,
    likes: Number,
    liked: Boolean,
    replies: Number,
    retuits: Number,
    time: String,
}, { collection: 'tuits' });
export default schema;
