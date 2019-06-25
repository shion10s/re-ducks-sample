import React from 'react';
import {Provider} from 'react-redux'

import Sample from './container/sample'
import createStore from './store'


const App = () =>{
  return(
    <Provider store={createStore}>
      <Sample />
    </Provider>
  );
}

export default App;
