const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p className="text-sm">&copy; 2024 PMS. All rights reserved.</p>
            <div className="flex space-x-4 text-sm">
              <a href="#privacy" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:underline">
                Terms of Service
              </a>
              <a href="#contact" className="hover:underline">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
