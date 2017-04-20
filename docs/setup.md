## Setup

### Blueprint

It works exactly like the structure field. You can read about it here:

https://getkirby.com/docs/cheatsheet/panel-fields/structure

The only difference is the field `type` that needs to be `engineer`.

**Example:**

```text
fields:
  my_engineer_field:
    title: My engineer field
    type: engineer
    fields:
      my_text:
        type: text
      my_select:
        type: select
        options:
          option1: Option 1
          option2: Option 2
      my_date:
        type: date
```

Also read about [fieldtypes](fieldtypes.md) and [blueprint](blueprint.md).