import burger from "../assets/images/burger.jpg"
import pizza from "../assets/images/pizza.jpg"
import momo from "../assets/images/momo.jpg"

const Explore = () => {
  const data = [
    { img: pizza, text: "Pizza" },
    { img: burger, text: "Burger" },
    { img: momo, text: "Momo" },
  ]
  return (
    <>
      <section className="container flex flex-col justify-center items-center gap-10">
        <div>
          <h2 className="font-bold text-2xl">Explore Foods</h2>
        </div>
        <div className="flex items-center justify-between gap-7 w-full h-[420px]">
          {data.map((elem, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${elem.img})` }}
              className="rounded-xl bg-cover bg-no-repeat bg-center w-full h-full flex justify-center items-end py-7"
            >
              <h3 className="text-white font-semibold text-xl">{elem.text}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Explore
