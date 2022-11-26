import './RequestPost.scss'
import smilingGirl from "../../../../assets/images/similing-girl.jpg"
import smilingBoy from "../../../../assets/images/smiling-boy.jpg"


export const RequestPost = () => {
  return (    
    <div className="post-request">
      <div className="first-img">
        <img src={smilingGirl} alt="" />
      </div>
      <div className="middle">
        <p className="title">Request a private tutor</p>
        <p>Let tutors find you</p>
        <button>Post request</button>

      </div>
      <div className="second-img">
        <img src={smilingBoy} alt="" />
      </div>
    </div>

  )
}