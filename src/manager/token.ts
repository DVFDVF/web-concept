import conn from './conn';
import { TOKEN_KEY, FRESH_TOKEN_KEY } from './const';
class TokenController {
  token: string | null;
  freshToken: string | null;
  constructor() {
    this.token = localStorage.getItem(TOKEN_KEY);
    this.freshToken = localStorage.getItem(FRESH_TOKEN_KEY);
  }
  updateToken(value: string) {
    if (this.token === value) {
      return;
    }
    localStorage.setItem(TOKEN_KEY, value);
    this.token = value;
    // 有用户信息就连接，没有token信息就关闭
    if (value) {
      conn.connect(value);
    } else {
      conn.close();
    }
  }
  updateFreshToken(value: string) {
    if (this.freshToken !== value) {
      localStorage.setItem(FRESH_TOKEN_KEY, value);
      this.freshToken = value;
    }
  }
  update(token: string, freshToken: string) {
    this.updateToken(token);
    if (this.freshToken !== freshToken) {
      localStorage.setItem(FRESH_TOKEN_KEY, freshToken);
      this.freshToken = freshToken;
    }
  }
}

export const tokenController = new TokenController();
