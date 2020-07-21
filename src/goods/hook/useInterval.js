import { useEffect, useRef } from 'react'

function useInterval (callback, delay) {
  const savedCallback = useRef()

  // ä¿å­æ°åè°
  useEffect(() => {
    savedCallback.current = callback
  })

  // å»ºç« interval
  useEffect(
    () => {
      function tick () {
        savedCallback.current()
      }
      if (delay !== null) {
        let id = setInterval(tick, delay)
        return () => clearInterval(id)
      }
    },
    [delay]
  )
}

export default useInterval
