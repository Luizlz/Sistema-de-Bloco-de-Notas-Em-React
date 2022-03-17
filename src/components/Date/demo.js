import React,{ useState }  from 'react';
import MomentUtils from '@date-io/moment'
import {
    DatePicker,
    TimePicker,
    DateTimePicker,
    MuiPickersUtilsProvider,
 } from "@material-ui/pickers";
 

function DateTimePickers() {
     const [selectedDate, handleDateChange] = useState(new 
        Date());
      console.log('moment utils', MomentUtils);
      return (
         <MuiPickersUtilsProvider utils={MomentUtils} >
         
            <DateTimePicker value={selectedDate} onChange= 
          {handleDateChange} />
        </MuiPickersUtilsProvider>
      );
    }
export default DateTimePickers;