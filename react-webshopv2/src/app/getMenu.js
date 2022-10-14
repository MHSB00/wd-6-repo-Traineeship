import { db } from '../app/firebase';
import { collection, getDocs } from "firebase/firestore";

export const getMenuItems = async () => {
    //const stateMenuItems = useSelector((state) => state.menu.menuItems);
    //const dispatch = useDispatch();

    // const ref = await getDocs(collection(db, "subMenu/Brands/Brand"));
    // const menuItems = ref.docs.map(doc => doc.data())

    //get collection ID
    const ref = await getDocs(collection(db, `subMenu/Brands/Brand/`));
    const menuItems = ref.docs.map(doc => doc.id)
    const menuImg = ref.docs.map(doc => doc.data().img)
    
    let allData = {menuItems, menuImg }

    return allData;
}