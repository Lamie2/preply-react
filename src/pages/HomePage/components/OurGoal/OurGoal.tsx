import './OurGoal.scss'


export const OurGoal = () =>{
  return(
    <div className="goals">
      <div className="left-side">
        <div className="img"></div>
        <div className="text-box">
          <p><b>Focus on the skills</b> </p>
          <p>
            Prepare to achieve your <br />
            goals with private tutors
          </p>
        </div>
      </div>

      <div className="goal-list">
        <div className="list-item left">
          <i className="fa-solid fa-check"></i>
          <div className="text">

            <h3>Immerse yourself in a new culture</h3>
            <p>
              Connect with language experts from <br />
              around the world
            </p>
          </div>
        </div>
        <div className="list-item ">
          <i className="fa-solid fa-check"></i>
          <div className="text">
            <h3>Get expert help when you need it</h3>
            <p>Learn to solve any problem in any language</p>
          </div>
        </div>
        <div className="list-item">
          <i className="fa-solid fa-check"></i>
          <div className="text">
            <h3>Succeed in your career</h3>
            <p>
              Develop your working vocabulary and <br />
              communicate clearly
            </p>
          </div>
        </div>
        <div className="list-item left">
          <i className="fa-solid fa-check"></i>
          <div className="text">
            <h3>Speak naturally, always</h3>
            <p>
              Make a good impression and build trust <br />
              in any language
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}