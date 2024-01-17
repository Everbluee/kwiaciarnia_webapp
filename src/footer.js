import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo from './logo_gardena.jpg';

const Foot = <Footer container>
  <div className="w-full">
    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1" >
      <div >
        <Footer.Brand
          href="/"
          src={logo}
          alt="KWIACIARNIA Gardena"
          name="KWIACIARNIA Gardena" />
      </div>
      <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
        <div>
          <Footer.Title title="about" />
          <Footer.LinkGroup col>
            <Footer.Link href="#" style={{textDecoration: 'none'}}>Kwiaciarnia</Footer.Link>
            <Footer.Link href="#" style={{textDecoration: 'none'}}>Dostawcy</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="Follow us" />
          <Footer.LinkGroup col>
            <Footer.Link href="#" style={{textDecoration: 'none'}}>Instagram</Footer.Link>
            <Footer.Link href="#" style={{textDecoration: 'none'}}>Facebook</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="Legal" />
          <Footer.LinkGroup col>
            <Footer.Link href="#" style={{textDecoration: 'none'}}>Privacy Policy</Footer.Link>
            <Footer.Link href="#" style={{textDecoration: 'none'}}>Terms &amp; Conditions</Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div>
    </div>
    <Footer.Divider />
    <div className="w-full sm:flex sm:items-center sm:justify-between">
      <Footer.Copyright href="#" by="KWIACIARNIA Gardena" year={2024} />
      <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
        <Footer.Icon href="#" icon={BsFacebook} />
        <Footer.Icon href="#" icon={BsInstagram} />
        <Footer.Icon href="#" icon={BsTwitter} />
        <Footer.Icon href="#" icon={BsGithub} />
        <Footer.Icon href="#" icon={BsDribbble} />
      </div>
    </div>
  </div>
</Footer>;

export default Foot;