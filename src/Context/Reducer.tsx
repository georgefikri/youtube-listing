import { StateAction } from "../types";

export const initialState = {
    videosList: [],
    loading: false,
};



export const reducer = (state:any, action: StateAction) => {
    switch (action.type) {
        case 'SET_VIDEOS_LIST':
            return {
                ...state,
                videosList: action.videosList,
            };
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.loading,
            };

        default:
            return state;
    }
}
