import React, { useEffect, useState } from 'react'
import usePostStore from '../store/postStore'
import useShowToast from './useShowToast'
import useUserProfileStore from '../store/userProfileStore'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { firestore } from '../firebase/firebase'

const useGetUserPosts = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { posts, setPosts } = usePostStore()
    const showToast = useShowToast()
    const userProfile = useUserProfileStore((state) => state.userProfile)

    useEffect(() => {
        const getPosts = async () => {
            if (!userProfile)
                return

            setIsLoading(true)
            setPosts([])

            try {
                const q = query(collection(firestore, 'posts'), where('createdBy', '==', userProfile.uid))
                const querySnapshot = await getDocs(q)
                
                const fetchPosts = []
                
                querySnapshot.forEach((doc) => {
                    // console.log(doc.data())
                    fetchPosts.push({ ...doc.data(), id: doc.id })
                })
                setPosts(fetchPosts)

            } catch (error) {
                showToast('Error', error.message, 'error')
            } finally {
                setIsLoading(false)
            }
        }
        
        getPosts();
    

    }, [setPosts, userProfile, showToast])

    return { isLoading, posts }
}

export default useGetUserPosts
