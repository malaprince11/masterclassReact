"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const PRICE_PER_ITEM = 12

function Counter() {

    const [quantity, setQuantity] = useState(1)

    const increment = () => {
        setQuantity(quantity + 1)
    }
    let total = quantity * PRICE_PER_ITEM;
    const decrement = () => {
        setQuantity(quantity - 1)
    }
    return (
        <div>
            <button onClick={increment}>Add 1</button>
            <p>Vous avez: {quantity} produit dans votre panier pour un total de {total} euros</p>
            <button onClick={decrement}>remove 1</button>

        </div>
    )
}

export default Counter;