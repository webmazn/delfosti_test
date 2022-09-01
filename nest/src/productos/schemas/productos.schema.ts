import { Schema  } from 'mongoose';

export const ProductosSchema = new Schema({
    id: Number,
    name:  {
        type: String,
        require: true
    },
    category: String,
    slug: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});