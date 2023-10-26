"use client"
import React from 'react'
import MyCounter from '../component/MyCounter/MyCounter'
import Enfant from '../component/Parent/Enfant'
import Data from '../component/Fetch/Data'
import DataFetchingWithQuery from '../component/DataFetchingWithQuery/DataFetchingWithQuery'



const page = () => {
    const toto = 'toto'
    return (
        <div>page
            <MyCounter />
            <Enfant props={toto} />
            {/* <Data /> */}
            <DataFetchingWithQuery />
        </div>
    )
}

export default page