/**
 * Created by Tal on 7/13/17.
 */
import config from '../config'
import marked from "marked"

export const showPostInContent = (id,content) => {
    return {
        type: 'SHOW_THIS_POST_IN_CONTENT',
        content,
        id
    }
}
export function PostFetchHasErrored(bool) {
    return {
        type: 'POST_FETCH_HAS_ERRORED',
        hasErrored: bool
    };
}

export function postIsLoading(bool) {
    return {
        type: 'POST_IS_LOADING',
        isLoading: bool
    };
}


export const fetchAndDisplayPostInContent = (id,driveID) => {
    return (dispatch) => {
        const url = 'https://www.googleapis.com/drive/v3/files/' + driveID + '?alt=media&key=' + config.googleDriveApiKey
        var setOptions = {
            method: 'GET',
        }
        dispatch(postIsLoading(true))
        fetch(url, setOptions)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(postIsLoading(false));
                return response;
            })
            .then(response => response.text())
            .then(text => {
                dispatch(showPostInContent(id,marked(text)))
            })
            .catch(err => {
                dispatch(PostFetchHasErrored(true))
            })
    }
    //todo: add error handling
}