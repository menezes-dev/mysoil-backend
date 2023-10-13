import admin from "firebase-admin";

const retrieveCultivationService = async (id) => {
  const collection = admin.firestore().collection("cultivations");
  const doc = await collection.doc(id).get();

  if (doc.exists) {
    const data = doc.data();
    return { id: doc.id, data };
  } else {
    throw new Error("Cultivo não encontrado");
  }
};

export default retrieveCultivationService;
