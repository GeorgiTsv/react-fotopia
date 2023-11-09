import React from "react"



function BlogModule({ heading, photo, read, subheading }) {
    return (
        <div class="BlogModule">
            <img src={photo} alt="Blog" />
            <div class="bottom-left">
                <h3>{heading}</h3>
                <p>{subheading}</p>
            </div>

        </div>
    );
}

export default BlogModule;