import { 
  CustomersHero,
  LogoGridCustomers,
  LogoGridPartners,
  LogoGridSupportingOrgs,
  LogoGridIndustryPartners,
} from '../pages/customers/Index';
import styles from '../style';

const Customers = () => (
  <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <CustomersHero />
    <LogoGridCustomers />
    <LogoGridIndustryPartners />
    <LogoGridPartners />
    <LogoGridSupportingOrgs />
  </section>
);

export default Customers;
