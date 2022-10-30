
<h2 align=center>isFalsey Function</h2>

المطلوب هنا أنك تعمل function بتأخذ قيمه معينة و تحدد هل القيمة دي falsey ولا لأ.

ملحوظه: ال falsey values هي ال `undefined` و `null` و `false` و `0` و `NaN` و `""`


<details dir=rtl>
  <summary>
    <h2>الاجابة</h2>
  </summary>

نقدر نعمل ال function دي بطريقتين هما: 
 - الطريقة الأولي باستخدام ال `if` statement و ال logical OR ( || ) operator (logical disjunction) بالشكل دا: 

```javascript
  
  const isFalsey = (value) => {
  if (
    value === null ||
    value === undefined ||
    value === 0 ||
    value === false ||
    value === NaN ||
    value === ""
  ) {
    return true;
  }
  return false;
};
```
  
   - الطريقة الثانية باستخدام logical NOT ( ! ) operator (logical complement, negation) بالشكل دا: 
  
```javascript
  const isFalsey2 = (value) => !value;
```
</details>

