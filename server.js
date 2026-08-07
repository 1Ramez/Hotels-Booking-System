const dotenv = require("dotenv");
dotenv.config();

const app = require("./app.js");
const connectDB = require("./config/db.js");

const PORT = process.env.PORT;

async function startServer() {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

startServer();