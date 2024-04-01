import Header from "./components/header/Header"
import Discover from "./components/discover/Discover"
import Testimonials from "./components/testimonials/Testimonials"
import Pr from "./components/pr/Pr"
import Subscription from "./components/subscription/Subscription"
import History from "./components/history/ProjectHistory";
import Software from "./components/software/Software"
import Faq from "./components/faq/Faq"
import Footer from "./components/footer/Footer"

export default function Home(){
  return(
    <>
      <Header/>
      <Discover/>
      <Software/>
      <History/>
      <Testimonials/>
      <Pr/>
      <Subscription/>
      <Faq/>
      <Footer/>
    </>
  )
}