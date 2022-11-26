import './Applications.scss'
import leftTop from "../../../../assets/images/element 1.png"
import phone from "../../../../assets/images/phone mocu up 1.png"
import rightTop from "../../../../assets/images/right-top.png"
import rightBottom from "../../../../assets/images/right-bottom.png"
import googlePlay from "../../../../assets/images/Google Play logo.png"
import apple from "../../../../assets/images/Apple logo.png"

export const Applications = () =>{
  return(

    <div className="apps">
      <img className="left-top" src={leftTop} alt=""/>
      <img className="phone" src={phone} alt=""/>
      <img className="right-top" src={rightTop} alt=""/>
      <img className="right-bottom" src={rightBottom} alt=""/>
      <div className="app">
        <p className="title">Get Started for <span>Apps</span> </p>
        <p>Start learning today. Join for now Online Courses </p>
        <div className="buttons">
          <button className="g-play">
            <img src={googlePlay} alt=""/>
            <div>
              <p className='getItOn'>Get it On</p>
              <p className="bold"><b> Google Play</b></p>
            </div>
          </button>
          <button className="app-store">
            <img src={apple} alt=""/>
            <div>
              <p className='DownloadOnThe'>Download on the</p>
              <p className="bold"><b> App Store</b></p>
            </div>
          </button>
        </div>
      </div>
    </div>

  )
}