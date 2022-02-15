export default class AuthService {
    setAuthToken(token: string) {
        localStorage.setItem('jwt', token);
    }

    getAuthToken() {
        return localStorage.getItem('jwt');
    }

    setMyId(id: string) {
        localStorage.setItem('myId', id);
    }

    getMyId() {
        return localStorage.getItem('myId');
    }

    isLoggedIn() {
        return localStorage.getItem('jwt') !== undefined;
    }

    clear() {
        localStorage.clear();
    }
}
