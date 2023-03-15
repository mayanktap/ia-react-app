import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styles.css"
import {
  //nasalogo,
  //noaalogo, 
  //FAA,
  GeorgiaTech,
  //Bluenest,
  ERAU,
  //NationalInstitueofAerospace,
  //InsuranceInstitute,
  //StruWeather,
  //TampaBayWave,
  //TBTI,
  //VentureLab,
  //SkytlLogoBlack,
  //WildfireDefense,
  FSU,
  //awsicon,
} from '../../assets/index';

const carousel = (slider) => {
  const z = 300
  function rotate() {
    const deg = 360 * slider.track.details.progress
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
    })
    rotate()
  })
  slider.on("detailsChanged", rotate)
}

export default function CarouselAxisAcademic() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  )

  return (
    <div className="bg-black container mx-auto py-10 pb-20">
      <div className="mx-auto">
        <h1 className="text-3xl font-bold text-white pb-20">Academic Partners</h1>
        <div className="wrapper">
          <div className="scene">
            <div className="carousel keen-slider" ref={sliderRef}>
              <div className="carousel__cell number-slide1 flex justify-center items-center p-4">
                <img src={GeorgiaTech} className="max-h-full max-w-full" alt="slide1" />
              </div>
              <div className="carousel__cell number-slide2 flex justify-center items-center p-4">
                <img src={ERAU} className="max-h-full max-w-full" alt="slide2" />
              </div>
              <div className="carousel__cell number-slide3 flex justify-center items-center p-4">
                <img src={FSU} className="max-h-full max-w-full" alt="slide3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
