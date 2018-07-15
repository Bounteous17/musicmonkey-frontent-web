export function getSessionStorage(toGet) {
    switch (toGet) {
        case 'user':{
            try {
                return sessionStorage.getItem("currentUser");
            } catch(e) {
                return false;
            }
        }
        default:
            return false;
    }
}

export function setSessionStorge(toSet, sessionObject) {
    switch (toSet) {
        case 'user': {
            sessionStorage.setItem('currentUser', JSON.stringify({sessionObject}));
            break;
        }
    }
}