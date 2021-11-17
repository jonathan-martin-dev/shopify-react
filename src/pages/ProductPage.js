import React, { useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'

import { ShopContext } from '../context/shopContext'

const productPage = () => {
    const { handle } = useParams()
    const { fethProductWithHandle, addItemToCheckout, product } = useContext(ShopContext)

    return (
        <div>
            
        </div>
    )
}

export default productPage
