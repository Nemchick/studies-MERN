import mongoose from 'mongoose';

const PostSchama = new mongoose.Schema(
    {
    title:{
        type:String,
        required: true,
    },
    text:{
        type:String,
        required: true,
        unique: true,
    },
    tags:{
        type: Array,
        default: [],
    },
    viewsCount:{
        type: Numder,
        default: 0,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
    },

    imageUrl: String,
},
    {
    timestamps: true,
    }
);

export default mongoose.model('Post', PostSchama);