import { team } from "../constants"

const Team = () => {
  return (
    <section className="max-container bg-secondary">
      <h1 className="text-center font-fontF text-3xl font-medium text-black/90">
        Our Team
      </h1>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8 pt-10">
        {team.map((person, index) => (
          <div key={index} className="">
            <img src={person.imgURL} alt="Person 1" />
            <h1 className="text-[26px] font- font-fontF pt-10 text-black/90 underline hover:no-underline">
              <a href="/about">{person.name}</a>
            </h1>
            <h5 className="font-fontF text-[14.5px] tracking-wide text-subtextColor pt-2">
              {person.position}
            </h5>
            <h5 className="font-fontF text-[14.5px] tracking-wide text-subtextColor pt-5">
              {person.label}
            </h5>
            <div className="font-fontF text-[14.5px] tracking-wide text-black font-medium underline pt-5 hover:no-underline">
              <a href="/about">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team