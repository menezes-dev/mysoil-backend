import deleteInformationService from "../../services/information/deleteInformation.service.js";

const deleteInformationController = async (request, response) => {
  const id = request.params.id;

  try {
    await deleteInformationService(id);
    return response.status(204).send();
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default deleteInformationController;
