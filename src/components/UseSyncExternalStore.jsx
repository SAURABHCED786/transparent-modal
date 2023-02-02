import React from 'react'
import { useSyncExternalStore } from 'react'

const UseSyncExternalStore = () => {
  //Three Arguments subscribe,getSnapshot,[getServerSnapshot]
  const width = useSyncExternalStore((listener) => {
    window.addEventListener('resize', listener)
    return () => {
      window.removeEventListener('resize', listener)
    }
  }, () => window.innerWidth)
  return (
    <div>
      <strong>Change The Page Dimensions</strong>
      <p>Size: {width}</p>
    </div>
  )
}

export default UseSyncExternalStore
