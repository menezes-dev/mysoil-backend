import createInformationService from "../../services/information/createInformation.service.js";

const createInformationController = async (request, response) => {
  const data = request.body;

  createInformationService(data);

  return response.status(201).json({ message: "Criado com sucesso!" });
};

export default createInformationController;
