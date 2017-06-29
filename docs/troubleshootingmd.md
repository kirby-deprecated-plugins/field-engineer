# Troubleshooting

## Why an error can appear

### Blueprint has changed

The most common reason for an error is by my experience when you have saved data in the Engineer field and then change the blueprint. Maybe a field type is changed or something structural. That can make Engineer confused on how to read the data and in some cases throw an error.

## Prevent errors

First of all, in most cases you can change things in the blueprint without breaking Engineer, even when you have data saved.

- The provent errors from happening, set up the blueprint structure first and add things to it after that.
- If you need to change something, it's often safer to add something new than to edit the field type when the field already has content.

## On error

If you are experience an error, there are some things you can do.

### Logout

In some cases the data is stored in the session. You can try to logout and then login again. That way the session is cleaned up.

### Reset content

If the logout solution does not work, the problem might be that the content does no longer match the blueprint. Try to manually delete the rows in the content text file that has to do with the Engineer field.

### Turn debug on

To see more of what the Engineer field does, turn debug mode on by adding this line to your `config.php`:

```php
c::set('engineer.debug', true);
```

### Ask the forum

If it's a support question, you can ask it on https://forum.getkirby.com. You can tag me with @jenstornell to make me aware of the question.

### Add an issue

Maybe it's not your fault at all, but you have actually found a bug. In that case [create a new issue](https://github.com/jenstornell/field-engineer/issues/new) and I will look into it.