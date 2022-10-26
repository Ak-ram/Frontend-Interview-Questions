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
  
  
  
###  2. ال attributes بتاع كل script
  
- ال module script بيكون ليه 2 attributes و هما:
  - ال  `"type="module` : ودي بستخدمها عشان أعرف المتصفح أني هنشأ ملف js نوعه module 
  - و ال `nomodule` : بستخدمها عشان ال compatibility
  
أنا لما باجي اعمل module جديد فلازم أعرف المتصفح ان الملف دا عبارة عن module [مش regular script] و دا بيتم عن طريق اني بضيف type="module" زي كدا 
```html
  <script src="..." type="module"></script>
```
في طبعا متصفحات مش بتفهم ال `type=module` [ يعني مش بتدعم ال js modules ] و بالتالي فهي هتتجاهل الملف كله ودا لان ال type بتاعه يعتبر unknown بالنسبة للمتصفح،
 فالي بنعمله أننا بنعمل script ثاني و نضيفله ال `nomodule` و نحط جواه كود يتنفذ في حالة أن المتصفح مش بيدعم ال modules
  
  
  
```html
  <script src="..." type="module">
    // I will execute only if the browser supports js modules
  </script>
  
  <script src="..." type="module">
    // I will execute only if the browser doesn't support modules
  </script>
```  
  
  
  

مثال: 
......




المثال دا هيتنفذ ازاي ؟ 
لو كان المتصفح بيدعم ال js modules فكدا ال script الي فيه nomodule هيتم تجاهله و هيتم تنفيذ الscript الي ليه type="module" 

و لو كان المتصفح مش بيدعم ال js modules فكدا ال script الي فيه type="module" مش هيتنفذ و هيتم تجاهله زي ما قلنا و هيتم تنفيذ الي script الي فيه nomodule attribute

جدوووووووولللللل


..........



٤- ال mode 
ال regular script بيكون sloppy mode و تقدر برده تخليه strict بس ال default هو sloppy

ال module script بيكون دايما strict mode و بالتالي لو عملت مثلا assign ل undeclared variable هيدي error


html

<script type="module">

a= 5; // Error

</script>

  
  
  
  
  
  </details>
