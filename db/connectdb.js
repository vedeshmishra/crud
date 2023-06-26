import mongoose from "mongoose";
const connectDB = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: "crud",
        };
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log('connected to mongoDB');
    } catch (err) {
        console.log('error connecting to mongoDB: ', err);
    }
};

export default connectDB;
