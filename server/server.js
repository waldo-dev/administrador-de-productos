require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 5000;
const cors = require("cors");

const app = express();
app.use(cors());

require("./config/connectToDB")(app);

app.use(express.json());
app.use("/api", require("./routes/api.routes"));

app.listen(PORT, () => console.log(`Servidor corriendo en puerto: ${PORT}`));
