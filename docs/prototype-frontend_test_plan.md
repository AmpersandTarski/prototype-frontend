# Prototype-Frontend Test Plan

## Analysis

The prototype frontend is a vehicle for developing, testing and presenting the user interface components
for the Ampersand system. The prototye consists of
* A MariaDB database
* An Ampersand specification
* An Ampersand backend generated from an Ampersand specification
* An Angular library with user interface components.
* A a set of pages generated from the Ampersand specification

## Scope

The scope of this test strategy an plan is the prototype frontend. 


### In scope 

* System test, to establish that the frontend prototype is operational.
* Integration test
* User Interface test, to test user interface components

### Out of scope

* Ampersand compiler and API
* Component unit tests
* Performance test

## Risks & Issues

| Risk                         | Probability | Impact | 
| ---                          | ---         | ---    | 
| Tester leaves team           | High        | High   | 
| Insufficient test resources  | High        | High   | 

### Tester leaves team

Team members will leave the project when they find an assignment. Worst case, the tester can only finish the current sprint.
In such case
* Test knowledge might drop or vanish
* Test resource will decrease or vanish

To mitigate this, at all times there should be at least 3 team members capable of maintaining and extending tests.

### Insufficient test resources

When refining the test plan it might turn out that the planned tests do not fit in the given timelines.
Also, when test capacity leaves the team, this may also impact the plan.

To mitigate this, tests should be provided with a priority.

## Test objective

__features to test__

## Test criteria

__later__

## Resource planning

__Kinda dependent on resources provided or taken by Ordina__


## Test environment

Tests are executed on tester machine. No shared testing environment foreseen at the moment.

## Test deliverables

### Planning

* Separate test issues, labeled Ready to Test

###

*                                                                                           
