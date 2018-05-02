import React from 'react';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';

export default class DaysSupply extends React.Component {
  state = {
	value: 1,
  };
  
  handleTextDays = (event, value) => {
    //this.setState({firstSlider: value});
	//Slider.state.value = value
  };

  handleSelectDays = (event, index, value) => {
	  this.setState({value});
	  
  };


  render() {
    return (
	  
	  <Card>
		<CardTitle title="Current Script" />
		<SelectField
		  floatingLabelText="Days Supply"
		  autoWidth={false}
		  style={{width: '100px'}}
		  value={this.state.value}
		  onChange={this.handleSelectDays}
		>
		  <MenuItem value={1} primaryText="7" />
		  <MenuItem value={2} primaryText="14" />
		  <MenuItem value={3} primaryText="28" />
		  <MenuItem value={4} primaryText="30" />
		  <MenuItem value={5} primaryText="60" />
		  <MenuItem value={6} primaryText="90" />
		  <MenuItem value={7} primaryText="120" />
		</SelectField>
		<span> &nbsp; - OR - &nbsp; </span>
		<TextField
		  hintText="30"
		  floatingLabelText="Days Supply"
		  floatingLabelFixed={true}
		  style={{width: '100px'}}
		  onChange={this.handleTextDays}
		/>

        <DatePicker
          floatingLabelText="Scheduled Fill Date"
          autoOk={true}
		  firstDayOfWeek={0}
        />

      </Card>
    );
  }
}
