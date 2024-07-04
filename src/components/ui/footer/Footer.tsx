import { titleFont } from '@/config/fonts';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className="flex w-full justify-center text-xs mb-10">

      <Link
        href='/'
      >
        <span className={`${ titleFont.className } antialiased font-bold `}>Blabla </span>
        <span> Ya </span>
        <span>© { new Date().getFullYear() }</span>
      </Link>

      <Link
        href='/'
        className="mx-3"
      >
        Tel 664163919
      </Link>

      <Link
        href='/'
        className="mx-3"
      >
        Calle Carretas 12 Local 5 Madrid
      </Link>


    </div>
  )
}