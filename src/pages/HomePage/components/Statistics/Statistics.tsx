import './Statistics.scss'
import friends from "../../../../assets/images/three.png" 


export const Statistcs = () => {
  return(
    
    <div className="statistics">
      <img src={friends} alt="" />
      <div className="text">
        <p className="title">
          Over 100,000 students <br />
          join us monthly
        </p>
        <p>With our expert tutors, your goals are closer than ever!</p>
        <button>Start Learning</button>
      </div>
    </div>

  )
}