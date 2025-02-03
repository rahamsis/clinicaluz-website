import Format from '../layout/format';
import Business from '../components/business';
import Billing from '../components/billing';
import CardDeal from '../components/card_deal';
import Clients from '../components/clients';

function Home() {
  return (
    <Format>
      <Business/>
      <Billing/>
      <CardDeal/>
      <Clients/>     
    </Format>
  )
}

export default Home;
