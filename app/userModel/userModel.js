import Cookies from 'js-cookie';

/**
 * handles user authentication
 * @class User
 */
class User {
  /**
   * Creates an instance of User
   * @memberof Newsfeed
   */
  constructor() {
    this.isLogin = this.userDetails();
  }
  /**
   * handles user login
   * @memberof User
   * @param {object} response from google login
   * @return {null} returns nothing
   */
  login(response) {
    const user = response.w3;
    Cookies.set('newshub', {
      name: user.ig,
      email: user.U3,
      imageUrl: user.Paa,
    });
    this.isLogin = true;
    this.userDetails();
  }
  /**
   * checks if the user is logged in
   * @memberof User
   * @return {null} returns nothing
   */
  isLoggedIn() {
    return !(this.userDetails === undefined);
  }
  /**
   * assigns the user details gotten from google
   * @memberof User
   * @return {null} returns nothing
   */
  assignUserValues() {
    if (this.isLogin) {
      this.name = this.userDetails.name;
      this.email = this.userDetails.email;
      this.imageUrl = this.userDetails.imageUrl;
    }
  }
  /**
   * handles user logout
   * @memberof User
   * @return {null} returns nothing
   */
  logOut() {
    this.isLogin = false;
    Cookies.remove('newshub');
  }

  /**
   * assigns User values
   * @returns {boolean}  true or false
   * @memberof User
   */
  userDetails() {
    if (Cookies.get('newshub')) {
      const Details = JSON.parse(Cookies.get('newshub'));
      this.name = Details.name;
      this.email = Details.email;
      this.imageUrl = Details.imageUrl;
      return true;
    }
    return false;
  }
}
const user = new User();
export default user;
