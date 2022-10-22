
```
$known-prefixes: webkit, moz, o, ms;
@mixin prefix($property, $value, $prefixes) {
  @each $prefix in $prefixes {
    -#{prefix}-#{property}: $value;
  }
  -#{property}: $value;
}

```



```
.someClass{
@include prefix(transform, rotate(15deg), webkit ms o moz);
}
```


CSS Output will be

```
.someClass {
  -prefix-property: rotate(15deg);
  -prefix-property: rotate(15deg);
  -prefix-property: rotate(15deg);
  -prefix-property: rotate(15deg);
  -property: rotate(15deg);
}

```




