import React, { useContext, useEffect } from 'react'

import galleryContext from '../../context/gallery/GalleryContext'


export default function GalleryItem() {

    const GalleryContext = useContext(galleryContext);

    const { galleryItem } = GalleryContext

    useEffect(() => {
        GalleryContext.getItem(0)

        console.table(galleryItem);
    }, [])


    return (
        <div>
            nu
        </div>
    )
}
