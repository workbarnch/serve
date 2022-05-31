import PageTitle from "../../src/components/pagetitle/PageTitle";
import HandServe from "../../src/components/payment _methods/HandServe";


export default function ManoServe(){
    return (
        <div className='wrapper'>
            <PageTitle title="Planai ir mokėjimo būdai" />
            <div className='container'>
               <HandServe/>
            </div>
        </div>
    )
}
