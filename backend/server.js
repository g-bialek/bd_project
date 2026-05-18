const connectMongo = require("./config/mongo");

const app = require("./app");

const PORT = 3000;

connectMongo();

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});