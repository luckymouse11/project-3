import React from 'react'
import 'dotenv/config'
import axios from 'axios'

const ImageUpload = ({ name, handleImageUrl }) => {

  const url = process.env.REACT_APP_CLOUDINARY_URL
  const preset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
  console.log(url, preset)

  const handleChange = async (e) => {
    const dataToSend = new FormData()
    dataToSend.append('file', e.target.files[0])
    dataToSend.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
    const { data } = await axios.post(process.env.REACT_APP_CLOUDINARY_URL, dataToSend)
    handleImageUrl(data.url)
  }

  return (
    <>
      <label htmlFor={name}>Recipe Image</label>
      <input type="file" name={name} className="input" onChange={handleChange} />
    </>
  )
}

export default ImageUpload
