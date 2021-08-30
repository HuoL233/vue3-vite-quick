import { Module } from 'vuex';
import {IUserStateTypes} from '../types/IUserStateTypes';
import {IRootStateTypes} from '../types/IRootStateTypes';

const UserModule: Module<IUserStateTypes, IRootStateTypes> = {
    state: {
        name: ''
    },
    mutations: {},
    actions: {},
    getters: {},
    namespaced: true
};

export default UserModule;
