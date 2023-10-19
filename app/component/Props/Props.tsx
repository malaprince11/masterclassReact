"use client"
import React from "react";

type text = {
    titre: string;
}
const Props = ({ titre }: any) => {

    // console.log(titre, valid);
    console.log(titre);

    return (
        <div>
            <h1></h1>
            <h3>{`hello voici la props ${titre}`}</h3>
        </div>
    );
};

export default Props;
