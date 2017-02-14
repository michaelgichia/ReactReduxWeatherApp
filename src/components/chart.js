import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesBars } from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data)/data.length);``
}

export default (props) => {
  return ( 
    <Sparklines data={props.data} width={150} height={50}>
        <SparklinesBars
          style={props.style}
        />
    </Sparklines>
  )
}
