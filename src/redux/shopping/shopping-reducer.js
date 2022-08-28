import * as actionsTypes from 'redux/shopping/shopping-types'

const INITIAL_STATE = {
  products: [], //[id, title, descr, price, img]
  cart: [], // [id, title, descr, price, img, qty]
  current: null
}

const shopReducer = (state, action) => {
  switch (action.type) {
    case actionsTypes.ADD_TO_CART:
      return {}
    case actionsTypes.REMOVE_FROM_CART:
      return {}
    case actionsTypes.ADJUST_QTY:
      return {}
    case actionsTypes.LOAD_CURRENt_ITEM:
      return {}
    default:
      return state
  }
}
export default shopReducer