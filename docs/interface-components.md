# Components

With the ampersand project, its possible to create a variety of input fields and ways to display those input fields or simply data.
Every component features a couple of default options in the form of attributes. These attributes are listed in het following table:

| attribute | value   | description                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| label     | string  | The desired label text.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| isUni     | boolean | If this attribute is added to the element, the element's data is **univalent**. This means that for any `a` in `A` there can be not more than one `b` in `B` in the population of `r`. This implies that every a occurs not more than once (is unique) in the source of `r`. If it is not present, it's **injective**. This means that For any `b` in `B` there can be not more than one `a` in `A` in the population of `r`. So, every b occurs not more than once in the target of `r`. |
| isTot     | boolean | If this attribute is added to the element, the element's data is total. This means that for any `a` in `A` there must be at least one `b` in `B` in the population of `r`.                                                                                                                                                                                                                                                                                                                |
| crud      | string  | The CRUD-annotation specifies `Create`, `Read`, `Update`, and `Delete` rights for the term it follows. Capital = allowed, Non-capital = not allowed. CRUD is the default, so if you specify nothing, everything is allowed.                                                                                                                                                                                                                                                               |

# Atomic-Components

Atomic components (also known as atoms) provide a way to get user input or let the user change the input. The way to bind a concept to a atomic component in an ampersand script, works as follows:

```
REPRESENT <Concepts> TYPE <Atomic type>
```

There is an example provided for every atomic component listed below.

## Alphanumeric Component

The purpose of this component, and the associated code, is to allow users to enter text in the form of a string. The text field represents strings of short length, i.e. less than 255 characters. The alphanumeric component is in other words a text field.

### How does it work in an ampersand script:

To use the alphanumeric component in your script, add the following statement:

```
REPRESENT ProjectName, ProjectStatus TYPE ALPHANUMERIC
```

### How does it work in the front-end:

The front-end provides an atomic-alphanumeric component that accepts attributes that act on this component. The following is an example of the alphanumeric component on the front-end side:

```html
<app-atomic-alphanumeric [property]="data" label="Name" isUni isTot crud="cRUd"></app-atomic-alphanumeric>
```

The different attributes that the front-end component accepts are listed in the table below.

| attribute | value  | description                                                       |
| --------- | ------ | ----------------------------------------------------------------- |
| property  | string | Display's the current value that is pre-filled in the text field. |

## Bigalphanumeric Component

The purpose of this component, and the associated code, is to allow users to enter more text in the form of a string than the normal alphanumeric field. The component represents large strings of limited length, i.e. less than 64 kb. The bigalphanumeric component is in other words a textarea.

### How does it work in an ampersand script:

To use the bigalphanumeric component in your script, add the following statement:

```
REPRESENT Description TYPE BIGALPHANUMERIC
```

### How does it work in the front-end:

The front-end provides an atomic-bigalphanumeric component that accepts attributes that act on this component. The following is an example of the bigalphanumeric component on the front-end side:

```html
<app-atomic-bigalphanumeric [property]="data" label="Description" isUni isTot crud="cRUd"></app-atomic-bigalphanumeric>
```

The different attributes that the front-end component accepts are listed in the table below.

| attribute | value  | description                                                           |
| --------- | ------ | --------------------------------------------------------------------- |
| property  | string | Display's the current value that is pre-filled in the textarea field. |

## Hugealphanumeric Component

The purpose of this component, and the associated code, is to allow users to enter text in the form of a string of arbitrary length. It contains a complete editor for the text that is filled in by the user.

### How does it work in an ampersand script:

To use the hugealphanumeric component in your script, add the following statement:

```
REPRESENT Articletext TYPE HUGEALPHANUMERIC
```

### How does it work in the front-end:

The front-end provides an atomic-hugealphanumeric component that accepts attributes that act on this component. The following is an example of the hugealphanumeric component on the front-end side:

```html
<app-atomic-hugealphanumeric
  [property]="data"
  label="Description"
  isUni
  isTot
  crud="cRUd"
></app-atomic-hugealphanumeric>
```

The different attributes that the front-end component accepts are listed in the table below.

| attribute | value  | description                                                         |
| --------- | ------ | ------------------------------------------------------------------- |
| property  | string | Display's the current value that is pre-filled in the editor field. |

## Boolean Component

The boolean component takes a true/false value to determine if something is true or false in the form of a switch. When the user clicks the switch, it toggles it from false to true or vice versa.

### How does it work in an ampersand script:

To use the boolean component in your script, add the following statement:

```
REPRESENT ProjectActive TYPE BOOLEAN
```

### How does it work in the front-end:

The front-end provides an atomic-boolean component that accepts attributes that act on this component. The following is an example of the boolean component on the front-end side:

```html
<app-atomic-boolean [property]="true" isUni crud="cRUd"></app-atomic-boolean>
```

The different attributes that the front-end component accepts are listed in the table below.

| attribute | value   | description                                                 |
| --------- | ------- | ----------------------------------------------------------- |
| property  | boolean | The current state in the form of a boolean (true or false). |

## Date Component

The date component allows the user to fill in a date in the format that you desire. When you click on the date field, a calendar shows up to choose any date. The component represent dates compatible with ISO8601.

