import React, {Component} from 'react'
import DueSaleAnalytics from './DataChart/DueSaleAnalytics/DueSaleAnalytics';
import ExpenseAnalytics from './DataChart/ExpenseAnalytics/ExpenseAnalytics';
import ProfitAnalytics from './DataChart/ProfitAnalytics/ProfitAnalytics';
import SaleAnalyticChart from './DataChart/SaleAnalyticChart/SaleAnalyticsChart'
import HomeHeader from './HomeHeader/HomeHeader'
import axios from 'axios';
import './index.css'




class Index extends Component {
    constructor(){
      super();
      this.state = {
        sales:{},
        dueSale:{},
        expense: {},
        profit: {},
      }
    this.getProfitData = this.getProfitData.bind(this)
    }
  
    componentWillMount(){
      document.title = 'Home'  
      this.getSaleData();
      this.getDueSaleData();
      this.getExpenseData();
      this.getProfitData();

    }
  
    getSaleData(){
      axios({
        method: 'get',
        url: 'order/sales-summary/'
      })
      .then(response => {
        const response_data = response.data.data
        const [months, data] = [Object.keys(response_data), Object.values(response_data)]
        this.setState({
          sales:{
            labels: months,
            datasets:[
              {
                label:'Sold Amound',
                data: data,
                backgroundColor:[
                  'rgba(31,68,30, 0.6);',
                  'rgba(255,246,0, 0.6)',
                  'rgba(206,230,180, 0.6)',
                  'rgba(158,204,164, 0.6)',
                  'rgba(155,54,117, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(38,0,27, 0.6)',
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(129,0,52, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
                ]
              }
            ]
          }
        })
      })
      .catch(error => {
        console.log(error)
      })
    }
  
    getDueSaleData(){
      axios({
        method: 'get',
        url: 'order/due-sales-summary/'
      })
      .then(response => {
        const response_data = response.data.data
        const [months, data] = [Object.keys(response_data), Object.values(response_data)]
        this.setState({
          dueSale:{
            labels: months,
            datasets:[
              {
                label:'Due Sold Amound',
                data:data,
                backgroundColor:[
                  'rgba(31,68,30, 0.6);',
                  'rgba(255,246,0, 0.6)',
                  'rgba(206,230,180, 0.6)',
                  'rgba(158,204,164, 0.6)',
                  'rgba(155,54,117, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(38,0,27, 0.6)',
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(129,0,52, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
                ]
              }
            ]
          }
        })
      })
      .catch(error => {
        console.log(error)
      })
    }


    getExpenseData(){
      axios({
        method: 'get',
        url: 'expense/expense-summary/'
      })
      .then(response => {
        let response_data = response.data.data
        const [months, data] = [Object.keys(response_data), Object.values(response_data)]
        this.setState({
          expense:{
            labels: months,
            datasets:[
              {
                label:'Due Sold Amound',
                data: data,
                backgroundColor:[
                  'rgba(31,68,30, 0.6);',
                  'rgba(255,246,0, 0.6)',
                  'rgba(206,230,180, 0.6)',
                  'rgba(158,204,164, 0.6)',
                  'rgba(155,54,117, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(38,0,27, 0.6)',
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(129,0,52, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
                ]
              }
            ]
          }
        })
      })
      .catch(error => {
        console.log(error)
      })
    }

    getProfitData(){
      axios({
        method: 'get',
        url: 'income/profit-summary/'
      })
      .then(response => {
        let response_data = response.data.data
        const [months, data] = [Object.keys(response_data), Object.values(response_data)]
        this.setState({
          profit: {
            labels: months,
            datasets: [
              {
                label:'Due Sold Amound',
                data: data,
                backgroundColor:[
                  'rgba(31,68,30, 0.6);',
                  'rgba(255,246,0, 0.6)',
                  'rgba(206,230,180, 0.6)',
                  'rgba(158,204,164, 0.6)',
                  'rgba(155,54,117, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(38,0,27, 0.6)',
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(129,0,52, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
                ]
              }
            ]
          }
        })
      })
      .catch(error => {
        console.log(error)
      })
    }

    render() {
      return (
        <>
            <HomeHeader/>
            <div className='chart__wrapper'>
                <div className='chart__item'>
                  <SaleAnalyticChart sales={this.state.sales}/>
                </div>
                <div className='chart__item'>
                  <DueSaleAnalytics dueSale={this.state.dueSale}/>  
                </div>
            </div>
            <div className='chart__wrapper'>
                <div className='chart__item'>
                  <ProfitAnalytics profit={this.state.profit}/>  
                </div>
                <div className='chart__item'>
                  <ExpenseAnalytics expense={this.state.expense}/>
                </div>
            </div>
            
            
        </>
      )
    }
  }
  export default Index;

//   npm install --save react-chartjs-2 chart.js
// Git-hub doc  https://github.com/reactchartjs/react-chartjs-2