const initState = {
    isLoading: false,
}
export type StateType = {
    isLoading: boolean
}

export const loadingReducer = (state: StateType = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case "CHANGE_LOADING": {
            debugger
            return { ...state, isLoading: action.isLoading }
        }
        default:
            return state
    }
}
type ActionType = ReturnType<typeof loadingAC>

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
