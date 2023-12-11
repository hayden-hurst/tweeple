import mongoose from 'mongoose';

require('dotenv').config();

const URI = process.env.MONGODB_URI;
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error(`MongoDB connection error: ${err}`);
    });

const db = mongoose.connection;

db.on('connected', () => {
    console.log('MongoDB connection established');
});

db.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
});

db.on('disconnected', () => {
    console.log('MongoDB connection disconnected');
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log('MongoDB connection closed through app termination');
        process.exit(0);
    });
});

export default mongoose;