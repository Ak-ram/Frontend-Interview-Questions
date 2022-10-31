<h2 align=center>baNaNa old-school joke</h2>

```javascript
  "b" + "a" + +"a" + "a"; // -> 'baNaNa'
```

<details dir=rtl>
  <summary>
    <h2>التفسير 💡</h2>
  </summary>
  
الكود دا هيتنفذ كدا 
  ```javascript
  ("ba") + (+"a") + ("a");
  ```
  
  بما أن ال `"a"+` مش عدد فهيدي `NaN` بالشكل دا 
  
```javascript
  ("ba") + (NaN) + ("a"); // after concat it will give: baNaNa
``` 
  
</details>


