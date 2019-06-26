import React, { useContext, useEffect } from 'react'

import galleryContext from '../../context/gallery/GalleryContext'

import Card from './../doers/Card'

export default function GalleryItem() {

    const GalleryContext = useContext(galleryContext);

    const { galleryItem, galleryItemId } = GalleryContext

    useEffect(() => {
        GalleryContext.getItem(galleryItemId)
    }, [])

    return (
        <div className='max-w-md'>
            {
                galleryItem.map(({ id, title, img, description, tags }) => (
                    <Card
                        id={id}
                        key={id}
                        title={title}
                        img={img}
                        description={description}
                        tags={tags}
                    />
                ))
            }
        </div>
    )
}
