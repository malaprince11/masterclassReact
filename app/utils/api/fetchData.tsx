import { useQuery } from "react-query";

export const fetchingData = async () => {
    const res = await fetch('http://universities.hipolabs.com/search?country=United+States')
    if (!res.ok) {
        throw new Error('response was not ok')
    }
    return res.json()
};

