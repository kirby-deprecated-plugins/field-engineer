# Options

```php
c::set('engineer.debug', false);
c::set('engineer.label.fallback', true);
```

### engineer.debug

If this option is set to `true`, it's possible to see the pre-generated outline, as well as an output textarea. It can be useful for debugging.

### engineer.label.fallback

If this option is set to `true` (as default), some labels will fallback to predefined translated label names like **URL**, **Email**, **Date** etc. If it's set to `false` no labels will be added if you don't set them.