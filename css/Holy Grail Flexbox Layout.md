# السؤال: كيفية عمل Holy Grail Flexbox Layout باستخدام ال CSS ؟

الصورة بالاسفل توضح ال Layout المطلوب عمله 👇

<div align=center>
  <a href="https://codepen.io/Akr-am/pen/ZEBYWyX?editors=0100">
    <img width="70%" src='https://user-images.githubusercontent.com/69124951/197384080-a1e6c5f7-fe7f-4b17-b863-e6500d2c69c9.gif' />
  </a>
</div>


# الاجابة:
## اولا : كود ال HTML
اول حاجة هنعملها هو container لل Layout بتاعنا `<"div class="container>`
و بعدين هنقسم ال container دا ل 3 صفوف بالشكل دا 👇 

<div align=center>
  <img  width="70%" src='https://user-images.githubusercontent.com/69124951/197385015-84fa6c72-bb65-4394-84f2-363eb7dd7fc2.png' />
</div>

فهنفول ان ال container هيكون جواه 
- ال header و الي بيمثل اول صف
- ال div.content-body و الي بيمثل ثاني صف
- ال footer و الي بيمثل ثالث صف
```
 <div class="container">
  <header class="header">Header</header>
  <div class="content-body"></div>
  <footer class="footer">Footer</footer>
 </div>
```

عندنا ثاني صف متقسم من جواه ل 3 اعمدة وهما `Nav` و `content` و `aside` فهنضيفهم جواه بالشكل دا
```
  <div class="content-body">
    <nav class="sidenav">Nav</nav>
    <main class="content">Content</main>
    <aside class="ads">Aside</aside>
  </div>
```


كدا الشكل النهائي لكود ال HTML هو 
```
 <div class="container">
  <header class="header">Header</header>
  <div class="content-body">
    <nav class="sidenav">Nav</nav>
    <main class="content">Content</main>
    <aside class="ads">Aside</aside>
  </div>
  <footer class="footer">Footer</footer>
 </div>
```



## ثانيا : كود ال CSS
### 1- تنسيق ال div.container

احنا عايزين ال 3 صفوف الي جوا ال div.container يكونوا تحت بعض فعشان اعمل كدا هدي لل div.container خاصية ال flex و هخلي اتجاهه رأسي: 

```
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
 }
```
هنا حطينا ال `height: 100vh` عشان يملأ ال viewport كله.


### 2- تنسيق ال header و ال footer

ال header و ال footer هديلهم height و ليكن 50px و عايز ال heigth دا يكون ثابت مبيتغيرش -- يعني مش بيحصله grow و لا shrink -- فهحطله `flex-grow: 0` و `flex-shrink: 0`   

```
 .header, .footer {
  flex: 0 0 50px;
  background: #34495E;;
 }
```
هنا احنا استخدمنا ال flex property الي بتعتبر shorthand ل `flex: flex-grow flex-shrink flex-basis` 


### 3- تنسيق ال div.content-body


عايزين بقا ال div.content-body يأخذ ال height المتبقي من ال height بتاع ال container الي هو 100vh فعندي خيارين: 
- هقول ان ال height بتاعه هيساوي `100vh - (height: height of footer + height of header)` الي هو `height: 100vh - (50 * 2)`
- او اديله `flex-grow: 1` 









