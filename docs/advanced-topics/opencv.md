---
sidebar_position: 5
---

# OpenCV
Computer Vision Library 

- [OpenCV.org](https://opencv.org/)
- [OpenCV v4.1.1](https://docs.opencv.org/4.1.1/) works well with Python 2
### OpenCV Image Capture (color) Example
```python
import cv2

webcam=cv2.VideoCapture(1)

i=0

while (i<30):
    control,frame=webcam.read()
    cv2.imshow("Frames",frame)
    cv2.waitKey(0)
    cv2.imwrite("count"+str(i)+".jpg",frame)
    i+=1
    if (cv2.waitKey(10) & 0xFF==ord('q')):
        break
```

### OpenCV Image capture (greyscale) Example
```python
import cv2

webcam=cv2.VideoCapture(1)

i=0

while (i<30):
    control,frame=webcam.read()
    gray=cv2.cvtColor(frame,cv2.COLOR_BGR2GRAY)
    cv2.imshow("Frames",gray)
    cv2.waitKey(0)
    cv2.imwrite("count"+str(i)+".jpg",gray)
    i+=1
    if (cv2.waitKey(10) & 0xFF==ord('q')):
        break
```

### Crop and training with Cascade Trainer GUI

- [Cascade Trainer GUI - Amin](https://amin-ahmadi.com/cascade-trainer-gui/)

Training generates a XML files (adurino.xml) that can be parsed in here...

```python
import cv2

webcam=cv2.VideoCapture(1)

def arduino(webcam):
    arduino_xml=cv2.CascadeClassifier("arduino.xml")
    while (True):
        control,frame=webcam.read()
        gray=cv2.cvtColor(frame,cv2.COLOR_BGR2GRAY)
        result=arduino_xml.detectMultiScale(gray,1.1,4)
        for (x,y,w,h) in result:
            cv2.putText(frame,"Arduino",(x,y-10),cv2.FONT_HERSHEY_SIMPLEX,1,(255,0,0),3)
            cv2.rectangle(frame,(x,y),(x+w,y+h),(255,0,0),4)
        if (cv2.waitKey(10) & 0xFF==ord('q')):
            break
        cv2.imshow("Arduino",frame)

while (True):
    arduino(webcam)
```
