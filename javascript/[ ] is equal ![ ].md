<h2 align=center>هل ال [ ] == ال ![ ] في الجافاسكربت</h2>


<details dir=rtl>
  <summary>
    <h2>الاجابة</h2>
  </summary>
  
```javascript
  [] == ![]; // -> true
```
  
### الكود دا اتنفذ ازاي ؟؟
 أنا عندي ال `(==) abstract equality` بتعمل مقارنة بين عددين, يعني ال left side و ال right side لازم يكونوا أعداد زي كدا
  
  ```javascript
  4 == 4  // true
  3 == 9  // false
  ```
بس ال js engine لما يجي يقارن ال two sides مع بعض هيلاقي انهم مش `Numbers` فبيعمل `Automatic conversion` ليهم بحيث يحولهم لأرقام.
 
و عشان يحولهم لارقام بيستخدم ال `+` بالشكل دا: 
  
```javascript
  +[] == +![];
```
كدا أنا عندي ال left side بيساوي `[]+` و دا معناه ان ال `empty array` هيتحول ل `Number data type` اذا هيتحول ل **`0`**.
  
بينما ال right side بيساوي `[]! +` و دا معناه ان ال `empty array` هيتحول الاول ل `Boolean data type` و الي هي `true` و بسبب وجود ال `!` فهيتحول ل `false` فهيكون عندي `false+` الي هي **`0`**
 
#### اذن الطرفين متساويين
  ---
نقدر نمثل الخطوات دي بالشكل ده: 
  
```javascript
  +[] == +![];
  0 == +false;
  0 == 0;
  true;
```
  
  
  
</details>

