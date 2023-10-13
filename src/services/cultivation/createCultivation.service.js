import admin from "firebase-admin";
const createCultivationService = (data) => {
  const collection = admin.firestore().collection("cultivations");

  const createdAt = Date.now();

  data = { ...data, createdAt };

  collection
    .add(data)
    .then()
    .catch((err) => err);
};

export default createCultivationService;
