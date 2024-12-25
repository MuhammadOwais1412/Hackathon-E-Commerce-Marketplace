import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <div>
        
            <div className="w-full flex items-center justify-between py-4 px-6 md:py-[32px] md:px-[32px]">
                
                {/* Centered Navigation */}
                <div className="hidden md:flex justify-end items-center w-[65%]">
                    <nav>
                        <ul className="flex gap-[75px] font-medium">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/shop">Shop</Link></li>
                            <li><Link href="#">About</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>

                {/* Right-aligned Icons for Desktop */}
                <div className="hidden md:flex w-[35%] justify-end items-center gap-[45px] pr-16">
                    <Link href="/"><Image src="/icons/icon-1.svg" alt="icon" width={28} height={28} /></Link>
                    <Link href="/"><Image src="/icons/icon-2.svg" alt="icon" width={28} height={28} /></Link>
                    <Link href="/"><Image src="/icons/icon-3.svg" alt="icon" width={28} height={28} /></Link>
                    <Link href="/"><Image src="/icons/icon-4.svg" alt="icon" width={28} height={28} /></Link>             
                </div>

                {/* Mobile Icons Row */}
                <div className="md:hidden w-full flex justify-center items-center gap-[45px]">
                    <Link href="/"><Image src="/icons/icon-1.svg" alt="icon" width={28} height={28} /></Link>
                    <Link href="/"><Image src="/icons/icon-2.svg" alt="icon" width={28} height={28} /></Link>
                    <Link href="/"><Image src="/icons/icon-3.svg" alt="icon" width={28} height={28} /></Link>
                    <Link href="/"><Image src="/icons/icon-4.svg" alt="icon" width={28} height={28} /></Link>
                </div>
            </div>

        </div>
    )
}

export default Header;
