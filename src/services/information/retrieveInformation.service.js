import admin from "firebase-admin";

const retrieveInformationService = async (id) => {
  const collection = admin.firestore().collection("informations");
  const doc = await collection.doc(id).get();

  if (doc.exists) {
    const data = doc.data();
    return { id: doc.id, data };
  } else {
    throw new Error("Informação não encontrada");
  }
};

export default retrieveInformationService;
