import React from 'react'
import {Bar} from 'react-chartjs-2';



const ExpenseAnalytics = ({expense}) => {
        return (
                <div className="chart" style={{padding: '20px'}}>
                    <Bar
                      height={180}
                      data={expense}
                      options={{
                        title:{
                          display: true,
                          text:'Expense Analytics in 2020',
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

export default ExpenseAnalytics


// export default class ExpenseAnalytics extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             expense:props.expense
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
 
//         <div className="chart" style={{padding: '20px'}}>
//             <Bar
//               height={180}
//               data={this.state.expense}
//               options={{
//                 title:{
//                   display:this.props.displayTitle,
//                   text:'Expense Analytics in 2020',
//                   fontSize:25
//                 },
//                 legend:{
//                   display:this.props.displayLegend,
//                   position:this.props.legendPosition
//                 }
//               }}
//             />
//         </div>
//         )
//       }
// }
