import React from 'react'
import { SquareLoader } from 'react-spinners';

function Spinner({loading}) {
  return (
    <div className={`spinner ${loading ? 'visible' : 'hidden'}`}>
      <SquareLoader  color="#36D7B7" loading={loading} size={100}  />
    </div>
  )
}

export default Spinner