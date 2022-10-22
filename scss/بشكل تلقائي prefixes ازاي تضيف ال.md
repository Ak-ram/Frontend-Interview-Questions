عشان نعمل autoprefixer فاحنا محتاجين نستخدم:
- ال variables
- ال mixin@ و ال include@
- ال each@
- ال Interpolation



```
@mixin prefix($property, $value, $prefixes) {
  @each $prefix in $prefixes {
    -#{$prefix}-#{$property}: $value;
  }
  #{$property}: $value;
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
  -webkit-transform: rotate(15deg);
  -ms-transform: rotate(15deg);
  -o-transform: rotate(15deg);
  -moz-transform: rotate(15deg);
  transform: rotate(15deg);
}
```




