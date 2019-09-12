import Vue from "vue";
import Vuex, {StoreOptions} from "vuex";

import {RootState} from "./root-state.interface";
import {userModule} from "./modules/user/user.module";
import {loginModule} from "./modules/login/login.module";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0"
  },
  modules: {
    user: userModule,
    login: loginModule,
  }
};

export default new Vuex.Store<RootState>(store);
