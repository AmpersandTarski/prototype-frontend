# Robot Framework Install & Run Guide

Testing [prototype-frontend](https://github.com/AmpersandTarski/prototype-frontend) is done by manual execution of a suite of Robot Framework tests on a developer desktop. This installation guide helps developers in performing this test.

## Prerequisites

It is assumed you have:
- installed Visual Studio Code on your desktop and have a working knowledge of it, and
- cloned repository [prototype-frontend](https://github.com/AmpersandTarski/prototype-frontend) to your developer desktop.

## Install Python

Robot Framework is developed in Python. Therefore you should have installed a recent version of Python on your developer desktop. Current version at time of writing is Python 3.11.3. You do not actually have to develop in Python; you only need the framework installed.

For installing, visit [Python.org](https://www.python.org/downloads/) and choose your favourite way of installing Python. Make sure Python is added to `$PATH`, so that it can be found from the commmand shell.

To check the installation, execute a command in a command shell.
```
C:\Users\fte23680>python --version
Python 3.11.3
C:\Users\fte23680>
```

## Install Robot Framework

Installing Robot Framework should be easy, using the `pip` installation manager that comes with Python.

```
C:\WINDOWS\system32>pip install robotframework
Collecting robotframework
  Using cached robotframework-6.0.2-py3-none-any.whl (658 kB)
Installing collected packages: robotframework
Successfully installed robotframework-6.0.2
```

If needed, more information can be found on the [Robot Framework](https://robotframework.org/) website and in the [Installation instructions](https://github.com/robotframework/robotframework/blob/master/INSTALL.rst).

The [Robot Framework](https://robotframework.org/) website is a usefull starting point to learn more. Note also the [User Guide](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html).

## Install SeleniumLibrary

The project uses SeleniumLibrary for its test.
This needs to be installed seperately by running the following command.

`pip install robotframework-seleniumlibrary`


## About test code in the repository

Test code can be found in [/testing/robot_framework](/testing/robot_framework).

* /testing/robot_framework
  * keywords: re-usable keywords modules for use in tests.
  * output: output files.
  * resources: test configuration and technical keywords for use in keyword modules and tests.
  * tests: the actual tests themselves.

Additionaly, the root of the repository contains
* a script `run_robot_tests.bat`. This script calls Robot Framework with some options.

## Running the test

- Open a command prompt.
- Execute `run_robot_tests.bat`

_Note: using the script ensures that output is sent to an output folder that is git-ignored and that test ouput has no extra test suite layers_
