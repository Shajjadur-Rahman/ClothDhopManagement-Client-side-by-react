import * as actionType from '../Types'
import axios from 'axios'


// Fetching yearly income

export const getYearlyIncome = yearSelected => async dispatch => {
    dispatch({
        type: actionType.GET_INCOME_REQUEST
    })
    await axios({
        method: 'get',
        url: yearSelected ? `income/yearly-income/?year=${yearSelected}` : 'income/yearly-income/',
    })
    .then(response => {
        dispatch({
            type: actionType.GET_INCOME_SUCCESS,
            payload: response.data.data,
            total_profit_in_year: response.data.total_profit_in_year,
            total_expense_in_year: response.data.total_expense_in_year,
            net_profit_or_loss: response.data.net_profit_or_loss,
            year: response.data.year
        })
        console.log(response.data)
    })
    .catch(error => {
        console.log(error)
    })
}