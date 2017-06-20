# Comparation

To know what field you should use you can use this comparation table.

| Feature                                                  | Engineer   | [Builder](https://github.com/TimOetting/kirby-builder)  | [Structure](https://getkirby.com/docs/cheatsheet/panel-fields/structure)
| -------------------------------------------------------- | ---------- | -------- | ---------
| Inline editing (no modal)                                | Yes        | -        | -
| Nesting without limit                                    | Yes        | -        | -
| Fieldsets                                                | Yes        | Yes      | -
| Show images in the output                                | Yes        | Yes      | -
| Built in field support                                   | Partly     | -        | Yes
| Plugin field support                                     | Partly     | -        | Yes
| Custom validators                                        | -          | Yes      | Yes
| Row limit                                                | -          | -        | Yes
| **Price**                                                | **50 EUR** | **Free** | **Free**

*If the information above is no longer accurate, just add an issue about it* 

## Custom validators

*Not supported - Here is the reason behind it:*

[Custom validators](https://getkirby.com/docs/developer-guide/objects/validators) does not work with Engineer. The are a few reasons why it's not supported. Speed and usability are two of the reasons.

Engineer uses an inline approach with pure javascript. It has no delay when adding new fields, so you can add many fields very quickly.

Even if Engineer does not support custom validators, it does support html5 form validation. For example, a number field will warn you if it's not a number. Engineer also escapes the data when needed before saving it.

## Built in field support

Engineer has some limitations but it supports almost every built in field. Read more about the [field support](docs/fields.md).

## Plugin field support

Most plugins will probably work out of the box, but there are some limitations. You need to try it out and see if it works. In the future I will probably add a list with supported plugin fields as well.

## Row limit

It's a planned feature but is not implemented in the current version.

## License needed

If you already bought a Kirby license, then the Structure field is free to use, because it's built in.

Engineer field have been taken some time to develop so I made the decision to take a license fee for it. That way I can continue to maintain it.