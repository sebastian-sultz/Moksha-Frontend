import { BsFillMusicPlayerFill } from "react-icons/bs";
import { FaPlayCircle } from "react-icons/fa";
import { Carousel } from "flowbite-react";
import Tips from "./Tips";


const FeelGood = () => {

    const quotes = [
        {
            author: "Carl Jung",
            quote: "I am not what happened to me, I am what I choose to become."
        },
        {
            author: "Maya Angelou",
            quote: "We may encounter many defeats, but we must not be defeated."
        },
        {
            author: "Sigmund Freud",
            quote: "Being entirely honest with oneself is a good exercise."
        },
        {
            author: "Brene Brown",
            quote: "Courage starts with showing up and letting ourselves be seen."
        },
        {
            author: "Viktor Frankl",
            quote: "When we are no longer able to change a situation, we are challenged to change ourselves."
        }
    ];


    return (
        <div className="pt-10">
            <div className="flex justify-between">
                <div className="flex-1 text-center tracking-wide leading-snug text-4xl font-libre text-gray-700 md:text-4xl md:leading-normal lg:text-5xl lg:leading-normal">Feel Good</div>
                <div className="text-right my-auto pe-5">
                    <Tips />
                </div>
            </div>

            <div className="p-7">
                <p className="text-center leading-tight font-normal text-base md:text-lg md:leading-snug md:text-justify">

                    <p className='pb-3'>Take a moment to breathe and reconnect with yourself. Here, you’ll find soothing melodies, simple yet powerful mental health tips, and thought-provoking quotes that can help shift your perspective and bring calm to your day.
                    </p>
                    <p> It’s a space to pause, reflect, and nurture your inner peace, offering gentle reminders that small acts of self-care can lead to big changes in how we feel. Whether you're seeking comfort, inspiration, or a gentle nudge to keep going, this is your space to unwind and replenish your energy.
                    </p>
                </p>
            </div>




            <div className="relative h-64 sm:h-80 xl:h-96 p-5 bg-gradient-to-r from-[#FFF8E8] via-[#BAC3A4] to-[#AAB396] rounded-3xl shadow-lg">
                <Carousel slideInterval={3000} pauseOnHover>
                    {quotes.map((quote, index) => (
                        <div key={index} className="flex justify-center items-center h-full text-center px-4">
                            <div className="max-w-3xl mx-auto">
                                <p className="text-xl sm:text-2xl md:text-3xl font-calligraphy italic text-[#4A4A4A]">
                                    "{quote.quote}"
                                </p>
                                <p className="mt-6 text-lg sm:text-xl md:text-2xl font-serif font-semibold text-[#6A6A6A] opacity-90">
                                    - {quote.author}
                                </p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>



            <div className="flex p-8">
                <div className="justify-start ps-5">
                    <BsFillMusicPlayerFill className="h-10 w-10 fill-prim" />

                </div>
                <div className="flex w-full justify-evenly ">

                    <FaPlayCircle className="h-10 w-10 fill-prim" />
                    <FaPlayCircle className="h-10 w-10 fill-prim" />
                    <FaPlayCircle className="h-10 w-10 fill-prim" />
                    <FaPlayCircle className="h-10 w-10 fill-prim" />
                    <FaPlayCircle className="h-10 w-10 fill-prim" />
                    <FaPlayCircle className="h-10 w-10 fill-prim" />


                </div>
            </div>




        </div>
    )
}

export default FeelGood