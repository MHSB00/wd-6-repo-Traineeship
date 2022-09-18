import { db } from '../app/firebase';
import { collection, getDocs } from "firebase/firestore";
import { useParams } from 'react-router-dom';

export const getWatch = async (brand, id) => {
    

    const ref = await getDocs(collection(db, `subMenu/Brands/Brand/${brand}/Watches`));
    const watch = ref.docs.map(doc => doc.data())

    return watch;
}