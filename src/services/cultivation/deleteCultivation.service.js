import admin from "firebase-admin";

const deleteCultivationService = async (id) => {
  const collection = admin.firestore().collection("cultivations");
  const doc = collection.doc(id);

  await doc.delete();
};

export default deleteCultivationService;
