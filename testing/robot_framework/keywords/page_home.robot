*** Settings ***
Library     SeleniumLibrary
Library     BuiltIn
Resource    ../resources/general.robot


*** Keywords ***
User navigates homepage
    Open Browser    ${URL_HOME}    ${BROWSER}
    Maximize Browser Window
