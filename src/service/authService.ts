import { initAuthentication, setAuthError } from "../store/reducers/auth";

export interface IAuthService {
  initAuth(response: any): void;
  authError(error: any): void;
  initAuthentication(response: ResponseObject): void;
  setAuthError(error: any): void;
}

type ResponseObject = {
  isAuthenticated: boolean;
  email: string;
};

class AuthService implements IAuthService {
  public initAuth(response: any) {
    this.initAuthentication(response);
  }

  public authError(error: any) {
    this.setAuthError(error);
  }
}

export default AuthService;
