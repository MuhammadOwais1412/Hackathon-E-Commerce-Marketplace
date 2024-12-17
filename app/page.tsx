import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>

      {/* Section 1 */}
      <div className="bg-[#FBEBB5]">
        <Header />

        <div className="w-full flex">
          <div className="flex flex-col w-1/2 h-[900px] justify-center items-end pb-14">
            <h1 className="text-[64px] font-medium w-[440px] h-[192px]">Rocket single seater</h1>
            <Link href={"/shop"}> <span className="flex justify-start w-[440px] mt-8"><p className="border-b-2 border-black pb-3 text-2xl font-medium">Shop Now</p></span></Link>
          </div>
          <div className="w-1/2">
            <Image src={"/images/sofa.svg"} alt="single-seater-Sofa" width={883} height={1058} />
          </div>
        </div>

      </div>

      {/* Section 2 */}
      <div className="bg-[#FAF4F4] flex justify-around px-24 py-14">
        <div >
          <Image src={"/images/table-1.svg"} alt="Side Table" width={500} height={500} />

          <div className="pl-8">
            <p className="text-4xl font-medium">Side table</p>
            <p className="w-[125px] text-2xl font-medium border-b-2 border-black pb-3 mt-7">View More</p>
          </div>

        </div>

        <div>
          <Image src={"/images/table-2.svg"} alt="Side Table" width={540} height={500} />

          <div className="pl-8">
            <p className="text-4xl font-medium">Side table</p>
            <p className="w-[125px] text-2xl font-medium border-b-2 border-black pb-3 mt-7">View More</p>
          </div>

        </div>


      </div>

      {/* Section 3 */}
      <div className="w-full h-[777px]">
        <div className="text-center font-medium mt-12">
          <h3 className="text-4xl">Top Picks For You</h3>
          <p className="text-[#9F9F9F] mt-4">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
        </div>

        <div className="flex justify-evenly mt-16">
          <div>
            <Image src={"/images/img-1.svg"} alt="Sofa" width={750} height={384.46} className="object-cover w-full h-full" />
            <div className="mt-[14px]">
              <p>Trenton modular sofa_3</p>
              <p className="font-medium text-2xl">Rs. 25,000.00</p>
            </div>

          </div>
          <div>
            <Image src={"/images/img-2.svg"} alt="Dining Table with Chairs" width={255} height={185} className="object-cover w-full h-full" />
            <div className="mt-[14px]">
              <p>Granite dining table with dining chair</p>
              <p className="font-medium text-2xl">Rs. 25,000.00</p>
            </div>
          </div>
          <div>
            <Image src={"/images/img-3.svg"} alt="Outdoor bar table and Stool" width={287} height={287} className="object-cover w-full h-full" />
            <div className="mt-[14px]">
              <p>Outdoor bar table and stool</p>
              <p className="font-medium text-2xl">Rs. 25,000.00</p>
            </div>
          </div>
          <div>
            <Image src={"/images/img-4.svg"} alt="console with mirror" width={287} height={500} className="object-cover w-full h-full" />
            <div className="mt-[14px]">
              <p>Plain console with teak mirror</p>
              <p className="font-medium text-2xl">Rs. 25,000.00</p>
            </div>
          </div>
        </div>

        <div className="w-[115px] h-[49px] mt-32 mx-auto border-b border-black text-center text-xl font-medium">
          <p>View More</p>
        </div>


      </div>

      {/* Section 4 */}

      <div className="bg-[#FFF9E5] w-full flex items-center">
        <div className="w-3/4">
          <Image src={"/images/sofa-2.svg"} alt="Sofa" width={947} height={799} />
        </div>
        <div className="w-1/4 text-center">
          <p className="text-2xl font-medium">New Arrivals</p>
          <h3 className="text-5xl font-bold">Asgaard sofa</h3>
          <button className="text-xl w-[255px] h-[64px] border border-black mt-8">Order Now</button>
        </div>
      </div>

      {/* Section 5 */}

      <div className="py-[55px] px-6">
        <div className="text-center font-medium">
          <h3 className="text-4xl">Our Blogs</h3>
          <p className="text-[#9F9F9F] mt-3">Find a bright ideal to suit your taste with our great selection</p>
        </div>

        <div className="flex justify-evenly mt-[65px]">
          <div>
            <Image src={"/images/image-1.svg"} alt="Image" width={393} height={393} />
            <div className="flex flex-col items-center mt-[33px]">
              <p className="text-xl">Going all-in with millennial design</p>
              <p className="text-2xl text-center font-medium w-[130px] h-[36px] border-b-2 border-black pb-3 mt-[10px]">Read More</p>
              <div className="flex mt-[18px]">
                <span className="flex"><Image src={"/icons/clock.svg"} alt="Clock" width={18} height={17.83} />
                  <p className="ml-[3px]">5 min</p>
                </span>
                <span className="flex ml-[19px]">
                  <Image src={"/icons/calender.svg"} alt="Calender" width={22} height={22} />
                  <p className="ml-[2px]">12th Oct 2022</p>
                </span>
              </div>
            </div>
          </div>
          <div>
            <Image src={"/images/image-2.svg"} alt="Image" width={393} height={393} />
            <div className="flex flex-col items-center mt-[33px]">
              <p className="text-xl">Going all-in with millennial design</p>
              <p className="text-2xl text-center font-medium w-[130px] h-[36px] border-b-2 border-black pb-3 mt-[10px]">Read More</p>
              <div className="flex mt-[18px]">
                <span className="flex"><Image src={"/icons/clock.svg"} alt="Clock" width={18} height={17.83} />
                  <p className="ml-[3px]">5 min</p>
                </span>
                <span className="flex ml-[19px]">
                  <Image src={"/icons/calender.svg"} alt="Calender" width={22} height={22} />
                  <p className="ml-[2px]">12th Oct 2022</p>
                </span>
              </div>
            </div>
          </div>
          <div>
            <Image src={"/images/image-3.svg"} alt="Image" width={393} height={393} />
            <div className="flex flex-col items-center mt-[33px]">
              <p className="text-xl">Going all-in with millennial design</p>
              <p className="text-2xl text-center font-medium w-[130px] h-[36px] border-b-2 border-black pb-3 mt-[10px]">Read More</p>
              <div className="flex mt-[18px]">
                <span className="flex"><Image src={"/icons/clock.svg"} alt="Clock" width={18} height={17.83} />
                  <p className="ml-[3px]">5 min</p>
                </span>
                <span className="flex ml-[19px]">
                  <Image src={"/icons/calender.svg"} alt="Calender" width={22} height={22} />
                  <p className="ml-[2px]">12th Oct 2022</p>
                </span>
              </div>
            </div>
          </div>

        </div>

        <div className="w-[126px] h-[30px] mt-32 mx-auto border-b-2 border-black text-center text-xl font-medium pb-12">
          <p>View All Post</p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full h-[450px] bg-[url('/images/banner.svg')]">

        <h1 className="text-6xl font-bold">Our Instagram</h1>
        <p className="text-xl mt-3">Follow our store on Instagram</p>
        <button className="w-[265px] h-16 mt-[18px] text-xl bg-[#FAF4F4] shadow-[0px_20px_20px_0px_#0000001A] rounded-[50px]">Follow Us</button>


      </div>
      
      <Footer />
    </div>
  );
}
