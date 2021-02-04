export const getDataFromToken = (accessToken, param) => {

    if(accessToken) {
        return JSON.parse(atob(accessToken.split('.')[1]))[param];
    } else {
        
    }
    return null;
}