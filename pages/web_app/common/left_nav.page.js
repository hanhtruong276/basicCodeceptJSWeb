const { I } = inject();

module.exports = {

  imgProfile: 'div a[data-testid="link-to-profile-page"]',
  imgChat: 'div[class^="NavSide_nav-side"] g[id="ic-chat"]',

  gotoProfile() {
    I.click(this.imgProfile);
    I.waitForText('Profile', 20);
  },

  gotoChat() {
    I.click(this.imgChat);
    I.waitForText('Chats', 20);
  }
}
