//Import Components
import Greeting from '@components/home/Greeting'
import About from '@components/home/About'
import Stats from '@components/home/Stats'
import ComboSplash from '@components/home/ComboSplash'
import Friends from '@components/home/Friends'
import Testimonials from '@components/home/Testimonials'
import Resources from '@components/home/Resources'
import Volunteer from '@components/home/Volunteer'
import FAQ from '@components/home/FAQ'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <Greeting />
      <About />
      <Stats />
      <ComboSplash />
      <Friends />
      <Testimonials />
      <Resources />
      <Volunteer />
      <FAQ />
    </section>
    )
}

export default Home