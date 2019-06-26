import { createStore } from 'redux'
import reducers from '../components/Menu/reducer'

const store = createStore(reducers)

export default store
