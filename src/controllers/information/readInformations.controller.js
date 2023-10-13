import readInformationsService from "../../services/information/readInformations.service.js";

const readInformationsController = async (request, response) => {
  const informations = await readInformationsService();

  return response.status(200).json(informations);
};

export default readInformationsController;
