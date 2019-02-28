export const fetchProject = (data) => {
    console.log('2001:',data.id);
    return {
      type: 'FETCH_DATA',
      id:data.id,
      title:data.title,
      content:data.content
    }
};

export const edit = (data) => {

    return {
        type: 'EDIT_DATA',
        title: data.title,
        content: data.content
    }
}

export const cancel = () => {
    return {
        type: 'CANCEL_EDIT'
    }
}