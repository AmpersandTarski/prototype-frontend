*** Settings ***
Library     SeleniumLibrary
Library     BuiltIn
Resource    ../keywords/page_home.robot


*** Test Cases ***
Scenario 01: User navigates homepage
    Given User navigates homepage
