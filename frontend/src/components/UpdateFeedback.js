import React from 'react'
import { useParams } from 'react-router-dom'

function UpdateFeedback(props) {
    const id = useParams()
    console.log(id)
  return (
    <div>UpdateFeedback</div>
  )
}

export default UpdateFeedback