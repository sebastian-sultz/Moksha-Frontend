

const Hero = () => {
    return (
<div>
        <div className="max-w-md mx-auto overflow-hidden md:max-w-4xl lg:max-w-6xl md:pt-10 md:pb-24 lg:pt-16">
            <div className="md:flex md:justify-between md:py-5">
                <div className="text-center md:text-left md:p-5 lg:max-w-lg md:content-center ">
                    <div className="pt-10 tracking-wide leading-snug text-4xl font-libre text-gray-700 md:pt-0 md:text-4xl md:leading-normal md:text-left lg:text-5xl lg:leading-normal">Not feeling like yourself lately? You’re not alone.</div>
                    <p className=' text-gray-500 py-7 leading-tight font-normal text-base md:text-lg md:leading-snug md:text-left'>Many people encounter this at some stage in life. Fortunately, there are straightforward strategies to ease the burden. Small changes can make a big difference. It's all about finding what works for you.</p>
                </div>
                <div className="md:shrink-0 content-center">
                    <img height="auto" width="auto" className="mx-auto h-72 w-72 rounded-2xl object-cover md:h-72 md:w-72 lg:h-96 lg:w-96" src="https://res.cloudinary.com/djjmj40t9/image/upload/f_auto,q_auto,dpr_auto/v1738956464/Hero_zwdfll.jpg" alt="Moksha" />
                </div>
            </div>
        </div>
</div>
    )
}
export default Hero