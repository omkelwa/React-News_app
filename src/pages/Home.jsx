import React, { useContext } from 'react'
import Card from '../components/Card'
import { getJoke } from '../context/jokeContext/jokeActions'
import JokeContext from '../context/jokeContext/jokeContext'
import NewsContext from '../context/newsContext/NewsContext'
import { getQuote } from '../context/quoteContext/quoteActions'
import quoteContext from '../context/quoteContext/quoteContext'

function Home() {
const {quote, dispatch} = useContext(quoteContext)
  const {news} = useContext(NewsContext)
  const {joke, dispatch : jokeDispatch} = useContext(JokeContext)
  // const {title, description, content, author, url, urlToImage, publishedAt, source.name}
  // const {title, description, content} = news

  const handelQuote = async ()=>{
    const data = await getQuote()
    // console.log(data)
    dispatch({
      type : "GET_QUOTE",
      payload: data
    })
  }

  // const handelJoke = async ()=>{
  //   const data = await getJoke()
  //   jokeDispatch({
  //     type:"GET_JOKES",
  //     payload : data
  //   })
  //   console.log(data.joke);
  // }
  return (
    <>
    
    <div class="row p-3 m-auto">
  <div class="col-sm-6 mb-3 mb-sm-0 col-lg-5">
    <div class="card shadow-lg p-3 mb-5 bg-body rounded">
      <div class="card-body">
        <h5 class="card-title text-center mb-3 fw-bold text-success">Today's Quote</h5>
        <p class="card-text">{quote.content}</p>
        <p class="card-text text-end fw-bold">{quote.author}</p>
        <a href="#" class="btn btn-primary w-100" onClick={()=>handelQuote()}>Get More</a>
      </div>
    </div>
  </div>
  {/* <div class="col-sm-6 col-lg-5">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Jokes's</h5>
        <p class="card-text">{joke.joke}</p>
        <a href="#" class="btn btn-primary w-100" onClick={()=>handelJoke()}>Get More</a>
      </div>
    </div>
  </div> */}
  
</div>
    
    <div className="row p-5">
    {
      news.map(item => <Card news={item}    />)
    }
    </div>
    </>
  )
}

export default Home