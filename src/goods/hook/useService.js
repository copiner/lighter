import { useEffect, useRef, useState, useCallback } from 'react'
import { isEqual } from 'lodash'

const useServiceCallback = (service) => {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [response, setResponse] = useState(null)

  const callback = useCallback(
    (params) => {
      setLoading(true)
      setError(null)
      service(params)
        .then(response => {
          setLoading(false)
          setResponse(response)
        })
        .catch(error => {
          setLoading(false)
          setError(error)
        })
    },
    [service]
  )

  return [callback, { loading, error, response }]
}

const useService = (service, params) => {

  const prevParams = useRef(null)
  const [callback, { loading, error, response }] = useServiceCallback(service)

  useEffect(() => {
    if (!isEqual(prevParams.current, params)) {
      prevParams.current = params
      callback(params)
    }
  },[params])

  return { loading, error, response }
}


export default useService
