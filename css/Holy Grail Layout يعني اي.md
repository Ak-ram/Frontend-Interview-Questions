## السؤال:
### يعني اي Holy Grail Layout ؟
## الاجابة:
### ال Holy Grail Layout عبارة عن page بتكون من `header` و `footer` و 3 اعمدة او أكثر زي ما هو ظاهر في الصورة دي 👇 

<div align=center>
  <a href="https://codepen.io/Akr-am/pen/ZEBYWyX?editors=0100">
    <img width="70%" src='https://user-images.githubusercontent.com/69124951/197384080-a1e6c5f7-fe7f-4b17-b863-e6500d2c69c9.gif' />
  </a>
</div>


ال Layout دا يعتبر من ال css issues الي كنا بنواجه صعوبة في تنفيذه فكنا بنعمله بطرق مختلفة و معقده ولكن مع ظهور ال css3 و ظهور ال flexbox و ال grid الموضوع بقي اسهل بكتير.

دلوقتي هنعرف ازاي نعمل ال Layout دا بال flexbox.

### أولا : كود ال HTML
اول حاجة هنعملها هو container لل Layout بتاعنا `<"div class="container>`
و بعدين هنقسم ال container دا ل 3 صفوف بالشكل دا 👇 

<div align=center>
  <img  width="70%" src='https://user-images.githubusercontent.com/69124951/197385015-84fa6c72-bb65-4394-84f2-363eb7dd7fc2.png' />
</div>

وهنقول ان ال container دا هيكون جواه 
- ال header و الي بيمثل اول صف
- ال div.content-body و الي بيمثل ثاني صف
- ال footer و الي بيمثل ثالث صف
<div align=center>
<img width="50%" src="https://user-images.githubusercontent.com/69124951/197393693-397a5420-654a-49a8-8d91-7a46c1c547d8.png" />  
</div>

عندنا ثاني صف متقسم من جواه ل 3 اعمدة وهما `Nav` و `main` و `aside` فهنضيفهم جواه بالشكل دا

<div align=center>
<img width="50%" src="https://user-images.githubusercontent.com/69124951/197393827-92f16bee-960d-48b5-8e59-5a73a1b85c80.png" />  
</div>


كدا الشكل النهائي لكود ال HTML هو 
<div align=center>
<img width="50%" src="https://user-images.githubusercontent.com/69124951/197393887-5820e21e-97ba-4fe3-b52c-919bb92f7b00.png" />  
</div>



## ثانيا : كود ال CSS
### 1- تنسيق ال div.container

احنا عايزين ال 3 صفوف الي جوا ال div.container يكونوا تحت بعض فعشان اعمل كدا هدي لل div.container خاصية ال flex و هخلي اتجاهه رأسي: 

<div align=center>
<img width="50%" src="https://user-images.githubusercontent.com/69124951/197394351-dd28e4da-2690-41c3-972e-f17e148a3246.png" />  
</div>

هنا حطينا ال `height: 100vh` عشان يملأ ال viewport كله.


### 2- تنسيق ال header و ال footer

ال header و ال footer هديلهم height و ليكن 50px و عايز ال heigth دا يكون ثابت مبيتغيرش -- يعني مش بيحصله grow و لا shrink -- فهحطله `flex-grow: 0` و `flex-shrink: 0`   

<div align=center>
<img width="50%" src="https://user-images.githubusercontent.com/69124951/197394995-19bcd63b-d354-4efc-b97f-ca957fa09d68.png" />  
</div>


هنا احنا استخدمنا ال flex property الي بتعتبر shorthand ل `flex: flex-grow flex-shrink flex-basis` 


### 3- تنسيق ال div.content-body


عايزين بقا ال div.content-body يأخذ ال height المتبقي من ال height بتاع ال container الي هو 100vh فعندي خيارين: 
- هقول ان ال height بتاعه هيساوي `100vh - (height: height of footer + height of header)` الي هو `height: 100vh - (50 * 2)`
- او اديله `flex-grow: 1` 

ثاني حاجه هنعملها هي اننا نديله `display:flex`  و دا عشان اخلي ال `Nav` و `content` و `aside` يكونوا جنب بعض 



<div align=center>
<img width="60%" src="https://user-images.githubusercontent.com/69124951/197395066-357ad337-5e2d-4566-b2b3-61fd44c84724.png" />  
</div>


ال `Nav` و ال `aside`  هديلهم width وليكن `100px` و عايز ال width دا يكون ثابت فهيديلهم `flex-shrink: 0` و `flex-grow: 0`


<div align=center>
<img width="60%" src="https://user-images.githubusercontent.com/69124951/197395189-7f69b14c-4f4b-4985-9c89-08fcca155b9c.png" />  
</div>

و عايز ال div.content بس هو الي يحصله grow و دا عشان يملا ال width المتبفي 
- فهديله flex-grow: 1
- هقول ان ال width بتاعه هيساوي `100vh - (width: width of nav + width of aside)` الي هو `width: 100% - (100px * 2)`


<div align=center>
<img width="60%" src="https://user-images.githubusercontent.com/69124951/197395128-6d838168-71bc-45ba-8292-b05377a8d250.png" />  
</div>

بس كدا #
تقدر تشوف ال source code من هنا : [codepen](https://codepen.io/Akr-am/pen/ZEBYWyX)



