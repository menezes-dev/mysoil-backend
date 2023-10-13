import { Router } from "express";
import readInformationsController from "../controllers/information/readInformations.controller.js";
import createInformationController from "../controllers/information/createInformation.controller.js";
import retrieveInformationController from "../controllers/information/retrieveInformation.controller.js";
import updateInformationController from "../controllers/information/updateInformation.controller.js";
import deleteInformationController from "../controllers/information/deleteInformation.controller.js";

const informationsRoutes = Router();

informationsRoutes.post("", createInformationController);
informationsRoutes.get("", readInformationsController);
informationsRoutes.get("/:id", retrieveInformationController);
informationsRoutes.patch("/:id", updateInformationController);
informationsRoutes.delete("/:id", deleteInformationController);

export default informationsRoutes;
