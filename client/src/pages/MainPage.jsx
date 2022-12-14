import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {PopularPosts} from '../components/PopularPosts'
import PostItem from '../components/PostItem'
import {getAllPosts} from '../redux/features/post/postSlice'
import {useTranslation} from "react-i18next";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const MainPage = () => {
    const dispatch = useDispatch()
    const {posts, popularPosts} = useSelector((state) => state.post)
    const isLoading = useSelector((state) => state.post.loading)
    const {t} = useTranslation();

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])

    if (!posts.length) {
        return (
            <>
                {isLoading ? <Box className='flex  justify-center justify-items-center mt-12'>
                    <CircularProgress/>
                </Box> : <div className={'flex items-center justify-center '}>
                    <div className=' text-xl text-center text-black py-10 bg-white rounded inline-block px-12  '>
                        No posts here yet
                    </div>
                </div>}
            </>
        )
    }

    return (
        <>
            {isLoading ? <Box className='flex  justify-center justify-items-center mt-12'>
                <CircularProgress/>
            </Box> : <div className='max-w-[900px] mx-auto py-10'>
                <div className='flex justify-between gap-8'>
                    <div className='flex flex-col gap-10 basis-4/5  py-5 px-5 rounded '>
                        {posts?.map((post, idx) => (
                            <PostItem key={idx} post={post}/>
                        ))}
                    </div>
                    <div className='basis-1/5'>
                        <div className='text-xs uppercase text-black '>
                            {t("popPosts")}
                        </div>

                        {popularPosts?.map((post, idx) => (
                            <PopularPosts key={idx} post={post}/>
                        ))}
                    </div>
                </div>
            </div>}

        </>
    )
}

export default MainPage;
