import { Footer } from "../Footer/Footer"
import { Applications } from "./components/Applications/Applications"
import { Countries } from "./components/Countries/Countries"
import { Hero } from "./components/Hero/Hero"
import { HowWork } from "./components/HowWork/HowWork"
import { OurGoal } from "./components/OurGoal/OurGoal"
import { RequestPost } from "./components/RequestPost/RequestPost"
import { Statistcs } from "./components/Statistics/Statistics"
import "./HomePage.scss"

export const HomePage = () => {
  const comments = [
    {
      id: 1,
      icon: "fa-solid fa-star",
      message: "Amazing to work with, everyone was so nice and kept us updated with progress. We put a tough ask on them, to complete on our house within 48 hours so we could secure our next home.",
      username: "Vicky Lueke",
      country: "Australia"
    },
    {
      id: 2,
      icon: "fa-solid fa-star",
      message: "Amazing to work with, everyone was so nice and kept us updated with progress. We put a tough ask on them, to complete on our house within 48 hours so we could secure our next home.",
      username: "Anna",
      country: "France"
    },
    {
      id: 3,
      icon: "fa-solid fa-star",
      message: "Amazing to work with, everyone was so nice and kept us updated with progress. We put a tough ask on them, to complete on our house within 48 hours so we could secure our next home.",
      username: "Luis",
      country: "Spain"
    },
    {
      id: 4,
      icon: "fa-solid fa-star",
      message: "Amazing to work with, everyone was so nice and kept us updated with progress. We put a tough ask on them, to complete on our house within 48 hours so we could secure our next home.",
      username: "Vicky Lueke",
      country: "Australia"
    },
    {
      id: 5,
      icon: "fa-solid fa-star",
      message: "Amazing to work with, everyone was so nice and kept us updated with progress. We put a tough ask on them, to complete on our house within 48 hours so we could secure our next home.",
      username: "Anna",
      country: "France"
    },
    {
      id: 6,
      icon: "fa-solid fa-star",
      message: "Amazing to work with, everyone was so nice and kept us updated with progress. We put a tough ask on them, to complete on our house within 48 hours so we could secure our next home.",
      username: "Luis",
      country: "Spain"
    }
  ]
  return (
    <>
      <Hero />
      <Countries/>
      <HowWork />
      <OurGoal />
      <Statistcs />
      <RequestPost />
      <Applications/>
      <Footer/>
    </>
  )
}
