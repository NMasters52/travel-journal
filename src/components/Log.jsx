import React from 'react'


export default function Log(props) {
    return (
        <article className='log-post'>
            <div className='log-post__img'>
                <img className='log-post--img' src={`../public/images/${props.imageUrl}`} alt="Picture of Hole One Maple Hill" />
            </div>
            <div className='log-post__article'>
                <div className='article__header'>
                    <h3 className='header--title'>{props.title}</h3>
                    <span className='header-location'>{props.location}    <a href={props.googleMapsUrl}>View on Google Maps</a>
                    </span>
                </div>
                <div className='article_text'>
                    <p>{props.description}</p>
                </div>
                
            </div>
            
        </article>
    )
}