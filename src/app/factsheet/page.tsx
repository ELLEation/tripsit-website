import FactSheet from '@components/factsheet/FactSheet'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text orange_gradient text-center">
        Tripsit
      <br className="max-md:hidden" />
      <span className='text-center'>Fact Sheets</span>
      </h1>
      <p className="desc text-center">
        Harm Reduction Through Education!
      </p>
      <FactSheet />
    </section>
    )
}

export default Home