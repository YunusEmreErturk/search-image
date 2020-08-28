import React from 'react'
import "./ListPage.css"
import Image from "./Image";

const ListPage = ({images}) => {

    const imageList = images.map(image => {
        return (
            <Image key={image.id} image={image}/>
        )
    });
    return (
        <div className="list-page-container">
            {imageList}
        </div>
    )
}

export default ListPage;