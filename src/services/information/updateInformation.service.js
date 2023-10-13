import admin from "firebase-admin";

const updateInformationService = async (id, data) => {
  const collection = admin.firestore().collection("informations");
  const doc = collection.doc(id);

  await doc.update(data);

  const docUpdated = await doc.get();

  return { id: docUpdated.id, data: docUpdated.data() };
};

export default updateInformationService;
