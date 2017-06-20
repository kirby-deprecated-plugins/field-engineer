# Example from `readme.md`

If you want to recreate the example from the readme.md, here you go...

**Screenshot**

![Screenshot](hero.png)

**Blueprint**

```text
fields:
  my_advanced:
    type: engineer
    fields:
      my_image:
        label: Image
        type: image
      my_engineer:
        label: Engineer
        type: engineer
        fieldsets:
          set1:
            label: Set 1
            fields:
              my_image:
                type: image
                width: 1/2
              my_text:
                type: text
                width: 1/2
          set2:
            label: Set 2
            fields:
              my_toggle:
                label: Toggle
                type: toggle
                width: 1/2
              my_date:
                label: Date
                type: date
                width: 1/2
```