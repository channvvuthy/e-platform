import { createStore } from 'vuex'
import login from './login';
import register from './register';
import auth from './auth';
import story from './story';
import etalk from './etalk';

export default createStore({
  modules: {
    login,
    register,
    auth,
    story,
    etalk
  }
})
