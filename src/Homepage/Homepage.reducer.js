import { OPENED_NAVBAR, CLOSED_NAVBAR } from '../Homepage/Homepage.action'

const initialState = {
  isClicked:''
}
export default (state = initialState, action) => {
  switch (action.type) {

    case OPENED_NAVBAR:
      return Object.assign({}, state, {isClicked: action.payload})
    
    case CLOSED_NAVBAR:
      return Object.assign({}, state, {isClicked: action.payload})

    default:
      return state
  }
}