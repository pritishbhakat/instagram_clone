import { Button, Container, Flex, Image, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
    return (
        <Container maxW={'container.lg'} my={4}>
            <Flex w={'full'} justifyContent={{ base: 'center', sm: 'space-between' }} alignItems={'center'}>
                <Image src='/logo.png' h={20} display={{ base: 'none', sm: 'block' }} cursor={'pointer'} />
                <Flex gap={4}>
                    <Link as={RouterLink} to={'/auth'}>
                        <Button colorScheme='blue' size={'sm'}>
                            Login
                        </Button>
                    </Link>
                    <Link as={RouterLink} to={'/auth'}>
                        <Button colorScheme='blue' size={'sm'}>
                            Signup
                        </Button>
                    </Link>

                </Flex>
            </Flex>

        </Container>
    )
}

export default Navbar
