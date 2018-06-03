import React from "react";
import dynamic from "next/dynamic"

import withDashboard from '../../components/withDashboard';

const CustomSkinMap = dynamic(
  import('../../components/dynamic/CustomSkinMap'),
  {
    loading: () => (<p>...</p>)
  }
);

function Maps({ ...props }) {
  return (
    <CustomSkinMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}

export default withDashboard(Maps, {isMap: true});
