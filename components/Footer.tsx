
const Footer = () => {
    return (
        <div className="px-8">
            <div className="pt-[100px] pb-7 flex justify-around">
                <div className="flex w-[285px] items-center h-[312px] text-[#9F9F9F]"><p>400 University Drive Suite 200 Coral Gables,
                    FL 33134 USA</p>
                </div>
                <div className="flex w-[352px] justify-between">
                    <section className="flex flex-col gap-10 font-medium">
                        <p className="text-[#9F9F9F] pb-6">Links</p>
                        <p>Home</p>
                        <p>Shop</p>
                        <p>About</p>
                        <p>Contact</p>
                    </section>
                    <section  className="flex flex-col gap-10 font-medium">
                        <p className="text-[#9F9F9F] pb-6">Help</p>
                        <p>Payment Options</p>
                        <p>Returns</p>
                        <p>Privacy Policies</p>
                    </section>
                </div>
                <div className="w-[286px] h-[101px]">
                    <p className="text-[#9F9F9F] font-medium">Newsletter</p>
                    <div className="flex justify-between pt-14">
                        <p className="text-[#9F9F9F] w-[200px] border-b border-black">Enter Your Email Address</p>
                        <p className="font-medium border-b border-black ml-[11px]">SUBSCRIBE</p>
                    </div>
                </div>
            </div>


            <div className="py-8 pl-10 border-t border-[#D9D9D9]">
                <p>2022 Meubel House. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
