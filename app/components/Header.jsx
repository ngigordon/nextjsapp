import Link from "next/link";
const Header = () => {
    return <header className="header">
        <div className="container">
            <div className="logo">
                <Link href="/">Gordino LTD</Link>
            </div>
            <div className="links">
                <Link href='/about'>About-Us</Link>
                <Link href='/about/team'>Our Team</Link>
                <Link href='/code/repos'>Codes</Link>
            </div>
      </div>
  </header>;
};

export default Header;
