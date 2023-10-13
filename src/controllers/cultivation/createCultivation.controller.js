import createCultivationService from "../../services/cultivation/createCultivation.service.js";

const createCultivationController = (request, response) => {
  const data = request.body;

  createCultivationService(data);

  return response.status(201).json({ message: "Plano de cultivo criado!" });
};

export default createCultivationController;
