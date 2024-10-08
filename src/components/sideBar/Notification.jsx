import React from 'react'
import { NotificationsLogo } from '../../assets/constants'
import { Box, Link, Tooltip } from '@chakra-ui/react'

const Notification = () => {
    return (
        <Tooltip
            hasArrow
            label={'Notfication'}
            placement='right'
            ml={1}
            openDelay={500}
            display={{ base: 'block', md: 'none' }}
        >
            <Link
                display={'flex'}
                alignItems={'center'}
                gap={4}
                _hover={{ bg: 'whiteAlpha.400' }}
                borderRadius={6}
                p={2}
                w={{ base: 10, md: 'full' }}
                justifyContent={{ base: 'center', md: 'flex-start' }}
            >
                <NotificationsLogo/>
                <Box
                    display={{ base: 'none', md: 'block' }}
                >
                    {'Notifications'}
                </Box>
            </Link>
        </Tooltip>
    )
}

export default Notification
