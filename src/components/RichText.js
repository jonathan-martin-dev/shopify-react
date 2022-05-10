import React from 'react'
import { Box, Heading, Text, Center } from '@chakra-ui/react'

const RichText = ({ heading, text }) => {
    return (
        <Box>
            <Center display="flex" flexDir="column" textAlign="center">
                <Heading py="4rem">
                    {heading && heading}    
                </Heading>    
                <Text pb="2rem">
                    {text && text}
                </Text>
            </Center>       
        </Box>
    )
}
export default RichText