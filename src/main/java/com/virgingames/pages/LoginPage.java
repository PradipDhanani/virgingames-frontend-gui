package com.virgingames.pages;

import com.cucumber.listener.Reporter;
import com.virgingames.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

/**
 * Created by Pradip
 */
public class LoginPage extends Utility {
    /**
     * Logger defined to print logs
     */
    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    /**
     * stored elements locator
     */

    @FindBy(id = "field-username")
    WebElement _userName;
    @FindBy(id = "field-password")
    WebElement _password;
    @FindBy(xpath = "//span[contains(text(),'Login')]")
    WebElement _loginButton;
    @FindBy(xpath = "//div[@class='output']")
    WebElement _errorMessage;

    /**
     * Below Methods to do actions on elements
     */

    public void enterUserName(String username) {
        Reporter.addStepLog("Enter username" + username + "On username field" + _userName.toString() + "<br>");
        sendTextToElement(_userName, username);
        log.info("Enter username" + username + "On username field" + _userName.toString());

    }

    public void enterPassword(String password) {
        Reporter.addStepLog("Enter password" + password + "On password field" + _password.toString() + "<br>");
        sendTextToElement(_password, password);
        log.info("Enter password " + password + "On password field " + _password.toString());
    }

    public void clickOnLoginFeature() {
        Reporter.addStepLog("Clicking on login button" + _loginButton.toString() + "<br>");
        clickOnElement(_loginButton);
        log.info("Clicking on login button" + _loginButton.toString());
    }

    public String ErrorMessage() {
        Reporter.addStepLog("Getting error message" + _errorMessage.toString() + "<br>");
        log.info("Getting error message" + _errorMessage.toString());
        return getTextFromElement(_errorMessage);
    }


}
