# Kirby Engineer Field

*Version 0.1 beta*

Similar to the structure field but without the modal.

### Features

- Inline editing (no modal).
- Support for html5 field validation. 
- Support for most of the Kirby Panel fields.
- Support for multiple instances.
- The content will be stored exactly like the structure field.

[SCREENSHOT]

### Wishlist (for the future)

- Unlimited nesting
- Sorting with drag & drop
- style: items
- Multi language support
- Limit option support

**[Installation instructions](docs/install.md)**

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

### Supported field types

This plugin works with most Kirbys built in fields. It will even work with plugin fields.

**Supported fields**

- [Checkbox](https://getkirby.com/docs/cheatsheet/panel-fields/checkbox)
- [Checkboxes](https://getkirby.com/docs/cheatsheet/panel-fields/checkboxes)
- [Date](https://getkirby.com/docs/cheatsheet/panel-fields/date)
- [Datetime](https://getkirby.com/docs/cheatsheet/panel-fields/datetime)
- [Email](https://getkirby.com/docs/cheatsheet/panel-fields/email)
- [Image](https://getkirby.com/docs/cheatsheet/panel-fields/image)
- [Info](https://getkirby.com/docs/cheatsheet/panel-fields/info)
- [Number](https://getkirby.com/docs/cheatsheet/panel-fields/number)
- [Page](https://getkirby.com/docs/cheatsheet/panel-fields/page)
- [Radio](https://getkirby.com/docs/cheatsheet/panel-fields/radiobuttons)
- [Select](https://getkirby.com/docs/cheatsheet/panel-fields/select)
- [Tel](https://getkirby.com/docs/cheatsheet/panel-fields/tel)
- [Text](https://getkirby.com/docs/cheatsheet/panel-fields/text)
- [Textarea](https://getkirby.com/docs/cheatsheet/panel-fields/textarea)
- [Time](https://getkirby.com/docs/cheatsheet/panel-fields/time)
- [Toggle](https://getkirby.com/docs/cheatsheet/panel-fields/toggle)
- [Url](https://getkirby.com/docs/cheatsheet/panel-fields/url)
- [User](https://getkirby.com/docs/cheatsheet/panel-fields/user)

**Supported fields - Style: items**

- [Line](https://getkirby.com/docs/cheatsheet/panel-fields/line)

**Partly of supported**

When adding rows, the javascript bound to the new items does not. If you save first, you can use them as expected. 

- [Tags](https://getkirby.com/docs/cheatsheet/panel-fields/tags)

**Unsupported fields**

Most of the unsupported fields are not supported, simply because they don't fit the tabular format.

- [Hidden](https://getkirby.com/docs/cheatsheet/panel-fields/hidden)
- [Headline](https://getkirby.com/docs/cheatsheet/panel-fields/headline)
- [Structure](https://getkirby.com/docs/cheatsheet/panel-fields/structure)

### Not supported

- Mobile devices
- The engineer field will not work inside a structure field
- Multiple languages (at least not tested)
- Field `validate` option.

## In templates/snippets

This plugin will store the data exatcly like the structure field:

https://getkirby.com/docs/cheatsheet/field-methods/toStructure

## Options

```php
c::set('field.engineer.debug', false);
```

### field.engineer.debug

Set it to true to enable debug. With debug on, the generated textarea field will be visible. Use it only when you are in trouble with the field.

## Changelog

**0.1**

- Initial release

## Requirements

- [**Kirby**](https://getkirby.com/) 2.4.1+

## Disclaimer

This plugin is provided "as is" with no guarantee. Use it at your own risk and always test it yourself before using it in a production environment. If you find any issues, please [create a new issue](https://github.com/jenstornell/field-engineer/issues/new).

## License

**Beta**

During beta this will be a free plugin.

**Live** 

When the stable version is released, I will probably take a fee for it (not more than 50 EUR/USD). Stay tuned!

## Credits

- [Jens Törnell](https://github.com/jenstornell)