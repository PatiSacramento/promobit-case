import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../services/api"


export const useRequestData = (url, page) => {
    const [data, setData] = useState(undefined)
    const [error, setError] = useState(undefined)
    const [loading, setLoading] = useState(false)

    const pageParam = page ? `&page=${page}` : '/'

    useEffect(() => {
        getData()
    }, [url, page])

    
    const getData = async () => {
        setLoading(true)

        await axios.get(`${BASE_URL}/${url}?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR${pageParam}`)
        .then((response) => {
            setData(response.data)
            setLoading(false)
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    return [data, error, loading, getData]
}