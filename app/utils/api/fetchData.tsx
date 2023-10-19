import React, { useEffect, useState } from "react";

const FetchData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("");
                const result = await response.json();
                setData(result);
            } catch (e) {
                console.error("fetching error", e);
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            <h2>fetchData</h2>
            {data.map((data) => (
                <div key={data}>{data}</div>
            ))}
        </div>
    );
};

export default FetchData;
