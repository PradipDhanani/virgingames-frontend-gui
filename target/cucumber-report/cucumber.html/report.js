$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/virgingames/resources/featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality",
  "description": "As A User\r\nI Want to login to virgin games website\r\nSo I can Login to website",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Verify User should not login successfully with incorrect credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-successfully-with-incorrect-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Login page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter \"\u003cusername\u003e\" in username field",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter \"\u003cpassword\u003e\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should not login to system successfully and shows \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-successfully-with-incorrect-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errorMessage"
      ],
      "line": 15,
      "id": "login-functionality;verify-user-should-not-login-successfully-with-incorrect-credentials;;1"
    },
    {
      "cells": [
        "bhavesh",
        "patel234@",
        "Please try again, your username/email or password has not been recognised"
      ],
      "line": 16,
      "id": "login-functionality;verify-user-should-not-login-successfully-with-incorrect-credentials;;2"
    },
    {
      "cells": [
        "chaitu",
        "mehta1234@",
        "Please try again, your username/email or password has not been recognised"
      ],
      "line": 17,
      "id": "login-functionality;verify-user-should-not-login-successfully-with-incorrect-credentials;;3"
    },
    {
      "cells": [
        "srinivas",
        "patnaikl234@",
        "Please try again, your username/email or password has not been recognised"
      ],
      "line": 18,
      "id": "login-functionality;verify-user-should-not-login-successfully-with-incorrect-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 15726139800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify User should not login successfully with incorrect credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-successfully-with-incorrect-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Login page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter \"bhavesh\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter \"patel234@\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should not login to system successfully and shows \"Please try again, your username/email or password has not been recognised\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 184734700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginPage()"
});
formatter.result({
  "duration": 31089726700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bhavesh",
      "offset": 9
    }
  ],
  "location": "LoginSteps.iEnterInUsernameField(String)"
});
formatter.result({
  "duration": 178485700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patel234@",
      "offset": 9
    }
  ],
  "location": "LoginSteps.iEnterInPasswordField(String)"
});
formatter.result({
  "duration": 149118200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 320479200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please try again, your username/email or password has not been recognised",
      "offset": 53
    }
  ],
  "location": "LoginSteps.iShouldNotLoginToSystemSuccessfullyAndShows(String)"
});
formatter.result({
  "duration": 471723000,
  "status": "passed"
});
formatter.after({
  "duration": 145300,
  "status": "passed"
});
formatter.before({
  "duration": 13904411300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify User should not login successfully with incorrect credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-successfully-with-incorrect-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Login page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter \"chaitu\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter \"mehta1234@\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should not login to system successfully and shows \"Please try again, your username/email or password has not been recognised\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 34400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginPage()"
});
formatter.result({
  "duration": 35259121500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chaitu",
      "offset": 9
    }
  ],
  "location": "LoginSteps.iEnterInUsernameField(String)"
});
formatter.result({
  "duration": 196736100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mehta1234@",
      "offset": 9
    }
  ],
  "location": "LoginSteps.iEnterInPasswordField(String)"
});
formatter.result({
  "duration": 181165500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 330780900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please try again, your username/email or password has not been recognised",
      "offset": 53
    }
  ],
  "location": "LoginSteps.iShouldNotLoginToSystemSuccessfullyAndShows(String)"
});
formatter.result({
  "duration": 346298200,
  "status": "passed"
});
formatter.after({
  "duration": 38100,
  "status": "passed"
});
formatter.before({
  "duration": 16859659800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify User should not login successfully with incorrect credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-successfully-with-incorrect-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Login page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter \"srinivas\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter \"patnaikl234@\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should not login to system successfully and shows \"Please try again, your username/email or password has not been recognised\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 42800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginPage()"
});
formatter.result({
  "duration": 36449845000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "srinivas",
      "offset": 9
    }
  ],
  "location": "LoginSteps.iEnterInUsernameField(String)"
});
formatter.result({
  "duration": 230383200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patnaikl234@",
      "offset": 9
    }
  ],
  "location": "LoginSteps.iEnterInPasswordField(String)"
});
formatter.result({
  "duration": 213073200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 372617700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please try again, your username/email or password has not been recognised",
      "offset": 53
    }
  ],
  "location": "LoginSteps.iShouldNotLoginToSystemSuccessfullyAndShows(String)"
});
formatter.result({
  "duration": 959470900,
  "status": "passed"
});
formatter.after({
  "duration": 41100,
  "status": "passed"
});
});