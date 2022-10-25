<h2 align=center>syntactic sugar مجرد Arrow function هل ال</h2>


<details dir=rtl>
  <summary>
    <h2>الاجابة</h2>
  </summary>

  ال Arrow function هي طريقة تانية لكتابة ال regular function و ال syntax بتاعها هو:-
  ```javascript
   (arg1,arg2,...,argN) => expression
  ```
 طيب هو احنا كنا عايزين حاجة زي ال Arrow Function دي لي ؟ `لسببين`
 ```mermaid
  flowchart TD
    B["fab:fa-twitter Arrow function ال"]
    B-->C(this keyword بتحل المشكلة الأزلية لل )
    B-->E[ regular function لل Syntactic Sugar تعتبر]
```
  


هنبدأ دلوقتي نشرح كل سبب بالتفصيل...
  
### أولا: انها syntactic sugar 
 
ال arrow function تعتبر short syntax و concise و بتوفر علينا ال Boilerplate code بتاع ال regular function و في شوية rules لازم تتبعها عشان تكتب ال arrow function و هي:
  - لازم نعملها assign ل variable معين أو نستخدمها ك callback [يعني مينفعش أعملها define علطول زي ال regular function]
  ```javascript
  
  // assign to a variable
let func = (arg1,arg2,...,argN)=> expression

// pass as a callback
[...].map((arg1,arg2,...,argN)=> expression)
  
  ```
  
  - عدد ال params لو كان: 
    - 1 بس فال ( ) هيكونوا اختياري 
    - أكتر من 1  فال ( ) هيكونوا اجباري
    - من غير Params خالص فأنت ممكن
        - تسيب ال ( ) فاضيين
        - تحط underscore بالشكل دا ( _ ) أو _

  
  ```javascript
  

  const func = (x) => expression  أو   const func = x => expression
  const func = (x,y,z) => expression
  const func = ()=> expression أو const func = _ => expression أو const func = (_)=> expression
  ```
 - عدد ال statements جوا ال function body لو كان:
    - كتير : فبستخدم ال {} و return keyword يعني ال return هنا هيكون نوعهاexplicit return
    - واحده بس : فأقدر أستغني عن ال {} و return keyword يعني ال return هنا هيكون نوعها implicit return
    

  
  
  
```javascript
 const func = (x,y,z) => {
    // statement 1
    // statement 2
  return x+y+z;  // explicit return
  }
  const func = (x,y,z) => x + y + z; // implicit return
```
  
  - في حالة ال implicit return لو هنعمل return ل object فهنا لازم نحط ال object دا جوا ( ) بالشكل دا:
 
  ```javascript
  const func = () => ( {name: 'Ali'} )
  ```
  و برده في ال React لما نيجي نعمل return ل jsx object بنحطه جوا ( ) 
  ```JSX
  policy.values.map(value => {
    return (
      <Form.Field key={ value.name }>
         <label>{ value.displayName || value.name }</label>
          <Checkbox toggle />
      </Form.Field> )
  }
  ```
  

### ثانيا: انها حلت مشكلة ال this keyword

  في الأول خلينا نعرف اي هي مشكلة ال `this` الي بنتكلم عليها...
  لو بصيت علي الكود دا
  ```js
  
  let group = {
    title: "our group",
    students: ["Ali", "Mohamed", "Akram"],
    showList (){
      this.students.forEach(function func(student){
        alert(this.title + ": " + student)
      })
    }
  }
  
  
  ```
  
  
</details>


