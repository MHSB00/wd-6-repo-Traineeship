import { db } from './firebase';
import { collection, getDocs } from "firebase/firestore";


export const getBrandWatches = async (brand) => {
   

    const ref = await getDocs(collection(db, `subMenu/Brands/Brand/${brand}/Watches`));
    const watches = ref.docs.map(doc => doc.data())
    
    return watches;
}