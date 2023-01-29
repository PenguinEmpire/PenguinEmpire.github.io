"use strict";(self.webpackChunkpenguin_empire_github_io=self.webpackChunkpenguin_empire_github_io||[]).push([[9684],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return r?o.createElement(d,n(n({ref:t},c),{},{components:r})):o.createElement(d,n({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,n=new Array(i);n[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,n[1]=l;for(var p=2;p<i;p++)n[p]=r[p];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1404:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=r(7462),a=(r(7294),r(3905));const i={title:"ROS",sidebar_position:6},n=void 0,l={unversionedId:"advanced-topics/ros",id:"advanced-topics/ros",title:"ROS",description:"Robot Operating System",source:"@site/docs/advanced-topics/ros.md",sourceDirName:"advanced-topics",slug:"/advanced-topics/ros",permalink:"/docs/advanced-topics/ros",draft:!1,editUrl:"https://github.com/PenguinEmpire/PenguinEmpire.github.io/tree/main/docs/advanced-topics/ros.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"ROS",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"OpenCV",permalink:"/docs/advanced-topics/opencv"},next:{title:"Archiconda",permalink:"/docs/advanced-topics/archiconda"}},s={},p=[{value:"Robot Operating System",id:"robot-operating-system",level:2},{value:"ROS Training",id:"ros-training",level:3},{value:"ROS Cameras",id:"ros-cameras",level:3},{value:"From FRC Team 624 - CRyptonite Robotics from Texas",id:"from-frc-team-624---cryptonite-robotics-from-texas",level:3},{value:"From FRC Team 900 - Zebracorn Labs from North Carolina",id:"from-frc-team-900---zebracorn-labs-from-north-carolina",level:3},{value:"From FRC Team 696 - Circuit Breakers from S. California",id:"from-frc-team-696---circuit-breakers-from-s-california",level:3},{value:"From FRC Team 88 -",id:"from-frc-team-88--",level:3},{value:"Virtual Robot Simulator",id:"virtual-robot-simulator",level:3},{value:"ROS Navigation (Nav2)",id:"ros-navigation-nav2",level:3},{value:"ROS Blogs",id:"ros-blogs",level:3}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"robot-operating-system"},"Robot Operating System"),(0,a.kt)("p",null,"Open-source SDK platform for robotics apps"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.ros.org/"},"ROS.org"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/FRC/comments/10ivi5a/how_would_your_rate_your_knowledge_of_ros_robot/"},"2023 FRC discussion of ROS on Reddit"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.chiefdelphi.com/t/using-ros-for-inspiration-in-frc/411561"},"2022 ROS discussion on ChiefDelphi")))),(0,a.kt)("h3",{id:"ros-training"},"ROS Training"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.theconstructsim.com/the-ros-development-studio-by-the-construct/"},"ROS Development Studio - The Construct"))),(0,a.kt)("h3",{id:"ros-cameras"},"ROS Cameras"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ros-drivers/gscam"},"ros-drivers/gscam: ROS Camera driver for GStreamer-based video streams - GitHub"),(0,a.kt)("a",{parentName:"li",href:"http://wiki.ros.org/IntelROSProject"},"IntelROSProject - ROS Wiki"))),(0,a.kt)("h3",{id:"from-frc-team-624---cryptonite-robotics-from-texas"},"From FRC Team 624 - CRyptonite Robotics from Texas"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.chiefdelphi.com/t/frc-robotics-with-ros/384928"},"2020 ROS discussion on Chief Delphi"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://frc624.org/"},"Team 624")," (CRyptonite Robotics) from Texas used a coprocessor from ",(0,a.kt)("a",{parentName:"p",href:"https://up-board.org/"},"Up-Board")," along with WPIlib Java on the RoboRIO. They ran a ROS environment on Ubuntu 20.04 on the co-processor for custom vision tracking and autonomous path planning.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/LeonidasVarveropoulos/robot-frc"},"Github - LeonidasVarveropoulos/robot-frc: This is a ROS catkin workspace for a robot in frc")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/LeonidasVarveropoulos/UnitySimulator-ROS"},"GitHub - LeonidasVarveropoulos/UnitySimulator-ROS: This is a Unity project that works as a simulator for the ROS FRC robot code hosted in the robot-frc repo."))),(0,a.kt)("h3",{id:"from-frc-team-900---zebracorn-labs-from-north-carolina"},"From FRC Team 900 - Zebracorn Labs from North Carolina"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://team900.org/labs/"},"Zebracorn Labs - Latest Posts")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.chiefdelphi.com/t/zebravision-7-0/387241"},"Zebravision 7.0 - CD-Media: Papers - Chief Delphi")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.chiefdelphi.com/t/zebros-2020/386963"},"ZebROS 2020 - CD-Media: Papers - Chief Delphi")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://drive.google.com/file/d/1dXeNoHY7kYR1mJWzMM5BktA5nf9RgFMu/view"},"ZebROS_2020_Whitepaper.pdf - Google Drive"))),(0,a.kt)("h3",{id:"from-frc-team-696---circuit-breakers-from-s-california"},"From FRC Team 696 - Circuit Breakers from S. California"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.chiefdelphi.com/uploads/short-url/414FkMFIfllCvDSIVBiesgLFTlS.pdf"},"2019 ROSlight - Publishing ROS Topics from the Limelight 2 (PDF)"))),(0,a.kt)("h3",{id:"from-frc-team-88--"},"From FRC Team 88 -"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1uQ992ursn1nzvreEl5DJQcbwoV_wYsm6inpkA1r8KVY/edit#"},"2022 Using ROS and the NVidia Jetson for inspiration in the FIRST Robotics Competition"))),(0,a.kt)("h3",{id:"virtual-robot-simulator"},"Virtual Robot Simulator"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://vrobotsim.org/about-us/"},"Virtual Robot Simulator"))),(0,a.kt)("h3",{id:"ros-navigation-nav2"},"ROS Navigation (Nav2)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://navigation.ros.org/getting_started/index.html"},"Getting Started \u2014 Navigation 2 1.0.0 documentation"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/JakeAllison/FRC-ROS"},"SLAM navigation for FRC using ROS"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/JakeAllison/FRC-ROS2"},"SLAM navigation for FRC using ROS2")))),(0,a.kt)("h3",{id:"ros-blogs"},"ROS Blogs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://automaticaddison.com/?s=ROS"},"Automatic Addison - search for ROS"))))}m.isMDXComponent=!0}}]);