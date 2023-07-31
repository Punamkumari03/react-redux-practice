const redux = require('redux'); //import redux like this that is default nodejs import syntax

const counterReducer = (state = {counter: 0},action)=>{
     if(action.type == 'increment'){
        return  {
            counter: state.counter + 1
        };
     }
     if(action.type == 'decrement'){
        return  {
            counter: state.counter - 1
        };
     }

   
};
const store = redux.createStore(counterReducer);
// console.log(store.getState());

const counterSubscriber =()=>{
   const latestState = store.getState();
   console.log(latestState)
}
store.subscribe(counterSubscriber);
store.dispatch({type: 'increment' })
store.dispatch({type: 'increment' })
store.dispatch({type: 'decrement' })
