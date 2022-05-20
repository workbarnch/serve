import Link from "next/link";

export default  function Header (){
    return (
        <header >
            <div className="container">
                <h3 className='logo'>Serve</h3>
                <nav className='header__menu'>
                    <ul>
                        <li>
                            <Link href='/Kainos'>
                                <a>Kainos</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/Funkcijos'>
                                <a>Funkcijos</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/Funkcijos'>
                                <a>Funkcijos</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/Kontaktai'>
                                <a>Kontaktai</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/Prisijungti'>
                                <a>Prisijungti</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
