import updateInformationService from "../../services/information/updateInformation.service.js";

const updateInformationController = async (request, response) => {
  const id = request.params.id;
  const data = request.body;

  try {
    const updatedInformation = await updateInformationService(id, data);
    return response.status(200).json(updatedInformation);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default updateInformationController;
