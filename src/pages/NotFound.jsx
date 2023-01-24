import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <Link to={"/"}>Go back to reality</Link>
    </div>
  )
}

export default NotFound