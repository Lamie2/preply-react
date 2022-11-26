import './Hero.scss'
import LeftImg from "../../../../assets/images/left-img.png"
import GirlComp from "../../../../assets/images/girl-comp.png"

export const Hero = () => {
return(
  <div className="choice-sec">

  <div className="left-img"><img src={LeftImg} alt=""/></div>
  <div className="middle">
    <p className="title"><b> Prepare to speak confidently</b> </p>
    <p>with the best online tutors</p>
    <div className="input-group">
      <form method="post">
        <input className="text" type="text" id="email" name="email" value="Enter language name"/>
        <button className="btn" type="button" id="button-addon2"><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>

    </div>
  </div>
  <div className="right-img"><img src={GirlComp} alt=""/></div>
</div>

)
}