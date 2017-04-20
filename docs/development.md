# Plugin development

The most simple fields will work out of the box, even custom made ones. For some more advanced use cases you need to add some things to make it work perfectly.

### Page object

If you use the page object to generate something, you need to add this to your field. It forces the page object to be set.

```php
public function __construct() {
  $this->page = page(kirby()->get('option', 'engineer.page.id'));
}
```

Hopefully it's not needed in the future.

### Javascript trigger

The engineer field generate new items on the fly with javascript. If your field rely on javascript, it will probably not work when DOM has changed. In that case you need to trigger it like this:

```js
EngineerTableRender.render(field);
```

Hopefully it will be improved in the future, but I don't see any solution to make it possible to get rid of it completely. 