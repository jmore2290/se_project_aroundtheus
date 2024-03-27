export default class UserInfo {
  constructor(profileTitle, profileDescription, profileImage) {
    this._profileTitle = profileTitle;
    this._profileDescription = profileDescription;
    this._profileImage = profileImage;
    console.log(this._profileImage);
  }

  getUserInfo() {
    const info = {};
    console.log(this._profileTitle);
    info.profileTitle = this._profileTitle.textContent;
    info.profileDescription = this._profileDescription.textContent;
    return info;
  }

  setUserInfo(data) {
    this._profileTitle.textContent = data.name;
    this._profileDescription.textContent = data.about;
  }

  setAvatar(newAvatar) {
    console.log(newAvatar);
    this._profileImage.src = newAvatar;
  }
}
