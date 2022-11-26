import { useState } from "react"
import { IComment } from "../../../../models/Comment"
import "./Feedback.scss"

interface ICarouselProps {
  comments: IComment[]
}

export const Carousel = (props: ICarouselProps) => {
  const productCardWidth = 390
  const { comments } = props
  const [currentSlideNumber, setCurrentSlideNumber] = useState(0)

  const leftButtonClickHandler = () => {
    setCurrentSlideNumber(currentSlideNumber - 1)
  }

  const rightButtonClickHandler = () => {
    setCurrentSlideNumber(currentSlideNumber + 1)
  }

  return (
    <p>.</p>
    // comments.map(comment, index){

    // }

    // I CANT WRITEEE

    // <div className="feedback">
    //   <div className="title">
    //     <h1>Our students <span>feedback</span> </h1>
    //     <p>Start learning today. Join for now Online Courses</p>
    //   </div>

    //   <div className="title"></div>
    //   <div className="comments container">

    //   </div>
    //   {/* <div className="buttons">
    //     <button className="carousel-button left" disabled onclick={handleCarouselButtonClick(-1)}>left</button>
    //     <button className="carousel-button right" onclick="handleCarouselButtonClick(1)">right</button>
    //   </div> */}

    // </div>
  )
}
