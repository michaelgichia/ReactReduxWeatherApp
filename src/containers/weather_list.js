import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Chart from '../components/chart';
import GoogleMap from '../components/google_maps';


class WeatherList extends Component {
  renderWeather(cityData, index) {
    const {name} = cityData.city;
    const temps = cityData.list.map(temperature => temperature.main.temp);
    const pressures = cityData.list.map(pressure => pressure.main.pressure);
    const humidities = cityData.list.map(humidity => humidity.main.humidity);
    const { lon, lat } = cityData.city.coord;
    return (
      <TableRow key={index}>
        <GoogleMap lon={lon} lat={lat} />
        <TableRowColumn>
          <Chart
            data={temps} style={{ stroke: "white", strokeWidth: "1", fill: "#F44336" }}
          />
        </TableRowColumn>
        <TableRowColumn>
          <Chart
            data={pressures}
            style={{ stroke: "white", strokeWidth: "1", fill: "blue" }}
          />
        </TableRowColumn>
        <TableRowColumn>
          <Chart
            data={humidities}
            style={{ stroke: "white", strokeWidth: "1", fill: "#546E7A" }}
          />
        </TableRowColumn>
      </TableRow>
    );
  }

  render() {
    return (
      <Table fixedHeader={true} style={{ width: '90%', margin: '0 5%' }}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn className='row-styles'>City</TableHeaderColumn>
            <TableHeaderColumn className='row-styles'>Temperature (K)</TableHeaderColumn>
            <TableHeaderColumn className='row-styles'>Pressure (hPa)</TableHeaderColumn>
            <TableHeaderColumn className='row-styles'>Humidity (%)</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false} showRowHover={true}>
          {this.props.weather.map(this.renderWeather)}
        </TableBody>
      </Table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
