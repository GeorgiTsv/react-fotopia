import React from "react"



function FeedModule({ imageLink, Name, Camera }) {

    return (
        <div class="FeedModule">
            <img src={imageLink} alt="Feed" />
            <div class="bottom-left">
                <h3>{Name}</h3>
                <p>{Camera}</p>
            </div>
            <div class="bottom-right">
                <img src={process.env.PUBLIC_URL + 'like.png'} alt="Like" />
            </div>
        </div>
    )
}

export default FeedModule;