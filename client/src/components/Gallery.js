import React, { useContext, useEffect } from 'react'
import galleryContext from '../context/gallery/GalleryContext'
import Card from './Card'

export default function Gallery() {

    const GalleryContext = useContext(galleryContext);

    useEffect(() => {
        GalleryContext.getItems()
    }, [])

    if (GalleryContext.loading) {
        return <div>loading...</div>
    } else {

        return (
            <div className='flex flex-wrap -mx-2'>
                {
                    GalleryContext.galleryItems.map(({ id, title, img, description, tags }) => (
                        <Card
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
}
