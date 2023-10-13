import retrieveInformationService from "../../services/information/retrieveInformation.service.js";

const retrieveInformationController = async (request, response) => {
  const id = request.params.id;

  try {
    const information = await retrieveInformationService(id);
    return response.status(200).json(information);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default retrieveInformationController;
