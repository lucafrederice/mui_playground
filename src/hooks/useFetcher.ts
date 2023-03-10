import { useState, useEffect } from "react";


const useFetcher = <T>(url: string) => {
    const [response, setResponse] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [reload, setReload] = useState(0);

    const refetch = () => setReload(prev => prev + 1);

    const fetchData = async (url: string, signal: AbortSignal) => {
        try {
            setLoading(true)
            setError("")
            const response = await fetch(url, { signal });
            const { ok, status, statusText } = await response

            const data = await response.json()

            if (!ok) {
                const error = (data && data.message) || response.status;
                Promise.reject(error)
            }

            setResponse([data])
        }
        catch (e) {
            if (typeof e === "string") setError(e)
            if (e instanceof Error && e.message !== "The user aborted a request.") 
            setError(e.message)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        fetchData(url, signal)

        // useEffect cleanup function
        return () =>
            controller.abort();

    }, [reload, url]);

    return { response, error, loading, refetch };
}

export default useFetcher


// source >>> https://web.dev/fetch-api-error-handling/