import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  page: string;
}

const Hero = ({page} : HeroProps) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full h-[316px] bg-[url('/images/hero.svg')] bg-no-repeat bg-cover">
        
          <Image src={"/icons/Logo.svg"} alt="Logo" width={77} height={77} />
          <h3 className="text-5xl font-medium">{page}</h3>
          <div className="flex mt-2 gap-1">
            <Link href={"/"}><p className="font-medium cursor-pointer">Home</p></Link>
            <Image src={"/icons/arrow.svg"} alt="Right Arrow Icon" width={20} height={20} />
            <p className="font-light">{page}</p>
          </div>
                
      </div>
    </div>
  )
}

export default Hero
