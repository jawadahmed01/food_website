import burger from "../assets/images/burger.jpg"
import pizza from "../assets/images/pizza.jpg"
import momo from "../assets/images/momo.jpg"

const FoodMenu = () => {
  const data = [
    {
      img: burger,
      title: "smoky Burger",
      price: "$2.3",
      content: "Made with italian sauce. Chicken and organice vegetables",
      buttonText: "Order Now",
      buttonLink: "/",
    },
    {
      img: pizza,
      title: "Amazing Pizza",
      price: "$2.3",
      content: "Made with italian sauce. Chicken and organice vegetables",
      buttonText: "Order Now",
      buttonLink: "/",
    },
    {
      img: momo,
      title: "Amazing Pizza",
      price: "$10.3",
      content: "Made with italian sauce. Chicken and organice vegetables",
      buttonText: "Order Now",
      buttonLink: "/",
    },
    {
      img: burger,
      title: "Nice Burger",
      price: "$12.3",
      content: "Made with italian sauce. Chicken and organice vegetables",
      buttonText: "Order Now",
      buttonLink: "/",
    },
    {
      img: pizza,
      title: "Amazing Pizza",
      price: "$2.3",
      content: "Made with italian sauce. Chicken and organice vegetables",
      buttonText: "Order Now",
      buttonLink: "/",
    },
    {
      img: momo,
      title: "Momo Special",
      price: "$2.3",
      content: "Made with italian sauce. Chicken and organice vegetables",
      buttonText: "Order Now",
      buttonLink: "/",
    },
  ]
  return (
    <>
      <section className="w-full h-full bg-slate-50">
        <div className="container flex justify-center items-center gap-10 flex-col">
          <div className="">
            <h2 className="font-bold text-2xl">Food Menu</h2>
          </div>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {data.map((elem, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 flex justify-center items-center gap-7"
              >
                <div>
                  <img
                    src={elem.img}
                    alt={elem.title}
                    className="h-[7vw] w-[7vw] rounded-xl"
                  />
                </div>
                <div className="flex flex-col justify-start items-start gap-2">
                  <h3 className="font-bold capitalize text-lg">{elem.title}</h3>
                  <span className="font-bold">{elem.price}</span>
                  <p>{elem.content}</p>
                  <a
                    href={elem.buttonLink}
                    className="bg-[#eb6960] px-3 py-1 text-white text-sm rounded-md"
                  >
                    {elem.buttonText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default FoodMenu
