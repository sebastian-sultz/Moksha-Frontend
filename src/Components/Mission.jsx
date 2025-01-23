import About from "../assets/Images/About.png";

const Mission = () => {
  return (
    <div>
      <div className="pt-10 text-center tracking-wide leading-snug text-4xl font-libre text-gray-700 md:text-4xl md:leading-normal lg:text-5xl lg:leading-normal">
        Our Mission
      </div>
      <div className="md:flex md:justify-between md:py-5">
        <div className="md:shrink-0 md:content-center">
          <img
            className="mx-auto h-72 w-72 rounded-2xl object-cover opacity-70 md:h-72 md:w-72 lg:h-96 lg:w-96"
            src={About}
            alt="Moksha"
          />
        </div>
        <div className="text-center md:text-left lg:max-w-2xl md:content-center ">
          <div className="pt-10 tracking-wide leading-snug text-lg font-libre text-gray-700 md:pt-0 md:text-xl md:leading-normal md:text-left lg:text-2xl lg:leading-normal">
          "Mental health is not a destination, but a journey." 

          
          </div>
          <p className=" text-gray-500 py-7 leading-tight font-normal text-base md:text-lg md:leading-snug md:text-justify"><p  className="pb-3">
          Welcome to Moksha. At the heart of our mission is the belief that everyone deserves access to the support, resources, and understanding needed to foster emotional well-being. We aim to bridge the gap between mental health awareness and the help that is often so difficult to find.
          </p>
          <p> Through our platform, we connect individuals with experts if needed, provide educational tools to break down stigmas, and offer a space for self-care and healing. Our goal is to empower individuals, encouraging them to take control of their mental health with compassion, knowledge, and the right support. Together, we can create a world where mental health is a priority, and no one has to face their struggles alone. </p>
          </p>
        </div>
      </div>

    </div>
  );
};

export default Mission;
