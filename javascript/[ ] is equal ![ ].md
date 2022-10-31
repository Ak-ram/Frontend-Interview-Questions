<h2 align=center>هل ال [ ] == ال ![ ] في الجافاسكربت</h2>


<details dir=rtl>
  <summary>
    <h2>الاجابة</h2>
  </summary>
  
```javascript
  [] == ![]; // -> true
```
السبب : 
هو أن ال `(==) abstract equality` بتعمل مقارنة بين ال right side و ال left side و المقارنة دي بتم كلاتي:
  - بتحول ال right side و ال left side لارقام بالشكل دا 
  
  ```javascript
  +[] == +![]; // step 1
  ```
  
  بالنسبة لل left side فأنا عندي ال `+` و دا هيحولي ال empty array ل Number value و هي 0 و بالتالي +0 هتدي 0
  بالنسبة لل left side فأنا عندي ال `!` و دا بيحولي ال empty array ل Boolean value و هي `true` و بالتالي true! هتدي false و 
  
  
</details>

