import Bg from "../assets/images/bg.jpg"

const Hero = () => {
  return (
    <>
      <section
        className="bg-cover bg-center bg-no-repeat h-[60vh] flex items-center"
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <form className="container flex items-center gap-1 justify-center">
          <input
            type="text"
            placeholder="Search for Food"
            className="max-w-[500px] w-full rounded-lg"
          />
          <input
            type="submit"
            value="Search"
            className="bg-[#eb6960] rounded-lg text-white px-6 border-none outline-none"
          />
        </form>
      </section>
    </>
  )
}

export default Hero
