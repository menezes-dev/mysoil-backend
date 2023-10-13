import deleteCultivationService from "../../services/cultivation/deleteCultivation.service.js";

const deleteCultivationController = async (request, response) => {
  const id = request.params.id;

  try {
    await deleteCultivationService(id);
    return response.status(204).send();
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default deleteCultivationController;
