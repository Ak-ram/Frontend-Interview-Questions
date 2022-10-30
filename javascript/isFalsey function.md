
<h2 align=center>isFalsey Function</h2>

المطلوب هنا أنك تعمل function بتأخذ قيمه معينة و تحدد هل القيمة دي falsey ولا لأ.

ملحوظه: ال falsey values هي ال `undefined` و `null` و `false` و `0` و `NaN` و `""`


<details dir=rtl>
  <summary>
    <h2>الاجابة</h2>
  </summary>

نقدر نعمل ال function دي بطريقتين هما: 
 - الطريقة الأولي باستخدام ال `if` و ال `||` بالشكل دا: 

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
  
   - الطريقة الثانية باستخدام `!` بالشكل دا: 
  
```javascript
  const isFalsey2 = (value) => !value;
```
</details>

