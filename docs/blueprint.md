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

**width**

*Changed behavior from v0.6 to v0.7*

The width of the engineer container.

**rowWidth**

The `rowWidth` works similar to field `width`. This option set the width of the fields or fieldset rows.

In the example below, the field container will take `1/2` of the total width. Each added row take `1/3` of the container width.

```text
my_engineer:
  type: engineer
  width: 1/2
  rowWidth: 1/3
  fields:
    text:
      type: text
    image:
      type: image
``` 

**fields**

It works very similar to the [structure field](https://getkirby.com/docs/cheatsheet/panel-fields/structure). The best way to understand it is to look at the basic example.

**fieldsets**

Instead of fields you can use fieldsets. Then you can choose which set to use. To learn it, see the advanced example.

**style**

This option is similar to the structure field, but with Engineer the only style that can be set is `style: table`, or non at all.

Keep these things in mind:

- The sub field option `width` is required, leaving you in control.
- Only use 1 `fieldset` or use `fields`. Else you will get the wrong table headings.
- It's generates a table, so let the sub fields be on the same row.

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