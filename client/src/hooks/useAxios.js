import { useState, useEffect } from "react"
import axios from 'axios'

const useAxios = (url, options, query, pageNumber) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [hasMore, setHasMore] = useState(true)
    const [next, setNext] = useState(true)

    useEffect(() => {
        setData([])
    }, [query])

    useEffect(() => {
        let cancel
        const fetchData = async () => {
            setLoading(true)
            setError(false)
            // page: pageNumber
            const res = await axios.get(url, {
                headers: options.headers,
                params: { query: query },
                cancelToken: new axios.CancelToken(c => cancel = c)
            }).then(res => {
                setData(res.data.contents)
                setNext(res.data.next)
                setHasMore(res.data.estimatedResults > 0)
                setLoading(false)
            }).catch(e => {
                if (axios.isCancel(e)) {
                    return
                }
                setError(true)
            })
        }
        fetchData()
        return () => cancel()
    }, [url, options, query, pageNumber])

    const reFetch = async () => {
        let cancel
        setLoading(true)
        setError(false)
        const res = await axios.get(url, {
            headers: options.headers,
            params: { query: query, next: next },
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setData(prev => {
                return (
                    [...new Set([...prev, ...res.data.contents])]
                )
            })
            setNext(res.data.next)
            setHasMore(res.data.estimatedResults > 0)
            setLoading(false)
        }).catch(e => {
            if (axios.isCancel(e)) {
                return
            }
            setError(true)
        })
        return () => cancel()
    }

    return { data, loading, error, hasMore, reFetch }
}

export default useAxios