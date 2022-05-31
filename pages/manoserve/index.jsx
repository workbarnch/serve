import PageTitle from "../../src/components/pagetitle/PageTitle";
import SmartContent from "../../src/components/navbar/SmartContent";


export default function ManoServe(){

    const data = [
        {
            text: 'Planai ir mokėjimo būdai',
            content: <div> sdasdasdsa 1</div>
        },
        {
            text: 'Sąskaitos',
            content: <div> sdasdasdsa 2</div>
        },
        {
            text: 'Sutartis',
            content: <div> sdasdasdsa 3</div>
        },
        {
            text: 'Prisijungimas',
            content: <div> sdasdasdsa 4</div>
        },
        {
            text: 'Bendri duomenys',
            content: <div> sdasdasdsa 5</div>
        }
    ]
    return (
        <div className='wrapper'>
            <PageTitle title="Planai ir mokėjimo būdai" />
            <div className='container'>
                <SmartContent data={data} />
            </div>
        </div>
    )
}
