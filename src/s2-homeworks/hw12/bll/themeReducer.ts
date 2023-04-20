const initState = {
    themeId: 1,
}

<<<<<<< HEAD

export const themeReducer = (state = initState, action: ActionType): typeof  state=> { // fix any
    switch (action.type) {
        case "SET_THEME_ID": {
            return {...state, themeId: action.id}
        }
        
=======
export const themeReducer = (state = initState, action: ActionType): typeof state => {
    switch (action.type) {
        case "SET_THEME_ID":{
            return {...state, themeId: action.id}
        }

>>>>>>> e3c2c4b (HW 12 Done.)
        default:
            return state
    }
}
<<<<<<< HEAD

type ActionType = {
    type: 'SET_THEME_ID',
    id: number
}
export const changeThemeId = (id: number): ActionType => ({ type: 'SET_THEME_ID', id })
=======
type ActionType = {
    type: 'SET_THEME_ID'
    id: number
}

export const changeThemeId = (id: number): ActionType => ({ type: 'SET_THEME_ID', id }) // fix any
>>>>>>> e3c2c4b (HW 12 Done.)
