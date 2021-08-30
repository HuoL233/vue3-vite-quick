import { Store } from 'vuex';
import { IStateTypes } from './store/types';

declare module '@vue/runtime-core' {
    // 声明自己的 store state
    interface State extends IStateTypes {}

    // 为 `this.$store` 提供类型声明
    interface ComponentCustomProperties {
        $store: Store<State>
    }
}
