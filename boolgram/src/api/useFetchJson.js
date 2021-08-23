import { useState, useEffect } from 'react';

function useFetchJson(url) {

    const [json, setJson] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        const fetchJson = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    setHasError(true)
                }
                else {
                    const json = await response.json()
                    setJson(json)
                }
            }
            catch (e) {
                setHasError(true)
            }
            finally {
                setIsLoading(false)
            }
        }

        fetchJson()

    }, [url])

    return [json, isLoading, hasError]
}

export default useFetchJson;