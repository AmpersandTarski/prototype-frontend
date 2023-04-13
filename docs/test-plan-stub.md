This document acts as an informal list of things that can be tested on each page of the application. The only pre-requisite is to [have the application running](README.md). If any other setup is needed, it will say in that specific bulletpoint.

### Home:

- Sidebar shows main menu (fetched)
- Topbar shows roles menu
- Roles in roles menu can be toggled
- Menu items are fetched from API (to test: start with a fresh session, with the network tab (F12) open. Two requests named 'navbar' should appear, and after completion, menu items should have appeared in the sidebar).
- Menu items are cached in session storage (to test: load the main menu at least once. Then, with the network tab (F12) open, refresh the page. There should be no requests named 'navbar')

### Tools:

- _This page can be used to test each individual atomic component, but is to be removed after testing_

### Installer:

- Reinstall options work (to test: make changes to data (on other pages), run one of the operations, and see if the data changed as expected?)
- Update messages are displayed

### Utils:

- ?
- Update messages are displayed

### Population:

- Export exports current population set to a json file
- Export metamodel exports current population set as metamodel to json file.
- Import redirects user to dedicated page with a file upload tile. On this new page:
  - Clicking the upload area allows the user to select one or more files
  - Drag and drop works for one or more files
  - Uploading a valid population file prompts success message
  - Uploading an invalid population file prompts error message
  - Uploading multiple valid population files prompts success messages
  - Uploading multiple files, of which one or more invalid, prompts error messages
  - Files are not uploaded until the upload button is pressed
  - Files in queue can be removed by clicking the X button, visible when hovering the element

### Report:

- ?

### Inactive Projects:

- Shown projects are not active
- CRUD Rights are in accordance to roles (Play with active roles)
- Fields and their contents are displayed correctly
- Clicking the project's name navigates to the corresponding Project page
- Clicking the arrow next to the project name shows a menu with project and edit-project
- Clicking the 'projectleider' Person navigates to the corresponding Person page

### People:

- List is complete, i.e. all people are shown
- New Person button adds a new person
- CRUD Rights are in accordance to roles (Play with active roles)
- Clicking on a person's name shows the corresponding Person page
- Clicking on a Project assigned to a person navigates to the corresponding Project page

### My Projects:

- _currently does not lead anywhere_

### List all interfaces:

- Lists is complete, i.e. all interfaces that exist are shown
- Clicking an interface name navigates to the edit-interface of the corresponding interface

### Edit navigation menu:

- _currently does not lead anywhere_

### Active projects:

- Shown projects are active
- CRUD Rights are in accordance to roles (Play with active roles)
- Fields and their contents are displayed correctly
- Clicking the project's name navigates to the corresponding Project page
- Clicking the arrow next to the project name shows a menu with project and edit-project
- Clicking the 'projectleider' Person navigates to the corresponding Person page
