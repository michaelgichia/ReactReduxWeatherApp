import React from 'react';
import {TableRowColumn} from 'material-ui/Table';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

export default (props) => {
  return (
    <TableRowColumn>
      <GoogleMapLoader
        containerElement={ <div style={{height: '100%', margin: '20px 0 !important'}} /> }
        googleMapElement={
          <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
        }
        />
    </TableRowColumn>
  );
}


