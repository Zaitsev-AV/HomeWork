import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return [ ...state.sort((a,b) => {
                
                // return action.payload === "up" ? a.name > b.name ?  1 : action.payload === "down" ? a.name < b.name ? 1 : -1
                let value = 0
                if ( action.payload === "up" ) {
                    return value = a.name > b.name ?  1 : -1
                }
                if ( action.payload === "down" ) {
                    return value = a.name < b.name ? -1 : 1
                }
                return value
            })]
        }
        case 'check': {

            return state.filter(s => s.age >= 18)
        }
        default:
            return state
    }
}
