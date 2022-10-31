<h2 align=center>true is not equal ![ ], but not equal [ ] too</h2>

ال `[]` مش بساوي `true` و برده ال `[]!` مش بيساوي `true` اي السبب ؟

```javascript
true == []; // -> false
true == ![]; // -> false
```


<details dir=rtl>
  <summary>
    <h2>الاجابة 💡</h2>
  </summary>
  
أنا عندي ال `(==) abstract equality` بتعمل مقارنة بين عددين, يعني ال left side و ال right side لازم يكونوا أعداد زي كدا
  
  ```javascript
  4 == 4  // true
  3 == 9  // false
  ```
بس ال js engine لما يجي يقارن ال two sides مع بعض هيلاقي انهم مش `Numbers` فبيعمل `Automatic conversion` ليهم بحيث يحولهم لأرقام.
 
و عشان يحولهم لارقام بيستخدم ال `+` بالشكل دا: 
  
```javascript
  +true == +[];
  +true == + ![];
```
كدا أنا عندي ال left side بيساوي `true+` و دا معناه ان ال `true` هيتحول ل `Number data type` اذا هيتحول ل **`1`**.
  بينما ال right side سواء كان `[]! +` أو `[]+`  فدا معناه ان ال `[] empty array` هيتحول ل `Number data type` اذا هيتحول ل **`0`**.
  
  نستنتج من كدا ان الطرفين مش متساويين
  
  ---
  
  نقدر نمثل الكلام دا بالشكل دا
  
  ```javascript
    true == []; // false
    true == ![]; // false
  
  // js engine converts both sides to Numbers by using unary operator (+) 
    +true == +[];
    +true == + ![];
  
 // +true converts to 1 whereas +[] & ! +[] converts to 0
    1 == 0; // result is: false
    1 == 0; // result is: false
  ```
  
  
  
</details>


