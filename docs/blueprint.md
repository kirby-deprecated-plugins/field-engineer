# Blueprint

## Engineer options

Most of the engineer options are the same as the structure field.

https://getkirby.com/docs/cheatsheet/panel-fields/structure

### Works

- label
- style

### Does not work (yet)

- default (not at the moment)
- readonly (planned)
- limit (planned)
- modalsize (Engineer does not need a modal)

## Subfield options

Most of the subfield options should work out of the box.

https://getkirby.com/docs/panel/blueprints/form-fields

### Works

- [Default](https://getkirby.com/docs/panel/blueprints/form-fields#default-values)
- [Placeholder](https://getkirby.com/docs/panel/blueprints/form-fields#placeholders)
- [Readonly](https://getkirby.com/docs/panel/blueprints/form-fields#readonly-fields)
- [Help](https://getkirby.com/docs/panel/blueprints/form-fields#field-instructions)
- [Icon](https://getkirby.com/docs/panel/blueprints/form-fields#custom-icons)
- Label

### Works in some cases

- [Width](https://getkirby.com/docs/panel/blueprints/form-fields#creating-grids) (does only work with style: items)
- [Required](https://getkirby.com/docs/panel/blueprints/form-fields#required-fields) (if it's html5 validation, it will work)

### Does not work

- [Validate min/max](https://getkirby.com/docs/panel/blueprints/form-fields#validation)
- [Translations](https://getkirby.com/docs/panel/blueprints/form-fields#translating-form-fields) - Not tested
- [Translate](https://getkirby.com/docs/panel/blueprints/form-fields#prevent-field-values-in-non-default-languages) - Not tested