import './Countries.scss'
import { CountryItem } from './CountryItem'
import UK from '../../../../assets/images/United_Kingdom.png'
import Spain from '../../../../assets/images/Spain.png'
import Germany from '../../../../assets/images/Germany.png'
import Ukraine from '../../../../assets/images/Ukraine.png'




export const Countries = () =>{
  return(
    <div className="countries">
      <div className="container">
        <h1>I want to learn...</h1>
        <div className="country-list">
          <CountryItem imageSrc={UK} language={'English'} tutorCount={'27069 tutors'}/>
          <CountryItem imageSrc={Spain} language={'Spanish'} tutorCount={'27069 tutors'}/>
          <CountryItem imageSrc={Germany} language={'German'} tutorCount={'27069 tutors'}/>
          <CountryItem imageSrc={Ukraine} language={'Ukranian'} tutorCount={'27069 tutors'}/>
          <p className="narrow">
            All Countries <i className="fa-solid fa-angle-right"></i>
          </p>
        </div>
      </div>
    </div>
  )
}