### How does it work in an ampersand script:

To use the date component in your script, add the following statement:

```
REPRESENT ProjectStartDate TYPE DATE
```

### How does it work in the front-end:

The front-end provides an atomic-date component that accepts attributes that act on this component. The following is an example of the date component on the front-end side:

```html
<app-atomic-date [property]="'26-11-1999'" [format]="'dd-mm-yy'" isUni isTot crud="cRUd"></app-atomic-date>
```

The different attributes that the front-end component accepts are listed in the table below.

| attribute | value  | description                                                                                                                                                                                                                                 |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| property  | string | Display's the current value that is pre-filled in the date field.                                                                                                                                                                           |
| format    | string | The default format of a date in the component is yy-mm-dd. You are able to change this by setting this format field. Possible formats can be found when you scroll down at the following page: https://www.primefaces.org/primeng/calendar. |

## DateTime Component

The datetime component builds upon the date component. It adds the ability to choose a time. The component represent dates compatible with ISO8601.

### How does it work in an ampersand script:

To use the datetime component in your script, add the following statement:

```
REPRESENT ProjectStartTime TYPE DATETIME
```

### How does it work in the front-end:

The front-end provides an atomic-datetime component that accepts attributes that act on this component. The following is an example of the datetime component on the front-end side:

```html
<app-atomic-datetime [property]="'26-11-1999 23:46'" isUni isTot crud="cRUd"></app-atomic-datetime>
```

The different attributes that the front-end component accepts are listed in the table below.

| attribute | value  | description                                                           |
| --------- | ------ | --------------------------------------------------------------------- |
| property  | string | Display's the current value that is pre-filled in the datetime field. |

## Float Component

The float comonent will ensure that the input that was given by the user is in the data type of a float. This makes it possible to add a comma into the input field. A float consist of floating-point numbers compatible with ISO8601.

### How does it work in an ampersand script:

To use the float component in your script, add the following statement:

```
REPRESENT Costs TYPE FLOAT
```

### How does it work in the front-end:

The front-end provides an atomic-float component that accepts attributes that act on this component. The following is an example of the float component on the front-end side:

```html
<app-atomic-float [property]="'99,99'" isUni isTot crud="cRUd"> </app-atomic-float>
```

The different attributes that the front-end component accepts are listed in the table below.

| attribute | value  | description                                                        |
| --------- | ------ | ------------------------------------------------------------------ |
| property  | string | Display's the current value that is pre-filled in the float field. |

## Integer Component

With the integer component, its only possible to fill in numbers from 0 to 9. It represents positive and negative whole numbers in the range [-2^63..2^63 -1]

### How does it work in an ampersand script:

To use the integer component in your script, add the following statement:

```
REPRESENT Amount TYPE INT
```

### How does it work in the front-end:

The front-end provides an atomic-integer component that accepts attributes that act on this component. The following is an example of the integer component on the front-end side:

```html
<app-atomic-integer [property]="'1234567890'" isUni isTot crud="cRUd"></app-atomic-integer>
```

The different attributes that the front-end component accepts are listed in the table below.

| attribute | value  | description                                                          |
| --------- | ------ | -------------------------------------------------------------------- |
| property  | string | Display's the current value that is pre-filled in the integer field. |

## Object Component

The object component allows the user to inspect and read more of an entity and adds a dropdown of different actions that the user can take on the entity.

### How does it work in an ampersand script:

To use the integer component in your script, add the following statement:

```
REPRESENT Project TYPE OBJECT
```

### How does it work in the front-end:

The front-end provides an atomic-object component that accepts attributes that act on this component. The following is an example of the object component on the front-end side:

```html
<app-atomic-object [property]="activeProjects" isUni isTot crud="cRUd"> </app-atomic-object>
```

The different attributes that the front-end component accepts are listed in the table below.

| attribute | value       | description                                                                                            |
| --------- | ----------- | ------------------------------------------------------------------------------------------------------ |
| property  | Array\<any> | Display's the name of the object and adds links to desired actions, like editing or viewing the entity |

## Password Component

The password component allows the user to type in their password, without showing it on the screen.

### How does it work in an ampersand script:

To use the password component in your script, add the following statement:

```
REPRESENT Password TYPE PASSWORD
```

### How does it work in the front-end:

The front-end provides an atomic-password component that accepts attributes that act on this component. The following is an example of the password component on the front-end side:

```html
<app-atomic-password [property]="'Pre-set value'" isUni isTot crud="cRUd"></app-atomic-password>
```

The different attributes that the front-end component accepts are listed in the table below.

| attribute | value  | description                                                                                        |
| --------- | ------ | -------------------------------------------------------------------------------------------------- |
| property  | string | Sets the current value that is pre-filled in the password field. You might never want to use this. |

# Box-Components

Box components are used as a shell, to keep its contents within one window.

# View-Components

## Linkto

The View-Linkto is similar to the Atomic-Object (in fact, it is the same). It aims to link an object to an interface. It uses the Atomic-Object under the hood, as it has the same functionality. Therefore, the templates for both `Atomic-OBJECT.html` and `View-LINKTO.html` are the same.
