import updateCultivationService from "../../services/cultivation/updateCultivation.service.js";

const updateCultivationController = async (request, response) => {
  const id = request.params.id;
  const data = request.body;

  try {
    const updatedCultivation = await updateCultivationService(id, data);
    return response.status(200).json(updatedCultivation);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default updateCultivationController;
