import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const EnvironmentalFactor = () => {

  const [ envFactor, setEnvFactor ] = useState(null)
  const [ hasError, setHasError ] = useState(false)

  const { id } = useParams

  useEffect(() => {
    const getSingleFactor = async () => {
      try {
        const { data } = await axios(`api/environmentalfactors/${id}`)
        setEnvFactor(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getSingleFactor()
  }, [id])

  useEffect(() => console.log(envFactor), [envFactor])

  return (
    <>
      { envFactor ? 
        <div className="container mt-4">
          <h2>{envFactor.name}</h2>
          <hr />
          <div className="row">
            <div className="col-12 col-md-6">
              <img src={envFactor.image} alt={envFactor.name} />
            </div>
            <div className="col-12 col-md-6">
              <h4><span>📖</span> Description</h4>
              <p>{envFactor.description}</p>
              <hr />
              <h4><span>📊</span> Graph</h4>
              <p className="lead">{envFactor.totalGraph}</p>
              <hr />
              <h4><span>🌍</span> Graphic2</h4>
              <p className="lead">{envFactor.secondGraphic}</p>
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