const { I, loginPage, leftNavPage, devicesPage, chatsPage } = inject();
let strQRCode = '';
let strCompany = '';

Given(/^User1 login LX Web and company "(.*?)" by "(.*?)"\/"(.*?)" with security code "(.*?)"$/, async (company, username1, password1, securityCode1, LoginPage) => {
  this.strCompany = company;
  await loginPage.launchLoginPage();
  loginPage.enterCompany(company);
  loginPage.enterUser(username1, password1);
  loginPage.enterSecurityCode(securityCode1);
});

When('User1 get the QR code from the Web app then logout', async () => {
  await devicesPage.gotoProfileDevices();
  await devicesPage.gotoLinkDevice();
  strQRCode = await devicesPage.getActivationCode();
  await loginPage.logout();
});

When(/^User2 "(.*?)"\/"(.*?)"\/"(.*?)" login and verifies his message "(.*?)" from User1 "(.*?)"$/, async (username2, password2, securityCode2, message, username1) => {
  await loginPage.enterCompany(this.strCompany);
  await loginPage.enterUser(username2, password2);
  await loginPage.enterSecurityCode(securityCode2);
  I.waitForText('Chats', 5);
  let bFound = await chatsPage.searchMessageFromUser(message, username1);
});