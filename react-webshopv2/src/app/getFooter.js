import { db } from '../app/firebase';
import { collection, getDocs } from "firebase/firestore";

export const getFooterItems = async () => {
    //const stateMenuItems = useSelector((state) => state.menu.menuItems);
    //const dispatch = useDispatch();

    const explore = await getDocs(collection(db, "Footer/Explore/Sublinks"));
    const service = await getDocs(collection(db, "Footer/Service/Sublinks"));
    const company = await getDocs(collection(db, "Footer/Company/Sublinks"));

    const exploreItems = explore.docs.map(doc => doc.data());
    const serviceItems = service.docs.map(doc => doc.data());
    const companyItems = company.docs.map(doc => doc.data());

    // console.log(exploreItems);
    // console.log(serviceItems);
    // console.log(companyItems);
    const footerItems = {
        explore: exploreItems,
        service: serviceItems,
        company: companyItems
    }
    return footerItems;
}