import React from 'react'
import spinner from '../../img/unnamed.gif'

const Spinner = () => {
    return (
        <img
            src={spinner}
            style={{ width: '200px', margin: 'auto', display: 'block' }}
            alt='Loading'
        />
    )
}

export default Spinner