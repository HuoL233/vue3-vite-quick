import {createStore, Store} from 'vuex';
import modules from './modules';
import {IRootStateTypes} from './types/IRootStateTypes';

const store: Store<IRootStateTypes> = createStore({
    modules
});

export default store;
