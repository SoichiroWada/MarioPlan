const initState = {
    id:'',
    title:'',
    content:''
  }

const contentReducer = (state = initState, action) => {
    // console.log('action in contentReducer:', action.title)
    // console.log('state.todos in reducer:', state)
    // console.log('state in reducer:', state)
    if (action.type === 'FETCH_DATA'){
        return {
            ...state,
            id:action.id,
            title:action.title,
            content:action.content
        }
    }
    else if (action.type === 'EDIT_DATA') {
        return {
            ...state,
            title:action.title,
            content:action.content
        }
    }
    else if (action.type === 'CANCEL_EDIT') {
        return state;
    }
    return state;
}
export default contentReducer
