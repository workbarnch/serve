import Header from "../header/Header";
import Footer from "../footer/Footer";
import Request from "../request/Request";
import Prices from "../prices/Prices";


export default function Layout({ children }){
    return(
        <div>
            <Header/>
            <main>{ children }</main>
            <Footer/>
        </div>
    )
}
