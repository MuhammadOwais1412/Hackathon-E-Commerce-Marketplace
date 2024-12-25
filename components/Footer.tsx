
const Footer = () => {
    return (
        <div className="md:px-8">
            <div className="pt-[100px] pb-7 flex flex-col md:flex-row md:justify-around gap-10 md:gap-0">
                <div className="flex w-full md:w-[285px] items-center justify-center md:justify-start h-auto text-[#9F9F9F] text-center md:text-left">
                    <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
                </div>

                <div className="flex flex-col md:flex-row w-full md:w-[352px] justify-between text-center md:text-left">
                    <section className="flex flex-col gap-4 md:gap-10 font-medium">
                        <p className="text-[#9F9F9F] pb-6">Links</p>
                        <p>Home</p>
                        <p>Shop</p>
                        <p>About</p>
                        <p>Contact</p>
                    </section>
                    <section className="flex flex-col gap-4 md:gap-10 font-medium mt-7 md:mt-0">
                        <p className="text-[#9F9F9F] pb-6">Help</p>
                        <p>Payment Options</p>
                        <p>Returns</p>
                        <p>Privacy Policies</p>
                    </section>
                </div>

                <div className="hidden md:block w-[286px] h-[101px]">
                    <p className="text-[#9F9F9F] font-medium">Newsletter</p>
                    <div className="flex justify-between pt-14">
                        <p className="text-[#9F9F9F] w-[200px] border-b border-black">Enter Your Email Address</p>
                        <p className="font-medium border-b border-black ml-[11px]">SUBSCRIBE</p>
                    </div>
                </div>
            </div>

            <div className="py-8 pl-0 md:pl-10 border-t border-[#D9D9D9] text-center md:text-left">
                <p>2022 Meubel House. All rights reserved</p>
            </div>
        </div>

    )
}

export default Footer
