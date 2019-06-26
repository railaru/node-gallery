import React, { useContext, useEffect } from 'react'
import galleryContext from '../../context/gallery/GalleryContext'
import Card from '../doers/Card'

export default function Gallery() {

    const GalleryContext = useContext(galleryContext);

    const { loading, galleryItems, getItems } = GalleryContext

    useEffect(() => {
        getItems()
    }, [])

    if (loading) {
        return <div>loading...</div>
    } else {

        return (
            <div className='flex flex-wrap -mx-2'>
                {
                    galleryItems.map(({ id, title, img, description, tags }) => (
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
}
