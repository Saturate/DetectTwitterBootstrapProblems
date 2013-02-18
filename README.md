Detect Twitter Bootstrap Problems
==============================

This plugin will be able to detect problems with your use of bootstrap. Useful for develop environments, bot intented on production.

## How to use
For now it is just a simple jQuery plugin, as you most likely will have jQuery when you have Bootstrap. This will be more dynamic in the future.

Just include the JS file in your page and initialize the test with this code:

```html
<script type="text/javascript" src="js/jquery.dtbp.js"></script>
```

```html
<script type="text/javascript">
$(function () {
    $(document).dtbp();
});
</script>
```

## Build
This is only for minification right now, and does not make a lot of sense since it's not intented to be used on production. But we have it! In the future we can make some unit testing.
Simply run `grunt` in the folder, and make sure that you have [Grunt](http://gruntjs.com/) installed.

## Contribute
You can fork it, or make a issue with a description of what you want a test for.

## Roadmap
- Alert types. Make your own or use alert(), console API ect.
- More things to check for, right now it's pretty dull.

##Legal
Copyright (C) 2013, Allan Kimmer Jensen