import React, { useContext, useEffect, Fragment } from 'react'

import galleryContext from '../../context/gallery/GalleryContext'

import Hero from './../doers/Hero'
import Tags from './../doers/Tags'

export default function GalleryItem() {

    const GalleryContext = useContext(galleryContext);

    const { galleryItem, galleryItemId } = GalleryContext

    useEffect(() => {
        GalleryContext.getItem(galleryItemId)
    }, [])

    return (
        <div>
            {
                galleryItem.map(({ id, title, img_large, description, text, tags }) => (
                    <Fragment>
                        <Hero
                            key={id}
                            img_large={img_large}
                        />
                        <div className='mb-10 max-w-2xl'>
                            <div className='mt-6 text-5xl'>{title}</div>
                            <div className='mt-3 text-2xl text-gray-600'>{description}</div>
                            <div className='mt-3'>
                                {text}
                            </div>
                            <div className='mt-3'>
                                {text}
                            </div>
                            <div className='mt-3'>
                                {text}
                            </div>
                            <div className='mt-3'>
                                {text}
                            </div>
                            <div className='mt-3'>
                                {text}
                            </div>
                        </div>
                        <div className='mb-10'>
                            <div className='text-3xl'>Tags:</div>
                            <div className='mt-2 h-1 bg-gray-400' />
                            <div className='mt-2'>
                                <Tags tags={tags} />
                            </div>
                        </div>
                    </Fragment>
                ))
            }
        </div>
    )
}
