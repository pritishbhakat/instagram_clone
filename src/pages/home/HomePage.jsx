import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'
import FeedPosts from '../../components/feedPosts/FeedPosts'
import { useEffect, useState } from 'react'
import SuggestedUsers from '../../components/suggestedUsers/SuggestedUsers'

const HomePage = () => {
  return (
    <Container maxW={'container.lg'}>
      <Flex gap={20}>
        <Box flex={2} py={10} >
          <FeedPosts/>
        </Box>
        <Box flex={3} mr={20} display={{base:'none', lg:'block'}} maxW={'300px'} >
          <SuggestedUsers />
        </Box>
      </Flex>

    </Container>
  )
}

export default HomePage
