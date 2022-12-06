const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
// Handling UnCaught Exception

process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`Shutting down The Server Due to UnCaught Exception`);
  process.exit(1);
});

dotenv.config({ path: "backend/config/config.env" });

//Connecting databse
connectDatabase();
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is Working on http://localhost:${process.env.PORT}`);
});

// Unhandled Promise Rejection

process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`Shutting Down the Server Due to UnHandled Promise Rejection`);
  server.close(() => {
    process.exit(1);
  });
});
