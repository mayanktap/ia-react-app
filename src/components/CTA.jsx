import { 
  CustomersHero,
  LogoGridCustomers,
  LogoGridPartners,
  LogoGridSupportingOrgs,
  LogoGridIndustryPartners,
  CarouselAxis,
} from '../pages/customers/Index';
import styles from '../style';

const Customers = () => (
  <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <CustomersHero />
    <LogoGridCustomers />
    <LogoGridIndustryPartners />
    <LogoGridPartners />
    <LogoGridSupportingOrgs />
    <CarouselAxis />
  </section>
);

export default Customers;
