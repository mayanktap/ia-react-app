import styles from '../style';
import { 
  SalesForm,
  Testimonial,
  SalesHero,
  TestimonialFAA,
} from '../pages/sales/Index';

const Billing = () => (
  <section className={`${styles.paddingY}`}>
    <div>
      <div>
        <SalesHero />
        <SalesForm />
      </div>
      <div className="w-full lg:w-auto">
        <div className="flex flex-col justify-center items-center">
          <Testimonial />
          <TestimonialFAA />
        </div>
      </div>
    </div>
  </section>
);

export default Billing;
