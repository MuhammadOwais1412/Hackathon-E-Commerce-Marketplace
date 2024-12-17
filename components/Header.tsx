import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <div>
            {/* div 1 */}
            <div className="w-full flex items-center justify-center py-[38px]">

                {/* Centered Navigation */}
                <div className="flex justify-end items-center w-[65%]">
                    <nav>
                        <ul className="flex gap-[75px] font-medium">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/shop">Shop</Link></li>
                            <li><Link href="/">About</Link></li>
                            <li><Link href="/">Contact</Link></li>
                        </ul>
                    </nav>
                </div>

                {/* Right-aligned Icons */}
                <div className="flex w-[35%] justify-end items-center gap-[45px] pr-16">
                    <Image src="/icons/icon-1.svg" alt="icon" width={28} height={28} />
                    <Image src="/icons/icon-2.svg" alt="icon" width={28} height={28} />
                    <Image src="/icons/icon-3.svg" alt="icon" width={28} height={28} />
                    <Image src="/icons/icon-4.svg" alt="icon" width={28} height={28} />
                </div>
            </div>

            {/* div 2 */}
            <div></div>
        </div>
    )
}

export default Header
