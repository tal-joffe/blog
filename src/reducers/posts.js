/**
 * Created by Tal on 7/16/17.
 */

const postLink = (state, action) => {
    switch (action.type) {
        case 'SHOW_THIS_POST_IN_CONTENT':
            if (state.id === action.id) {
                return {
                    ...state,
                    content: action.content,
                    show: true
                }
            }
            else {
                return {
                    ...state,
                    show: false
                }
            }
        default:
            return state;
    }
}

export function postLinks(state = [], action) {
    switch (action.type) {
        case 'SHOW_THIS_POST_IN_CONTENT':
            return state.map(t =>
                postLink(t, action)
            );
        default:
            return state;
    }
}
export function postFetchHasErrored(state = false, action) {
    switch (action.type) {
        case 'POST_FETCH_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}

export function postIsLoading(state = false, action) {
    switch (action.type) {
        case 'POST_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}