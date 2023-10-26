"use client"
import React, { useEffect, useState } from 'react'
const Data = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://universities.hipolabs.com/search?country=United+States')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
        console.log('component est en train de monter ');

    }, [data]);
    console.log('component monted!');

    return (
        <div>
            <h1>Data Fetching in Next.js using useEffect</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {data.map((uni: any) => (
                        <li key={uni.alpha_two_code}>{uni.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Data