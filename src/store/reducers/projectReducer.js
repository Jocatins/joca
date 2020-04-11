const initState = {
    projects: [
        {id: '1', title: 'launching the first titan network', content: 'yadda'},
        {id: '2', title: 'making it available to the masses', content:'yadda'},
        {id: '3', title: 'very easy to have access to no matter where you are', content:'yadda'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action. type){
        case 'CREATE_PROJECT':
            console.log('created project');
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error');
            return state;
        default:
            return state;
        }

};

export default projectReducer;