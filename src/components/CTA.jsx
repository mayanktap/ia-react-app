import { 
  CustomersHero,
  CarouselAxisFederal,
  CarouselAxisIndustry,
  CarouselAxisAcademic,
  CarouselAxisSupporting,
} from '../pages/customers/Index';
import styles from '../style';

const Customers = () => (
  <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <CustomersHero />
    <CarouselAxisFederal />
    <CarouselAxisIndustry />
    <CarouselAxisAcademic />
    <CarouselAxisSupporting />
  </section>
);

export default Customers;
