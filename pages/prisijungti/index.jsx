import BusinessInfo from "../../src/components/businessInfo/BusinessInfo";
import NextButton from "../../src/components/custom/buttons/NextButton";
import InputPlace from "../../src/components/InputPlace/InputPlace";
import ChangePassword from "../../src/components/registration/ChangePassword";
import Registration from "../../src/components/registration/Registration";
import YourData from "../../src/components/yourData/YourData";

export default function Prisijungti() {
  return (
    <div className="wrapper">
      <ChangePassword/>
      {/* <Registration /> */}
      {/* <div>
        <InputPlace title={"Jūsų įmonės duomenys"}>
          <BusinessInfo />
        </InputPlace>
      </div>
      <div>
        <InputPlace title={"Jūsų duomenys"}>
          <YourData/>
        </InputPlace>
      </div> */}

    </div>
  );
}
