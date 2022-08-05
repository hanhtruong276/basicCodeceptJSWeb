const { I } = inject();

module.exports = {
  
    lstChatMessage: {css: 'div[class^="Chat_message-list"]'},

    searchMessageFromUser(strMsg, username) {
        let bFound = I.see(username, {xpath: "//div[contains(@class,'LeftPanel_list')]//span[contains(@data-testid,'room-name') and contains(text(),'" + username + "')]"});
        console.log(bFound);
        if (bFound) {
            I.click({xpath: '//div[contains(@class,"LeftPanel_list")]//span[contains(@data-testid,"room-name") and contains(text(),"' + username + '")]'});
            I.waitForVisible(this.lstChatMessage, 5);
            I.see(strMsg);
        }
    }
}