import AnimatedTitle from "../AnimatedTitle";
import Links from "./Links";
import Map from "./Map";

const Contact = () => {
  return (
    <section id="contact" className="min-h-[90vh] bg-[#0a0844] pb-5">
      <div className="container">
        <AnimatedTitle name="Contact" />
        <div
          className="mt-5 text-center md:text-left mb-[10px] text-[1.2rem] font-light text-[#ffffff7d]"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          repudiandae facilis non?
        </div>
        <main className="mt-10 min-h-[60vh] flex flex-wrap lg:flex-nowrap gap-[50px] justify-center lg:justify-between items-center">
          <Links />
          <Map />
        </main>
      </div>
    </section>
  );
};

export default Contact;
