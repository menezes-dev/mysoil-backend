import retrieveCultivationService from "../../services/cultivation/retrieveCultivation.service.js";

const retrieveCultivationController = async (request, response) => {
  const id = request.params.id;

  try {
    const cultivation = await retrieveCultivationService(id);
    return response.status(200).json(cultivation);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default retrieveCultivationController;
