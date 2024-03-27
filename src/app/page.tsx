import Header from "./components/header/Header"
import Discover from "./components/discover/Discover"
import Testimonials from "./components/testimonials/Testimonials"
import Pr from "./components/pr/Pr"
import Subscription from "./components/subscription/Subscription"

export default function Home(){
  return(
    <>
      <Header/>
      <Discover/>
      <Testimonials/>
      <Pr/>
      <Subscription/>
    </>
  )
}