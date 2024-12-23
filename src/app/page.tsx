import Image from 'next/image'
import NavBar from '@/components/navbar/Navbar'
import backGround from "@/app/img/background.png"
import HeroSection from "@/components/hero-section/HeroSection"
import Skill from "@/app/skill/page";
import MyWork from "@/app/mywork/page";
import MyTeam from "@/app//team/page";
import Contact from "@/app/contact/page"
import AboutPage from './about/page';



export default function HomePage() {
  return (
    <main>

      <div className='homePage'>
        <div className='homePageDiv'>
        </div>
        <div>
          <HeroSection />
        </div>
      </div>

      <div className="about">
        <AboutPage/>
      </div>

      <div className='myWork'>
        <MyWork/>
      </div>

      <div className='skill'>
        <Skill/>
      </div>

      <div className='myTeam'>
        <MyTeam/>
      </div>

      <div className='contact'>
        <Contact/>
      </div>

    </main>
  )
}