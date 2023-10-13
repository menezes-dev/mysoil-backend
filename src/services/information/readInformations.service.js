import admin from "firebase-admin";

const readInformationsService = async () => {
  const collection = admin.firestore().collection("informations");

  return collection.get().then((snapshot) => {
    const informations = snapshot.docs.map((doc) => ({
      ...doc.data(),
      uid: doc.id,
    }));
    return informations;
  });
};

export default readInformationsService;
