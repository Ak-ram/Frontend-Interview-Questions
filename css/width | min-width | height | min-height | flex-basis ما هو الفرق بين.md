## السؤال: 
### ما هو الفرق بين width | min-width | height | min-height | flex-basis ؟

<br/>

## الاجابة:
| item property        | flex-basis | width | min-width | height | min-height |
|----------------------|------------|-------|-----------|--------|------------|
| Shrinking            | ✔          | ✔     | ❌         | ✔      | ❌          |
| run on non flex-item | ❌          | ✔     | ✔         | ✔      | ✔          |
| positioned items     | Based On   | ✔     | ✔         | ✔      | ✔          |
| flex-shorthand       | ✔          | ❌     | ❌         | ❌      | ❌          |
