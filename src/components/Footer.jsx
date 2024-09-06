import { FaFacebook } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import { FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <>
      <footer className="container flex flex-col items-center justify-center gap-7">
        <div className="flex items-center justify-center gap-5">
          {[<FaFacebook />, <AiFillInstagram />, <FaTwitter />].map(
            (elem, index) => (
              <a href="#" key={index}>
                {elem}
              </a>
            )
          )}
        </div>
        <div>
          <p>
            <span>All rights reserved Designed by</span>
            <span className="text-[#E73C31] font-medium ml-1">Jawad Ahmad</span>
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
