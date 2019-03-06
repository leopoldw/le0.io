import React from 'react'

const FourOhFour = () => {
  if (typeof window !== `undefined`)
    window.location = `/`

  return null
}

export default FourOhFour