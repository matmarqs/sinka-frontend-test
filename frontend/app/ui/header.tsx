import Image from 'next/image';
import Link from 'next/link';

export default async function Header() {
  return (
    <div className="w-full p-4 flex justify-between items-center bg-black">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Company logo"
          height={34}
          width={137}
        />
      </Link>
      <Link href="/" className="p-3">
        <span className="text-[#82c65b] font-semibold text-xl">
          Home
        </span>
      </Link>
    </div>
  );
}
