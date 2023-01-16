# Development Guides

* [  ] User Authentication
  * [  ] Create new user with email and password from terminal
  * [  ] Generate unique ID
  * [  ] Save generated unique ID to system with obfuscation
  * [  ] Sign user in with email and password and save unique ID to system with obfuscation
* [  ] Create Commands
  * [  ] Create `task init` command
    * [  ] Check if **package.json** exists in current directory
      * if no, ask whether to create one with `npm init`
    * [  ] Prompt user for config info
      * [  ] What is the name of the project?
        * default to **package.json** name else to current directory name
      * [  ] Create new branch per task?
        * default to **No**
      * [  ] Github repository clone URL?
        * default to empty string
    * [  ] Create **package.json** if user permits
    * [  ] Initialize git repository
    * [  ] Set repository remote origin to Github repository url
    * [  ] Create **task.json** with config properties

  * Create `task create` command
