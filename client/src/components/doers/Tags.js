import React, {Fragment} from 'react'
import uuid from 'uuid'

export default function Tags(props) {

    const {tags} = props

    return (
        <Fragment>
            {
                tags.map(tag => (
                    <span key={uuid()} className="
                        inline-block 
                        mt-2 
                        bg-gray-200 
                        rounded-full 
                        px-3 
                        py-1 
                        text-sm 
                        font-semibold 
                        text-gray-700 
                        mr-2"
                    >
                        #{tag}
                    </span>
                ))
            }
        </Fragment>
    )
}
