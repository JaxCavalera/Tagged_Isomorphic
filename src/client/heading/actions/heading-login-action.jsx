import {extendObservable} from 'mobx';
import store from '../../store.jsx';

export let registerTestMsg = () => {
    extendObservable(store, {testMsg : 1});
};
