import Head from 'next/head';
import PageTitle from "../src/components/pagetitle/PageTitle";
import Radio from "../src/components/custom/radio/Radio";

export default function Home() {
  return (
    <div className='wrapper'>
      <Head>
        <title>Home page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <PageTitle title='Vardas' subTitle={'Sveikiname Jus prisijungus savo profilije'}/>

    </div>
  )
}
