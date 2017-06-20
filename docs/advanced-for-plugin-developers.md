# Advanced - For plugin developers

#### Field controllers and field routes

Fields using a field controller or a field route might get into trouble because the subfields of Engineer does not have a field controller or a field route of their own. It's more like a virtual field.

#### Add and field javascript DOM

Fields sometimes uses javascript to show a preview when the field changes. When a new field is added in engineer, it's done with javascript. Therefor the field not yet aware of that the DOM has been updated. In order to make it work well you need to save it first. Then it will load everything again with PHP and the field will be aware of the DOM again.

For the built in fields, Engineer will solve it by forcing the fields to update themselves when adding a new item. The same thing can be done for plugins as well, but at the moment it needs to be triggered from inside Engineer.

### The results class 

If you use the results class to manipulate the data before it's saved, it can cause troubles with Engineer because it uses pure javascript to get the data.