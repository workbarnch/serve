import BusinessInfo from "../../src/components/businessInfo/BusinessInfo";
import NextButton from "../../src/components/custom/buttons/NextButton";
import InputPlace from "../../src/components/inputPlace/InputPlace";
import RegPassword from "../../src/components/registration/RegPassword";
import Registration from "../../src/components/registration/Registration";
import UserPassword from "../../src/components/registration/UserPassword";
import YourData from "../../src/components/yourData/YourData";
import ChangePass from "../../src/components/registration/ChangePass";
import LoginReg from "../../src/components/registration/LoginReg";




export default function Prisijungti() {
  return (
    <div className="wrapper">
          <UserPassword/>
       {/*<LoginReg/>*/}
       {/*<Registration />*/}
       {/*/!*<div>*!/*/}
       {/* <InputPlace title={"Jūsų įmonės duomenys"}>*/}
       {/*   <BusinessInfo />*/}
       {/* </InputPlace>*/}
       {/*</div> */}
      {/* <div>
        <InputPlace title={"Jūsų duomenys"}>
          <YourData/>
        </InputPlace>
      </div> */}

    </div>
  );
}
