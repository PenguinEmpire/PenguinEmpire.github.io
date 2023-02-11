---
title: Command-Based Programming
sidebar_position: 10
---
Design Pattern

We have adopted the *Command-Based Programming* design pattern for our C++ code to control the robot. This allows multiple different people to work on different commands to perform specific functions on the robot. Those commands can be called as necessary from the primary loops for [auto](https://docs.wpilib.org/en/stable/docs/software/frc-glossary.html#term-auto) and [teleop](https://docs.wpilib.org/en/stable/docs/software/frc-glossary.html#term-teleop).


Read through the section named, [Command-Based Programming](https://docs.wpilib.org/en/stable/docs/software/commandbased/index.html) from the *Advanced Programming* section of *WPILib*.

In particular, note how the Command-Based Programming documentation section suggests:

- [Structuring a Command-Based Robot Project](https://docs.wpilib.org/en/stable/docs/software/commandbased/structuring-command-based-project.html)
- [Organizing a Command-Based Robot Project](https://docs.wpilib.org/en/stable/docs/software/commandbased/organizing-command-based.html)
- [PID Control](https://docs.wpilib.org/en/stable/docs/software/commandbased/pid-subsystems-commands.html)
- [Trapezoid Motion Profiling](https://docs.wpilib.org/en/stable/docs/software/commandbased/profile-subsystems-commands.html)


Other teams have additional materials that may be useful when learning about some of these topics:

### Trapezoid Motion Profiling and PID Control

- [Team 2928 Motion Profiled PID Control - Java](https://2928-frc-programmer-training.readthedocs.io/en/latest/Romi/Control/romiProfiledPID/)