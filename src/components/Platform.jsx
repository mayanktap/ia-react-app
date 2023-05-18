import { Tabs, TabItem } from '@aws-amplify/ui-react';
import GeoMap from './../pages/geo_map/GeoMap';
import HeatMap from './../pages/geo_map/HeatMap';
import { Auth } from 'aws-amplify';
import { useEffect } from 'react';

const Platform = () => {
  useEffect(() => {
    const geoMapBtn = document.querySelector('.js-geomap');
    geoMapBtn.addEventListener('click', function() {
      Auth.currentAuthenticatedUser({ bypassCache: false }).then((user) => {
        console.log(user);
      }).catch((err) => console.log(err));
    });
  }, []);

  return (
    <Tabs>
      <TabItem title="HeatMap">
        <HeatMap />
      </TabItem>
      <TabItem
        className='js-geomap'
        title="GeoMap">
        <GeoMap />
      </TabItem>
    </Tabs>
  );
};

export default Platform;
