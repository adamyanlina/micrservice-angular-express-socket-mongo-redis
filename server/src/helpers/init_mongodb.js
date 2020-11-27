const mongoose = require('mongoose');

// mongodb+srv://admin:<password>@cluster0.lkxix.mongodb.net/<dbname>?retryWrites=true&w=majority

mongoose
    .connect('mongodb+srv://admin:asdf1234@cluster0.lkxix.mongodb.net/microApi?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.error(error.message));

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to DB');
});
mongoose.connection.on('error', (err) => {
    console.error(err.message);
});
mongoose.connection.on('disconnect', () => {
    console.log('Mongoose connection is disconnected');
});

process.on('SIGINT', async () => {
    await mongoose.connection.close();
    process.exit(0);
});
