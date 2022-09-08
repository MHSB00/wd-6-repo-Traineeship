import { db } from '../app/firebase';
import { collection, getDocs } from "firebase/firestore";
import { useSelector, useDispatch } from 'react-redux';



export const getMenuItems = async () => {
    //const stateMenuItems = useSelector((state) => state.menu.menuItems);
    //const dispatch = useDispatch();

    const ref = await getDocs(collection(db, "subMenu/Brands/Brand"));
    const menuItems = ref.docs.map(doc => doc.data())

    return menuItems;
}