import React from 'react'
import { Switch, withRouter } from 'react-router-dom'
import './Article.css'
import Home from '../../Pages/Home'
import Stock from '../../Pages/Stock/Stock'
import NotFound from '../../Pages/404-notFount/404-notFount'
import Employee from '../../Pages/Employee'
import EmployeeDetail from '../../Pages/Employee/EmployeeDetail/EmployeeDetail'
import Message from '../../Pages/Message'
import ExpensesInYear from '../../Pages/Expense/ExpensesInYear/ExpensesInYear'
import ExpensesInMonth from '../../Pages/Expense/ExpensesInMonth/ExpensesInMonth'
import TodayExpenses from './../../Pages/Expense/TodayExpenses/TodayExpenses';

import CurrentMonthSales from '../../Pages/SalesReport/CurrentMonthSales/CurrentMonthSales'

import CurrentYearSales from '../../Pages/SalesReport/CurrentYearSales/CurrentYearSales'

import PrivateRoute from '../../PrivateRoute/PrivateRoute'
import PublicRoute from '../../PublicRoute/PublicRoute'
import Register from '../../Auth/SignUp/Register';
import Login from '../../Auth/Login/Login'
import TodoTasks from '../../Pages/TodoTask/TodoTasks/TodoTasks'
import AllTasks from '../../Pages/TodoTask/TodoTasks/AllTasks'
import StockItemDetail from '../../Pages/Stock/StockItemDetail'
import ImportInvoice from '../../Pages/Stock/ImportInvoice/ImportInvoice'
import SupplierCompany from '../../Pages/Stock/SupplierCompany/SupplierCompany'
import Categories from '../../Pages/Stock/Categories/Categories'
import { Profile } from '../../Pages/Profile/Profile'
import CartView from './../../Pages/CartView/CartView';
import Clients from '../../Pages/Clients/Clients'
import InvoiceRelatedItems from '../../Pages/Stock/InvoiceRelatedItems/InvoiceRelatedItems'
import TodaySale from '../../Pages/SalesReport/TodaySale/TodaySale'
import ClientAllOrders from '../../Pages/Orders/ClientAllOrders/ClientAllOrders'
import ClientDueOrders from '../../Pages/Orders/ClientDueOrders/ClientDueOrders'
import TodayDueSales from '../../Pages/SalesReport/TodayDueSales/TodayDueSales'
import TodayDueOrderItems from '../../Pages/SalesReport/TodayDueSales/TodayDueOrderItems'
import DeactivatedProducts from '../../Pages/Stock/DeactivatedProduct/DeactivatedProducts'
import TodayCashSales from '../../Pages/SalesReport/TodayCashSales/TodayCashSales'
import TodayCashOrderItems from '../../Pages/SalesReport/TodayCashSales/TodayCashOrderItems'
import YearlyIncome from '../../Pages/Income/YearlyIncome/YearlyIncome'
import SentMail from '../../Pages/Mail/Sent/SentMail'











const Article = () => {
  return <article className="article">
    <Switch>
      <PublicRoute exact path='/login' component={Login}/>
      <PublicRoute exact path='/register' component={Register}/>


        
      <PrivateRoute exact path='/profile/:id' component={Profile}/>
      <PrivateRoute exact path='/' component={Home}/>
      <PrivateRoute exact path='/stock/:product_name/:id' component={StockItemDetail}/>
      <PrivateRoute exact path='/task-list' component={TodoTasks} />
      <PrivateRoute exact path='/all-tasks' component={AllTasks} />
      <PrivateRoute path='/messages' component={Message}/>
      <PrivateRoute exact path='/stock' component={Stock}/>
      <PrivateRoute exact path='/deactivate-products' component={DeactivatedProducts}/>
      <PrivateRoute exact path='/all-import-invoices' component={ImportInvoice}/>
      <PrivateRoute exact path='/invoice-related-all-products/:invoice_no/:invoice_id' component={InvoiceRelatedItems}/>
      <PrivateRoute exact path='/supplier-companies' component={SupplierCompany}/>
      <PrivateRoute exact path='/product-categories' component={Categories}/>
      <PrivateRoute exact path='/sales/current-year-sales' component={CurrentYearSales}/>
      <PrivateRoute exact path='/sales/:month/:year' component={CurrentMonthSales} />
      <PrivateRoute exact path='/sales/today' component={TodaySale} />
      <PrivateRoute exact path='/sales/cash-sales' component={TodayCashSales} />
      <PrivateRoute exact path="/sales/today's-due-sales" component={TodayDueSales} />
      <PrivateRoute exact path="/today's-due-sale-items/:id/:order_id" component={TodayDueOrderItems} />
      <PrivateRoute exact path="/today's-cash-sale-items/:id/:order_id" component={TodayCashOrderItems} />
      <PrivateRoute exact path='/cart-view' component={CartView} />
      <PrivateRoute exact path='/employee-list' component={Employee} />
      <PrivateRoute exact path='/employee-detail/:name/:id' component={EmployeeDetail} />
      <PrivateRoute exact path="/expenses/current-year-expenses" component={ExpensesInYear}/>
      <PrivateRoute exact path="/expenses/expenses/:month/:year" component={ExpensesInMonth}/>
      <PrivateRoute exact path="/expenses/today's expenses" component={TodayExpenses}/>
      <PrivateRoute exact path="/income/current-year-income" component={YearlyIncome}/>
      <PrivateRoute exact path="/all-clients" component={Clients}/>
      <PrivateRoute exact path="/orders/:name/:id/" component={ClientAllOrders}/>
      <PrivateRoute exact path="/due-orders/:name/:id/" component={ClientDueOrders}/>
      <PrivateRoute exact path="/mail/sent" component={SentMail}/>
      <NotFound component={NotFound} />
    </Switch>
</article>
}
        

export default withRouter(Article)