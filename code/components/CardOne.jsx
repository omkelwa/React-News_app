import { useContext } from "react"
import NewsContext from "../context/NewsContext"
import Card from "./Card"



function CardOne (){
const {news} = useContext(NewsContext)

    return(
        <>
        <div className="card mb-2 ">
        <div className="card-header">
          Today's Quote
        </div>
        <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>A well-known quote, contained in a blockquote element.</p>
              <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
          </div>
      </div>
      <div className="card mb-2 w-50">
        <div className="card-header">
          Joke
        </div>
        </div>
        {
          news.map(item=> <Card news={item} />)
        }
      
        </>
    )
}

export default CardOne