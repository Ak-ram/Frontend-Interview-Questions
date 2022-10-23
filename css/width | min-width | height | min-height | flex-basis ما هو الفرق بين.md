## السؤال: 
### ما هو الفرق بين width | min-width | height | min-height | flex-basis ؟

<br/>

## الاجابة:
| min-height | height | min-width | width | flex-basis | item property        |
|------------|--------|-----------|-------|------------|----------------------|
| ❌          | ✔      | ❌         | ✔     | ✔          | Shrinking            |
| ✔          | ✔      | ✔         | ✔     | ❌          | run on non flex-item |
| ✔          | ✔      | ✔         | ✔     | Based On   | positioned items     |
| ❌          | ❌      | ❌         | ❌     | ✔          | flex-shorthand       |
