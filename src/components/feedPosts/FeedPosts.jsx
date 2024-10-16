import { Box, Container, Flex, Skeleton, SkeletonCircle, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import FeedPost from './FeedPost'
import useGetFeedPosts from '../../hooks/useGetFeedPosts'

const FeedPosts = () => {
  const {isLoading, posts}  = useGetFeedPosts()
  return (
    <Container maxW={'container.sm'} py={20} px={2}>
      {isLoading && [0, 1, 2].map((_, index) => (
        <VStack key={index} gap={4} alignItems={'flex-start'} mb={10}>
          <Flex gap={2}>

          <SkeletonCircle size='10' />
          <VStack gap={2} alignItems={'flex-start'}>
            <Skeleton height='10px' w={'200px'} />
            <Skeleton height='10px' w={'200px'} />

          </VStack>
          </Flex>
          {/* <Flex> */}
            <Skeleton w={'full'}>
              <Box h={'400px'}>contents wrapped</Box>
            </Skeleton>
          {/* </Flex> */}

        </VStack>
      ))}

      {!isLoading && posts.length > 0 && posts.map((post) => <FeedPost key={post.id} post={post} />) }
      {!isLoading && posts.length === 0 && (
        <>
        <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
        <Text fontSize={'md'} color={'red.400'}>
          Dayuum. Looks like you don&apos;t have any friends.
        </Text>
        <Text color={'red.400'}>Stop coding and go make some!!</Text>

        </Flex>
        
        </>
      )}

    </Container>
  )
}

export default FeedPosts
