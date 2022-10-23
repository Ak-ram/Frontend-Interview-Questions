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

عندنا ثاني صف متقسم من جواه ل 3 اعمدة وهما `Nav` و `content` و `aside` فهنضيفهم جواه ال div.content-body بالشكل دا
```
<div class="content-body">
    <main class="content">Content</main>
    <nav class="sidenav">Nav</nav>
    <aside class="ads">Aside</aside>
</div>
```


كدا الشكل النهائي لكود ال HTML هو 
```
 <div class="container">
  <header class="header">Header</header>
  <div class="content-body">
    <main class="content">Content</main>
    <nav class="sidenav">Nav</nav>
    <aside class="ads">Aside</aside>
  </div>
  <footer class="footer">Footer</footer>
 </div>
```











