export const createProject = (project) => {
    return (dispatch, getState, {getFirestore}) => {
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;

      const timeN = Date.now().toString(32);
      const numberR = Math.random().toString(10);
      const numberT = numberR.slice(2, numberR.length);
      const numberU = Number(numberT).toString(32);
      const id = timeN + numberU;
      console.log('VVV id:',id);

      firestore.collection('projects').doc(id).set({
        ...project,
        aid: id,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
      });
  }
};

export const updateProject = (project) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    // const profile = getState().firebase.profile;
    // const authorId = getState().firebase.auth.uid;

    firestore.collection('projects').doc(project.id).update({
      title:project.title,
      content:project.content
    }).then(() => {
      dispatch({ type: 'UPDATE_PROJECT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'UPDATE_PROJECT_ERROR' }, err);
    });
}
};


export const deleteProject = (id) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    // const profile = getState().firebase.profile;
    // const authorId = getState().firebase.auth.uid;

    firestore.collection('projects').doc(id).delete()
      .then(() => {
      dispatch({ type: 'DELETE_PROJECT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'DELETE_PROJECT_ERROR' }, err);
    });
}
};