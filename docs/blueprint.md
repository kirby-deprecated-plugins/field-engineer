# Blueprint

Most of the engineer options are the same as the [structure field](https://getkirby.com/docs/cheatsheet/panel-fields/structure).

## Engineer field

### Basic example

A basic example with two fields, one text field and one image field. 

**Blueprint**

```text
fields:
  my_engineer:
    type: engineer
    fields:
      first:
        label: Text
        type: text
      second:
        label: Image
        type: image
```

**Content**

```text
My_engineer:

-
  first: "My first text"
  second: "flowers.jpg"
-
  first: "Another text"
  second: "nature.jpg"
```

### Advanced example

A more advanced example where multiple fieldsets are used. Also it uses nested engineer fields.

**Blueprint**

```text
fields:
  my_engineer:
    type: engineer
    fieldsets:
      set1:
        fields:
          first:
            label: Engineer
            type: engineer
            fields:
              my_text:
                type: text
              my_image:
                type: image
          second:
            label: Image
            type: image
      set2:
        fields:
          first:
            type: text
          second:
            type: toggle
```

**Content**

```text
My_engineer:

-
  _fieldset: set1
  second: "flowers.jpg"
  first:
   -
    my_text: "First row inside"
    my_image: "nature.jpg"
   -
    my_text: "Second row inside"
    my_image: "nature.jpg"
-
  _fieldset: set2
  first: "A set with a toggle field"
  second: 'false'
```

### Engineer field options

**label**

It's optional but you can give the Engineer field a label if you like.

**type**

The `type` option needs to be set to `engineer`.

**fields**

It works very similar to the [structure field](https://getkirby.com/docs/cheatsheet/panel-fields/structure). The best way to understand it is to look at the basic example.

**fieldsets**

Instead of fields you can use fieldsets. Then you can choose which set to use. To learn it, see the advanced example.

**buttons**

If you don't use this option it will fallback to the following buttons:

```text
buttons:
  - delete
  - clone
  - sort-up
  - sort-down
  - sort
```

---

[Read about supported fields](fields.md)