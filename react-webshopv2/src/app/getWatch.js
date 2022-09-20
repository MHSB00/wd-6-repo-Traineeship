import { db } from '../app/firebase';
import { collection, getDocs } from "firebase/firestore";

export const getWatch = async (brand, id) => {

    const ref = await getDocs(collection(db, `subMenu/Brands/Brand/${brand}/Watches`));
    const watch = ref.docs.map(doc => doc.data())

    //get collection ID
    let docId = '';
    const querySnapshot = await getDocs(collection(db, `subMenu/Brands/Brand/${brand}/Watches`));
    querySnapshot.forEach((doc) => {
        if (doc.data().id == id) {
            docId = doc.id;
        }
    });

    const getImg = await getDocs(collection(db, `subMenu/Brands/Brand/${brand}/Watches/${docId}/img`));
    const images = getImg.docs.map(doc => doc.data())

    let allData = { watch, images };


    return allData;
}