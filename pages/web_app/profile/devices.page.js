const { I, leftNavPage } = inject();

module.exports = {

    lnkDevices: { xpath: '//div[contains(@class,"Account_button") and contains(text(),"Devices")]'},
    btnLinkDevice: { xpath: '//button[contains(text(),"Link Device")]' },
    txtActivationCode: {xpath: '//div[contains(@class,"LinkDeviceModal_code-name")]'},
    btnClose: '#ic-close',
    
    async gotoProfileDevices() {
      leftNavPage.gotoProfile();
  },

    async gotoLinkDevice() {
      I.click(this.lnkDevices);
      I.click(this.btnLinkDevice);
      I.waitForText('Link Device', 5);
  },

    async getActivationCode() {
      I.waitForText('Activation code:', 30);
      let strQRCode = await I.grabTextFrom(this.txtActivationCode);
      I.click(this.btnClose);
      return strQRCode;
    }
}
