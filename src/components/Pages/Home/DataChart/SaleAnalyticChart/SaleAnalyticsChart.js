import React from 'react';
import './SaleAnalytics.css'
import {Bar} from 'react-chartjs-2';

const SaleAnalyticChart = ({sales}) => {
    return (

        <div className="chart" style={{padding: '20px'}}>
          <Bar
            height={180}
            data={sales}
            options={{
              title:{
                display: true,
                text:'Sales Analytics in 2020',
                fontSize:25
              },
              legend:{
                display: true,
                position: 'bottom'
              }
            }}
          />
        </div>

    )
}
export default SaleAnalyticChart


// class SaleAnalyticChart extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       chartData:props.chartData
//     }
//   }

//   static defaultProps = {
//     displayTitle:true,
//     displayLegend: true,
//     legendPosition:'bottom',
//     location:'City'
//   }

//   render(){
//     return (

//         <div className="chart" style={{padding: '20px'}}>
//           <Bar
//             height={180}
//             data={this.state.chartData}
//             options={{
//               title:{
//                 display:this.props.displayTitle,
//                 text:'Sales Analytics in 2020',
//                 fontSize:25
//               },
//               legend:{
//                 display:this.props.displayLegend,
//                 position:this.props.legendPosition
//               }
//             }}
//           />
//         </div>

//     )
//   }
// }

// export default SaleAnalyticChart;
