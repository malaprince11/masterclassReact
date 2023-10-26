'use client'
import React, { useState } from 'react'

type Data = number

const MyCounter = () => {
    const [data, setData] = useState<Data>(0)

    const incremente = () => {
        setData((prev) => prev + 1)
    }

    return (
        <div>
            <button onClick={incremente}>increment</button>
            <span>{data}</span>
            <button>decremente</button>
        </div>
    )
}

export default MyCounter