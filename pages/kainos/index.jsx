import PageTitle from "../../src/components/pagetitle/PageTitle";
import Prices from "../../src/components/prices/Prices";

export default function Kainos(){
    const handleChange = (e) => {
        console.log(e.target.value)
    }
    return (
        <div className="wrapper">
            <PageTitle title="Kainos" subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. " />
            <Prices/>
        </div>
    )
}
