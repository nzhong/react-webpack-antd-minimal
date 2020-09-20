import Immutable from 'immutable';

export default function (state = Immutable.Map({
  loginUser: {},
  lovs: {},
  currLanguage: '',
  fullRefresh: '',

  na: {}
}), action) {
  switch (action.type) {
    case 'WHOAMI_FETCHED':
      state = state.set('loginUser', action.payload);
      break;
    case 'LOV_FETCHED':
      state = state.set('lovs', action.payload);
      break;
    case 'UI_LANGUAGE_SWITCHED':
      state = state.set('currLanguage', action.payload);
      break;
    case 'FULL_REFRESH':
      state = state.set('fullRefresh', new Date().getTime());
      break;
  }
  return state;
}