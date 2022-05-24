import PageTitle from "../../src/components/pagetitle/PageTitle";
import Radio from "../../src/components/custom/radio/Radio";
import Checkbox from "../../src/components/custom/checkbox/Checkbox";
import DropDown from "../../src/components/custom/dropdown/DropDown";

export default function Kainos(){
    const handleChange = (e) => {
        console.log(e.target.value)
    }
    return (
        <div className="wrapper">
            <PageTitle title="Kainos" subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. " />
            <div className="content__navigation">
                <Radio  name={'content'} id={'content-1'} unicClass={'content__navigation-radio'} value={1} onChange={handleChange}>
                    <p>title</p>
                    <p>title</p>
                </Radio>
                <Radio  name={'content'} id={'content-2'} unicClass={'content__navigation-radio'} value={2} onChange={handleChange}>
                    <p>title</p>
                    <p>title</p>
                </Radio>
            </div>
           <Checkbox name={'checkbox'} value={1} id={'checkbox'} text={'hello world '}/>
           <Checkbox name={'checkbox'} value={1} id={'checkbox1'} text={'hello world '} color={'green'} />
            <DropDown >
                <div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque aut cupiditate delectus
                        earum eligendi, fugit id iusto molestias nam, necessitatibus neque nesciunt nihil nobis nulla
                        placeat totam veritatis, vero!
                    </div>
                    <div>Autem harum ipsam odio saepe suscipit. Ea illo iure quibusdam suscipit! Aliquam deserunt
                        dignissimos doloremque facilis, fugit labore natus nulla, obcaecati pariatur praesentium
                        reiciendis suscipit veniam voluptate? Adipisci eaque, magnam.
                    </div>
                    <div>Ad atque, consequuntur cum cumque deserunt dicta doloribus et excepturi explicabo inventore
                        magnam minima, nesciunt non nulla provident quasi quibusdam sed vel veniam, voluptates! Beatae
                        consequuntur fugiat sunt vel voluptates.
                    </div>
                    <div>Accusamus blanditiis delectus doloremque dolores, ducimus, est laudantium mollitia nam omnis
                        quibusdam quod sit totam voluptatem. Assumenda debitis dicta, earum exercitationem natus non
                        provident quis quod sed veniam! Dolor, doloribus.
                    </div>
                    <div>A alias blanditiis culpa deserunt, dolor error esse exercitationem iure minus modi
                        necessitatibus nobis, officiis perferendis, quis quod sunt vitae? Architecto aut consequuntur
                        cum dignissimos fugit mollitia nobis non, rerum!
                    </div>
                </div>
            </DropDown>
        </div>
    )
}
