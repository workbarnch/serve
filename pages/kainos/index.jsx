import PageTitle from "../../src/components/pagetitle/PageTitle";
import Radio from "../../src/components/custom/radio/Radio";
import Checkbox from "../../src/components/custom/checkbox/Checkbox";
import DropDown from "../../src/components/custom/dropdown/DropDown";
import Prices from "../../src/components/prices/Prices";
import ChooseContract from "../../src/components/chooseContract/ChooseContract";
export default function Kainos(){
    const handleChange = (e) => {
        console.log(e.target.value)
    }
    return (
        <div className="wrapper">
            <PageTitle title="Kainos" subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. " />
            <Prices/>
            <ChooseContract/>
        </div>
    )
}
