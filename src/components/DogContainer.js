import React from 'react'

const DogContainer = ({id, click}) => {
  return (
    <>
        <div id={id} className='container'>
            <p>Random Kutya</p>
        </div>
        <button onClick={click}>Random Kutya Lekérése</button>
        
    </>
  )
}

export default DogContainer