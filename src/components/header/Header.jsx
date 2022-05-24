import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
    const router = useRouter();
    return (
        <header>
            <div className="logo">
                <h3 className='logo'>Serve</h3>
            </div>
            <nav className='header__menu'>
                <ul>
                    <li className={router.pathname == "/kainos" ? "active" : ""}>
                        <Link href='/kainos'>
                            <a>Kainos</a>
                        </Link>
                    </li>
                    <li className={router.pathname == "/funkcijos" ? "active" : ""}>
                        <Link href='/funkcijos'>
                            <a>Funkcijos</a>
                        </Link>
                    </li>
                    <li className={router.pathname == "/funkcijos" ? "active" : ""}>
                        <Link href='/funkcijos'>
                            <a>Funkcijos</a>
                        </Link>
                    </li>
                    <li className={router.pathname == "/kontaktai" ? "active" : ""}>
                        <Link href='/kontaktai'>
                            <a>Kontaktai</a>
                        </Link>
                    </li>
                    <li className={router.pathname == "/prisijungti" ? "active" : ""}>
                        <Link href='/prisijungti'>
                            <a>Prisijungti</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
