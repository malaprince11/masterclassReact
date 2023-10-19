import React from 'react'
import Props from '../component/Props/Props'

const page = () => {

    const text = "Hello world"
    const myObject = {
        titre: 'bonjour'
    }
    return (
        <div>page
            <Props titre={myObject.titre} />
        </div>
    )
}
export default page
