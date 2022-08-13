import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext();       //createcontext function makes a new context

export const workoutsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return {//we fire filter func to iterate over all tasks and decide whether we want to keep that task or delete it, true or false
                workouts: state.workouts.filter((w) => w._id !== action.payload._id)   //checking if the deleted task's ID is the same as the one requested   
    }
        default:
            return state
    }
}

export const WorkoutsContextProvider = ({ children }) => {  //children props is whatever props workoutcontextprovider is wrapping and in this case we are wrapping the whole app

    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    })

    return (
        <WorkoutsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </WorkoutsContext.Provider>
    )
}