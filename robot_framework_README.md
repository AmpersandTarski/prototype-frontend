# Robot Framework Installation Guide

Welcome to the installation guide for the Robot Framework tests, I have made an installation guide to get everything up and running in no-time. 
Before even cloning the [test repository](https://github.com/Sharvin1/Ampersand_test) it is important that you install the following: 

1. Install the latest version of Python, you can do this by going to the [website](https://www.python.org/) and download Python for your OS. PIP should be installed too, you can check if this happened by typing `pip3 --version` into your terminal.
2.  Open the terminal and install homebrew, because we are going to use this later on to install the chromedriver.  `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
3. Install Robot Framework 
   `pip3 install robotframework`
   `pip3 install robotframework-seleniumlibrary`
4. We need to install the chromedriver that is used in the Robot Framework 
   `brew install chromedriver`
5. Install PyCharm from from the [JetBrains website](https://www.jetbrains.com/pycharm/promo/?source=google&medium=cpc&campaign=14124132615&term=pycharm&content=536947779960&gclid=Cj0KCQjww4-hBhCtARIsAC9gR3Y4uQi0y8oJvTAD4ytimtU2lmA1IInXwF_kMTDSC4TM2VkmvPtTshoaApFWEALw_wcB) and make sure you add the Hyper RobotFramework Support to the plugins. 
6. Now you can clone the repository and open the project with PyCharm. When you have opened the project it isn't going to recognize the Selenium Library because there is no interpeter set yet. Go to `interpeter settings` > `Add interpeter` > `Local interpeter` > `System interpeter` and then choose the python version your robotframework and selenium library are installed on (this is probably Python3). 

Now everything is up and running like it should!
