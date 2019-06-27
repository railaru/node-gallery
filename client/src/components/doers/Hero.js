import React from 'react'

export default function Hero(props) {

    const { img_large } = props

    return (
        <div className='-mx-6'>
            <img src={img_large} className='object-cover w-full h-150' alt='' />
        </div>
    )
}
