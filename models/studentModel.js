import mongoose from 'mongoose';
//defining schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    image: {
        name: {
            type: String
        },
        url: {type: String},
        
    },
});
const studentModel = mongoose.model('Student', studentSchema);
export default studentModel;