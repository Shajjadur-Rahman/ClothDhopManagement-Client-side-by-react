import { combineReducers } from 'redux'
import AuthReducer  from './AuthReducer';
import homeReducer from './HomeReducer'
import taskReducer from './TaskReducer'
import employeeReducer from './EmployeeReducer'
import stockReducer from './StockReducer'
import ImportInvoiceReducer from './ImportInvoiceReducer'
import CompanyReducer from './CompanyReducer'
import CategoryReducer from './CategoryReducer'
import CartReducer from './CartReducer'
import CustomerReducer from './CustomerReducer'
import YearlySales from './YearlySalesReducer'
import monthlyTotalSale from './MonthlySaleReducer'
import clientReducer from './ClientReducer'
import ClientOrder from './ClientOrderReducer'
import ClientDueOrder from './ClientDueOrderReducer'
import invoiceRelatedProduct from './InvoiceProductReducer'
import todaySales from './TodaySaleReducer'
import todayDueSales from './TodayDueSaleReducer'
import todayDueOrderItems from './TodayDueOrderItemReducer'
import deactivateProducts from  './DeactivateProductReducer'
import todayCashSales from './TodayCashSaleReducer'
import cashSaleItems from './TodayCashSaleItemReducer'
import yearlyExpense from './YearlyExpenseSummaryReducer'
import monthlyExpenses from './MonthlyExpensereducer'
import todayExpenses from './TodayExpensesReducer'
import yearlyIncome from './YearlyIncomeReducer'
import emailReducer from './EmailReducer'



export default combineReducers({
    todaySales,
    AuthReducer,
    CartReducer,
    homeReducer,
    YearlySales,
    taskReducer,
    ClientOrder,
    emailReducer,
    yearlyIncome,
    stockReducer,
    yearlyExpense,
    todayDueSales,
    clientReducer,
    cashSaleItems,
    todayExpenses,
    todayCashSales,
    ClientDueOrder,
    CompanyReducer,
    CategoryReducer,
    CustomerReducer,
    employeeReducer,
    monthlyExpenses,
    monthlyTotalSale,
    deactivateProducts,
    todayDueOrderItems,
    ImportInvoiceReducer,
    invoiceRelatedProduct,
})