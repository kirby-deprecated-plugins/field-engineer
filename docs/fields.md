# Fields

## Table of contents

1. [Subfields](#subfields)
1. [Subfield options](#subfields)
1. [Plugin fields](#plugin-fields)

### Subfields

Most of the built in Kirby fields will work as subfields to Engineer.

| Type                                                                         | Supported | Comment
| ---------------------------------------------------------------------------- | --------- | -------
| [`checkbox`](https://getkirby.com/docs/cheatsheet/panel-fields/checkbox)     | Yes       |&nbsp;
| [`checkboxes`](https://getkirby.com/docs/cheatsheet/panel-fields/checkboxes) | Yes       |&nbsp;
| [`date`](https://getkirby.com/docs/cheatsheet/panel-fields/date)             | Yes       |&nbsp; 
| [`datetime`](https://getkirby.com/docs/cheatsheet/panel-fields/datetime)     | Yes       |&nbsp;
| [`email`](https://getkirby.com/docs/cheatsheet/panel-fields/email)           | Yes       |&nbsp;
| [`headline`](https://getkirby.com/docs/cheatsheet/panel-fields/headline)     | Yes       |&nbsp;
| [`hidden`](https://getkirby.com/docs/cheatsheet/panel-fields/hidden)         | -         |&nbsp;
| [`image`](https://getkirby.com/docs/cheatsheet/panel-fields/image)           | Yes       |&nbsp;
| [`info`](https://getkirby.com/docs/cheatsheet/panel-fields/info)             | Yes       |&nbsp;
| [`line`](https://getkirby.com/docs/cheatsheet/panel-fields/line)             | Yes       |&nbsp;
| [`number`](https://getkirby.com/docs/cheatsheet/panel-fields/number)         | Yes       |&nbsp;
| [`page`](https://getkirby.com/docs/cheatsheet/panel-fields/page)             | Yes       |&nbsp;
| [`radio`](https://getkirby.com/docs/cheatsheet/panel-fields/radiobuttons)    | Yes       |&nbsp;
| [`select`](https://getkirby.com/docs/cheatsheet/panel-fields/select)         | Yes       |&nbsp;
| [`structure`](https://getkirby.com/docs/cheatsheet/panel-fields/structure)   | -         |&nbsp;
| [`tags`](https://getkirby.com/docs/cheatsheet/panel-fields/tags)             | -         | DOM issues
| [`tel`](https://getkirby.com/docs/cheatsheet/panel-fields/tel)               | Yes       |&nbsp;
| [`text`](https://getkirby.com/docs/cheatsheet/panel-fields/text)             | Yes       |&nbsp;
| [`textarea`](https://getkirby.com/docs/cheatsheet/panel-fields/textarea)     | Yes       | Without help butotons
| [`time`](https://getkirby.com/docs/cheatsheet/panel-fields/time)             | Yes       |&nbsp;
| [`toggle`](https://getkirby.com/docs/cheatsheet/panel-fields/toggle)         | Yes       |&nbsp;
| [`url`](https://getkirby.com/docs/cheatsheet/panel-fields/url)               | Yes       |&nbsp;
| [`user`](https://getkirby.com/docs/cheatsheet/panel-fields/user)             | Yes       |&nbsp;

### Subfield options

Most of the Kirby field options will work. Be aware that these are the options of an Engineer subfield, not of the Engineer itself.

| Option                                                                                                              | Supported | Comment
| ------------------------------------------------------------------------------------------------------------------- | --------- | --------
| [`default`](https://getkirby.com/docs/panel/blueprints/form-fields#default-values)                                  | Yes       |&nbsp;
| [`help`](https://getkirby.com/docs/panel/blueprints/form-fields#field-instructions)                                 | Yes       |&nbsp;
| [`icon`](https://getkirby.com/docs/panel/blueprints/form-fields#custom-icons)                                       | Yes       |&nbsp;
| [`label`](https://getkirby.com/docs/panel/blueprints/form-fields)                                                   | Yes       |&nbsp;
| [`placeholder`](https://getkirby.com/docs/panel/blueprints/form-fields#placeholders)                                | Yes       |&nbsp;
| [`readonly`](https://getkirby.com/docs/panel/blueprints/form-fields#readonly-fields)                                | Yes       |&nbsp;
| [`required`](https://getkirby.com/docs/panel/blueprints/form-fields#required-fields)                                | Yes       |&nbsp;
| [`translate`](https://getkirby.com/docs/panel/blueprints/form-fields#prevent-field-values-in-non-default-languages) | -         |&nbsp;
| [`translations`](https://getkirby.com/docs/panel/blueprints/form-fields#translating-form-fields)                    | -         |&nbsp;
| [`type`](https://getkirby.com/docs/panel/blueprints/form-fields)                                                    | Yes       |&nbsp;
| [`validate`](https://getkirby.com/docs/panel/blueprints/form-fields#validation)                                     | -         | Only min / max with js
| [`width`](https://getkirby.com/docs/panel/blueprints/form-fields#creating-grids)                                    | Yes       | &nbsp;

## Plugin fields

Many fields will work out of the box with Engineer. Here are a few of the most popular relevant fields that works.
  
| Plugin field                                                            | Supported
| ----------------------------------------------------------------------- | -----------
| [Controlled list](https://github.com/rasteiner/controlledlist)          | Yes
| [Kirby Hero Field](https://github.com/jenstornell/kirby-hero-field)     | Yes
| [Kirby Images](https://github.com/medienbaecker/kirby-images)           | Yes
| [Kirby Logic Field](https://github.com/jenstornell/kirby-logic-field)   | Yes
| [Kirby Quickselect](https://github.com/medienbaecker/kirby-quickselect) | Yes
| [Select a structure](https://github.com/CalebGrove/select-a-structure)  | Yes
| [Switch field](https://github.com/distantnative/field-switch)           | Yes