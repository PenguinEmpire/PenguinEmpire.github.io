---
title: Random links
---

# Random links

These links have been useful to our club members. Hopefully they will be useful to you.

## FRC
[FIRST Robotics Competition Documentation](https://docs.wpilib.org/en/stable/index.html)

### FRC Control System
[FRC Control System](https://docs.wpilib.org/en/stable/index.html)
## NavX (purple board attached to RoboRio)
[NavX Library 2023](https://www.chiefdelphi.com/t/navx-library-2023/421746)
[navX MXP | Robotics Navigation Sensor](http://www.pdocs.kauailabs.com/navx-mxp/)
[Field-Oriented Drive | navX MXP](http://www.pdocs.kauailabs.com/navx-mxp/examples/field-oriented-drive/)
[Automatic Balancing | navX MXP](http://www.pdocs.kauailabs.com/navx-mxp/examples/automatic-balancing/)
[Motion Detection | navX MXP](http://www.pdocs.kauailabs.com/navx-mxp/examples/rotate-to-angle/)

## Swerve Drive
[Swerve Drive Kinematics — FRC documentation](https://docs.wpilib.org/en/stable/docs/software/kinematics-and-odometry/swerve-drive-kinematics.html)
[Rectengular Swerve with MK4 - Technical / Programming - Chief Delphi](https://www.chiefdelphi.com/t/rectengular-swerve-with-mk4/399906/4)
[Paper: 4 wheel independent drive & independent steering ("swerve") - CD-Media: Papers - Chief Delphi](https://www.chiefdelphi.com/t/paper-4-wheel-independent-drive-independent-steering-swerve/107383)
[Issues with swervedrivespecialties mk3 swerve program - Technical - Chief Delphi](https://www.chiefdelphi.com/t/issues-with-swervedrivespecialties-mk3-swerve-program/395499/2)
[SDS MK4 Swerve Module - Chief Delphi](https://www.chiefdelphi.com/t/sds-mk4-swerve-module/394644)

## Network Tables
[Establishing NetworkTables Connections — FRC documentation](https://docs.wpilib.org/en/stable/docs/software/dashboards/glass/networktables-connection.html)
[Glass — FRC documentation](https://docs.wpilib.org/en/stable/docs/software/dashboards/glass/index.html)

## Stalling a motor to hold position
[Stalling any motor to hold position is not good design practice. Each different motors have different characteristics that will determine how long they can survive a stall condition. A CIM can last longer than a NEO but a NEO can last longer than a 775pro so it is all relative.](https://www.chiefdelphi.com/t/neo-brushless-motor-on-lift-system-smoking/345647/5)
[Tuning a Vertical Arm Position Controller](https://docs.wpilib.org/en/stable/docs/software/advanced-controls/introduction/tuning-vertical-arm.html)
[Neo Brushless Motor on Lift System Smoking](https://www.chiefdelphi.com/t/neo-brushless-motor-on-lift-system-smoking/345647)

## Machine Learning
[Machine Learning Mastery](https://machinelearningmastery.com/start-here/)
[NVIDIA Deep Learning Institute and Training Solutions](https://www.nvidia.com/en-us/training/)

## Apriltags
[2023 FRC AprilTag Images and User Guide](https://firstfrc.blob.core.windows.net/frc2023/FieldAssets/TeamVersions/AprilTags-UserGuideandImages.pdf)

[Sept 2022 FRC blog post describing AprilTag target usage](https://www.firstinspires.org/robotics/frc/blog/2022-control-system-reporting-2023-updates-and-beta-testing)

[Oct 2022 - Bill Kinahan (kinahawi) of FRC Team 4572 working with OpenCV, apriltags and Nano with RPi camera](https://www.firstinspires.org/robotics/frc/blog/2022-control-system-reporting-2023-updates-and-beta-testing)

[Github - AprilTag ID to Pose API merged into wpilibsuite:main](https://github.com/wpilibsuite/allwpilib/pull/4421/files)

[TagTracker from Southwest Robotics Programming github](https://github.com/SouthwestRoboticsProgramming/TagTracker)

[TagTracker Wiki](https://github.com/SouthwestRoboticsProgramming/TagTracker/wiki)

[TagTracker Installation](https://github.com/SouthwestRoboticsProgramming/TagTracker/wiki/Installation)

[PhotonVision - Getting started with AprilTags](https://docs.photonvision.org/en/latest/docs/getting-started/april-tags.html)

[PhotonVision documentation for getting AprilTag data from a target](https://docs.photonvision.org/en/latest/docs/programming/photonlib/getting-target-data.html#getting-apriltag-data-from-a-target)

[PhotonVision - Using Target Data to estimate field-relative robot pose](https://docs.photonvision.org/en/latest/docs/programming/photonlib/using-target-data.html#estimating-field-relative-pose-traditional)

[ChiefDelphi - PhotonVision announces AprilTag support in Sept 2022](https://www.chiefdelphi.com/t/photonvision-beta-2023-apriltags/415626)

## NVIDIA Jetson
[NVIDIA Developer site](https://developer.nvidia.com/)
[Jetson AI Courses and Certifications](https://developer.nvidia.com/embedded/learn/jetson-ai-certification-programs)
[JetsonHacksNano on Github](https://github.com/JetsonHacksNano/)

### NVIDIA Jetson TX1 (discontinued)
[Orbitty Carrier for NVIDIA® Jetson™ TX2/TX2i/TX1 - Connect Tech Inc.]http://connecttech.com/product/orbitty-carrier-for-nvidia-jetson-tx2-tx1/)
[Guide to TX1 from Team 900](https://team900.org/blog/Guide-To-TX1/)
> Powering the TX1 is tricky. From experience. it does not function well with large power fluctuations. Nvidia’s engineers have released a few versions of the carrier board to help with this but you will still want to run a voltage regulator between the board and the power supply.
> Team 900 has had a lot of success with this particular converter in actual FRC competitions:
[Amazon - DROK DC/DC Automatic Boost Buck Converter Module 60W Constant Voltage/Current Car Voltage Regulator DC5-32V to 1.25-20V Adjustable Current Step Up & Step Down Voltage Converter for Battery Charging](https://www.amazon.com/dp/B00JKG57T4)
> Do not use the VRM (Voltage Regulator Module) to power both your Radio and the TX1. If you do it’s entirely possible that your VRM will no longer function after pulling too much current. You might be able to use a second VRM just for the TX1 but you are much better off using the voltage regulator linked above as it is cheaper and has been tested in competitions.

### NVIDIA Jetson Nano 2GB
[Getting Started with Jetson Nano 2GB Developer Kit](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-2gb-devkit#next)

[Jetson Nano 2GB Developer Kit User Guide](https://developer.nvidia.com/embedded/learn/jetson-nano-2gb-devkit-user-guide)

The [Jetson Linux Archive](https://developer.nvidia.com/embedded/jetson-linux-archive) shows that [Jetson Linux v 32.7.3](https://developer.nvidia.com/embedded/linux-tegra-r3273) was the latest version supported on the Jetson Nano and Jetson TX1 as of early 2023.

[NVIDIA Jetson Linux Developer Guide - v32.7.3](https://docs.nvidia.com/jetson/archives/l4t-archived/l4t-3273/index.html)

[Jetson Linux API Reference - v32.7.3](https://docs.nvidia.com/jetson/l4t-multimedia/index.html)

[NVIDIA Multimedia API Sample Applications from Jetson Linux API Reference](https://docs.nvidia.com/jetson/l4t-multimedia/group__l4t__mm__test__group.html)

JetPack is a useful tool for loading extra software on the Jetson. The [JetPack Archive](https://developer.nvidia.com/embedded/jetpack-archive) shows that [JetPack 4.6.3](https://developer.nvidia.com/jetpack-sdk-463) was the latest version supported on the TX1 and Nano as of early 2023. Note that it includes Jetson Linux for Tegra (L4T) 32.7.3.

JetPack 4.6.1 (and 4.6.3) includes OpenCV 4.1.1 and  [VPI 1.2](https://docs.nvidia.com/vpi/release_notes.html)
For VPI1.2:
- Production quality support for Python bindings
- Multi-Stream support in Python bindings to allow creation of multiple streams to parallelize operations
- Support for calling Python scripts in a VPI Stream
- New algorithms
> - Image Erode\Dilate algorithm on CPU and GPU backends
> - Image Min\Max location algorithm on CPU and GPU backends

[Configuring the Jetson CSI Connector (30-pin Expansion Header)](https://docs.nvidia.com/jetson/archives/l4t-archived/l4t-3273/index.html#page/Tegra%20Linux%20Driver%20Package%20Development%20Guide/hw_setup_jetson_io.html#wwpID0E02D0HA)

### NVIDIA Jetson Orin Nano (available in March 2023)
[Jetson Orin Modules and Developer Kit
](https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-orin/)
[Solving Entry-Level Edge AI Challenges with NVIDIA Jetson Orin Nano (Sept 2022 Blog)](https://developer.nvidia.com/blog/solving-entry-level-edge-ai-challenges-with-nvidia-jetson-orin-nano/)
[NVIDIA® Jetson Orin™ Nano Products on Connect Tech](https://connecttech.com/products/nvidia-jetson-orin-nano/)
[Boson for FRAMOS Carrier Board for NVIDIA® Jetson Orin™ Nano](https://connecttech.com/product/boson-for-framos-carrier-board-for-nvidia-jetson-orin-nano/)
[SeeedStudio Jetson Orin Nano based reComputer](https://www.seeedstudio.com/blog/2022/09/30/orin-nano-a-new-member-joins-the-nvidia-jetson-series-for-next-level-entry-of-edge-ai/)
### VNC for remote desktop to NVIDIA Jetson
[Setting Up VNC | NVIDIA Developer](https://developer.nvidia.com/embedded/learn/tutorials/vnc-setup)
### Cameras for Jetson
Raspberry Pi HQ camera with C/CS-Mount lens
[Raspberry Pi HQ camera IMX477 Linux driver for Jetson from RidgeRun](https://developer.ridgerun.com/wiki/index.php?title=Raspberry_Pi_HQ_camera_IMX477_Linux_driver_for_Jetson)
[NVIDIA Jetson IMX477 HQ RPI V3 camera driver from RidgeRun on GitHub](https://github.com/RidgeRun/NVIDIA-Jetson-IMX477-RPIV3)
[Installing the IMX477 driver on Jetson platforms using debian packages](https://developer.ridgerun.com/wiki/index.php?title=Raspberry_Pi_HQ_camera_IMX477_Linux_driver_for_Jetson#Installing_the_Driver_-_Option_A:_Debian_Packages_.28Recommended.29)
[Jetson Nano + Raspberry Pi Camera - YouTube JetsonHacks article](https://jetsonhacks.com/2019/04/02/jetson-nano-raspberry-pi-camera/)
[ArduCam 12MP IMX477 for Raspberry Pi](https://docs.arducam.com/Raspberry-Pi-Camera/Native-camera/12MP-IMX477/)

#### Lens options
[Arducam C/CS Mount lenses for Raspberry Pi HQ Camera](https://www.arducam.com/raspberry-pi-high-quality-camera-c-cs-mount-lens/)

### NetworkTables on Jetson
[Getting NetworkTables running on the Jetson per Bill Kinahan (kinahawi) of FRC Team 4572 - ChiefDelphi](https://www.chiefdelphi.com/t/jetson-for-cargo-in-2022/400988/31)
[Andy Gasser (gdefender), programming mentor for Team 7028 used RobotPy and shared their code - ChiefDelphi](https://www.chiefdelphi.com/t/jetson-for-cargo-in-2022/400988/32)
## ROS
### ROS Cameras
[ros-drivers/gscam: ROS Camera driver for GStreamer-based video streams - GitHub](https://github.com/ros-drivers/gscam)
[IntelROSProject - ROS Wiki](http://wiki.ros.org/IntelROSProject)

### From FRC Team 624 - CRyptonite Robotics from Texas
[2020 ROS discussion on Chief Delphi](https://www.chiefdelphi.com/t/frc-robotics-with-ros/384928)

> [Team 624](https://frc624.org/) (CRyptonite Robotics) from Texas used a coprocessor from [Up-Board](https://up-board.org/) along with WPIlib Java on the RoboRIO. They ran a ROS environment on Ubuntu 20.04 on the co-processor for custom vision tracking and autonomous path planning.

[Github - LeonidasVarveropoulos/robot-frc: This is a ROS catkin workspace for a robot in frc](https://github.com/LeonidasVarveropoulos/robot-frc)

[GitHub - LeonidasVarveropoulos/UnitySimulator-ROS: This is a Unity project that works as a simulator for the ROS FRC robot code hosted in the robot-frc repo.](https://github.com/LeonidasVarveropoulos/UnitySimulator-ROS)

### From FRC Team 900 - Zebracorn Labs from North Carolina
[Zebracorn Labs - Latest Posts](https://team900.org/labs/)
[Zebravision 7.0 - CD-Media: Papers - Chief Delphi](https://www.chiefdelphi.com/t/zebravision-7-0/387241)
[ZebROS 2020 - CD-Media: Papers - Chief Delphi](https://www.chiefdelphi.com/t/zebros-2020/386963)
[ZebROS_2020_Whitepaper.pdf - Google Drive](https://drive.google.com/file/d/1dXeNoHY7kYR1mJWzMM5BktA5nf9RgFMu/view)

### From FRC Team 696 - Circuit Breakers from S. California
[2019 ROSlight - Publishing ROS Topics from the Limelight 2 (PDF)](https://www.chiefdelphi.com/uploads/short-url/414FkMFIfllCvDSIVBiesgLFTlS.pdf)

### From FRC Team 88 - 
[2022 Using ROS and the NVidia Jetson for inspiration in the FIRST Robotics Competition](https://docs.google.com/document/d/1uQ992ursn1nzvreEl5DJQcbwoV_wYsm6inpkA1r8KVY/edit#)

### Virtual Robot Simulator
[Virtual Robot Simulator](https://vrobotsim.org/about-us/)

### ROS Navigation (Nav2)
[Getting Started — Navigation 2 1.0.0 documentation](https://navigation.ros.org/getting_started/index.html)
## GStreamer
[GStreamer Documentation](https://gstreamer.freedesktop.org/documentation/)
[Installing GStreamer](https://gstreamer.freedesktop.org/documentation/installing/index.html)
[MacOS download for GStreamer](https://gstreamer.freedesktop.org/documentation/tutorials/basic/)
[GStreamer Basic Tutorials](https://gstreamer.freedesktop.org/documentation/tutorials/basic/)
[GStreamer GitHub Mirrors](https://github.com/GStreamer)
[NVIDIA Accelerated GStreamer User Guide r32.1 (pdf)](https://developer.download.nvidia.com/embedded/L4T/r32_Release_v1.0/Docs/Accelerated_GStreamer_User_Guide.pdf)
[GStreamer Pipeline Samples](https://gist.github.com/liviaerxin/bb34725037fd04afa76ef9252c2ee875)
[GStreamer Debugging from RidgeRun](https://developer.ridgerun.com/wiki/index.php/GStreamer_Debugging)
### GStreamer Modules and Plugins
[Gstreamer Modules](https://gstreamer.freedesktop.org/modules/)
[GStreamer plugin that implements an RTP payloader and depayloader for AV1, without support for SVC](https://gitlab.freedesktop.org/gstreamer/gst-plugins-rs/-/merge_requests/802)
[GStreamer plugins written in Rust](https://gitlab.freedesktop.org/gstreamer/gst-plugins-rs)
[GStreamer FFmpeg plug-in](https://gstreamer.freedesktop.org/modules/gst-ffmpeg.html)
[GStreamer Libav plug-in](https://gstreamer.freedesktop.org/modules/gst-libav.html)

## Limelight

### Limelight 3
[Limelight Vision for FRC on YouTube](https://youtu.be/rNEqI0NizVs)
> h.264 video streaming, object recognition, field localization and april tags integration all included

## OpenCV
[OpenCV.org](https://opencv.org/)
[OpenCV v4.1.1](https://docs.opencv.org/4.1.1/) works well with Python 2
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
## Deep Learning Inference Networks and Deep Vision with TensorRT and NVIDIA Jetson
[github Hello AI World guide jetson-inference](https://github.com/dusty-nv/jetson-inference)

## StereoLabs ZED
> The ZED is a camera that reproduces the way human vision works. Using its two “eyes” and through triangulation, the ZED provides a three-dimensional understanding of the scene it observes, allowing your application to become space and motion aware.

[Stereolabs Docs: API Reference, Tutorials, and Integration](https://www.stereolabs.com/docs/)
[StereoLabs SDK Downloads](https://www.stereolabs.com/developers/release/#downloads)
[Get Started with ZED](https://www.stereolabs.com/docs/get-started-with-zed/)
[How to Use OpenCV with ZED in C++](https://www.stereolabs.com/docs/opencv/)

## Archiconda for ARM64 devices
[Rumeysakeskin/Archiconda3-for-ARM64-Jetson-TX1-TX2: Create light-weight conda environment for ARM64 devices](https://github.com/Rumeysakeskin/Archiconda3-for-ARM64-Jetson-TX1-TX2)
[yqlbu/archiconda3: Light-weight Anaconda environment for ARM64 devices](https://github.com/yqlbu/archiconda3)
# Older links to test
## Penguin Empire Github
[n00shE](https://github.com/n00shE)

## 2019 WPI code
[Documentation for Visual Studio Code](https://code.visualstudio.com/docs?start=true)
[FRC Software Component Overview](https://docs.wpilib.org/en/latest/docs/zero-to-robot/step-2/control-system-software.html)
[What is WPILib?](https://frcdocs.wpi.edu/en/latest/docs/software/what-is-wpilib.html)

## Code Playground - SoloLearn
[Code Playground - C++](https://code.sololearn.com/166/#cpp)
[SoloLearn login for C++](https://www.sololearn.com/users/login?ReturnUrl=%2FPlay%2FCPlusPlus#)

