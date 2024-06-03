import { 
    offerImage1,
    offerImage2,
    offerImage3,
    dotsGreen
 } from "../assets/images"
 import { 
    offers,
    products
 } from "../constants"
 import ProductOffer from '../component/ProductOffer'
 import { listIcon } from "../assets/icons"
 import Button from "../component/Button"

const Offer = () => {
  return (
    <section className="max-container pt-20 max-lg:pt-32">
        <div className="flex gap-16 max-lg:flex-col max-lg:items-center">

            {/* OFFER IMAGES */}
            <div className="flex relative justify-between max-lg:w-[80%] w-[55%] gap-5">
                <img 
                    src={dotsGreen} 
                    alt="dots-green" 
                    className="absolute object-cover -left-[13%] -top-[12%] max-sm:w-[55%]"
                />
                <img 
                    src={offerImage1} 
                    alt="" 
                    className="w-[60%] rounded-2xl object-cover relative z-10"
                />
                <img 
                    src={offerImage2} 
                    alt="" 
                    className="w-[37%] h-[43%] rounded-2xl object-cover z-10"
                />
                <img 
                    src={offerImage3} 
                    alt="" 
                    className="absolute max-lg:-bottom-[28%] -bottom-[20%] right-0 rounded-2xl w-[50%] h-[75%] object-cover z-10"
                />
            </div>  

            {/* OFFER TEXT HEADER */}
            <div className="lg:max-w-[35%] max-lg:pt-28">
                <h1 className="text-[33px] leading-10 font-medium font-fontF">We Help You Make Modern Interior Design.</h1>
                <p className='text-subtextColor  pt-8'>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada.</p>
                <ul className="grid grid-cols-2 gap-5 text-subtextColor py-10 px-3">
                    {offers.map((offer, index) => (
                        <li 
                            key={index}
                            className="flex items-start  gap-2"
                        >
                            <img src={listIcon} alt="list-icon" 
                                className=" mt-1"
                            />
                            {offer.label}
                        </li>
                    ))}
                </ul>
                <Button
                    label = 'Explore'
                    backgroundColor = 'bg-black/80'
                    borderColor = 'border-none'
                    textColor = 'text-white'
                    hover = 'hover:bg-black/90' 
                />
            </div>

        </div>

        {/* OFFER PRODUCTS */}
        <div className="pt-52 max-lg:pt-20 grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-10">
            {products.map((product) => (
                <ProductOffer
                    key={product.name}
                    {...product}
                />
            ))}
        </div>
    </section>
  ) 
}

export default Offer