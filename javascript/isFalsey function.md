
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
  
  const isFalseyLongHand = (value) => {
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
  const isFalseyShortHand = (value) => !value;
```
  
  
  
Examples:
  
```javascript
// Falsey values
console.log(isFalseyLongHand("")); // true  
console.log(isFalseyShortHand(null)) // true
  
// Non Falsey values
console.log(isFalseyLongHand('string')); // false
console.log(isFalseyShortHand({})) // false
```
  
  
  
  
  
</details>

