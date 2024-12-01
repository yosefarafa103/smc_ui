import Link from "next/link"
import logo from '@/assets/Logo 1.PNG'
import logo2 from '@/assets/Logo 2.PNG'

const Logo = ({ color = 'white' }: { color: string }) => {
    return (
        <Link href={`/`} className='text-[22px] font-[] font-[900]' >
            <img src={color === 'white' ? logo.src : logo2.src} loading="lazy" className="h-[50px] object-cover w-[200px]" alt="" />
            {/* MILLS <span className='text-[14px]'>Insight</span>  */}
        </Link>
    )
}
export default Logo;