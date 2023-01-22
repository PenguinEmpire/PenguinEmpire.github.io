---
title: Random links
---

# Random links

These links have been useful to our club members. Hopefully they will be useful to you.

## FRC
[FIRST Robotics Competition Documentation](https://docs.wpilib.org/en/stable/index.html)

## NavX (purple board attached to RoboRio)
[NavX Library 2023](https://www.chiefdelphi.com/t/navx-library-2023/421746)

## Stalling a motor to hold position
[Stalling any motor to hold position is not good design practice. Each different motors have different characteristics that will determine how long they can survive a stall condition. A CIM can last longer than a NEO but a NEO can last longer than a 775pro so it is all relative.](https://www.chiefdelphi.com/t/neo-brushless-motor-on-lift-system-smoking/345647/5)
[Tuning a Vertical Arm Position Controller](https://docs.wpilib.org/en/stable/docs/software/advanced-controls/introduction/tuning-vertical-arm.html)
[Neo Brushless Motor on Lift System Smoking](https://www.chiefdelphi.com/t/neo-brushless-motor-on-lift-system-smoking/345647)

## Machine Learning

[Machine Learning Mastery](https://machinelearningmastery.com/start-here/)
[NVIDIA Deep Learning Institute and Training Solutions](https://www.nvidia.com/en-us/training/)

## Apriltags

[2023 FRC AprilTag Images and User Guide](https://firstfrc.blob.core.windows.net/frc2023/FieldAssets/TeamVersions/AprilTags-UserGuideandImages.pdf)

[TagTracker from Southwest Robotics Programming github](https://github.com/SouthwestRoboticsProgramming/TagTracker)


## NVIDIA Jetson

### NVIDIA Jetson TX1 (discontinued)
[Guide to TX1 from Team 900](https://team900.org/blog/Guide-To-TX1/)
> Powering the TX1 is tricky. From experience. it does not function well with large power fluctuations. Nvidia’s engineers have released a few versions of the carrier board to help with this but you will still want to run a voltage regulator between the board and the power supply.
> Team 900 has had a lot of success with this particular converter in actual FRC competitions:
[DROK DC/DC Automatic Boost Buck Converter Module 60W Constant Voltage/Current Car Voltage Regulator DC5-32V to 1.25-20V Adjustable Current Step Up & Step Down Voltage Converter for Battery Charging](https://www.amazon.com/dp/B00JKG57T4)
> Do not use the VRM (Voltage Regulator Module) to power both your Radio and the TX1. If you do it’s entirely possible that your VRM will no longer function after pulling too much current. You might be able to use a second VRM just for the TX1 but you are much better off using the voltage regulator linked above as it is cheaper and has been tested in competitions.

### NVIDIA Jetson Nano 2GB

[Devkit user guide for Jetson Nano 2GB](https://developer.nvidia.com/embedded/learn/jetson-nano-2gb-devkit-user-guide)

The [Jetson Linux Archive](https://developer.nvidia.com/embedded/jetson-linux-archive) shows that [Jetson Linux v 32.7.3](https://developer.nvidia.com/embedded/linux-tegra-r3273) is the latest version supported on the Jetson Nano and Jetson TX1.

JetPack is a useful tool for loading extra software on the Jetson. The [JetPack Archive](https://developer.nvidia.com/embedded/jetpack-archive) shows that [JetPack 4.6.3](https://developer.nvidia.com/jetpack-sdk-463) is the latest version supported on the TX1 and Nano. Note that it includes Jetson Linux for Tegra (L4T) 32.7.3.

JetPack 4.6.1 (and 4.6.3) includes OpenCV 4.1.1 and  [VPI 1.2](https://docs.nvidia.com/vpi/release_notes.html)
For VPI1.2:
- Production quality support for Python bindings
- Multi-Stream support in Python bindings to allow creation of multiple streams to parallelize operations
- Support for calling Python scripts in a VPI Stream
- New algorithms
> - Image Erode\Dilate algorithm on CPU and GPU backends
> - Image Min\Max location algorithm on CPU and GPU backends



## ROS

[FRC Robotics with ROS discussion on Chief Delphi](https://www.chiefdelphi.com/t/frc-robotics-with-ros/384928)

> [Team 624](https://frc624.org/) (CRyptonite Robotics) from Texas uses a coprocessor from [Up-Board](https://up-board.org/) along with WPIlib Java on the RoboRIO. They run a ROS environment on Ubuntu 20.04 on the co-processor for custom vision tracking and autonomous path planning.

## GStreamer

[GStreamer plugin that implements an RTP payloader and depayloader for AV1, without support for SVC](https://gitlab.freedesktop.org/gstreamer/gst-plugins-rs/-/merge_requests/802)

## Limelight

### Limelight 3
[Limelight Vision for FRC on YouTube](https://youtu.be/rNEqI0NizVs)
> h.264 video streaming, object recognition, field localization and april tags integration all included

## OpenCV Examples

### Image Capture (color)
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

### Image capture (greyscale)
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

[Cascade Trainer GUI - Amin](https://amin-ahmadi.com/cascade-trainer-gui/)

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
