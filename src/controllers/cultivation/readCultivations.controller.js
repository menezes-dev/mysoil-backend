import readCultivationsService from "../../services/cultivation/readCultivations.service.js";

const readCultivationsController = async (request, response) => {
  const cultivations = await readCultivationsService();

  return response.status(200).json(cultivations);
};

export default readCultivationsController;
