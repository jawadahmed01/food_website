import Logo from "../assets/images/logo.png"
const Header = () => {
  return (
    <>
      <header className="container flex items-center justify-between gap-8 h-20">
        <div>
          <a href="/">
            <img src={Logo} className="h-12" />
          </a>
        </div>
        <div className="flex items-center gap-7 font-semibold text-[#E73C31]">
          {["Home", "About", "Foods", "Contact"].map((elem, index) => (
            <a href="" key={index}>
              {elem}
            </a>
          ))}
        </div>
      </header>
    </>
  )
}

export default Header
