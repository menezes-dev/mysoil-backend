import admin from "firebase-admin";

const updateCultivationService = async (id, data) => {
  const collection = admin.firestore().collection("cultivations");
  const doc = collection.doc(id);

  await doc.update(data);

  const docUpdated = await doc.get();

  return { id: docUpdated.id, data: docUpdated.data() };
};

export default updateCultivationService;
