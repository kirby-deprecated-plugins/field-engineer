# Changelog

**v0.6 - Grid**

- Feature - Blueprint option to choose which buttons to use.
- Feature - Blueprint option `width` can now be set to engineer fields.
- Improved the dropdown arrow position.
- Improved the trash icon to look like the Panel trash icon.
- Improved the action button bar ui.
- Improved "Add the first entry" with icons to show if it's containing fields or fieldsets.
- Removed labels from the action buttons to save space for small fields.
- Removed border for [Kirby Images](https://github.com/medienbaecker/kirby-images). The css is not handled by Kirby Images instead.
- Field [Kirby date field](https://github.com/iksi/KirbyDateField) works with Engineer.
- Field [Kirby time field](https://github.com/iksi/KirbyTimeField) works with Engineer.
- Field [Kirby country field](https://github.com/iksi/KirbyCountryField) works with Engineer.
- Field [Kirby decimal field](https://github.com/iksi/KirbyDecimalField) works with Engineer.
- Docs - Separated [field plugins](field.md) that works "out of the box" from the "supported" ones.
- Docs - [Troubleshooting](troubleshooting.md) steps added.

**0.5**

- Added requirement: PHP7+
- Support for multi language setup
- Support for Kirby 2.5.1
- Support for [Controlled list](https://github.com/rasteiner/controlledlist)
- Support for [Kirby Images](https://github.com/medienbaecker/kirby-images)
- Support for [Kirby Hero Field](https://github.com/jenstornell/kirby-hero-field)
- Support for [Kirby Logic Field](https://github.com/jenstornell/kirby-logic-field)
- Support for [Kirby Quickselect](https://github.com/medienbaecker/kirby-quickselect)
- Support for [Select a structure](https://github.com/CalebGrove/select-a-structure)
- Support for [Switch field](https://github.com/distantnative/field-switch)

**rc-0.4**

- Complete rewrite
- Feature - Nesting with unlimted levels
- Feature - Sorting arrows
- Feature - Fieldsets
- Feature - Clone
- Feature - Debug option `c::set('engineer.debug')`
- Feature - Label fallback option `c::set('engineer.label.fallback')`
- Fix - Default value
- Fix - Counter for min/max
- Fix - Headline
- On hold - `style: table` does not work in this version

**beta 0.3**

- Fixed bug with th position
- Fixed bug with table sort jumping
- Fixed bug with checkboxes `option: children`
- Fixed bug with textarea autosize after adding new item
- Fixed bug frontend crasch. Only run plugin in the panel.

**beta 0.2**

- Lots of big changes

**beta 0.1**

- Initial release