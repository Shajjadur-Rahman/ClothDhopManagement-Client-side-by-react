import React from 'react'
import {Line} from 'react-chartjs-2';


const DueSaleAnalytics = ({dueSale}) => {
        return (
              <div className="chart" style={{padding: '20px'}}>
            <Line
              height={180}
              data={dueSale}
              options={{
                title:{
                  display: true,
                  text:'Due Sales Analytics in 2020',
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
export default DueSaleAnalytics

// export default class DueSaleAnalytics extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             dueSale:props.dueSale
//         }
//       }
    
//       static defaultProps = {
//         displayTitle:true,
//         displayLegend: true,
//         legendPosition:'bottom',
//         location:'City'
//       }
    
//       render(){
//         return (
//               <div className="chart" style={{padding: '20px'}}>
//             <Line
//               height={180}
//               data={this.state.dueSale}
//               options={{
//                 title:{
//                   display:this.props.displayTitle,
//                   text:'Due Sales Analytics in 2020',
//                   fontSize:25
//                 },
//                 legend:{
//                   display:this.props.displayLegend,
//                   position:this.props.legendPosition
//                 }
//               }}
//             />
//           </div>
//         )
//       }
// }
