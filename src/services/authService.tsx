export default class AuthService {
    setAuthToken(token: string) {
        localStorage.setItem('jwt', token);
    }

    getAuthToken() {
        return localStorage.getItem('jwt');
    }

    isLoggedIn() {
        return localStorage.getItem('jwt') !== undefined;
    }
}
