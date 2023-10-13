import admin from "firebase-admin";

const createInformationService = (data) => {
  const collection = admin.firestore().collection("informations");

  const createdAt = Date.now();

  data = { ...data, createdAt };

  collection
    .add(data)
    .then()
    .catch((err) => err);
};

export default createInformationService;
