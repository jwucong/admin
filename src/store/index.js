import { createStore } from 'redux'
import reducers from '../components/menu/reducer'

const devTool = window.__REDUX_DEVTOOLS_EXTENSION__
const store = createStore(reducers, devTool && devTool())

export default store
