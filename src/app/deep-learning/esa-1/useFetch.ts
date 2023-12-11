import { useState, useEffect } from 'react';

interface FetchOptions {
    method?: string;
    body?: unknown;
    headers?: HeadersInit;
}

function useFetch<T = unknown>(url: string, options: FetchOptions = {}) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const { method = 'GET', body, headers } = options;

                const requestOptions: RequestInit = {
                    method,
                    headers: {
                        'Content-Type': 'application/json',
                        ...headers,
                    },
                };

                if (body && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
                    requestOptions.body = JSON.stringify(body);
                }

                const response = await fetch(url, requestOptions);

                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }

                const result = await response.json() as T;
                setData(result);
            } catch (err) {
                setError(err as string);
            } finally {
                setLoading(false);
            }
        };

        void fetchData();
    }, []);

    return { data, loading, error };
}

export default useFetch;
