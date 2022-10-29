<h2 align=center>JS Modularity</h2>


<details dir=rtl>
  <summary>
    <h2>الاجابة</h2>
  </summary>
  
  
زمان كانت ال scripts صغيرة و بسيطة بس مع الوقت بدأت ال scripts دي تبقي more complex و حجمها بقي كبير، عشان كدا كنا لازم نشوف طريقة ننظم بيها الكود بتاعنا بحيث يكون سهل القراءة و التعديل عليه فيما بعد و كانت الطريقة دي هي أننا بدل منخلي كل الكود في ملف js واحد بس، هنفصله في أكتر من ملف و دا الي بنسميه `code splitting`


![1mb](https://user-images.githubusercontent.com/69124951/197946369-883f8201-4ccf-44d2-8865-b6bbde6353b2.png)


كل file من ال files الصغيرة دي بنسميه `module` و بيكون جواه كود معين و عشان نعمل ال code splitting دا كنا بنستخدم حاجه اسمها `module system` زي **AMD, UMD, CommonJS**
  
لحد ما ال ES6 نزلت و نزل معاهاstandard بيعمل موضوع ال **Modularity** ده عن طريق ال `exports/imports` أو ال **language level module system**


## يعني اي Module ؟
ال **module** ما هو إلا ملف js عادي ولكن فيه features معينة و كمان ال browser بيتعامل معاه بطريقة معينة.
إذا في فرق بين ال module script و ال regular script و الفروقات دي هي
  
  
<div align=center>
  <table>
    <tr>
      <th align=left>#</th>
      <th  colspan="2" align=center>Regular script</th>
      <th  colspan="2" align=center>Module script</th>
    </tr>
    <tr>
      <td>Protocol</td>
      <td  colspan="2" align=center>local file & Http & Https</td>
      <td  colspan="2" align=center>Https & live-server</td>
    </tr>
    <tr>
      <td>Extension</td>
      <td  align=center colspan="2">js.</td>
      <td  colspan="2" align=center> js. أو mjs. أو mjs.js.</td>
    </tr>
     <tr>
      <td>Type Attribute</td>
      <td  align=center colspan="2">text/javascript</td>
      <td  colspan="2" align=center>module</td>
    </tr>
    <tr>
      <td>Default Mode</td>
      <td  align=center colspan="2">Sloppy mode</td>
      <td  colspan="2" align=center>Strict mode</td>
    </tr>
    <tr>
      <td>Scope</td>
      <td  align=center colspan="2">Global Scope</td>
      <td  colspan="2" align=center>Module-Level Scope</td>
    </tr>
    <tr>
      <td>value of this keyword</td>
      <td  align=center colspan="2">window object</td>
      <td  colspan="2" align=center>Undefined</td>
    </tr>
    <tr>
      <td>import.meta object</td>
      <td  align=center colspan="2">❌</td>
      <td  colspan="2" align=center>✔</td>
    </tr>
    <tr>
      <td>Execution Time</td>
      <td  align=center colspan="2">sync</td>
      <td  colspan="2" align=center>deferred & async</td>
    </tr>
  </table>
</div>
  
  
 تعالي نشرح الجدول دا واحده واحده.
  


  
###  1. ال Protocol 
  
 <table dir=ltr align=center>
    <tr>
      <th align=center>#</th>
      <th  colspan="2" align=center>Regular script</th>
      <th  colspan="2" align=center>Module script</th>
    </tr>
    <tr>
      <td>Protocol</td>
      <td  colspan="2" align=center>local file & Http & Https</td>
      <td  colspan="2" align=center>Https & live-server</td>
    </tr>
 </table>
  
  
  
  - ال regular script : بيشتغل علي ال local file Protocol و ال HTTPS Protocol وال HTTP Protocol
  - ال module script : بيشتغل علي ال Https Protocol و ال live server بس

---

  ### 2. ال Extension
     
    
 <table dir=ltr align=center>
    <tr>
      <th align=center>#</th>
      <th  colspan="2" align=center>Regular script</th>
      <th  colspan="2" align=center>Module script</th>
    </tr>
    <tr>
   <tr>
      <td>Extension</td>
      <td  align=center colspan="2">js.</td>
      <td  colspan="2" align=center> js. أو mjs. أو mjs.js.</td>
    </tr>
 </table>
  
   - ال regular script : ال extenstion بتاعه بيكون `.js` زي كدا 
   - ال module script : ال extension بتاعه بيكون `.js` أو `.mjs` او `.mjs.js` 
 
  
  ```ruby
  regularScript.js
  moduleScript.js OR moduleScript.jsx OR moduleScript.mjs.js
  ```
  
 
  
  ---
  
  
  
###  3. ال Type Attribute
  
  
   <table dir=ltr align=center>
    <tr>
      <th align=center>#</th>
      <th  colspan="2" align=center>Regular script</th>
      <th  colspan="2" align=center>Module script</th>
    </tr>
    <tr>
      <td>Type Attribute</td>
      <td  align=center colspan="2">text/javascript</td>
      <td  colspan="2" align=center>module</td>
    </tr>
 </table>
  
  
  
  
  
  - ال regular script بيكون ليه `type="text/javascript"` بشكل افتراضي (by default) فمفيش داعي أكتبه
- ال module script : بستخدم معاه `type="module"` و دا عشان أعرف المتصقح أن ملف ال js نوعه module
  
أنا لما باجي اعمل module جديد فلازم أعرف المتصفح ان الملف دا عبارة عن module [مش regular script] و دا بيتم عن طريق اني بضيف type="module" زي كدا 
```html
  <script src="..." type="module"></script>
```
في طبعا متصفحات مش بتفهم ال `type=module` [ يعني مش بتدعم ال js modules ] و بالتالي فهي هتتجاهل الملف كله ودا لان ال type بتاعه يعتبر unknown بالنسبة للمتصفح،
 فالي بنعمله أننا بنعمل script ثاني و نضيفله ال `nomodule` و نحط جواه كود يتنفذ في حالة أن المتصفح مش بيدعم ال modules
  
  
  
```html
  <script src="..." type="module">
    // I will execute only if the browser supports js modules 1️⃣ 
  </script>
  
  <script src="..." nomodule>
    // I will execute only if the browser doesn't support modules 2️⃣
  </script>
```  
 


المثال دا هيتنفذ ازاي ؟ 
لو المتصفح بيدعم ال js modules فكدا ال script رقم 2️⃣ هيتم تجاهله و هيتم تنفيذ الscript رقم 1️⃣  
و لو كان المتصفح مش بيدعم ال js modules فكدا ال script رقم 2️⃣ مش هيتنفذ و هيتم تجاهله و هيتم تنفيذ الي script رقم 1️⃣ 



---

###  4. ال Mode

  
  
   <table dir=ltr align=center>
    <tr>
      <th align=center>#</th>
      <th  colspan="2" align=center>Regular script</th>
      <th  colspan="2" align=center>Module script</th>
    </tr>
    <tr>
    <tr>
      <td>Default Mode</td>
      <td  align=center colspan="2">Sloppy mode</td>
      <td  colspan="2" align=center>Strict mode</td>
    </tr>
 </table>
  

- ال regular script : بيكون sloppy mode (default mode) و تقدر برده تخليه strict
- ال module script : بيكون دايما strict mode و بالتالي لو عملت مثلا assign ل undeclared variable هيدي error


```html
  <script type="module">
    a= 5; // Error
  </script>
```
  
  ---

###  5. ال Scope

- ال Regular Script بيكون global scope بمعني ان لو عندي ملفين js مستدعيهم في ال Html بالشكل ده
  ```html
  <script src="regularScript1.js"></script>
  <script src="regularScript2.js"></script>
  ```
  فال `regularScript2` يقدر يستخدم ال functions و ال variables و ال classes ال موجوده في `regularScript1`
  
  
- ال module script بيكون ليه scope خاص بيه اسمه `module-level scope` و بالتالي مش هتقدر ت acess علي ال functions و ال variables و ال classes الي جوا ال module دا بطريقة مباشرة زي ما عملنا مع ال regular script
  
```javascript
// in moduleScript.js file
let user = "Ali"
  
// in another js file
alert(user); // Error   
```
  هنا أدي error لأن ال user موجود جوا module scope... 
  
  طب الحل اي ؟ ازاي نعمل sharing للمحتويات بتاع ال module دا بحيث نقدر نستخدمهم في modules ثانية ؟
  
  
  الحل هنا أننا هنستخدم special keywords أو special directives معمولين خصيصا عشان نقدر نتعامل مع ال modules و هما ال  `import` & `export` زي كدا :
 ```html
  <!-- index.html -->
  <script src="a.js" type="module"></script>
 ```
  
  
```javascript
  // a.js
  let user = "Ali"
  export {user}
 ```
  
```javascript
  // b.js
  import {user} from "./a.js"
  aler(user); // Ali
 ```
    
  
  
  
---

###  6. ال this keyword
- ال regular script : ال this بتشير الي ال window object
- ال module script : ال this بتكون undefined و دا لأن ال module زي ما قلنا قبل كدا بيكون strict mode
  
```html
<!--  in regular scripts  -->
  
  <script>
    alert(this); // window object
  </script>
  ```
  
```html
<!--  in module scripts  -->
  
  <script type='module'>
    alert(this); // undefined
  </script>
```
  
  
  </details>
