const { I } = inject();

module.exports = {

  txtCompany: 'input[placeholder="Company"]',
  user: {
    txtUsername: 'input[placeholder="Username"]',
    txtPassword: 'input[placeholder="Password"]'
  },
  btnNext: 'span[class^="Login_button"]',
  btnLogin: 'div span[class^="Login_button"]',
  lnkLogout: { xpath: '//div[contains(@class,"Account_button") and contains(text(),"Logout")]' },
  btnLogout: {xpath: '//button[contains(text(),"Log Out")]'},
  lblSecurityCode: {xpath: '//span[contains(text(),"Security Code")]'},

  launchLoginPage() {
    I.amOnPage('/login');
  },

  enterCompany(strCompanyName) {
    I.see('Enter your company name');
    I.fillField(this.txtCompany, strCompanyName);
    I.click(this.btnNext);
  },

  enterUser(strUsername, strPassword) {
    I.fillField(this.user.txtUsername, strUsername);
    I.fillField(this.user.txtPassword, strPassword);
    I.click(this.btnLogin);
    I.waitForText('Security Code', 10, this.lblSecurityCode);
  },

  enterSecurityCode(strSecCode) {
    const arraySecCode = Array.from(strSecCode);

    I.see('Security Code');

    for(let i=1; i<7; i++) {
      I.fillField({xpath: '//*[starts-with(@class,"OTPInput_container")]/div[' + i.toString() + ']/input'}, arraySecCode[i-1]);
    }

    I.waitForText('Chats', 30);
  },

  logout() {
    I.click(this.lnkLogout);
    I.waitForElement(this.btnLogout, 10);
    I.click(this.btnLogout);
    I.waitForText('Login', 10);
  }
}
