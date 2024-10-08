import { Flex, Skeleton, SkeletonCircle, } from '@chakra-ui/react'
import React from 'react'

const CommentSkeleton = () => {
    return (
        <Flex gap={4} w={'full'} alignItems={'center'}>
            <SkeletonCircle h={10} w={10} />
            <Flex gap={10} flexDir={'column'}>
                <Skeleton height={2} width={100} />
                <Skeleton height={2} width={50} />
            </Flex>
        </Flex>
    )
}

export default CommentSkeleton
