import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const EnvironmentalFactor = () => {

  const [ envFactor, setEnvFactor ] = useState(null)
  const [ hasError, setHasError ] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    const getSingleFactor = async () => {
      try {
        console.log('hellooooo', id)
        const { data } = await axios(`/api/environmentalfactors/${id}`)
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
              <h4><span>📖</span> What is {envFactor.name}?</h4>
              <p>{envFactor.description}</p>
              <hr />
              <h4><span>📊</span> {envFactor.name} per KG of Food Product</h4>
              <p className="graph"><img src={envFactor.totalGraph} alt={envFactor.name}/></p>
              <hr />
              <h4><span>🌍</span> Graphic2</h4>
              <p className="graphic2"><img src={envFactor.secondGraphic} alt={envFactor.name}/></p>
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