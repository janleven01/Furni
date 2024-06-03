import { sofaImg } from '../assets/images'
import {envelopeIcon, paperPlane} from '../assets/icons'

const Subscribe = () => {
  return (
    <section className="max-container relative pt-36">
      <img
        src={sofaImg}
        alt="Sofa Image"
        className="absolute w-[400px] right-0 -top-[80%] object-cover max-sm:-top-[55%]"
      />
      <div className="flex flex-col">
        <div className="flex gap-2">
          <img src={envelopeIcon} alt="" className="" />
          <h3 className="font-fontF text-lg text-primary font-medium tracking-wide">
            Subscribe to Newsletter
          </h3>
        </div>

        {/* INPUTS AND PAPERPLANE BUTTON */}
        <div className="flex pt-2 gap-3 flex-wrap">
          <input
            type="text"
            placeholder="Enter your name"
            aria-label="Name"
            minLength="2"
            maxLength="50"
            className="px-2 py-3 border rounded-xl border-primary/30 min-w-[240px] outline-none focus:border-primary"
            required
          />
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Email"
            className="px-2 py-3 border rounded-xl border-primary/30 min-w-[240px] outline-none focus:border-primary"
            required
          />
          <div className="flex items-center justify-center px-7 py-3 min-w-[70px] bg-primary hover:bg-primary/95 rounded-xl">
            <img
              src={paperPlane}
              alt="Paper Plane Icon"
              className="w-5 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe