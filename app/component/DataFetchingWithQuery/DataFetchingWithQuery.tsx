import { fetchingData } from '@/app/utils/api/fetchData'
import React from 'react'
import { useQuery } from 'react-query'

const DataFetchingWithQuery = () => {
    const { data, error, isLoading } = useQuery('myData', fetchingData)
    return (
        <div>
            <h1>DataFetchingWithQuery</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error</p>
            ) : (
                <ul>
                    {data?.map((item: any) => (
                        <li key={1}>{item.title}</li>
                    ))}
                </ul>
            )}

        </div>
    )
}

export default DataFetchingWithQuery