/*This is the reducer responsible for manipulating the global state based on triggered actions,
such as adding or removing items from lists. */
export default (state,action) =>{
    switch(action.type){
        case "ADD_TO_WATCHLIST":
            return{
                ...state,
                watchlist: [action.payload, ...state.watchlist]
            }
        case "REMOVE_FROM_WATCHLIST":
            return{
                ...state,
                watchlist: state.watchlist.filter(item => item.id !== action.payload)
            }
        case "ADD_TO_WATCHED":
            return{
                ...state,
                watchlist: state.watchlist.filter(item => item.id !== action.payload.id),
                watched: [action.payload, ...state.watched]
            }
        case "MOVE_TO_WATCHLIST":
            return{
                ...state,
                watched:state.watched.filter(item => item.id !== action.payload.id),
                watchlist: [action.payload,...state.watchlist]
            }
        case "REMOVE_FROM_WATCHED":
            return{
                ...state,
                watched: state.watched.filter(item => item.id !== action.payload)
            }
        default:
            return state
    }
}