const mongoose = require("mongoose");

const connectMongo = async () => {
    try {
        await mongoose.connect("mongodb://mongodb:27017/footballDB");

        console.log("MongoDB connected!")

    }

    catch(error){
        console.error(error);
        process.exit(1);    
    }
}

module.exports = connectMongo;