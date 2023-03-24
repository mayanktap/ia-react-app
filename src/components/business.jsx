import ThumbnailSlider from './../pages/business/ThumbnailSlider';
import BusinessStart from './../pages/business/BusinessStart';
import ProductLists from './../pages/business/ProductLists';
import ProductFeatures from './../pages/business/ProductFeatures';

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
