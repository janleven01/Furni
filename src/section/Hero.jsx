import { dotsLight, couchBig } from '../assets/images'
import { Link } from 'react-router-dom';
import Button from '../component/Button'

const Hero = ({title}) => {
  return (
    <section className="flex max-container max-lg:flex-col relative gap-5 xl:gap-16 bg-primary pt-10">
      {/* HEADING TEXT*/}
      <div className="lg:max-w-[400px] xl:max-w-[480px] justify-start flex-none lg:pt-28">
        <h1 className="text-white text-6xl max-md:text-3xl max-xl:text-5xl max-lg:text-4xl font-bold">
          {title}
        </h1>
        <p className="pt-8 text-white/50 text-md leading-8">
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 pt-5">
          <Link to="/shop">
            <Button
              label="Shop Now"
              backgroundColor="bg-yellow-500/95"
              borderColor="border-none"
              textColor="text-black"
              hover="hover:bg-yellow-500"
            />
          </Link>
          <Link to="/services">
            <Button label="Explore" />
          </Link>
        </div>
      </div>

      {/* HERO IMAGE */}
      <div className="relative flex-none ">
        <img
          src={couchBig}
          alt="Big Couch"
          className="relative pt-8 z-10 max-w-[780px] max-h-[580px] object-cover"
        />
        <img
          src={dotsLight}
          alt="green-dots"
          className="absolute -right-16 top-20 max-xl:right-28 max-lg:-right-32"
        />
      </div>
    </section>
  );
}

export default Hero