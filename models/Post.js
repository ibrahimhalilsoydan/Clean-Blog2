import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const PostSchema = new Schema({
  title: String,
  detail: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

// Modeli oluştur ve dışa aktar
const Post = mongoose.model('Post', PostSchema);
export default Post;
