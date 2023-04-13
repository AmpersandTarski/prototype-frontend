# Robot Framework Installation Guide

Testing [prototype-frontend](https://github.com/AmpersandTarski/prototype-frontend) is done by manual execution of a suite of Robot Framework tests on a developer desktop. This installation guide helps developers in performing this test.

## Prerequisites

It is assumed you have:
- installed Visual Studio Code on your desktop and have a working knowledge of it, and
- cloned repository [prototype-frontend](https://github.com/AmpersandTarski/prototype-frontend) to your developer desktop.

## Install Python

Robot Framework is developed in Python. Therefore you should have installed a recent version of Python on your developer desktop. Current version at time of writing is Python 3.11.3. You do not actually have to develop in Python; you only need the framework installed.

For installing, visit [Python.org](https://www.python.org/downloads/) and choose your favourate way of installing Python. Make sure Python is added to PATH, so that it can be found from the commmand shell.

To check the installation, execute a command in a command shell.
```
C:\Users\fte23680>python --version
Python 3.11.3
C:\Users\fte23680>
```

## Install Robot Framework

Installing the framework should be easy, using the pip installation manager that comes with Python.

```
C:\WINDOWS\system32>pip install robotframework
Collecting robotframework
  Using cached robotframework-6.0.2-py3-none-any.whl (658 kB)
Installing collected packages: robotframework
Successfully installed robotframework-6.0.2
```

If needed, more information can be found on the [Robot Framework](https://robotframework.org/) website and in the [Installation instructions](https://github.com/robotframework/robotframework/blob/master/INSTALL.rst).

---

## About test code in the repository

## Running the test

- Open a command prompt.
- Execute run_robot_tests.bat



## Old PyCharm stuff

Welcome to the installation guide for the Robot Framework tests, I have made an installation guide to get everything up and running in no-time. 
Before even cloning the [test repository](https://github.com/Sharvin1/Ampersand_test) it is important that you install the following: 

2.  Open the terminal and install homebrew, because we are going to use this later on to install the chromedriver.  `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
3. Install Robot Framework 
   `pip3 install robotframework`
   `pip3 install robotframework-seleniumlibrary`
4. We need to install the chromedriver that is used in the Robot Framework 
   `brew install chromedriver`
5. Install PyCharm from from the [JetBrains website](https://www.jetbrains.com/pycharm/promo/?source=google&medium=cpc&campaign=14124132615&term=pycharm&content=536947779960&gclid=Cj0KCQjww4-hBhCtARIsAC9gR3Y4uQi0y8oJvTAD4ytimtU2lmA1IInXwF_kMTDSC4TM2VkmvPtTshoaApFWEALw_wcB) and make sure you add the Hyper RobotFramework Support to the plugins. 
6. Now you can clone the repository and open the project with PyCharm. When you have opened the project it isn't going to recognize the Selenium Library because there is no interpeter set yet. Go to `interpeter settings` > `Add interpeter` > `Local interpeter` > `System interpeter` and then choose the python version your robotframework and selenium library are installed on (this is probably Python3). 

Now everything is up and running like it should!
