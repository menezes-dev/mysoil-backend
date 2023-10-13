import { Router } from "express";
import createCultivationController from "../controllers/cultivation/createCultivation.controller.js";
import readCultivationsController from "../controllers/cultivation/readCultivations.controller.js";
import retrieveCultivationController from "../controllers/cultivation/retrieveCultivation.controller.js";
import updateCultivationController from "../controllers/cultivation/updateCultivation.controller.js";
import deleteCultivationController from "../controllers/cultivation/deleteCultivation.controller.js";

const cultivationRoutes = Router();

cultivationRoutes.post("", createCultivationController);
cultivationRoutes.get("", readCultivationsController);
cultivationRoutes.get("/:id", retrieveCultivationController);
cultivationRoutes.patch("/:id", updateCultivationController);
cultivationRoutes.delete("/:id", deleteCultivationController);

export default cultivationRoutes;
