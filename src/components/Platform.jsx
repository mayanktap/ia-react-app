import { Tabs, TabItem } from '@aws-amplify/ui-react';
import GeoMap from './../pages/geo_map/GeoMap';
import HeatMap from './../pages/geo_map/HeatMap';
import { Auth } from 'aws-amplify';
import Modal from './../pages/modal/Modal';
import { useState, useEffect } from 'react';
import { PlatformInside } from './';

const Platform = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModalHandler = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const geoMapBtn = document.querySelector('.js-geomap');
    geoMapBtn.addEventListener('click', function() {
      Auth.currentAuthenticatedUser({ bypassCache: false }).then((user) => {
        console.log(user);
      }).catch((err) => {
        setShowModal(true);
        console.log(err);
      });
    });
  }, []);

  return (
    <div>
      <div>
        <PlatformInside />
      </div>
      { showModal && <Modal closeModalFunc={closeModalHandler} /> }
      <Tabs>
        <TabItem
          className='js-heatmap'
          title="HeatMap">
          <HeatMap />
        </TabItem>
        <TabItem
          className='js-geomap'
          title="GeoMap">
          <GeoMap />
        </TabItem>
      </Tabs>
    </div>
  );
};

export default Platform;
