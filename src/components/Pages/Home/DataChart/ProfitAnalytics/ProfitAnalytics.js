import React from 'react'
import {Line} from 'react-chartjs-2';

const ProfitAnalytics = ({profit}) => {

  return (

          <div className="chart" style={{padding: '20px'}}>
            <Line
              height={180}
              data={profit}
              options={{
                title:{
                  display:true,
                  text:'Profit Analytics in 2020',
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

export default ProfitAnalytics




// export default class ProfitAnalytics extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             profit:props.profit
//         }
//       }
    
//       static defaultProps = {
//         displayTitle:true,
//         displayLegend: true,
//         legendPosition:'bottom',
//         location:'City'
//       }
    
//       render(){
//         console.log("This is pronting from profit-component", this.state.profit)
//         return (
    
//             <div className="chart" style={{padding: '20px'}}>
//               <Line
//                 height={180}
//                 data={this.state.profit}
//                 options={{
//                   title:{
//                     display:this.props.displayTitle,
//                     text:'Profit Analytics in 2020',
//                     fontSize:25
//                   },
//                   legend:{
//                     display:this.props.displayLegend,
//                     position:this.props.legendPosition
//                   }
//                 }}
//               />
//             </div>
    
//         )
//       }
//     }
