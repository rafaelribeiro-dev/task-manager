const mongoose = require('mongoose');

const connectToDatabase = async () => {
    await mongoose
        .connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@devtaskmanagercluster.6nv9vip.mongodb.net/?retryWrites=true&w=majority&appName=DevTaskManagerCluster`
        )
        .then(() => console.log('Connected'));
};

module.exports = connectToDatabase;
