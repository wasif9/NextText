const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
            );

            console.log('MongoDB Connected: '.cyan.underline + conn.connection.host.cyan.underline);
    } catch (error) {
        console.log('Error: '.red.bold + error.message.red.bold);
        process.exit();
    }
}

module.exports = connectDB;