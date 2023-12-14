import Link from 'next/link'
import Image from 'next/image'

export const Logo = ({
    href = "/",
    src = "",
    alt,
    width,
    height
}: {
    href?: string,
    src?: string,
    alt?: string,
    width?: string,
    height?: string
}) => {
    return (
        <Link className='z-50' href='/'>
            <Image src={'/raichi_logo2.png'} alt={'logo'} width={180} height={80} />
        </Link>
    )
}