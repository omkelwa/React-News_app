import React from 'react'

function Card({news}) {

const {title,content, description, url, urlToImage } = news
 return (
 <>
 <div className="container row ">
 <div className="card col-4" >
  <img src={urlToImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{content}</p>
    <p className="card-text">{description}</p>
    <a href={url} className="btn btn-primary">Go somewhere</a>
  </div>
</div>
 </div>
 </>   
  )
}

export default Card