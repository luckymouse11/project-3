import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const EnvironmentalFactor = () => {

  const [ environmentalFactor, setEnvironmentalFactor ] = useState(null)
  const [ hasError, setHasError ] = useState(false)

  const { id } = useParams

  useEffect(() => {
    const getSingleFactor = async () => {
      try {
        const { data } = await axios(`api/environmentalfactors/${id}`)
        setEnvironmentalFactor(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getSingleFactor()
  }, [id])

  useEffect(() => console.log(environmentalFactor), [environmentalFactor])

  return (
    <>
      { environmentalFactor ? 
        <div className="container mt-4">
          <h2>{environmentalFactor.name}</h2>
          <hr />
          <div className="row">
            <div className="col-12 col-md-6">
              <img src={environmentalFactor.image} alt={environmentalFactor.name} />
            </div>
            <div className="col-12 col-md-6">
              <h4><span>📖</span> Description</h4>
              <p>{environmentalFactor.description}</p>
              <hr />
              <h4><span>📊</span> Graph</h4>
              <p className="lead">{environmentalFactor.totalGraph}</p>
              <hr />
              <h4><span>🌍</span> Graphic2</h4>
              <p className="lead">{environmentalFactor.secondGraphic}</p>
              <hr />
              <Link to="/environmentalfactors" className="btn btn-lg btn-yellow">Back to Environmental Factors</Link>
            </div>
          </div>
        </div>
        :

        <>
          {hasError ? 
            <h2 className="display-5 text-center">Whoops, something went wrong!</h2> 
            : 
            // <img className="spinner" src={ } alt="Spinner gif" />
            <h2>Spinning gif here</h2>
          }
        </>
      
      
      }
    </>
  )
}

export default EnvironmentalFactor