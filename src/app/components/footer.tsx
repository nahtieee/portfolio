import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full text-center pb-12">
      <div className="justify-between flex gap-4 container mx-auto px-4 border-t border-gray-300 py-4">
        <p className="text-md font-semibold">
          © {new Date().getFullYear()} Ethan Dith
        </p>
        <div className="flex gap-4 items-center justify-center">
            <Link
              href="https://www.linkedin.com/in/ethandith"
              target="_blank"
              rel="noopener noreferrer"
            >
          <Image
            src="/images/linkedin.svg"
            alt="LinkedIn"
            className="h-6 w-6 inline-block footer-icons"
            width={24}
            height={24}
          />
          </Link>
          <Link
              href="mailto:ethandith@gmail.com"
            >
          <Image
            src="/images/mail.svg"
            alt="Mail"
            className="h-6 w-6 inline-block footer-icons"
            width={24}
            height={24}
          />
          </Link>
        </div>
      </div>
    </footer>
  );
}
