---
sidebar_position: 1
---

# NVIDIA Jetson

- [NVIDIA Developer site](https://developer.nvidia.com/)
- [Jetson AI Courses and Certifications](https://developer.nvidia.com/embedded/learn/jetson-ai-certification-programs)
- [JetsonHacksNano on Github](https://github.com/JetsonHacksNano/)

### NVIDIA Jetson TX1 (discontinued)
[Orbitty Carrier for NVIDIA® Jetson™ TX2/TX2i/TX1 - Connect Tech Inc.]http://connecttech.com/product/orbitty-carrier-for-nvidia-jetson-tx2-tx1/)
[Guide to TX1 from Team 900](https://team900.org/blog/Guide-To-TX1/)
> Powering the TX1 is tricky. From experience. it does not function well with large power fluctuations. Nvidia’s engineers have released a few versions of the carrier board to help with this but you will still want to run a voltage regulator between the board and the power supply.
> Team 900 has had a lot of success with this particular converter in actual FRC competitions:
[Amazon - DROK DC/DC Automatic Boost Buck Converter Module 60W Constant Voltage/Current Car Voltage Regulator DC5-32V to 1.25-20V Adjustable Current Step Up & Step Down Voltage Converter for Battery Charging](https://www.amazon.com/dp/B00JKG57T4)
> Do not use the VRM (Voltage Regulator Module) to power both your Radio and the TX1. If you do it’s entirely possible that your VRM will no longer function after pulling too much current. You might be able to use a second VRM just for the TX1 but you are much better off using the voltage regulator linked above as it is cheaper and has been tested in competitions.

### NVIDIA Jetson Nano 2GB
- [Getting Started with Jetson Nano 2GB Developer Kit](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-2gb-devkit#next)
- [Jetson Nano 2GB Developer Kit User Guide](https://developer.nvidia.com/embedded/learn/jetson-nano-2gb-devkit-user-guide)

The [Jetson Linux Archive](https://developer.nvidia.com/embedded/jetson-linux-archive) shows that [Jetson Linux v 32.7.3](https://developer.nvidia.com/embedded/linux-tegra-r3273) was the latest version supported on the Jetson Nano and Jetson TX1 as of early 2023.

- [NVIDIA Jetson Linux Developer Guide - v32.7.3](https://docs.nvidia.com/jetson/archives/l4t-archived/l4t-3273/index.html)
- [Jetson Linux API Reference - v32.7.3](https://docs.nvidia.com/jetson/l4t-multimedia/index.html)
- [NVIDIA Multimedia API Sample Applications from Jetson Linux API Reference](https://docs.nvidia.com/jetson/l4t-multimedia/group__l4t__mm__test__group.html)

JetPack is a useful tool for loading extra software on the Jetson. The [JetPack Archive](https://developer.nvidia.com/embedded/jetpack-archive) shows that [JetPack 4.6.3](https://developer.nvidia.com/jetpack-sdk-463) was the latest version supported on the TX1 and Nano as of early 2023. Note that it includes Jetson Linux for Tegra (L4T) 32.7.3.

JetPack 4.6.1 (and 4.6.3) includes OpenCV 4.1.1 and  [VPI 1.2](https://docs.nvidia.com/vpi/release_notes.html)
For VPI1.2:
- Production quality support for Python bindings
- Multi-Stream support in Python bindings to allow creation of multiple streams to parallelize operations
- Support for calling Python scripts in a VPI Stream
- New algorithms
> - Image Erode\Dilate algorithm on CPU and GPU backends
> - Image Min\Max location algorithm on CPU and GPU backends

- [Configuring the Jetson CSI Connector (30-pin Expansion Header)](https://docs.nvidia.com/jetson/archives/l4t-archived/l4t-3273/index.html#page/Tegra%20Linux%20Driver%20Package%20Development%20Guide/hw_setup_jetson_io.html#wwpID0E02D0HA)

### NVIDIA Jetson Orin Nano (available in March 2023)
- [Jetson Orin Modules and Developer Kit
](https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-orin/)
- [Solving Entry-Level Edge AI Challenges with NVIDIA Jetson Orin Nano (Sept 2022 Blog)](https://developer.nvidia.com/blog/solving-entry-level-edge-ai-challenges-with-nvidia-jetson-orin-nano/)
- [NVIDIA® Jetson Orin™ Nano Products on Connect Tech](https://connecttech.com/products/nvidia-jetson-orin-nano/)
- [Boson for FRAMOS Carrier Board for NVIDIA® Jetson Orin™ Nano](https://connecttech.com/product/boson-for-framos-carrier-board-for-nvidia-jetson-orin-nano/)
- [SeeedStudio Jetson Orin Nano based reComputer](https://www.seeedstudio.com/blog/2022/09/30/orin-nano-a-new-member-joins-the-nvidia-jetson-series-for-next-level-entry-of-edge-ai/)
### VNC for remote desktop to NVIDIA Jetson
- [Setting Up VNC | NVIDIA Developer](https://developer.nvidia.com/embedded/learn/tutorials/vnc-setup)
### Cameras for Jetson
Raspberry Pi HQ camera with C/CS-Mount lens
- [Raspberry Pi HQ camera IMX477 Linux driver for Jetson from RidgeRun](https://developer.ridgerun.com/wiki/index.php?title=Raspberry_Pi_HQ_camera_IMX477_Linux_driver_for_Jetson)
- [NVIDIA Jetson IMX477 HQ RPI V3 camera driver from RidgeRun on GitHub](https://github.com/RidgeRun/NVIDIA-Jetson-IMX477-RPIV3)
- [Installing the IMX477 driver on Jetson platforms using debian packages](https://developer.ridgerun.com/wiki/index.php?title=Raspberry_Pi_HQ_camera_IMX477_Linux_driver_for_Jetson#Installing_the_Driver_-_Option_A:_Debian_Packages_.28Recommended.29)
- [Jetson Nano + Raspberry Pi Camera - YouTube JetsonHacks article](https://jetsonhacks.com/2019/04/02/jetson-nano-raspberry-pi-camera/)
- [ArduCam 12MP IMX477 for Raspberry Pi](https://docs.arducam.com/Raspberry-Pi-Camera/Native-camera/12MP-IMX477/)

#### Lens options
- [Arducam C/CS Mount lenses for Raspberry Pi HQ Camera](https://www.arducam.com/raspberry-pi-high-quality-camera-c-cs-mount-lens/)

### NetworkTables on Jetson
- [Getting NetworkTables running on the Jetson per Bill Kinahan (kinahawi) of FRC Team 4572 - ChiefDelphi](https://www.chiefdelphi.com/t/jetson-for-cargo-in-2022/400988/31)
- [Andy Gasser (gdefender), programming mentor for Team 7028 used RobotPy and shared their code - ChiefDelphi](https://www.chiefdelphi.com/t/jetson-for-cargo-in-2022/400988/32)