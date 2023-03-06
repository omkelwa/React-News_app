import React from 'react'
import noImage from '../images/noimage.png'
function Card({news}) {
// const {title, description, content, author, url, urlToImage, publishedAt, source.name} 
    const {title, description, content, urlToImage, url, author, publishedAt, } = news
  return (
    <>
  <div class="col col-md-6 col-sm-12 col-lg-4 mb-4">
    <div class="card h-100 ">
      <img src={urlToImage ? urlToImage : noImage} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        {/* <p class="card-text">{description}</p> */}
        {/* <p class="card-text">Author : {author}</p> */}
        <p class="card-text">{content}</p>
        <a href={url} className="btn btn-primary w-100 rounded-0 " target='_blank' >Read Full News</a>
      </div>
    </div>
  </div>
    
    {/* <div class="row row-cols-1 row-cols-md-3 g-4 p-5">
</div> */}
    </>
  )
}

export default Card