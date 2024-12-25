import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Offer from "@/components/Offer"
import Image from "next/image"

const ContactPage = () => {
    return (
        <div>

            <Header />
            <Hero page="Contact" />

            <div >

                <div className="mx-auto text-center w-auto md:w-[644px] h-12 mt-10 md:mt-20">
                    <h3 className="text-2xl md:text-4xl font-semibold">Get In Touch With Us</h3>
                    <p className="text-[#9F9F9F] mt-3">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                </div>

                <div className="flex flex-col md:flex-row p-8 md:p-32 mb-6 md:mb-0">

                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center md:justify-start pt-14">

                        <div >
                            <div className="flex gap-4">
                                <Image src={"/icons/address.svg"} alt="location-icon" width={22} height={28.18} />
                                <p className="text-2xl font-medium">Address</p>
                            </div>

                            <div className="ml-9 w-[212px] h-[72px]">
                                <p >236 5th SE Avenue, New York NY10000, United States</p>
                            </div>
                        </div>


                        <div className="mt-4">
                            <div className="flex gap-2">
                                <Image src={"/icons/phone.svg"} alt="phone-icon" width={30} height={30} />
                                <p className="text-2xl font-medium">Phone</p>
                            </div>

                            <div className="ml-9 w-[212px] h-[72px]">
                                <p >Mobile: +(84) 546-6789 Hotline: +(84) 456-6789</p>
                            </div>
                        </div>


                        <div className="mt-4">
                            <div className="flex gap-4">
                                <Image src={"/icons/clock.svg"} alt="clock-icon" width={23} height={23} />
                                <p className="text-2xl font-medium">Working Time</p>
                            </div>

                            <div className="ml-9 w-[212px] h-[72px]">
                                <p >Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00</p>
                            </div>
                        </div>


                    </div>

                    <div className="w-full md:w-1/2 items-center justify-center pt-7 md:pt-14">

                        <div className="flex flex-col gap-3">
                            <label className="font-medium">Your name</label>
                            <input type="text" placeholder="Abc" name="name" className=" w-full md:max-w-[528.75px] h-[75px] text-[#9F9F9F] border border-[#9F9F9F] rounded-[10px] pl-5" />
                        </div>

                        <div className="flex flex-col gap-3 mt-9">
                            <label className="font-medium">Email address</label>
                            <input type="text" placeholder="Abc@def.com" name="email" className=" w-full md:max-w-[528.75px] h-[75px] text-[#9F9F9F] border border-[#9F9F9F] rounded-[10px] pl-5" />
                        </div>

                        <div className="flex flex-col gap-3 mt-9">
                            <label className="font-medium">Subject</label>
                            <input type="text" placeholder="This is an optional" name="subject" className=" w-full md:max-w-[528.75px] h-[75px] text-[#9F9F9F] border border-[#9F9F9F] rounded-[10px] pl-5" />
                        </div>

                        <div className="flex flex-col gap-3 mt-9">
                            <label className="font-medium">Message</label>
                            <textarea  placeholder="Hi! i’d like to ask about" name="name" className=" w-full md:max-w-[528.75px] h-[120px] text-[#9F9F9F] border border-[#9F9F9F] rounded-[10px] pl-5 pt-6" />
                        </div>

                        <button className=" w-full md:w-[237px] h-12 border border-black rounded-[15px] mt-12">Submit</button>

                    </div>
                    

                </div>

            </div>

            <Offer />
            <Footer />
        </div>
    )
}

export default ContactPage
