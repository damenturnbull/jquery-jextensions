# jExtensions
A collection of useful $.fn.extend functions

## $.print
Console logging using shorthand print method. Validates the existence of window.console to avoid complaints from older browsers (here's looking at you IE8).

```
$('li').print()
```

is the equivalent of this:

```
console.log($('li'));
```

## $.glow
Highlight and prove the existence of element selectors by making them glow a dodgy green colour...

```
$('p span').glow()
```
