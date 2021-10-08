import { display } from '../operation/display'
import { controller , adminId, adminPriv} from '../operation/operate'

export const ACCOUNT_LOGIN = 'ACCOUNT_LOGIN'
export const ASSET_CHARGE = 'ASSET_CHARGE'
export const SELECT_ITEM = 'SELECT_ITEM'
export const ASSET_PAYMENT = 'ASSET_PAYMENT'

export const loginAccount =  (account,passward)  => async (dispatch) => {
  const response = await display.getAccount(account)
  const accountId = response.accountId
  const assetRespone = await display.checkBalance(accountId)
  let balance = 0
  if(assetRespone.length)balance = assetRespone[0].balance
  dispatch({ type: ACCOUNT_LOGIN,accountId ,passward,balance})
}


export const chargeAsset = account => async (dispatch) => {
  await controller.addAssetQuantity(account.ID)
  await controller.transferAsset(account.ID,adminId,"localcoin#japan","10",adminPriv)
  const assetRespone = await display.checkBalance(account.ID)
  const balance = assetRespone[0].balance
  dispatch({ type: ASSET_CHARGE,balance})
}

export const selesctItem = item => dispatch => {
  dispatch({ type: SELECT_ITEM, item})
}

export const paymentAsset = (item,account) => async (dispatch) => {
  const price = String(item)
  await controller.transferAsset(adminId,account.ID,"localcoin#japan",price,account.passward)
  const assetRespone = await display.checkBalance(account.ID)
  const balance = assetRespone[0].balance
  dispatch({ type: ASSET_PAYMENT,balance,item})
}


