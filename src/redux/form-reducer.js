const SET_NAME = 'SET_FORM_NAME';
const SET_AGE = 'SET_AGE';
const ADD_CHILD = 'ADD_CHILD';
const DELETE_CHILD = 'DELETE_CHILD';
const SET_CHILD_NAME = 'SET_CHILD_NAME';
const INCREASE_NEXT_ID = 'INCREASE_NEXT_ID';
const SET_CHILD_AGE = 'SET_CHILD_AGE';
const SAVE = 'SAVE';
const SET_PAGE = 'SET_PAGE';

const initialState = {
    profile: {
        name: '',
        age: '',
        children: [],
    },
    nextId: 0,
    saved: false,
    page: 'Form',
}

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NAME:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    name: action.name
                }
            };
        case SET_AGE:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    age: action.age
                }
            };
        case ADD_CHILD:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    children: [
                        ...state.profile.children, {id: state.nextId, name: '', age: ''}
                    ]
                }
            };
        case INCREASE_NEXT_ID:
            return {
                ...state,
                nextId: ++state.nextId
            }
        case SET_CHILD_NAME:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    children: [
                        ...state.profile.children.map(child => {
                            if (child.id === action.id) {
                                return {...child, name: action.name}
                            } else
                                return child
                        })
                    ]
                }
            };
        case SET_CHILD_AGE:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    children: [
                        ...state.profile.children.map(child => {
                            if (child.id === action.id) {
                                return {...child, age: action.age}
                            } else
                                return child
                        })
                    ]
                }
            };
        case DELETE_CHILD:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    children: [
                        ...state.profile.children.filter(child => child.id !== action.id)
                    ]
                }
            };
        case SAVE:
            return {
                ...state,
                saved: action.saved
            };
        case SET_PAGE:
            return {
                ...state,
                page: action.page
            }
        default:
            return state
    }
}
export const setName = name => ({type: SET_NAME, name})
export const setAge = age => ({type: SET_AGE, age})
export const addChild = () => ({type: ADD_CHILD})
export const increaseNextId = () => ({type: INCREASE_NEXT_ID})
export const setChildName = (id, name) => ({type: SET_CHILD_NAME, id, name})
export const setChildAge = (id, age) => ({type: SET_CHILD_AGE, id, age})
export const deleteChild = id => ({type: DELETE_CHILD, id})
export const setSave = saved => ({type: SAVE, saved})
export const setPage = page => ({type: SET_PAGE, page})
export default formReducer;