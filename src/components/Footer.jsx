import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row bg-neutral text-neutral-content  p-10">
      <div className="flex-1">
        <nav>
          <h6 className="text-xl">Cs ticket system</h6>
          <p className="max-w-xs pt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </nav>
      </div>
      <div className="flex-1 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <nav className="grid">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Sales</a>
        </nav>
        <nav className="grid">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav className="grid">
          <h6 className="footer-title">Social</h6>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">GitHub</a>
        </nav>
        <nav className="grid">
          <h6 className="footer-title">Explore</h6>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Enterprise</a>
          <a className="link link-hover">Security</a>
          <a className="link link-hover">Pricing</a>
        </nav>
        <nav className="grid">
          <h6 className="footer-title">Apps</h6>
          <a className="link link-hover">Mac</a>
          <a className="link link-hover">Windows</a>
          <a className="link link-hover">iPhone</a>
          <a className="link link-hover">Android</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
