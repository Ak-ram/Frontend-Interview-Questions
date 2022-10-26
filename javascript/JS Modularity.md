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
  
  
<div dir=rtl>
  <table>
    <tr>
      <th align=right>#</th>
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
  
  
  
  
  
  
  
  </details>
