const initState = {
  projects:[],
  notifications:[]
}


const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_PROJECT_SUCCESS':
      // console.log('action projects in reducer:',action.projects)
      // console.log('get project success');
      return {
        ...state,
        projects: action.projects,
      }
    case 'GET_PROJECT_ERROR':
      console.log('get project error');
      return state;
    case 'GET_NOTI_SUCCESS':
      console.log('get project error');
      return {
        ...state,
        notifications: action.notifications,
      }
    case 'CREATE_PROJECT_SUCCESS':
      console.log('create project success');
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error');
      return state;
    case 'UPDATE_PROJECT_SUCCESS':
      console.log('create project success');
      return state;
    case 'UPDATE_PROJECT_ERROR':
      console.log('create project error');
      return state;
    case 'DELETE_PROJECT_SUCCESS':
      console.log('delete project success');
      return state;
    case 'DELETE_PROJECT_ERROR':
      console.log('delete project error');
      return state;
    default:
      return state;
  }
};

export default projectReducer;