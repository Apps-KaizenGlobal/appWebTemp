import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full  py-4 bg-gray-800 text-center">
      <h1 className="text-white">All Rights Reserved Kaizen Global 2024</h1>
      <Link to="/privacy-policy" className="text-[#016A9E] underline mt-2">
        Privacy Policy
      </Link>
      <Link to="/terms-of-use" className="text-[#016A9E] underline mt-2 mx-3">
        Terms Of Use
      </Link>
    </footer>
  );
}
