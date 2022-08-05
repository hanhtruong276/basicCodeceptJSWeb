Feature: E2e send message

  Scenario: Send and check message across Web and Mobile apps
    Given User1 login LX Web and company "auto_testing" by "automation_auto_31"/"Testing@123" with security code "111111"
    When User1 get the QR code from the Web app then logout
    When User2 "automation_auto_30"/"Testing@123"/"111111" login and verifies his message "testing" from User1 "automation_auto_31"