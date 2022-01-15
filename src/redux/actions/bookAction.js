export function addToReadingList (payload) {
    return {
        type: "ADD_TO_READING_LIST",
        payload
    }
}

export function removeToReadingList(payload){
    return{
        type: "REMOVE_FROM_READING_LIST",
        payload
    }
}

export function addToFinishedBooks(payload){
    return{
        type: "ADD_TO__FINISHED_BOOKS",
        payload
    }
}