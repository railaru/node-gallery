import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import galleryContext from '../../context/gallery/GalleryContext'
import Tags from './Tags'


export default function Card(props) {

    const { id, title, img, description, tags } = props

    const GalleryContext = useContext(galleryContext);

    return (
        <Link
            onClick={() => GalleryContext.setItemId(id)}
            to={'gallery/' + id}
            className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 px-2 cursor-pointer'
        >
            <div className="rounded overflow-hidden shadow hover:shadow-md">
                <img className="w-full" src={img} alt="" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">
                        {description}
                    </p>
                </div>
                <div className="px-6 py-4">
                    <Tags
                        tags={tags}
                    />
                </div>
            </div>
        </Link>
    )
}
