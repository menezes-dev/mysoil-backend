import admin from "firebase-admin";

const deleteInformationService = async (id) => {
  const collection = admin.firestore().collection("informations");
  const doc = collection.doc(id);

  await doc.delete();
};

export default deleteInformationService;
