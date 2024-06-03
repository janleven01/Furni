import BrandIcons from "../component/BrandIcons";
import {footerColumns} from '../constants/index'

const Footer = () => {
  return (
    <section className="max-container">
      <h1 className="text-[32px] font-medium text-primary">Furni.</h1>

      <div className="flex max-lg:flex-col gap-10 pt-5">
        <div className="lg:max-w-[340px] xl:max-w-[400px] flex flex-col justify-between">
          <p className="text-subtextColor text-[15px] font-fontF leading-7">
            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
            nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
            velit imperdiet dolor tempor tristique. Pellentesque habitant
          </p>
          <div className="flex pt-7">
            <BrandIcons className="w-10 py-3 h-10 rounded-full stroke-none fill-primary bg-primary/15 hover:bg-primary hover:fill-white transition-all duration-300" />
          </div>
        </div>

        {/* FOOTERS LINKS */}
        <div className="w-full grid grid-cols-4 max-md:grid-cols-2 max-lg:pt-5">
          {footerColumns.map((section) => (
            <ul key={section.column} className="max-md:mb-5">
              {section.items.map((item, index) => (
                <li
                  key={index}
                  className="text-black/70 hover:text-black/40 font-fontF text-[14.5px] mb-4 cursor-pointer"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="pt-10 w-full border-b" />

      <div className="flex justify-between pt-6 max-lg:flex-col items-center">
        <h4 className="text-subtextColor text-[14.5px] font-fonF tracking-wide">
          Copyright ©2024. All Rights Reserved. Designed by {''}
          <a 
            href="https://untree.co/"
            className="cursor pointer"
          >
            Untree.co
          </a>
        </h4>
        <div className="pt-2 text-[14.5px] font-fontF text-black/70 tracking-wide space-x-4">
          <button className="hover:text-black/60">Terms & Conditions</button>
          <button className="hover:text-black/60">Privacy Policy</button>
        </div>
      </div>
    </section>
  );
}

export default Footer