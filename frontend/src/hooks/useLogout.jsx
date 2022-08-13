import { useAuthContext } from "./useAuthContext";
// import { useInternshipsContext } from "./useWorkoutContext";

export const useLogout = () =>{

    const { dispatch } = useAuthContext();
    
    // const { dispatch : workoutDispatch } = useInternshipsContext();  //we have done dispatch: workoutDispatch because we should not use two things with the same name in same file

    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user');

        //dispatch logout action
        dispatch({ type: 'LOGOUT' })
        // workoutDispatch({ type: 'SET_Internships', payload: null});  // we are doing this to remove the Internships from the page when the user logs out
    }

    return { logout };

}