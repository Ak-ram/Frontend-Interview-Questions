<h2 align=center>syntactic sugar مجرد Arrow function هل ال</h2>

<details dir=rtl>
  <summary>
    <h2>الاجابة</h2>
  </summary>

  ال Arrow function هي طريقة تانية لكتابة ال regular function و ال syntax بتاعها هو:-
  ```javascript
    (arg1,arg2,...,argN) => {
      // ...
    }
  ```
 طيب هو احنا كنا عايزين حاجة زي ال Arrow Function دي لي ؟ `لسببين`
  
- انها syntactic sugar
- بتحل المشكلة الأزلية لل `this` keyword


هنبدأ دلوقتي نشرح كل سبب بالتفصيل...
  
### أولا: انها syntactic sugar 
 
ال arrow function تعتبر short syntax و concise و بتوفر علينا ال Boilerplate code بتاع ال regular function و في شوية rules لازم تتبعها عشان تكتب ال arrow function و هي:
  - لازم نعملها assign ل variable معين أو نستخدمها ك callback [يعني مينفعش أعملها define علطول زي ال regular function]
  img
</details>


