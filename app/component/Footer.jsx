import Link from "next/link";

const Footer = () => {
    return (
      <footer className="  ">
        
        <div className="text-center text-sm  bg-[#F3F6F8]">
        <div className="max-w-[1140px] h-full mx-auto p-2 ">
          <div className="flex lg:justify-start justify-center gap-x-4 py-8">
            <Link href="/privacy-policy">Privacy Policy</Link> 
            <Link href="/terms-and-conditions">Terms & Conditions</Link> 
            <Link href="refund-policy">Refund Policy</Link> 
            {/* <Link href="">Complaint Policy</Link>  */}
            <Link href="/contact-us">Contact Us</Link> 
          </div>
        </div>
        <div className="text-center text-sm pt-4 pb-3 bg-[#E0E6E8]">
          Copyright <span >GamesKart</span>{' '}
          {new Date().getFullYear()}
        </div>
        </div>
      </footer>
    );
  };

  export default Footer;