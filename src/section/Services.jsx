import { 
    bagIcon,
    supportIcon,
    truckIcon,
    returnIcon 
} from "../assets/icons"
import { 
  servicesImage,
  dotsYellow
} from '../assets/images'
import ServicesCard from "../component/ServicesCard"
import { services } from "../constants"

const Services = () => {
  return (
    <section className="max-container pt-28 max-md:pt-4 min-h-[55vh]">
        <div className="flex max-lg:flex-col max-lg:space-y-32">
          <div className="lg:max-w-[650px]">

            {/* SERVICES TEXT HEADER  */}
            <div className="">
              <h1 className="text-[35px] leading-10 font-medium font-fontF ">Why Choose Us.</h1>
              <p className='text-subtextColor pt-4'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique..</p>
            </div>

            {/* SERVICES ICONS */}
            <div className="grid grid-cols-2 pt-10 gap-5">
              {services.map((service) => (
                <ServicesCard
                  key={service.label}
                  {...service}
                />
              ))}
            </div>
          </div>

          {/* SERVICES MAIN IMAGE */}
          <div className="relative flex lg:justify-end justify-center items-center">
            <img src={servicesImage} alt="services-image"
              className="rounded-2xl w-[80%] z-10" 
            />
            <img src={dotsYellow} alt="dots-yellow" 
              className="absolute -top-[16%] z-0 -left-[1%] max-xl:-top-[10%] max-sm:w-[55%]"
            />
          </div>
        </div>
    </section>
  )
}

export default Services