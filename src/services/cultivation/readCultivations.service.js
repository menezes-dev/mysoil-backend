import admin from "firebase-admin";

const readCultivationsService = async () => {
  const collection = admin.firestore().collection("cultivations");

  return collection.get().then((snapshot) => {
    const cultivations = snapshot.docs.map((doc) => ({
      ...doc.data(),
      uid: doc.id,
    }));
    return cultivations;
  });
};

export default readCultivationsService;
