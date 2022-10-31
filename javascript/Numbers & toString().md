<h2 align=center>تحويل ال numbers ل string باستخدام ال toString()</h2>


<details dir=rtl>
  <summary>
    <h2>الاجابة 💡</h2>
  </summary>

  لو حاولنا نحول ال numbers ل string بالطريقة دي فهيحصل SyntaxError 
  
  ```javascript
  12.toString(); // Uncaught SyntaxError: Invalid or unexpected token
  ```
  
  و دا لأن ال js engine أتعامل مع ال `.` الي بعد رقم `12` علي أنها `Decimal point` فكدا أنت أستخدمت ال `()toString`  بدون متستخدم ال `dot notation` فالحل هنا أنك تحط ال `dot notation` بعد ال `Decimal point` بالشكل دا

```javascript
  12..toString(); // "12"
```
  
</details>


