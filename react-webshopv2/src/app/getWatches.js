import { db } from '../app/firebase';
import { collection, getDocs } from "firebase/firestore";
import { useParams } from 'react-router-dom';

export const getWatches = async (brand) => {
    

    const ref = await getDocs(collection(db, `subMenu/Brands/Brand/${brand}/Watches`));
    const watches = ref.docs.map(doc => doc.data())

    return watches;
}