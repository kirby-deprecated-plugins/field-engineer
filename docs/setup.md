## Setup

### Blueprint

To make it work as expected, add the following code to your blueprint:

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

Also read about [fieldtypes](fieldtypes) and [blueprint](blueprint).