import Header from "../header/Header";
import Footer from "../footer/Footer";
import Request from "../request/Request";
import BusinessInfo from "../business_info/BusinessInfo";
import Prices from "../prices/Prices";


export default function Layout({ children }){
    return(
        <div>
            <Header/>
            <main className="container">{ children }</main>
             {/* <Request/> */}
             {/* <BusinessInfo/> */}
             <Prices/>
            <Footer/>
        </div>
    )
}
