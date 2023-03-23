import {
  BusinessStart,
  ThumbnailSlider,
  ProductLists,
  ProductFeatures,
} from '../pages/business';

const Business = () =>  (
  <section>
    <div>
      <BusinessStart />
    </div>
    <div>
      <ThumbnailSlider />
    </div>
    <div>
      <ProductLists />
    </div>
    <div>
      <ProductFeatures />
    </div>
  </section>
);

export default Business;
