import Image from "next/image";
import Link from "next/link";

export default function Logo({ logoRef }) {
  return (
    <Link href="/" className="relative z-10 flex shrink-0 items-center">
      <div className="relative h-12 w-40 overflow-hidden sm:h-14 sm:w-44">
        <Image
          ref={logoRef}
          src="/brand/logo.png"
          alt="MediMaster"
          fill
          priority
          className="object-contain object-left"
        />
      </div>
    </Link>
  );
}
