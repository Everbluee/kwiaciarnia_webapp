import { Footer } from 'flowbite-react';

const Foot = <Footer container className='static inset-x-0 bottom-0'>
  <div className="w-full text-center">
    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
        <Footer.Brand style={{ textDecoration: 'none' }}
          href="/"
          name = {<span style={{color: '#5E7A4B'}}> KWIACIARNIA Gardena </span>} />
        <Footer.LinkGroup style={{ listStyleType: 'none' }}>
          <Footer.Link href="#" style={{ textDecoration: 'none', color: 'white' }}>O Nas</Footer.Link>
          <Footer.Link href="#" style={{ textDecoration: 'none', color: 'white'  }}>Polityka Prywatności</Footer.Link>
          <Footer.Link href="#" style={{ textDecoration: 'none', color: 'white'  }}>Licencje</Footer.Link>
          <Footer.Link href="#" style={{ textDecoration: 'none', color: 'white'  }}>Kontakt</Footer.Link>
        </Footer.LinkGroup>
    </div>
    <Footer.Divider />
      <div className="w-full sm:flex sm:items-center sm:left">
        <Footer.Copyright href="#" year={2024} style={{color: 'white', textDecoration: 'none'}}/>
        <span style={{color: 'white'}}> KWIACIARNIA Gardena </span>
    </div>
  </div>
</Footer>;

export default Foot;