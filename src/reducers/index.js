import { 
  ACCOUNT_LOGIN,
  ASSET_CHARGE,
  SELECT_ITEM,
  ASSET_PAYMENT
} from '../actions/'

export default (state = {}, action) => {
  let date = 0
  switch (action.type) {
    case ACCOUNT_LOGIN:
      date = new Date()
      state = { account: {
        ID:action.accountId,
        passward:action.passward,
        balance:action.balance
      }
        ,transaction:[
          {
            type:"Login",
            date:date,
            balance:action.balance
          }
        ] }
      return state
    case  ASSET_CHARGE:
      date = new Date()
      state.account.balance = action.balance
      state.transaction.push({
        type:"10pt charge",
        date:date,
        balance:action.balance
      })
      return {...state}
    case SELECT_ITEM:
      return {...state,item: action.item}
    case ASSET_PAYMENT:
      date = new Date()
      state.account.balance = action.balance
      state.transaction.push({
        type:action.item + "pt paid",
        date:date,
        balance:action.balance
      })

      return {...state}
    default:
      return state
  }
}
