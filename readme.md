# Kirby Engineer Field

*Version 0.2 beta* - ***[Changelog](docs/changelog.md)***

*Free during the beta period*

Similar to the structure field but without the modal.

### Features

- Inline editing (no modal).
- Support for html5 field validation. 
- Support for most of the Kirby Panel fields.
- Support for multiple instances.
- Support for sorting with drag and drop
- The content will be stored exactly like the structure field.

**Style:** table

![](docs/table.gif)

**Style:** items

![](docs/items.gif)

### Wishlist (for the future)

- Unlimited nesting
- Multi language support
- Limit option support

## Table of contents

- [Install](docs/install.md)
- [Setup](docs/setup.md)
- [Blueprint](docs/blueprint.md)
- [Fieldtypes](docs/fieldtypes.md)
- [Comparation to structure field](docs/compare.md)
- [Field development](docs/development.md)


## In templates/snippets

This plugin will store the data exatcly like the structure field:

https://getkirby.com/docs/cheatsheet/field-methods/toStructure

## Options

```php
c::set('field.engineer.debug', false);
```

### field.engineer.debug

Set it to true to enable debug. With debug on, the generated textarea field will be visible. Use it only when you are in trouble with the field.

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