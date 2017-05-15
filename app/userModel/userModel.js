import Cookies from 'js-cookie';

class User {
  constructor() {
    this.userDetails = Cookies.get('newshub') === undefined ? undefined : JSON.parse(Cookies.get('newshub'));
    this.isLogin = this.isLoggedIn();
    this.name = '';
    this.imageUrl = '';
    this.email = '';
    this.assignUserValues();
  }
  login(response) {
    const user = response.w3;
    Cookies.set('newshub', {
      name: user.ig,
      email: user.U3,
      imageUrl: user.Paa,
    });
  }
  isLoggedIn() {
    return !(this.userDetails === undefined);
  }
  assignUserValues() {
    if (this.isLogin) {
      this.name = this.userDetails.name;
      this.email = this.userDetails.email;
      this.imageUrl = this.userDetails.imageUrl;
    }
  }
  logOut() {
    this.isLogin = false;
    Cookies.remove('newshub');
  }
}
const user = new User();
export default user;
