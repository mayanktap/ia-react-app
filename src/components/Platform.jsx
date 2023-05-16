import { Tabs, TabItem } from '@aws-amplify/ui-react';
import GeoMap from './../pages/geo_map/GeoMap';
import HeatMap from './../pages/geo_map/HeatMap';

const Platform = () => (
  <Tabs>
    <TabItem title="GeoMap">
      <GeoMap />
    </TabItem>
    <TabItem title="HeatMap">
      <HeatMap />
    </TabItem>
  </Tabs>
);

export default Platform;
