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

        <div className="w-full flex flex-col-reverse md:flex-row">
          <div className="flex flex-col w-full md:w-1/2 h-auto md:h-[900px] justify-center items-center md:items-end pb-8 md:pb-14">
            <h1 className="text-[36px] md:text-[64px] font-medium w-[90%] md:w-[440px] h-auto md:h-[192px] text-center md:text-left">Rocket single seater</h1>
            <Link href={"/shop"}>
              <span className="flex justify-center md:justify-start w-full md:w-[440px] mt-4 md:mt-8">
                <p className="border-b-2 border-black pb-2 md:pb-3 text-xl md:text-2xl font-medium">Shop Now</p>
              </span>
            </Link>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <Image src="/images/sofa.svg" alt="single-seater-Sofa" width={600} height={900} className="w-[70%] md:w-auto" />
          </div>
        </div>

      </div>

      {/* Section 2 */}
      <div className="bg-[#FAF4F4] flex flex-col md:flex-row justify-around items-center md:items-start px-6 py-8 md:px-24 md:py-14">
        <div className="w-full md:w-auto flex flex-col items-center md:items-start mx-auto">
          <Image src={"/images/table-1.svg"} alt="Side Table" width={500} height={500} />
          <div className="text-center md:text-left mt-4 md:mt-6">
            <p className="text-2xl md:text-4xl font-medium">Side table</p>
            <p className="w-[125px] text-xl md:text-2xl font-medium border-b-2 border-black pb-2 md:pb-3 mt-4 md:mt-7">View More</p>
          </div>
        </div>

        <div className="w-full md:w-auto flex flex-col items-center md:items-start mx-auto mt-8 md:mt-0">
          <Image src={"/images/table-2.svg"} alt="Side Table" width={540} height={500} />
          <div className="text-center md:text-left mt-4 md:mt-6">
            <p className="text-2xl md:text-4xl font-medium">Side table</p>
            <p className="w-[125px] text-xl md:text-2xl font-medium border-b-2 border-black pb-2 md:pb-3 mt-4 md:mt-7">View More</p>
          </div>
        </div>
      </div>



      {/* Section 3 */}
      <div className="w-full h-auto py-12">
        <div className="text-center font-medium mt-12">
          <h3 className="text-3xl md:text-4xl">Top Picks For You</h3>
          <p className="text-[#9F9F9F] mt-4 px-4 md:px-0">
            Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 px-4 md:px-0">
          <div>
            <Image src={"/images/img-1.svg"} alt="Sofa" width={750} height={384} className="object-cover w-full h-auto" />
            <div className="mt-[14px] text-center md:text-left">
              <p>Trenton modular sofa_3</p>
              <p className="font-medium text-xl md:text-2xl">Rs. 25,000.00</p>
            </div>
          </div>

          <div>
            <Image src={"/images/img-2.svg"} alt="Dining Table with Chairs" width={255} height={185} className="object-cover w-full h-auto" />
            <div className="mt-[14px] text-center md:text-left">
              <p>Granite dining table with dining chair</p>
              <p className="font-medium text-xl md:text-2xl">Rs. 25,000.00</p>
            </div>
          </div>

          <div>
            <Image src={"/images/img-3.svg"} alt="Outdoor bar table and Stool" width={287} height={287} className="object-cover w-full h-auto" />
            <div className="mt-[14px] text-center md:text-left">
              <p>Outdoor bar table and stool</p>
              <p className="font-medium text-xl md:text-2xl">Rs. 25,000.00</p>
            </div>
          </div>

          <div>
            <Image src={"/images/img-4.svg"} alt="console with mirror" width={287} height={500} className="object-cover w-full h-auto" />
            <div className="mt-[14px] text-center md:text-left">
              <p>Plain console with teak mirror</p>
              <p className="font-medium text-xl md:text-2xl">Rs. 25,000.00</p>
            </div>
          </div>
        </div>

        <div className="w-[115px] h-[49px] mt-16 mx-auto border-b border-black text-center text-xl font-medium">
          <p>View More</p>
        </div>
      </div>


      {/* Section 4 */}

      <div className="bg-[#FFF9E5] w-full flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-3/4 flex justify-center">
          <Image src={"/images/sofa-2.svg"} alt="Sofa" width={947} height={799} className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/4 text-center mt-6 md:mt-0 px-4 md:px-0">
          <p className="text-xl md:text-2xl font-medium">New Arrivals</p>
          <h3 className="text-3xl md:text-5xl font-bold mt-2">Asgaard sofa</h3>
          <button className="text-xl w-[255px] h-[64px] border border-black mt-4 md:mt-8 mb-6 md:mb-0">Order Now</button>
        </div>
      </div>


      {/* Section 5 */}

      <div className="py-[55px] px-6">
        <div className="text-center font-medium">
          <h3 className="text-4xl">Our Blogs</h3>
          <p className="text-[#9F9F9F] mt-3">Find a bright ideal to suit your taste with our great selection</p>
        </div>

        <div className="flex w-full flex-col md:flex-row items-center md:justify-evenly mt-[65px]">
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
          <div className="mt-8 md:mt-0">
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
          <div className="mt-8 md:mt-0">
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

        <div className="w-[126px] h-[30px] mt-12 md:mt-32 mx-auto border-b-2 border-black text-center text-xl font-medium pb-12">
          <p>View All Post</p>
        </div>

      </div>

      {/* Section 6 */}

      <div className="flex flex-col justify-center items-center w-full h-[450px] bg-[url('/images/banner.svg')]">

        <h1 className="text-5xl md:text-6xl font-bold">Our Instagram</h1>
        <p className="text-xl mt-3">Follow our store on Instagram</p>
        <button className="w-[265px] h-16 mt-[18px] text-xl bg-[#FAF4F4] shadow-[0px_20px_20px_0px_#0000001A] rounded-[50px]">Follow Us</button>

      </div>

      <Footer />
    </div>
  );
}
