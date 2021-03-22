export interface IAuthService {
  signIn(email: string, password: string): Promise<ResponseObject>;
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
  ): Promise<ResponseObject> {
    return {
      isAuthenticated: true,
      user: {
        email,
      },
    };
  }
}
const authService: IAuthService = new AuthService();

export default authService;
