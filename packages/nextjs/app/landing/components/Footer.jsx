// components/Footer.js
const Footer = () => {
  return (
    <footer className="bg-[#011B32] text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold">Products</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Product 1
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Product 2
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Company</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Resources</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
