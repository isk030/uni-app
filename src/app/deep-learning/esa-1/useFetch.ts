import { useState, useEffect } from 'react';

function useFetch(url: string) {
  const [data, setData] = useState<Array<{ name: string; value: number }>>([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setfetchError] = useState('');

  useEffect(() => {
      setLoading(true)
      setData([]);
      setfetchError('')

      void fetch(url)
            .then((res) => res.json())
            .then((newData: Array<{ name: string; value: number }>) => {
                setData(newData);
                setLoading(false)
            
 
            })
      .catch(() => {
          setLoading(false)
          setfetchError('An error occurred. Awkward..')
      })

  }, [url])

  return { data, loading, fetchError }
}

export default useFetch;