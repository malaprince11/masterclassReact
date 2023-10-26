import React from 'react'

type props = {
    props: string
}

const Enfant = ({ props }: props) => {
    return (
        <div><h1>Hello voici ma {props}</h1></div>
    )
}

export default Enfant