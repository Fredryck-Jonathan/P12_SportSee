import { ModelisationClass } from "../utils/ModelisationClass";

export const GET_DATA = "GET_DATA";
export const ERROR_500 = "ERROR_500";


export const getUserData = (userId) => {
    return async (dispatch) => {
        try { 
            const model = new ModelisationClass(userId);
            const data = await model.data;
            dispatch({
                type: GET_DATA, payload: data
            });
            console.log(data)
        } catch (error) {
            console.error(error)
            dispatch({
                type: ERROR_500
            })
        }
    };
};






