import { contacts } from "../constants";
import Button from "../component/Button";

const Contact = () => {
  return (
    <section className="max-container ">
      <div className="flex flex-col padding-input gap-20">
        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-10">
          {/*  BRAND'S INFORMATION */}
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="flex items-center gap-4"
            >
              <img
                src={contact.iconURL}
                alt={contact.name}
                className="bg-primary w-12 h-12 rounded-lg p-3"
              />
              <div className="font-fontF text-subtextColor text-[14.5px]">
                {contact.info}
              </div>
            </div>
          ))}
        </div>
        {/* USER INPUT */}
        <form>
          <div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label className="font-fontF text-[14.5px] text-black/90 ">
                  First Name
                </label>
                <input
                  type="text"
                  aria-label="Name"
                  minLength="2"
                  maxLength="50"
                  className="px-2 py-3 border rounded-xl border-primary/30 outline-none focus:border-primary"
                  required
                />
              </div>
              <div className="flex flex-col ">
                <label className="font-fontF text-[14.5px] text-black/90">
                  Last Name
                </label>
                <input
                  type="text"
                  aria-label="Name"
                  minLength="2"
                  maxLength="50"
                  className="px-2 py-3 border rounded-xl border-primary/30 outline-none focus:border-primary"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col pt-3">
              <label className="font-fontF text-[14.5px] text-black/90">
                Email Address
              </label>
              <input
                type="email"
                aria-label="Email"
                className="px-2 py-3 border rounded-xl border-primary/30 outline-none focus:border-primary"
                required
              />
            </div>
            <div className="flex flex-col pt-3 pb-8">
              <label className="font-fontF text-[14.5px] text-black/90">
                Message
              </label>
              <textarea
                rows="5"
                aria-label="Message"
                className="px-2 py-3 border rounded-xl border-primary/30 outline-none focus:border-primary"
                required
              />
            </div>
            <Button
              label="Send Message"
              backgroundColor="bg-black/85"
              borderColor="border-none"
              textColor="text-white"
              hover="hover:bg-black"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
