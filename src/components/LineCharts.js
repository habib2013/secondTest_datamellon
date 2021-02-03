import React, { Component } from 'react';
import {
   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
 } from 'recharts';
 import Axios from 'axios';

class LineCharts extends Component {
   state = {
      data: []
   }

   componentDidMount() {
      
   }

   render() { 

     

   


      const variables = {"angular_test": "angular-developer",};

      const headers = {
         'Content-Type': 'application/json',
       }

     var response = Axios.post('https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub',variables,{
         headers: headers
       }).then(
        response => {
           if (response.status === 200 || response.status === 201) {
                 console.log('Data successfully fetched')
                 this.setState({data: response.data})
               //   props.history.push('/')
            
               
           }
           else {
            console.log('Faled to upload product')
           }
        }
     );
    
     console.log(this.state.data)
    
     var mdata = this.state.data;
      

      var xDats = Object.values(mdata).slice(0,100)

   var rData = xDats;

      return (  
<div>
<LineChart
        width={500}
        height={500}
        data={rData}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Row ID" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Sales" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Quantity" stroke="#82ca9d" />
      </LineChart>
</div>

      );
   }
}
 
export default LineCharts;