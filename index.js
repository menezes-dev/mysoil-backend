import express from "express";
import admin from "firebase-admin";
import informationsRoutes from "./src/routes/information.routes.js";
import cultivationRoutes from "./src/routes/cultivation.routes.js";

const app = express();

app.use(express.json());
app.use("/informations", informationsRoutes);
app.use("/cultivations", cultivationRoutes);

admin.initializeApp({
  credential: admin.credential.cert("serviceKey.json"),
});

app.listen(3000, () => console.log("Rodando em http://localhost:3000"));
