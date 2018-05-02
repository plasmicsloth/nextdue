import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';

const optionsStyle = {
  maxWidth: 255,
  marginRight: 'auto',
};

export default class DatePickerExampleToggle extends React.Component {
  constructor(props) {
    super(props);

    const minDate = new Date();
    const maxDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 1);
    minDate.setHours(0, 0, 0, 0);
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    maxDate.setHours(0, 0, 0, 0);

    this.state = {
      minDate: minDate,
      maxDate: maxDate,
      autoOk: false,
      disableYearSelection: false,
    };
  }

  handleChangeMinDate = (event, date) => {
    this.setState({
      minDate: date,
    });
  };

  handleChangeMaxDate = (event, date) => {
    this.setState({
      maxDate: date,
    });
  };

  showNext = (event, value) => {
    // show another date picker
	console.log(value);
  };

  render() {
    return (
      <Card>
		<CardTitle title="Past Fills" />

        <DatePicker
          floatingLabelText="Most Recent Fill"
          autoOk={true}
		  firstDayOfWeek={0}
          minDate={this.state.minDate}
          maxDate={this.state.maxDate}
          disableYearSelection={this.state.disableYearSelection}
		  onChange={this.showNext}
        />

	  </Card>
    );
  }
}
