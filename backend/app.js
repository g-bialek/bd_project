const express = require("express");
const cors = require("cors");

const teamRoutes = require("./routes/teamRoutes");
const gameRoutes = require("./routes/gameRoutes");
const tableRoutes = require("./routes/tableRoutes");
const refereeRoutes = require("./routes/refreeRoutes");
const playerRoutes = require("./routes/playerRoutes")

const app = express();

app.use(cors());
app.use(express.json());

app.use("/teams", teamRoutes);
app.use("/games", gameRoutes);
app.use("/table", tableRoutes);
app.use("/referees", refereeRoutes);
app.use("/players", playerRoutes)


module.exports = app;