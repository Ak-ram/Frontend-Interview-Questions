## السؤال رقم 1

### ازاي تضيف ال prefixes لل css properties بشكل تلقائي باستخدام ال SCSS ؟
<br />



<details dir=rtl>
  <summary><h2>الاجابة</h2></summary>
  <div>
  
 
عشان نعمل **sass autoprefixer** فاحنا هنستخدم:
- ال `variables`
- ال `mixin@` و ال `include@`
- ال `each@`
- ال `Interpolation`
---


![sass autoprefixer](https://user-images.githubusercontent.com/69124951/197356384-4337f855-a95d-4ff9-9f5c-4663dde74484.png)





لاحظ هنا ان ال `property$` و ال `value$` عبارة عن متغيرات بتخزن جواها قيمة واحده بس بينما ال `prefixes$` عبارة عن متغير بنخزن جواه مجموعة من القيم ( list of values ) بالشكل دا :




```scss
$property: transform // قيمة واحده
$value: rotate(12deg) // قيمة واحده
$prefixes: webkit moz o ms   //  مجموعة من القيم مفصول بينهم بمسافة
```

> **Example:**

##### Style.scss file:

```scss
@mixin prefix($property, $value, $prefixes) {
  @each $prefix in $prefixes {
    -#{$prefix}-#{$property}: $value;
  }
  #{$property}: $value;
}

.someClass{
@include prefix(transform, rotate(15deg), webkit ms o moz);
}
```



##### Style.css file [ CSS Output will be ]

```css
.someClass {
  -webkit-transform: rotate(15deg);
  -ms-transform: rotate(15deg);
  -o-transform: rotate(15deg);
  -moz-transform: rotate(15deg);
  transform: rotate(15deg);
}
```

  
  
  </div>
</details>


















