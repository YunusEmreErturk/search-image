import React from 'react'

const ListPage = ({images}) => {

    const imageList = images.map(image => {
        return (
            <img key={image.id} src={image.urls.small} alt=""/>
        )
    });
    return (
        <div>
            {imageList}
        </div>
    )
}

export default ListPage;