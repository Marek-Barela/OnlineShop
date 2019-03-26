import { applyMiddleware, createStore, Middleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './root-reducer';
import rootSaga from './root-saga'
import { RootState } from './root-reducer';

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

function configureStore(initialState?: RootState) {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware])
  );

  (store as any).sagaTask = sagaMiddleware.run(rootSaga);

  return store
}

export default configureStore
