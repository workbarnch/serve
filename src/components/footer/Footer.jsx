import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <div className="logo">
                <h3>serve</h3>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Įranga</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Palaikymas</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Privatumo politika</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    )

}
