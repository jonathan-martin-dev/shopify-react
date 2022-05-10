import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import { Box, Grid, Text, Image } from '@chakra-ui/react'
import Hero from '../components/Hero'
import ImageWithText from '../components/ImageWithText'
import RichText from '../components/RichText'

const Home = () => {

    const { fetchAllProducts, products} = useContext(ShopContext)

    useEffect(() => {
        fetchAllProducts()
    }, [fetchAllProducts])

    if (!products) return <div>...Loading</div>

    return (
        <Box>
            <Hero />
            <RichText heading="The Relaxation You've been waiting for" text="Jelly muffin chocolate bar croissant soufflé shortbread tootsie roll muffin halvah." />
            <Grid templateColumns="repeat(3, 1fr)">
            {
                products.map(product => (
                    <Link to={`/products/${product.handle}`} key={product.id}>
                        <Box _hover={{opacity: '80%'}} textAlign="center" position="relative">
                        <Image src={product.images[0].src} />
                            <Text position="absolute" bottom="15%" w="100%">
                                {product.title} 
                            </Text>
                            <Text position="absolute" bottom="5%" w="100%" color="gray.500">
                                ${product.variants[0].price}
                            </Text>
                        </Box>
                    </Link>
                ))
            }
            </Grid>
            <ImageWithText reverse image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758" heading="Heading" text="Candy cookie jelly beans gingerbread jelly beans. Jelly muffin chocolate bar croissant soufflé shortbread tootsie roll muffin halvah. Bonbon apple pie bonbon pudding cheesecake dessert gingerbread lollipop jelly. Sweet roll chupa chups chupa chups cheesecake pie lollipop bonbon lemon drops. " />
            <ImageWithText image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758" heading="Heading" text="Candy cookie jelly beans gingerbread jelly beans. Jelly muffin chocolate bar croissant soufflé shortbread tootsie roll muffin halvah. Bonbon apple pie bonbon pudding cheesecake dessert gingerbread lollipop jelly. Sweet roll chupa chups chupa chups cheesecake pie lollipop bonbon lemon drops. " />
        </Box>
    )
}

export default Home
