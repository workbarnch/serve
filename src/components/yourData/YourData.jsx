import style from "../../components/yourData/yourData.module.scss"
import CustomInput from "../custom/customInput/CustomInput"


export default function YourData () {
    return (
        <div className={style.inputWrap}>
        <div className={style.leftSide}>
          <CustomInput type={"text"} placeholder={"Vardas"}/>
          <CustomInput type={"text"} placeholder={"Pavardė"} />
          <CustomInput type={"text"} placeholder={"El. pašto adresas"}/>
          <CustomInput type={"text"} placeholder={"Telefono numeris"}/>
        </div>
        <div className={style.rightSide}>
          <CustomInput type={"text"} placeholder={"Šalis"}/>
          <CustomInput type={"text"} placeholder={"Miestas"}/>
          <CustomInput type={"text"} placeholder={"Gatvė"}/>
          <div className={style.inputs}>
          <CustomInput type={"text"} placeholder={"Namo nr."}/>
          <CustomInput type={"text"} placeholder={"Buto nr."}/>
          </div>
        </div>
      </div>
    )
}