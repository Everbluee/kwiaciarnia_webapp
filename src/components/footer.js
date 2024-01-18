import { Footer } from 'flowbite-react';

const Foot = <Footer container>
  <div className="w-full text-center">
    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
        <Footer.Brand style={{ textDecoration: 'none' }}
          href="/"
          name ="KWIACIARNIA Gardena" />
        <Footer.LinkGroup style={{ listStyleType: 'none' }}>
          <Footer.Link href="#" style={{ textDecoration: 'none', color: 'grey' }}>O Nas</Footer.Link>
          <Footer.Link href="#" style={{ textDecoration: 'none', color: 'grey'  }}>Polityka Prywatności</Footer.Link>
          <Footer.Link href="#" style={{ textDecoration: 'none', color: 'grey'  }}>Licencje</Footer.Link>
          <Footer.Link href="#" style={{ textDecoration: 'none', color: 'grey'  }}>Kontakt</Footer.Link>
        </Footer.LinkGroup>
    </div>
    <Footer.Divider />
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright href="#" by="KWIACIARNIA Gardena" year={2024} />
    </div>
  </div>
</Footer>;

export default Foot;