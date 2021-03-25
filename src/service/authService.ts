import fakeAuth from "fake-auth";
import {initAuthentication, setAuthError} from "../store/reducers/auth";
import store from "../store/store";
import {setModal} from "../store/reducers/modal";

export interface IAuthService {
  signIn(email: string, password: string): Promise<ResponseObject>;
  signOut(): Promise<void>;
}

type User = {
  email: string;
};

type ResponseObject = {
  isAuthenticated: boolean;
  user: User;
};

class AuthService implements IAuthService {

  public async signIn(
    email: string,
    password: string
  ): Promise<any> {
    fakeAuth
      .signin(email, password)
      .then((response: any) => {
        console.log('auth', response);
        store.dispatch(initAuthentication({
          isAuthenticated: true,
          email: response.user.email,
        }));
        store.dispatch(setModal());
      })
      .catch((error: any) => {
        let errorMessage =
            error && error.message
                ? error.message
                : "Something went wrong. Please try again later";
        store.dispatch(setAuthError({ error: errorMessage }));
      });
  }

  public async signOut(){
    fakeAuth
      .signout()
      .then(() => {
        store.dispatch(initAuthentication({
          isAuthenticated: false,
          email: null,
        }));
      })
      .catch((error: any) => {
        let errorMessage =
            error && error.message
                ? error.message
                : "Something went wrong. Please try again later";
        store.dispatch(setAuthError({ error: errorMessage }));
      });
  }

}
const authService: IAuthService = new AuthService();

export default authService;
