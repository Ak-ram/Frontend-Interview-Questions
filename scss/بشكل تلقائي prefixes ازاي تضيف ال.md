عشان نعمل autoprefixer فاحنا محتاجين نستخدم:
- ال `variables`
- ال `mixin@` و ال `include@`
- ال `each@`
- ال `Interpolation`


----
اول حاجة احنا هنعمل mixin بتستقبل ال css property و ال value بتاعتها و كمان ال prefixes الي عايزين نضيفها لل property دي بالشكل دا 
```
@mixin prefix($propertyName, $propertyValue, $prefixes) {}
```
لاحظ هنا ان ال `property$` و ال `value$` عبارة عن متغيرات بتخزن جواها قيمة واحده بس بينما ال `prefixes$` عبارة عن متغير بنخزن جواه مجموعة من القيم ( list of values ) بالشكل دا :



```
$propertyName: transform // قيمة واحده
$propertyValue: rotate(12deg) // قيمة واحده
$prefixes: webkit moz o ms   //  مجموعة من القيم مفصول بينهم بمسافة
```


هنيجي بقا جوا ال `mixin@` دي و نبدأ نلوب علي ال `prefixes$` باستخدام ال `each@` 









```
@mixin prefix($propertyName, $propertyValue, $prefixes) {
  @each $prefix in $prefixes {
    -#{$prefix}-#{$propertyName}: $propertyValue;
  }
  #{$propertyName}: $propertyValue;
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




