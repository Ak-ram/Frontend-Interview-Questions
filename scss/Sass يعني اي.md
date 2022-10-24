<h2 align=center>يعني اي SASS ؟</h2>

<details dir=rtl>
  <summary>
    <h2>الاجابة</h2>
  </summary>
  <div>

ال **SASS** هي اختصار ل `Syntactically Awesome Style Sheets` و هي عبارة عن CSS Extension 
> معني CSS Extension هي أن ال SASS فيها مميزات مش موجودة في ال CSS العادية

   المميزات دي هي انها:
   <ol type='1'>
      <li> بتسمحلنا نستخدم اوامر برمجية زي ال loop - functions - variables وغيرهم في كتابة ال style و دا هيخليني اكتب الكود مرة واحدة و استخدمه اكثر من مرة (DRY: Dont Repeat Yourself)
        <div align=center>
          <br />
          <img width=65% src="https://user-images.githubusercontent.com/69124951/197527274-467192e2-8cf1-4249-88bd-962fd6de0426.png" />
        </div>
      </li>
      <li> حلت مشكلة ال Globality عن طريق ال Nesting
      </li>
      <li> بتوفرلي ال Paritials الي تخلي الكود منظم اكتر و سهل اعدل عليه فيما بعد
        <div align=center>
          <br />
          <img width=65% src="https://user-images.githubusercontent.com/69124951/197530094-59bad686-3f48-447e-9877-64847a74156f.png" />
        </div>
      </li>
      <li> بتقلل نسبة الخطأ في ال syntax و دا لانها بتعرفلك الخطأ موجود في انهي سطر و سببه اي
        <div align=center>
          <br />
          <img width=65% src="https://user-images.githubusercontent.com/69124951/197531294-3168f05b-f870-4dc5-a66a-93422d9435f9.png" />
        </div>
      </li>
    </ol>

المتصفح مش بيفهم الا HTML, CSS, JS و بالتالي مش هيفهم كود ال sass, عشان كدا فاحنا محتاجين ل compiler يحول ال sass الي css عادية بحيث يفهمها المتصفح و للسبب دا بقول علي ال sass انها pre-processor
  
  <div align=center>
          <br />
          <img width=50% src="https://user-images.githubusercontent.com/69124951/197576140-705d439e-83ca-415a-a419-51975bb7de64.jpg" />
        </div>
  </div>
</details>
