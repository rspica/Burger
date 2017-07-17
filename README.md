# Burger
## Burger is a restaurant app that lets users input the names of burgers they'd like to eat.


This burger logger is created with MySQL, Node, Express, Handlebars and a homemade ORM (yum!), following the MVC design pattern; Node and MySQL is used to query and route data in the Burger app, and Handlebars to generate the HTML.

* Eat-Da-Burger! lets users input the style of burgers they'd like to eat, i.e Bacon double cheese.

* Whenever a user submits a burger's name, the app will display the burger name on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* the app stores every burger in a database, whether devoured or not.


#### App Setup
Require the following npm packages inside of the server.js file:
   * express
   * method-override
   * body-parser

#### DB Setup

1. Inside the `burger` directory, there is folder named `db`.

2. In the `db` folder, note the file named `schema.sql`. Write SQL queries this file that do the following:

   * Create the `burgers_db`.
   * Switch to or use the `burgers_db`.
   * Create a `burgers` table with these fields:
     * **id**: an auto incrementing int that serves as the primary key.
     * **burger_name**: a string.
     * **devoured**: a boolean.
     * **date**: a TIMESTAMP.

3. Additionally in the `db` folder, note the file `seeds.sql`. This file holdes the starter insert queries to populate the `burgers` table with at least three entries.


#### Directory structure

All the recommended files and directories from the steps above should look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── burger_style.css
│   │   └── img
│   │       └── burger.png
│   └── test.html
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```


