import { useEffect, useState } from "react"
import useShowToast from "./useShowToast";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import useAuthStore from "../store/authStore";

const useGetSuggestedUser = () => {
    const [isLoading,setIsLoading] = useState(false);
    const [suggestedUser, setSuggestedUser] = useState([]);
    const authUser = useAuthStore((state) => state.user);
    const showToast = useShowToast();

    useEffect(() => {
        const getSuggestedUsers = async () => {
            setIsLoading(true);
            try {
                const userRef = collection(firestore,'users')
                const q = query(
                    userRef,
                    where('uid','not-in',[authUser.uid, ...authUser.following]),
                    orderBy('uid'),
                    limit(3)
                );

                const querySnapshot = await getDocs(q)
                const users = []

                querySnapshot.forEach((doc) => {
                    users.push({...doc.data(), id: doc.id})
                })
                
                setSuggestedUser(users)
                
            } catch (error) {
                showToast('Error',error.message,'error')
            }
        }

        if(authUser) getSuggestedUsers();
    },[authUser,showToast]);

    return {isLoading, suggestedUser}

}

export default useGetSuggestedUser
