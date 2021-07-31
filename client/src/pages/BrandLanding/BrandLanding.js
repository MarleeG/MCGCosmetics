import React from 'react'
import { useParams } from "react-router-dom";

const BrandLanding = () => {
  const { brandName } = useParams();
  return (
    <div>
      <h1>{brandName.toUpperCase()}</h1>
    </div>
  )
}

export default BrandLanding
