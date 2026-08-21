<meta name="google-site-verification" content="_wADvyP4vuP_aw0YTmu90mdAhz70vNwTF_pdAMMb0HY" />

# [PU2CLR SI4735 Library for Arduino](https://pu2clr.github.io/SI4735/)

[Se você estiver entendendo este texto, talvez queira ler este documento em Português](https://pu2clr.github.io/SI4735/extras/docbr/)

# Preface

|          |            |
|----------|------------|
|  ![SI4735 Prototypes](extras/images/multiplatform_SI47XX_photo_05.png)  | This document is aimed at the Arduino developers, radio experimenters, hobbyists and anyone interested in building a receiver based on the Si473X IC family from Silicon Labs. This project is about an Arduino library for the SI473X BROADCAST AM, SSB and FM/RDS RADIO RECEIVERS. Frequency ranges of AM and SSB modes are 150kHz to 30MHz, and FM mode is 64 to 108 MHz.



<BR>

This library is intended to provide an easy-to-use interface for controlling the SI47XX (including the boards ["PL102BA-S V:2.1 10628"](https://pu2clr.github.io/SI4735/extras/BOARD_PL102BA/) and ["NE928-10A V:01"](https://pu2clr.github.io/SI4735/extras/BOARD_NE928_10A_V_01/) based on SI4730) by using Arduino platform. [It also has support to the SSB mode on SI4735-D60 and SI4732-A10 devices](https://pu2clr.github.io/SI4735/#si4735-patch-support-for-single-side-band). __The communication protocol used by this library is the I²C__. 

This library was built based on ["AN332 Si47XX PROGRAMMING GUIDE REV 1.0"](https://web.engr.oregonstate.edu/~traylor/ece473/data_sheets/AN332.pdf) and __AN332 REV 0.8 UNIVERSAL PROGRAMMING GUIDE AMENDMENT FOR SI4735-D60/SI4732-A10 SSB AND NBFM PATCHES__. It also can be used on __all members of the SI473X family__ respecting, of course, the features available in each IC version. Please, follow the [contents below](https://pu2clr.github.io/SI4735/#contents) to get the most out of this document. 

This library can be freely distributed using the MIT Free Software model. 
By using or installing Library you are agreeing to the terms of the [MIT licence](https://pu2clr.github.io/SI4735/#mit-license).

[Copyright (c) 2019 Ricardo Lima Caratti](https://pu2clr.github.io/SI4735/#mit-license). 

Contact: __pu2clr@gmail.com__.


## Donate 

If you find this library useful and would like to support its continued development, you may optionally make a donation. Donations help cover the cost of components, modules, and laboratory testing used in the maintenance and improvement of this open-source project. Donations are entirely voluntary and do not grant any special product, service, warranty, support, or development priority. Please note that this project is maintained on a voluntary basis, and the author makes no commitment regarding schedules or deadlines for future releases, updates, or feature implementations. Click here to donate or use the QR code below. [Click here to donate](https://www.paypal.com/donate/?business=LLV4PHKTXC4JW&no_recurring=0&item_name=Consider+making+a+donation.+So%2C+I+can+purchase+components+and+modules+for+improvements+and+testing+of+this+library.&currency_code=USD) or use the QR code below.


![Donate](./extras/images/QR_Code.png) 


## About Me

I hold a Master's degree in Educational Technology from the Federal University of Ceará, where I delved into the ways technology can enhance learning experiences. My passion for computer science led me to specialize in it, focusing on Distributed Systems Development with an Object-Oriented approach, at the University of Brasília. My academic journey began with a Bachelor's degree in Information Systems from the União Pioneira de Integração Social (UPIS-Brasília). Outside the classroom, my main hobbies are electronics and Amateur Radio. 


## Contents

1. [SI4735 Library construction history](https://pu2clr.github.io/SI4735/#si4735-library-construction-history)
2. [Thanks](https://pu2clr.github.io/SI4735/#thanks)
3. [Library Features](https://pu2clr.github.io/SI4735/#si4735-arduino-library-features)
4. [License Copyright](https://pu2clr.github.io/SI4735/#mit-license)
5. [Library Installation](https://pu2clr.github.io/SI4735/#library-installation)
6. [Command line arduino-cli and setup](https://github.com/pu2clr/SI4735/tree/master/examples#arduino-cli---a-faster-alternative-to-the-arduino-ide)
7. [Other Arduino Libraries Developed by the Author](https://pu2clr.github.io/SI4735/#other-arduino-libraries-developed-by-the-author)
8. [Groups and Forums](https://pu2clr.github.io/SI4735/#groups-and-forums)
9. [Your support is important](https://pu2clr.github.io/SI4735/#your-support-is-important)
11. [About the SI4732 and SI4735](https://pu2clr.github.io/SI4735/#about-the-si4732-and-si4735)
12. [Basic Schematic](https://pu2clr.github.io/SI4735/#schematic)
13. [Terminology](https://github.com/pu2clr/SI4735#terminology)
14. [Documentation](https://pu2clr.github.io/SI4735/#documentation)
   * [API Documentation](https://pu2clr.github.io/SI4735/extras/apidoc/html/) 
   * [About Class, Methods(functions) and custom data type structures](https://pu2clr.github.io/SI4735/#defined-data-types-and-structures)
   * [PU2CLR SI4735 Arduino Library methods (functions)](https://pu2clr.github.io/SI4735/extras/apidoc/html/)
   * [RDS support](https://pu2clr.github.io/SI4735/#rds)
   * [SSB support](https://pu2clr.github.io/SI4735/#si4735-patch-support-for-single-side-band)
   * [EEPROM support](https://pu2clr.github.io/SI4735/#eeprom-support)
   * [Digital Audio Support](https://pu2clr.github.io/SI4735/#digital-audio-support)
   * [Using an external active crystal or signal generator with SI47XX](extras/schematic#si473x-and-external-active-crystal-oscillator-or-signal-generator)
   * [Customizing PU2CLR Arduino Library](https://pu2clr.github.io/SI4735/#customizing-pu2clr-arduino-library)
15. [Hardware Requirements and Setup](https://pu2clr.github.io/SI4735/#hardware-requirements-and-setup)
16. [__SCHEMATIC__](https://pu2clr.github.io/SI4735/#schematic)
   * [All schematics](https://pu2clr.github.io/SI4735/extras/schematic)
   * [Component Parts](https://pu2clr.github.io/SI4735/#parts)
   * [Tips to build](https://pu2clr.github.io/SI4735/#tips-to-build)
   * [Other schematics](https://pu2clr.github.io/SI4735/extras/schematic)
     * [Atmega328 based board and OLED](extras/schematic#atmega328-based-board-and-oled)
     * [ESP32 based board](extras/schematic#esp32-based-board)
     * [Standalone ATmega328 with or without external Crystal (SI4735-D60 and LCD 16x2)](extras/schematic#standalone-atmega328-with-or-without-external-crystal-si4735-d60-and-lcd-16x2)
     * [Arduino / ATmega328 with Nokia 5110](extras/schematic#arduino--atmega328-with-nokia-5110)
     * [Basic schematic with TFT](extras/schematic#basic-schematic-with-tft)
     * [Arduino DUE/MEGA and touch TFT display](extras/schematic#arduino-duemega-and-touch-tft-display)
     * [Attiny85 basic circuit](extras/schematic#attiny85-basic-circuit)
     * [Bluepill - STM32F103C8 basic schematic](extras/schematic#bluepill---stm32f103c8-basic-schematic)
     * [Android and iOS Remote Control for PU2CLR Arduino Library DSP receivers](extras/schematic#android-and-ios-remote-control-for-pu2clr-arduino-library-dsp-receivers)
     * [External Mute Circuit](extras/schematic#external-mute-circuit)
     * [SI473X and external active crystal oscillator or signal generator](extras/schematic#si473x-and-external-active-crystal-oscillator-or-signal-generator)
     * [Band Pass Filter controlled by Arduino](extras/schematic#band-pass-filter-controlled-by-arduino)
     * [Storing data into the internal EEPROM before shutdowning](extras/schematic#storing-data-into-the-internal-eeprom-before-shutdowning)
17. [Most Frequent Problems](https://pu2clr.github.io/SI4735/#most-frequent-problems)
18. [Boards where this library has been successfully tested](https://pu2clr.github.io/SI4735/#boards-where-this-library-has-been-successfully-tested)
19. [Photos (Tools and Accessories)](https://pu2clr.github.io/SI4735/#photos-tools-and-accessories)
20. [References](https://pu2clr.github.io/SI4735/#references)
21. [Examples](https://pu2clr.github.io/SI4735/examples)
    * [Using Arduino Serial Monitor](examples/SI47XX_01_SERIAL_MONITOR) 
    * [LCD20x4, Encoder and buttons](examples/SI47XX_02_LCD_20x4_I2C)
    * [OLED, Encoder and button](examples/SI47XX_03_OLED_I2C)
    * [TFT and touch screen](examples/SI47XX_04_TFT)
    * [ATTINY85](examples/SI47XX_05_ATTINY85)
    * [ESP32](examples/SI47XX_06_ESP32)
    * [ESP8266](examples/SI47XX_06_ESP8266)
    * [STM32](examples/SI47XX_07_STM32) 
    * [FM RDS/RBDS](examples/SI47XX_10_RDS)
    * [About the board based on SI4730-D60 labeled "PL102BA-S V:2.1 10628"](https://pu2clr.github.io/SI4735/extras/BOARD_PL102BA/)
    * [About the board based on Si4730 labeled "NE928-10A V:01"](https://pu2clr.github.io/SI4735/extras/BOARD_NE928_10A_V_01/)
    * [Mobile Device as Remote Control to the SI4735 prototype](https://github.com/pu2clr/bluetooth_remote_control)
    * [Auto Band Pass Filter examples](examples/SI47XX_99_AUTO_BANDPASS_FILTER)
    * [Famous sketches and kits from third parties based on this Library](examples/SI47XX_KITS)
    * [Tools](https://github.com/pu2clr/SI4735/tree/master/examples/TOOLS)
22. [Third Party Projects](https://pu2clr.github.io/SI4735/extras/Third_Party_Projects)
23. [Videos](https://pu2clr.github.io/SI4735/#videos) 
    * [Project examples made by the author](https://pu2clr.github.io/SI4735/#project-examples-made-by-the-author)
    * [Third-party projects using this library](https://pu2clr.github.io/SI4735/#third-party-projects-using-this-library)
24. [Commercial Receivers based on Si47XX Family](https://pu2clr.github.io/SI4735/#commercial-receivers-based-on-si47xx-family) 


## Attention
* __The SI473X device can work from 1.6V to 3.6V. If you are not using a 3.3V Arduino board, that Arduino will send 5V signals to the SI473X device through the digital pins and the I2C bus. That configuration can make the system unstable or damage the Si473X device__. To fix this, use a logic shifter chip that converts between 3.3V and 5V logic.  
* __This library has been successfully tested on many boards including:  ESP32; STM32; Mega 2560;  DUE; ATmega328 and Atmega32u4 based boards; ATtiny85, Raspberry Pi Pico (RP2040) and more__. See [Boards where this library has been successfully tested](https://pu2clr.github.io/SI4735/#boards-where-this-library-has-been-successfully-tested).  
* __The Si47XX IC family  functionalities__ can be seen in the comparison matrix shown in table 1 (__Product Family Function__); pages 2 and 3 of the [“Si47XX PROGRAMMING GUIDE; AN332 (REV 1.0)”](https://web.engr.oregonstate.edu/~traylor/ece473/data_sheets/AN332.pdf).


## Why do skilled developers generally use libraries?

Technically, no Arduino application needs a library. In some cases, not using libraries may be the correct decision. But there are some good reasons to consider using a library.

Libraries typically allow for easier design and maintenance of code. A library may also implement the functionality you need on multiple hardware choices, thus making the code more portable.

Imagine that you want to use an LCD or other display device in a project that monitors temperature and atmospheric pressure conditions. There are several good libraries for display devices available for Arduino users, and most of the features you might want are implemented in these libraries. There is no point in re-inventing the wheel by avoiding a library. Unless you require a feature that no library supports, it is generally wise to use a library, especially since a library can make porting code to different hardware easier.

Use of a library can reduce programming complexity and boost application robustness. It makes life easier for other developers, and also for yourself. You do not have to be a software engineer to understand why this is the case. A library, in this way, is similar to an IC. It is often possible to manually implement the functionality of many IC chips in a circuit, but doing so would dramatically increase the cost, complexity, size, and sometimes the failure rate of a project. Circuits are often better when some functions are abstracted away inside an off-the-shelf IC chip. The user of an IC only needs to know how to interact with the chip, and not how the chip itself is wired.

Finally, if you already use a library to handle the I2C bus (Wire.h), TFT, OLED, SPI devices, and Serial UART communication, then it makes sense to use a library to handle the SI473X devices. The PU2CLR Arduino Library can offer more comfort, development agility, and robustness to your project. Unlike closed-source solutions, this library is open-source. This means you can learn how the library works by studying the code, if you choose.

## SI4735 Library construction history

I began my journey to create an Arduino library for the SI473X family of devices in early November 2019. The initial plan was to construct a receiver using an Arduino board, a handful of components, and the SI4735 device manufactured by Silicon Labs. After watching some videos on YouTube, it became clear that a receiver based on the SI4735-D60 had the potential to exceed the original scope of the project—__it could even receive amateur radio and citizens band stations in SSB mode__. Through forums and websites, I discovered a significant demand from hobbyists and experimenters interested in using the SI4735 device, particularly for SSB mode. With this in mind, I shifted my focus. Instead of merely developing a basic receiver around the SI4735, __I opted to create a comprehensive Arduino library that would fully support not only the SI4735 but the entire SI473X device family__.


With this library, more than 60 examples were developed using various display types. [These examples can assist the experimenter in building their own receiver](https://github.com/pu2clr/SI4735/tree/master/examples).

Judging by the groups created around the SI47XX devices, I estimate that this library is currently being used by thousands of experimenters, applications and commercial receivers. If you are an experimenter or a radio enthusiast and want to try to build your own receiver based on the SI473X devices, then this library is for you.  

The following video is a little joke that shows the trajectory of the construction of this library. [__"PU2CLR SI4735 Arduino Library. IT IS OPEN SOURCE IT IS FREE. IT IS FOR YOU"__](https://www.youtube.com/embed/aB02Qry5-bU).


{% include libhistory.html %}

<BR> 


## Thanks

* Mrs. [Nancy Daniels Yoga](https://github.com/LadyRoninEngineer/Si473x), for sharing experiences and suggestions for noise reduction on the I2C bus and also for sharing the excellent board projects for the SI4732-A10 device
* Mr. Tom Nardi, for his great article ["Multi-Band Receiver On A Chip Controlled By Arduino"](https://hackaday.com/2020/03/02/multi-band-receiver-on-a-chip-controlled-by-arduino/) on Hackaday website
* Mr. Gert Baak, [PE0MGB](https://www.qrz.com/db/PE0MGB), for library improvements suggestions and the Article [Arduino All band radio with SI4735 by Gert PE0MGB](https://www.pi4raz.nl/razzies/razzies202009.pdf)
* Dr. George R Steber, [WB9LVI](https://www.qrz.com/db/WB9LVI) for his great article __NanoSSB RX - An Ultra Low Cost SSB Multiband Receiver__ on __ARRL QEX Magazine__ (November/December 2021)
* Mr. Benjamin Neveu, for his article __SSB Receiver Controlled by a Smartphone__ publised on __ARRL QEX Magazine__(September/October 2022)
* Mr. Jim Reagan, [W0CHL](https://www.qrz.com/db/W0CHL), for contributions on circuit design and user interface
* [Mr. Vadim Afonkin](https://youtu.be/fgjPGnTAVgM), for making available the SSBRX patches for SI4735-D60 on his [Dropbox repository](https://www.dropbox.com/sh/xzofrl8rfaaqh59/AAA5au2_CVdi50NBtt0IivyIa?dl=0)
* Mr. Luiz Carlos, [PT2MC](https://www.qrz.com/db/PT2MC), for guidance on external mute circuits
* Mr. Thiago Lima, for sharing his board project based on the ESP32 and SI4732-A10 devices
* Mr. Francisco Scaramella, for the suggestions and contributions provided in the electronics field as well as for the testing of the functions implemented in this library
* Mr. David Kellmer (USA), for suggesting corrections on the documentation and sketches 
* WH2Q, Morikaku Gotoh, for his suggestion about Automatic Volume Control on AM mode
* Mr. Diego Stanfield, for testing the SI4732-A10 with SSB
* All members of the Facebook groups ["Si47XX for radio experimenters"](https://www.facebook.com/groups/532613604253401/) and ["Si47XX para radioescutas"](https://www.facebook.com/groups/1121785218031286/) for the suggestions and corrections during the development of this project.
* Mr. Toni, for his post [SI4735 SI4732 all band radio receiver LW MW FM SW](https://xtronic.org/circuit/audio/si4735-si4732-all-band-radio-receiver-mw-fm-sw/)
* Mr. Scacchi Ugo, for the post [HAM RADIO  -  ARDUINO SI4735 Based Radio](https://www.i2sdd.net/ARDUINO/SI4735/si4735.HTML)
* Mr. Miguel Angelo Bartié, PY2OHH, for the post [RECEIVER FM/MW/SW(AM SSB and CW) with SI4735 prototype](https://www.qsl.net/py2ohh/trx/si4735/SI4735.html)   
* Mr. Felix Angga, for his great receiver based on SI4735 interface - [SlametRadio](https://github.com/felangga/slametradio) 
* Mr. DAVID W ZANTOW, [N9EWO](https://www.qrz.com/db/N9EWO), for his Reviews about [ATS-25 / ATS25 / LW / MW / SW / FM DSP Receiver](https://www.qsl.net/n9ewo/ats25.html)
* Mr. Dalton Herrewynen for documentation corrections and improvements.

<BR>

## Your support is important.

If you want to support this library development, consider joining this project via Github. Alternatively, make suggestions on new features and report errors if you find them. Thank you!


[Go to contents](https://pu2clr.github.io/SI4735/#contents)

## SI4735 Arduino Library Features

This library uses the I²C communication protocol and implements most of the functions offered by Si47XX (BROADCAST AM / FM / SW / LW RADIO RECEIVER) IC family from Silicon Labs. This library also has primitive functions that make it easier for you to implement commands that may not have been implemented yet. See [setProperty, getProperty sendCommand, getCommandResponse and getStatusResponse](https://pu2clr.github.io/SI4735/extras/apidoc/html/group__group10.html) functions and also [How to customize PU2CLR Arduino Library](https://pu2clr.github.io/SI4735/#customizing-pu2clr-arduino-library). It is worth noting, however, that this library is constantly improving. Check the API documentation before implementing a new function. It is likely that your function is already implemented. [See the API documentation for this library](https://pu2clr.github.io/SI4735/extras/apidoc/html/). __The main features of this library are listed below__.


1. Open Source. It is free. You can use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software. See [MIT License](https://pu2clr.github.io/SI4735/#mit-license) to know more.   
2. Built based on [AN332 SI47XX PROGRAMMING GUIDE (REV 1.0)](https://web.engr.oregonstate.edu/~traylor/ece473/data_sheets/AN332.pdf) and __AN332 REV 0.8 UNIVERSAL PROGRAMMING GUIDE AMENDMENT FOR SI4735-D60 SSB AND NBFM PATCHES__
3. C++ Language and Object-oriented programming. You can easily extend the SI4735 class by adding more functionalities. See [Customizing PU2CLR Arduino Library](https://pu2clr.github.io/SI4735/#customizing-pu2clr-arduino-library)
4. Available on Arduino IDE (via Manage Libraries). Easy to install and use. See [Library Installation](https://pu2clr.github.io/SI4735/#library-installation)
5. Cross-platform. You can compile and run this library on most of boards supported by the Arduino IDE (Examples: ATtiny85, boards based on ATmega328 and ATmega-32u4, ATmega2560, ARM Cortex, STM32, Arduino DUE, ESP32 and more). See [Boards where this library has been successfully tested](https://pu2clr.github.io/SI4735/#boards-where-this-library-has-been-successfully-tested)
6. Simplifies projects based on SI4735
7. __I²C communication protocol__ and Automatic I²C bus address detection
8. [More than __120__ functions implemented](https://pu2clr.github.io/SI4735/extras/apidoc/html/). You can customize almost every feature available on Si47XX family
9. [More than 60 examples to guide the user](https://github.com/pu2clr/SI4735/tree/master/examples)
10. [RDS support](https://pu2clr.github.io/SI4735/#rds)
11. [SSB (Single Side Band) patch support](https://pu2clr.github.io/SI4735/#si4735-patch-support-for-single-side-band)
12. Clock reference selection (crystal or external clock reference)
13. FM Receive de-emphasis to 50 or 75 μs selection, AGC, AVC and filter controls, and more... 

[Go to contents](https://pu2clr.github.io/SI4735/#contents)

<BR>

## Groups and Forums 

There is a __Facebook__ group called [__Si47XX for Radio Experimenters__](https://www.facebook.com/groups/532613604253401/) where the purpose is exchanging experiences with projects based on Silicon Labs  SI47XX IC family. You will be welcome to the group [Si47XX for Radio Experimenters](https://www.facebook.com/groups/532613604253401/).

You can also be a member of __group.io__ [SI47XX for hobbyists](https://groups.io/g/si47xx)

{% include groupio.html %}

[Follow a project using this library on hackaday.io](https://hackaday.io/project/170145-si4735-ssb-receiver-controlled-by-arduino)

## MIT License 

Copyright (c) 2019 Ricardo Lima Caratti

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

<BR>

[Go to contents](https://pu2clr.github.io/SI4735/#contents)

<BR>

## Library Installation

You can install this library on your Arduino environment using different methods. The best ways to do that are described below.  


### Installing via Arduino IDE

This is the easiest method to install this library.

#### The image below shows the Arduino IDE Manage Libraries interface.

![Installing from Arduino IDE 01](extras/images/lib_install_01.png)


#### The image below shows the PU2CLR Si4735 Library finding process.

<BR>

![Installing from Arduino IDE 02](extras/images/lib_install_02.png)

<BR>

#### The video below shows how to install the PU2CLR Arduino Library on your Arduino IDE. 

{% include libinstalling.html %}

### Installing via this repository 

![Installing from this repository](extras/images/install_lib_from_git_01.png)

<BR>

![Installing from this repository](extras/images/install_lib_from_git_02.png)

First, you have to [download](https://github.com/pu2clr/SI4735/archive/master.zip) this library in zip format. 
After, unzip the SI4735-master.zip file in your Arduino Library folder. 

* On __Windows__: "My Documents\Arduino\libraries"
* On __MAC OS__: ˜/Documents/Arduino/libraries
* On __Linux__: ˜/Documents/Arduino/libraries

With that approach, you will have the __most current version__ of the library. However, __it may not be the most stable version__. This is because the current version is always in development. [Prefer releases](https://github.com/pu2clr/SI4735/releases).
Do you need some old version (release) of this library?  If so, [check here](https://github.com/pu2clr/SI4735/releases). 


## Installing the most current version via arduino-cli

The commands below Install the latest version of the PU2CLR SI4735 Arduino Library from github. 
As said before, unlike a release (installed from Arduino IDE) this method installs the current version of the PU2CLR SI4535 Arduino Library (latest modifications even if not yet released).

### On macOS or Linux

```bash
curl -fsSL https://raw.githubusercontent.com/arduino/arduino-cli/master/install.sh | sh
export ARDUINO_LIBRARY_ENABLE_UNSAFE_INSTALL=true
./bin/arduino-cli lib install --git-url https://github.com/pu2clr/SI4735
```

### On Windows 10 or 11

Run the command shell (cmd / Command Prompt) and follow the steps below.

```bash
echo off  
curl -fsSL https://downloads.arduino.cc/arduino-cli/arduino-cli_latest_Windows_64bit.zip --output arduinocli.zip
tar -xf arduinocli.zip 
set ARDUINO_LIBRARY_ENABLE_UNSAFE_INSTALL=true
.\arduino-cli lib install --git-url https://github.com/pu2clr/SI4735
```

### About library installation and programming setup see also:

* More about arduino-cli click [here](https://github.com/pu2clr/SI4735/tree/master/examples#arduino-cli---a-faster-alternative-to-the-arduino-ide).
* About Arduino IDE, arduino-cli, SI4735 Arduino Library examples and programming setup, see the scripts below 
  * On macOS or Linux 
    * examples/__lib_si4735_basic_install.sh__ - Installs arduino-cli and some libraries and boards used by some the examples
    * examples/__install_all_libraries_and_boards.sh__ - Installs all libraries and all boards used by the examples
    * examples/__compile_all.sh__ - compiles all examples and save the binaries in your Downloads folder
  * On Windows 10 or 11 
    * examples/__lib_si4735_basic_install.bat__ - Installs arduino-cli and some libraries and boards used by some the examples
    * examples/__install_all_libraries_and_boards.bat__ - Installs all libraries and all boards used by the examples
    * examples/__compile_all.bat__ - compiles all examples and save the binaries in your Downloads folder

## Bords setup on your Arduino IDE

It will be useful if you intend to use ESP32, ESP8266, Teensy, Raspbery PI PICO, Arduino DUE, ATTiny etc. 

On Arduino IDE, preferences, Aditional boards manager URls. See image below.


![Installing boards used by examples](extras/images/arduino_board_install.jpg)


The list below refers to the board URLs used by the examples. You can remove the boards you do not want to use.


```bash
http://arduino.esp8266.com/stable/package_esp8266com_index.json 
http://dan.drown.org/stm32duino/package_STM32duino_index.json 
http://drazzy.com/package_drazzy.com_index.json 
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json 
https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json 
https://github.com/stm32duino/BoardManagerFiles/raw/main/package_stmicroelectronics_index.json 
https://github.com/stm32duino/BoardManagerFiles/raw/master/STM32/package_stm_index.json 
https://mcudude.github.io/MegaCore/package_MCUdude_MegaCore_index.json 
https://mcudude.github.io/MightyCore/package_MCUdude_MightyCore_index.json 
https://mcudude.github.io/MiniCore/package_MCUdude_MiniCore_index.json 
https://raw.githubusercontent.com/DavidGuo-CS/OSOYOO_Arduino/main/package_osoyoo_boards_index.json 
https://raw.githubusercontent.com/VSChina/azureiotdevkit_tools/master/package_azureboard_index.json 
https://raw.githubusercontent.com/damellis/attiny/ide-1.6.x-boards-manager/package_damellis_attiny_index.json 
https://raw.githubusercontent.com/dbuezas/lgt8fx/master/package_lgt8fx_index.json 
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json 
https://raw.githubusercontent.com/nulllaborg/arduino_nulllab/master/package_nulllab_boards_index.json 
https://www.pjrc.com/teensy/package_teensy_index.json
``` 

After adding the Board URL you want to use, go to Tools menu, select the Boards item and then select Boards Manager... option. Finally,  look for your board and install it.


[See the ESP32 setup example on Arduino IDE](https://github.com/pu2clr/SI4735/tree/master/examples/SI47XX_06_ESP32) 


[Go to contents](https://pu2clr.github.io/SI4735/#contents)

<BR>


## About the SI4732 and SI4735  

The SI4732-A10 and SI4735-D60 are DSP receivers IC from Silcon Labs. They have great performance on AM, SSB (LW/MW/SW) from 150kHz to 30MHz and FM (VHF) from 64 to 108 MHz. __It is important to note that the engineers and programmers at Silicon Labs did an excellent job by implementing all the internal resources in this IC family. This library implements just the interface that allows you to use the SI473X resources with Arduino based board controller__. 
The SI473X can be programmed by sending commands and getting responses. You can control it via a microcontroller like Arduino using I²C communication protocol. To make the SI473X perform an action, the microcontroller has to send a set of bytes (command and arguments) that the device interprets and executes the given command. The image below illustrates the interaction between the MCU and the SI473X device. 

<BR>

### Interaction between Arduino based board and SI473X devices via  I²C  interface

![SI473x Block Diagram](extras/images/I2C_MCU_SI473X.png)


<BR>

### Functional Block Diagram

The image below shows the SI473X-D60 block diagram. It was extracted from Silicon Labs Si4730/31/34/35-D60 / BROADCAST AM/FM/SW/LW RADIO RECEIVER (page 21). __Note that the author of this Library highlights in red the pin operating voltages that can be connected to the Arduino__. Be aware of the operating voltage of the Arduino pins you will use in your project. Preferably use an Arduino with 3.3V operating voltage. If you are not using a 3.3V version of Arduino, you must use a kind of 5V to 3.3V converter on RST, SCLK, SDIO and SEN (depending on your project). 


![SI473x Block Diagram](extras/images/block_diagram.png)


According to the Si47XX PROGRAMMING GUIDE/AN332, the Si4732-A10 has the same firmware FMRX component and AM_SW_LW RX component as that of Si4735-D60. It is considered as the most recent revision as D60. So, __all descriptions related to the SI4735-D60 also apply to Si4732-A10__. __Including SSB patch support__. See the Si4732-A10 block diagram below.  


![SI4732-A10 Block Diagram](extras/images/si4732_A10_diagram.png)


#### SI4735-D60 and SI4732-A10 I²C bus address 

While the Si4735-D60 provides the 0x11 I²C bus address when the SEN pin is connected to the ground, the SI4732-A10 provides the same address when the SEN pin is connected to the +VCC.  Also, this library provides the function __getDeviceI2CAddress__ to detect the I²C bus address automatically. This way, you don't need to worry about this setup if you use this function. See [getDeviceI2CAddress()](https://pu2clr.github.io/SI4735/extras/apidoc/html/group__group05.html#ga668008457910e916ebadf15bda2e5b29).



## Hardware Requirements and Setup

This library has been written for the Arduino platform and has been successfully tested on many boards. See [Boards where this library has been successfully tested](https://pu2clr.github.io/SI4735/#boards-where-this-library-has-been-successfully-tested)


### Arduino 5V and Si4735

* __THE SI4735 IS A 3.3V PART. IF YOU ARE NOT USING A 3.3V VERSION OF ARDUINO or anothe board, YOU HAVE TO USE A KIND OF 5V-3.3V BIDIRECTIONAL CONVERTER. Also pay attention to the appropriated pinout of your board to select the correct interrupt (IRQ- if you are using), RST, SDIO and SCLK pins. The table below shows some Arduino board pinout.__ 

<BR>

|Board | InterrupT (IRQ) Pins| I²C / TWI pins | successfully tested | Voltage converter |
|------|---------------------| ---------------| ------------------- | ----------------- | 
| 328-based <br> (Nano, Uno or Mini 5V) |	D2 and D3 | A4 (SDA/SDIO), A5 (SCL/SCLK) |  Yes | Yes | 
| 328-based <br> (Pro Mini 3.3 / 8Mhz) | D2 and D3 | A4 (SDA/SDIO), A5 (SCL/SCLK) |  Yes | No | 
| LTG8F328 <br> based board | D2 and D3 | A4 (SDA) and A5 (SCL) | Yes | No | 
| Mega 2560 | 2, 3, 18, 19, 20 and  21 | 20 (SDA/SDIO), 21 (SCL/SCLK) | Yes | Yes |
| 32u4-based <br> (Micro, Leonardo or Yum)	| 0, 1, 2, 3 and 7 | 2 (SDA/SDIO), 3 (SCL/SCLK) |  Yes | Yes |
| Zero | Any digital pins except pin 4 | D8 (SDA/SDIO) and D9 (SCL/SCLK)  | Not tested | No |
| Due	| Any digital pins | 20 (SDA/SDIO), 21 (SCL/SCLK) | Yes  |  No |
| ESPRESSIF ESP32 | Any GPIO pins |  Most pins (usually 21 and 22) | Yes | No | 
| ESPRESSIF ESP8366 | GPIO13 and GPIO14 | GPIO4 (SDA) and GPIO5 (SCL) | Yes | No | 
| STM32F103  | PA0, PA1 | PB6 (SCL) and PB7 (SDA) | Yes | No |
| STM32F104  | PA0, PA1 | PB6 (SCL) and PB7 (SDA) | Yes | No |
| RP2050 <br> Rpi Pico| Any GPIO pins | GP1 (SCL) and GP0 (SDA) | Yes | No |  



### Schematic

The main purpose of the schematic below (prototype) is to test the Si4735 Arduino Library. It does not intend to be a real radio for exigent listeners. However, it is possible to start with it and then, if you wish, you can include some devices to the circuit to improve, for example, its sensibility beyond other desired features.
[Click here to see a complete set of schematics and tips](https://pu2clr.github.io/SI4735/extras/schematic)

The image below shows a version of Silicon Labs SSOP Typical Application Schematic connect to the host MCU (Arduino Pro Mini 3.3V). __Pay attention to the Si4735-D60 SEN pin (16). When the SEN pin is connected to the ground, the I²C bus address is 0x11. When the SEN pin is connected to +3.3V, the I²C bus address is 0x63. By default, the "Si4735 Arduino Library" uses the 0x11 I²C bus address (SEN pin connected to GND). If you want to use the address 0x63 (SEN connected on +3.3V), see the functions (methods) getDeviceI2CAddress, setDeviceI2CAddress and setDeviceOtherI2CAddress__.   

<BR>

#### Basic Schematic with SI4735-D60

![Basic Schematic Eagle version with SI4735-D60](./extras/images/schematic_basic_eagle.png)


#### Basic Schematic with SI4732-A10

![Basic Schematic Eagle version with SI4732-A10](./extras/images/schematic_basic_SI4732.png)



__Please, check the folder [extras/schematic/](https://pu2clr.github.io/SI4735/extras/schematic)__. There, you will find other schematics with OLED, LCD, Nokia 5110, TFT, buttons and encoders setup. Also, check the comments at the beginning of each sketch example. You will find the SI473X, button, encoder, display and Arduino settings. 



#### The picture below shows the SI4735-D60/SI4730-D60 pinout (SSOP)

![Si4735-D60 pinout](./extras/images/Si4735-D60-pinout.png)

#### The picture below shows the SI4732-A10 pinout (16L SOIC Package)

![Si4732-A10 pinout](./extras/images/SI4732_A10_pinout.png)

 

#### The picture below shows the SI473X pinout (QFN)

![Si4735-D60 pinout](./extras/images/SI4735_D50_QFN.png)



* The SI4735-D60 and SI4732-A10 have SSB patch support
* __See some Shortwave antenna configuration on__  [Si47XX ANTENNA, SCHEMATIC, LAYOUT, AND DESIGN GUIDELINES; AN383](https://www.silabs.com/documents/public/application-notes/AN383.pdf)

* __Pay attention to the appropriated Arduino pinout to select the correct interrupt (IRQ), RST, SDIO and SCLK pins. The previous table shows some Arduino board pinout__.  
* __Be sure about the pinout of your device and Arduino connections. For example: the Si4735-D60/Si4730_D60 SEN pin (16 on SSOP version and 6 on QFN version) when connected to the ground, the I²C bus address is 0x11. When this pin is connected to +3.3V, the I²C bus address is 0x63__. See the functions [getDeviceI2CAddress](https://pu2clr.github.io/SI4735/#getdevicei2caddress) and [setDeviceI2CAddress](https://pu2clr.github.io/SI4735/#setdevicei2caddress) to correct setup. If you follow the schematic used in this project, you do not need to do anything (the default I²C bus address is 0x11). If you do not know how this pin is configured on the board, use [getDeviceI2CAddress](https://pu2clr.github.io/SI4735/#getdevicei2caddress).  

<BR>

#### The image bellow shows the Silicon Labs SSOP Typical Application Schematic.

![Silicon Labs Schematic](./extras/images/silicon_labs_schematic_pag_19.png)



<BR>

### Parts

The table below shows the component parts used to build the radio prototype based on Si4735 and used the Silicon Labs SSOP Typical Application Schematic as main source. However, some parts were included by the author of this project. 


|Part	| Description |
|-------| ------------ |
| C1    | 22nF Monolithic Multilayer Chip Ceramic non polarized capacitor (Place it close to VA pin)|
| C2    | 1nF Monolithic Multilayer Chip Ceramic non polarized capacitor |
| C3    | 470nF Monolithic Multilayer Chip Ceramic non polarized capacitor| 
| C4    | 100nF Monolithic Multilayer Chip Ceramic non polarized capacitor (Place it close to VD pin)|
| C5 and C6 | 22pF (Crystal load capacitors) | 
| C7 and C8 *1 | 4.7uF Monolithic Multilayer Chip Ceramic non polarized capacitor | 
| R3    | 2.2K |
| (R4 and R5) *2 | 2.2K to 10K (pull-up resistors) |
| L1 | Ferrite loop stick (about 500 μH) |
| X1    | 32.768 kHz crystal |
| SI4735 | digital CMOS AM(LW, MW and SW)/FM radio receiver IC |

  * *1: C7 and C8 are ceramic capacitors included by the author of this project. They are not present on the original Silicon Labs schematic. Actually, you can use also electrolytic capacitors. Values between 2.2uF to 10uF will work well. 
  * *2: R4 and R5 are pull-up resistor included by the author of this project. They are not present on the original Silicon Labs schematic. This will also depend on other devices connected to the same I²C bus.  __Always try to use the lowest possible value__.

__Notes from Silicon Labs Broadcast AM/FM/SW/LW Radio Receiver documentation (page 12)__:
* Place C1 close to VA and C4 close to VD pin.
* All grounds connect directly to GND plane on PCB.
* Pins 6 and 7 are not connects, leave floating.
* Pins 10 and 11 are unused. Tie these pins to GND.
* To ensure proper operation and receiver performance, follow the guidelines in “AN383: Si47xx Antenna, Schematic,
* Layout, and Design Guidelines.” Silicon Laboratories will evaluate schematics and layouts for qualified customers.
* Pin 8 connects to the FM antenna interface, and pin 12 connects to the AM antenna interface.
* Place Si473x-D60 as close as possible to the antenna and keep the FMI and AMI traces as short as possible.

[Go to contents](https://pu2clr.github.io/SI4735/#contents)


<BR>

### The main Si4735-D60 and Si4732-A10 features

* FM (VHF) support (64–108 MHz)
* AM (MW) band support (520–1710 kHz)
* SW band support (2.3–26.1 MHz)
* LW band support (153–279 kHz)
* Allows firmware upgrade. Including the possibility of adjustments to demodulate SSB.
* Advanced AM/FM seek tuning
* Automatic frequency control (AFC)
* Automatic gain control (AGC)
* Digital FM stereo decoder
* AM/FM/SW/LW digital tuning
* SSB patch support
* RDS/RBDS processor
* Digital audio out (__Attention__: Crystal and digital audio mode cannot be used at the same time)
* I²C and SPI interface 
* Great Programming Guide and additional documentation to deal with the device

[Go to contents](https://pu2clr.github.io/SI4735/#contents)

<BR>

## Terminology

| Term | Description |
| ---- | ----- |
| API  | Application Programming Interface (API). In this context, it is an interface that you can use to simplify the implementation and maintenance of your software (Arduino sketch). All API documentation about this library can be found on [https://pu2clr.github.io/SI4735/extras/apidoc/html/index.html](https://pu2clr.github.io/SI4735/extras/apidoc/html/index.html). | 
| Arduino Libraries|Libraries are files written in C or C++ (.c, .cpp) which provide your sketches with extra functionality. The SI4735 Library provides extra functionalities to make easier the Arduino deal with Si473X devices| 
| BPF  | Band Pass Filter |
| DFS  | I²S - digital frame synchronization input |
| DIN  | I²S - digital data input |
| DCLK | I²S - digital bit synchronization input clock |
| ESD  | Electrostatic discharge. Device used to protect the receiver from static electricity discharge |
| IDE  | Integrated Development Environment|    
| I²C  | [I²C - Inter-Integrated Circuit](https://pt.wikipedia.org/wiki/I²C)|  
| I²S  | Serial bus interface used for connecting digital audio devices 
| Sketch |Name that Arduino environment uses for a program|
| Interrupt |In this context, it is an Arduino Resource. Allows important tasks to be performed regardless of the flow of your program|
| C++ | A object-oriented programming (OOP) language. It is a superset of the C language with an additional concept of "classes." |
| programming guide | In this context it refers to [Si47XX PROGRAMMING GUIDE (REV 1.0)](https://web.engr.oregonstate.edu/~traylor/ece473/data_sheets/AN332.pdf)|
| LNA | Low Noise Amplifier |
| POC | Proof of Concept|
| SEN | Serial enable pin, active low, used as device select in 3-wire and SPI operation and address selection in 2-wire operation| 
| CTS | Clear to send |
| STC | Seek/Tune Complete |
| RESP | Response byte (n = 1 to 15) |
| RESPONSEn | Response register (16-bit) in 3-Wire mode (n = 1 to 8)| 
| RST  | Also RSTb—Reset pin, active low |
| RCLK | External reference clock |
| SSB | [Single Side Band](https://en.wikipedia.org/wiki/Single-sideband_modulation) | 
| Attack | attack-time delay -  the time needed for a receiver to respond to an incoming signal |
| SDIO | Serial data in/data out pin|
| SCLK | Serial clock pin |
| Soft Mute | Resource used to attenuate the audio outputs and minimize audible noise in very weak signal conditions | 
| Firmware Upgrades | The Si4732-A10 and SI4735-D60 contain on-chip program  RAM to accommodate minor changes to the firmware | 

[Go to contents](https://pu2clr.github.io/SI4735/#contents)

<BR>

## Documentation 

{% include apidoc.html %}


This library has two documentation sources: 

* [SI4735 Arduino Library documentation generated by Doxygen (updated)](https://pu2clr.github.io/SI4735/extras/apidoc/html/)
* [Legacy documentation (not updated frequently)](https://github.com/pu2clr/SI4735/wiki) 

[Doxygen](http://www.doxygen.nl/index.html) is a tools that can generate documentation from source code. This tools help the development team to keep the documentation updated. 

If you prefer, you can also read the documentation directly from the [SI4735.cpp](https://pu2clr.github.io/SI4735/SI4735.cpp) and [SI4735.h](https://pu2clr.github.io/SI4735/SI4735.h). These files are also well documented. 

### Main functions 

This library has more than 120 functions. The table below shows the mains functions used in a regular receiver. Full details on the functions shown below can be read on [https://pu2clr.github.io/SI4735/extras/apidoc/html/](https://pu2clr.github.io/SI4735/extras/apidoc/html/).

| Method / Function               | Description |
| ------------------                | ----------- | 
| setup                             | Use this function to start the device up with the parameters shown below. |
| getStatus                         | Used to get the current status of the Si4735. |
| getCurrentRSSI                    | Get the current receive signal strength (0–127 dBμV). |
| getCurrentSNR                     | Gets the current SNR metric (0–127 dB). |
| getFrequency                      | Gets the current frequency of the Si4735. |
| frequencyUp                       | Increments the current frequency on current band/function by using the current step. |
| frequencyDown                     | Decrements the current frequency on current band/function by using the current step. |
| setFrequencyStep                  | Sets the current step value. |
| setVolume                         | Sets volume level (0 to 63). |
| setFM                             | Sets the radio to FM function. |
| isCurrentTuneFM                   | Returns true if the current function is FM (FM_TUNE_FREQ). |  
| getCurrentPilot                   | Checks the current pilot. Indicates stereo pilot presence. | 
| setAM                             | Sets the radio to AM function. It means: LW MW and SW. |
| setAmSoftMuteMaxAttenuation       | Sets the Am Soft Mute Max Attenuation. |
| setAutomaticGainControl           | Automatic Gain Control setup. |
| getAutomaticGainControl           | Queries Automatic Gain Control STATUS. |
| setBandwidth                      | Selects the bandwidth of the channel filter for AM reception. |
| isAgcEnabled                      | Checks if the AGC is enabled (returns true if enabled). |
| setRdsConfig                      | Sets RDS property. |
| getRdsStatus                      | Gets the RDS status. Store the status in currentRdsStatus member. COMMAND FM_RDS_STATUS. |
| getRdsReceived                    | Get the Rds Received FIFO. |
| getRdsSync                        | Get the Rds Sync. Returns true if RDS currently synchronized. |
| getRdsSyncFound                   | Get the Rds Sync Found. Returns true if found RDS synchronization. |
| getRdsText2A                      | Gets the Text processed for the 2A group. |
| getRdsText2B                      | Gets the Text processed for the 2B group. |
| getRdsText0A                      | Gets the station name and other messages. |
| getRdsTime                        | Gets the RDS time and date when the Group type is 4. | 
| reset                             | Reset the SI473X.  |
| queryLibraryId                    | Queries the library information of the Si47XX device. | 
| patchPowerUp                      | This method can be used to prepare the device to apply SSBRX patch. |
| downloadPatch                     | Transfers the content of a SSB patch stored in an array of bytes to the SI4735 device. |
| downloadPatchFromEeprom           | Transfers the content of a SSB patch stored in an eeprom to the SI4735 device. |
| setSSBConfig                      | Sets the SSB receiver mode. |
| setSSB                            | Tunes the SSB (LSB or USB) receiver to a frequency between 520 and 30 MHz in 1 kHz steps.|
| setSSBAutomaticVolumeControl      | Sets SSB Automatic Volume Control (AVC) for SSB mode. |
| setSSBBfo                         | Sets the SSB Beat Frequency Offset (BFO). |
| setSSBAudioBandwidth              | SSB Audio Bandwidth for SSB mode. |
| setSBBSidebandCutoffFilter        | Sets SBB Sideband Cutoff Filter for band pass and low pass filters. |
| setTuneFrequencyAntennaCapacitor  | Only FM. Freeze Metrics During Alternate Frequency Jump. |
| setI2CFastModeCustom              | Sets the I²C bus to a given value. |
| setI2CStandardMode                | Sets I²C bus to 100kHz. |
| setAudioMuteMcuPin                | This function sets the mcu digital pin you want to use to control the external audio mute circuit. | 

[Go to contents](https://pu2clr.github.io/SI4735/#contents)


### Defined Data Types and Structures

The Si47XX family works with many internal data that can be represented by data structure or defined data type in C/C++. These C/C++ resources have been used widely here. This approach made the library easier to build and maintain. Each data structure created here has its reference (name of the document and page on which it was based). In other words, to make the SI47XX device easier to deal with, some defined data types were created to handle  byte and bits to process commands, properties and responses. __The goal of this approach is separating data from code__. 

All data types defined in Si4735 Arduino Library are explained [here](https://pu2clr.github.io/SI4735/extras/apidoc/html/)

### Public methods 

This library was developed using the C++ language and the Object-oriented Programming approach. Methods are functions that belong to the class, in this case SI4735 class. Click [here](https://pu2clr.github.io/SI4735/extras/apidoc/html/group__group01.html) to go to API docummentation.

All methods defined in Si4735 class are explained [here](https://pu2clr.github.io/SI4735/extras/apidoc/html/). The list below refers to the method groups implemented by the Si4735 class.   


#### Si47XX device setup and startup

Methods of this group are useful to configure the way that the Si47XX devices have to be initiate. 


#### Firmware Information

Allows to query the part number, chip revision, firmware revision, patch revision and component revision numbers.

#### Current Status 

The Si4735 class has a set of methods to query the current frequency, RSSI, SNR, multipath, and the antenna tuning capacitance value (0-191).

#### Current AGC Status

Methods to query AGC status.  Returns whether the AGC is enabled or disabled and it returns the gain index. 


#### Si4735 filters configuration

The SI4735 class has a set of methods to setup filters on AM and SSB mode.

#### Audio 

Methods to setup the audio mode (Digital or Analog), volume, mute etc. 

### RDS

This library implements some RDS features of the SI4735. All functions to deal with RDS are documented [here](https://pu2clr.github.io/SI4735/extras/apidoc/html/group__group16.html). Below you have some videos showing the RDS functionalities implemented by the PU2CLR Si4735 Arduino Library.

{% include videoRDS2.html %}


{% include videoRDS1.html %} 


See [RDS example implementations for more details](https://github.com/pu2clr/SI4735/tree/master/examples/SI47XX_10_RDS).


The list below points to some sketch examples that use RDS implementation. 

* [ATS-20 and 20+](https://github.com/pu2clr/SI4735/tree/master/examples/SI47XX_KITS/AliExpress/SI473X_ALL_IN_ONE_OLED_RDS_CHINESE_V8r) 
* [All band receiver with Nokia Display and RDS](https://github.com/pu2clr/SI4735/tree/master/examples/SI47XX_09_NOKIA_5110/ALL_IN_ONE_ENCODER_RDS) 
* [All Band receiver with Arduino DUE or Arduino Mega2560, TFT Touch and RDS](https://github.com/pu2clr/SI4735/tree/master/examples/SI47XX_16_ARDUINO_DUE_MEGA/SI47XX_02_RDS_TFT_TOUCH_SHIELD_35_V2)
* [TFT and Touch examples with RDS support](https://github.com/pu2clr/SI4735/tree/master/examples/SI47XX_10_RDS)


__ATTENTION:__ 
While utilizing interrupts is often the preferred approach for capturing RDS messages, applications using Arduino based on ATmega328 face limitations as they can only utilize two pins for interrupts (D2 and D2). These pins are typically allocated for encoder control, leaving no interrupt-capable pins available for FM/RDS application control. In such scenarios, resorting to the polling approach becomes necessary for retrieving RDS messages.

The code below shows the polling approach to get RDS messages.

```cpp

#include <SI4735.h>

#define RESET_PIN 16 // Arduino Nano / UNO pin A2

SI4735 rx;
void setup()
{
  rx.setup(RESET_PIN, FM_FUNCTION);
  rx.setFM(8400, 10800, currentFrequency, 10);
  delay(500);
  rx.setRdsConfig(3, 3, 3, 3, 3);
  rx.setFifoCount(1);
}


char *utcTime;
char *stationName;
char *programInfo;
char *stationInfo;

void showStationName() {
  if (stationName != NULL) {
    // do something
  }
}

void showStationInfo() {
  if (stationInfo != NULL) {
    // do something
  }
}

void showProgramaInfo() {
  if (programInfo != NULL) {
    // do something
  }
}

void showUtcTime() {
  if (rdsTime != NULL) {
    // do something
  }
}

void checkRds() {
 // The char pointer variables above will be populate by the call below. So, these variable (pointers) need to be passed by reference (pointer to pointer). 
 if (rx.getRdsAllData(&stationName, &stationInfo , &programInfo, &rdsTime) ) {
      showStationName(stationName); // you need check if stationName is null in showStationName
      showStationInfo(stationInfo); // you need check if stationInfo is null in showStationInfo
      showProgramaInfo(programInfo); // you need check if programInfo is null in showProgramaInfo
      showUtcTime(rdsTime); // you need check if rdsTime is null in showUtcTime
 }
}

void loop()
{
  .
  .
  .
  if (rx.isCurrentTuneFM()) {
    checkRds();
  }
  .
  .
  .
  delay(5);
}
```



### SI4735 Patch Support for Single Side Band

The SI4735 class implements a set of methods to apply patches and deal with SSB mode. All API documentation about patches can be seen [here](https://pu2clr.github.io/SI4735/extras/apidoc/html/group__group17.html).

The SSB patches used in some examples of this library were tested only on SI4735-D60 and SI4732-A10 devices.  __The updates used in those examples are unlikely to work on other SI47XX devices__.

__First of all, it is important to say that the SSB patch content is not part of this library__. The patches used with test purpose here were made available by Mr. [Vadim Afonkin](https://youtu.be/fgjPGnTAVgM) on his [Dropbox repository](https://www.dropbox.com/sh/xzofrl8rfaaqh59/AAA5au2_CVdi50NBtt0IivyIa?dl=0). Also, on Silcon Labs website, [support and community](https://www.silabs.com/community/audio-radio/forum.topic.20.10.html/ssb_and_or_ask_fskn-nJpo), there is a topic called "__SSB and/or ASK/FSK/nPSK demodulation on Si radio chips__". If you follow that topic, you will see a post from a member called "__DASM__" making available a [link to a patch](https://www.silabs.com/content/usergenerated/asi/cloud/attachments/siliconlabs/en/community/groups/audio-radio/forum/jcr:content/content/primary/qna/ssb_and_or_ask_fskn-nJpo/lookattachment_p216-Fwrr/si4735_patch.txt) for the SI4735-D60 and SI4732-A10. The structure of this file is a bit different if compared with Vadim's files __amrx_6_0_1_ssbrx_patch_full_0x9D29.csg__ and __amrx_6_0_1_ssbrx_patch_init_0xA902.csg__. However, they have the same idea and can be easily adjusted for patching. If you have some experience with C, all you have to do is follow the recommendations of the SI47XX PROGRAMMING GUIDE AN332; page 219.

PLEASE NOTE THAT THE AUTHOR OF THIS LIBRARY DOES NOT ENCOURAGE ANYONE TO USE THE SSB PATCHES CONTENT FOR COMMERCIAL PURPOSES. __IN OTHER WORDS, WHILE THIS LIBRARY SUPPORTS SSB PATCHES, THE PATCHES THEMSELVES ARE NOT A PART OF THIS LIBRARY__.

#### What does SSB patch mean?

In this context, a patch is a piece of software used to change the behavior of the SI4735-D60 and SI4732-A10 device.

There is little information available about patching the SI4735-D60 and SI4732-A10. The following information is the understanding of the author of this project and it is not necessarily correct.

A patch is executed internally (run by internal MCU) of the device. Usually, patches are used to fix bugs or add improvements and new features over what the firmware installed in the internal ROM of the device offers. Patches for the SI4735 are distributed in binary form and are transferred to the internal RAM of the device by the host MCU (in this case, Arduino boards). Since the RAM is volatile memory, the patch stored into the device gets lost when you turn off the system. Consequently, the content of the patch has to be transferred to the device every time the device is powered up.

I would like to thank [Mr Vadim Afonkin](https://youtu.be/fgjPGnTAVgM) for making the SSBRX patches available for
SI4735-D60 on his [Dropbox repository](https://www.dropbox.com/sh/xzofrl8rfaaqh59/AAA5au2_CVdi50NBtt0IivyIa?dl=0). On this repository you have two files, __amrx_6_0_1_ssbrx_patch_full_0x9D29.csg__ and __amrx_6_0_1_ssbrx_patch_init_0xA902.csg__.  Please note that the patch content of the original file is in const hexadecimal representation in an ASCII text file. If you are not using C/C++ or if you want to load the files directly to the SI4735, you must convert the supplied hexadecimal constants into their numerical equivalents.

##### For example: 

| Hexadecimal C/C++ constant | Binary representation | Decimal representation | 
| -------------------------- | --------------------- | ---------------------- | 
| 0x15                       | 00010101              |  21                    |
| 0x01                       | 00000001              |   1                    |
| 0xFF                       | 11111111              | 255                    |



__ATTENTION__: The author of this project cannot guarantee that procedures shown here will work in your development environment. Proceed at your own risk.
    This library works with the I²C communication protocol to send an SSB extension PATCH to SI4735-D60 and SI4732-A10 devices. Once again, the author disclaims any
    and all liability for any damage or effects this procedure may have on your devices. Proceed at your own risk.

All methods/functions to deal with SSB on Si4735-D60 can be seen [here](https://pu2clr.github.io/SI4735/extras/apidoc/html/group__group17.html).

This library implements many SSB examples. See the table below. 

| SSB sketch | SSB sketch | SSB sketch |
| ------ | ------ | ------ |
| [SI4735_03_POC_SSB ](https://github.com/pu2clr/SI4735/tree/master/examples/SI47XX_01_SERIAL_MONITOR/SI4735_03_POC_SSB)| [SI473X_04_ALL_IN_ONE](https://github.com/pu2clr/SI4735/tree/master/examples/SI47XX_02_LCD_20x4_I2C/SI473X_04_ALL_IN_ONE) | [SI4735_02_ALL_IN_ONE_OLED](https://github.com/pu2clr/SI4735/tree/master/examples/SI47XX_03_OLED_I2C/SI4735_02_ALL_IN_ONE_OLED) |
| [SI47XX_01_TFT_ILI9225 - TFT](https://github.com/pu2clr/SI4735/tree/master/examples/SI47XX_04_TFT/SI47XX_01_TFT_ILI9225)| [SI47XX_02_TFT_TOUCH_SHIELD - Touch Screen](https://github.com/pu2clr/SI4735/tree/master/examples/SI47XX_04_TFT/SI47XX_02_TFT_TOUCH_SHIELD) | [SI47XX_02_ESP32_TOUCH_ALL_IN_ONE](https://github.com/pu2clr/SI4735/tree/master/examples/SI47XX_06_ESP32/SI47XX_02_ESP32_TOUCH_ALL_IN_ONE) |
| [SI4735_02_POC_SSB.ino](https://github.com/pu2clr/SI4735/tree/master/examples/SI47XX_07_STM32/SI4735_02_POC_SSB) | [SI47XX_03_RDS_TFT_ILI9225](https://github.com/pu2clr/SI4735/tree/master/examples/SI47XX_10_RDS/SI47XX_03_RDS_TFT_ILI9225) | [ 	SI47XX_02_RDS_TFT_TOUCH_SHIELD](https://github.com/pu2clr/SI4735/tree/master/examples/SI47XX_10_RDS/SI47XX_02_RDS_TFT_TOUCH_SHIELD) |
| [SI4735_04_RDS_ALL_IN_ONE_OLED](https://github.com/pu2clr/SI4735/tree/master/examples/SI47XX_10_RDS/SI4735_04_RDS_ALL_IN_ONE_OLED) |  |  | 

{% include videoSSB.html %}

See SSB example implementations [here](https://github.com/pu2clr/SI4735/tree/master/examples).

[Go to contents](https://pu2clr.github.io/SI4735/#contents)

<BR>

### EEPROM support

Depending on your MCU memory size, to use SSB mode may not be possible due to the large amount of memory required by the patch. To solve this problem this library implemented the function __downloadPatchFromEeprom__. This function reads the patch content from an external EEPROM and transfers it to the SI4732-A10 or SI4735-D60 devices. To run this function you must have an external I2C EEPROM device configured with your MCU and the Si4732/35 device on I²C bus. Also, the EEPROM must have the patch content generated by the sketch SI47XX_09_SAVE_SSB_PATCH_EEPROM stored in it. [See folder TOOLS](https://github.com/pu2clr/SI4735/tree/master/examples/TOOLS/SI47XX_09_SAVE_SSB_PATCH_EEPROM).

The example [SI4735_06_SSB_EEPROM](https://github.com/pu2clr/SI4735/tree/master/examples/SI47XX_01_SERIAL_MONITOR/SI4735_06_SSB_EEPROM) shows this functionality on an Arduino Pro Mini. 

The example [SI47XX_03_SSB_Tiny4kOLED](https://github.com/pu2clr/SI4735/tree/master/examples/SI47XX_05_ATTINY85/SI47XX_03_SSB_Tiny4kOLED) implements this functionality on an ATtiny85.

To store the SSB patch content into an external EEPROM connected to your MCU via I2C bus, you need to run a special sketch first to program the EEPROM. [See sketch SI47XX_09_SAVE_SSB_PATCH_EEPROM](https://github.com/pu2clr/SI4735/tree/master/examples/TOOLS/SI47XX_09_SAVE_SSB_PATCH_EEPROM). 

__Attention__: The full ssb patch needs about 16KB on eeprom.  __All data that you have stored before into your eeprom device will be lost after the execution of the sketch SI47XX_09_SAVE_SSB_PATCH_EEPROM__.  

__The EEPROM device used for testing was the AT24C256 Serial I²C Interface__

[Watch the video: ATtiny85 working with SI4735-D60 and SSB](https://www.youtube.com/watch?v=Dnk5tp0o880) 

{% include eeprom.html %} 


<BR>
<BR>

#### SAVING RECEIVER STATUS INTO THE INTERNAL EEPROM


You can store useful receiver data into the internal Arduino EEPROM. Current band information, Bandwidth, step, mode, audio volume and filter are examples of data that can be stored into the internal EEPROM and restored when you turn the receiver on again. See the section [Storing data into the internal EEPROM before shutdowning](extras/schematic#storing-data-into-the-internal-eeprom-before-shutdowning) for details. 


<BR>


### Digital Audio support 

First of all, passive Crystal and digital audio modes cannot be used at the same time on SI47XX devices. The document Si47XX ANTENNA, SCHEMATIC, LAYOUT, AND DESIGN GUIDELINES; AN383; rev 0.8; page 6; you will find the following note: "Crystal and digital audio mode cannot be used at the same time".  So, for Digital Audio, you have to remove the crystal, and capacitors connected to the crystal from the circuit. 

This library supports the external clock reference and has implemented the digital audio functions. 
You can configure digital audio and external clock reference by using the functions: __setup, radioPowerUp, digitalOutputFormat, digitalOutputSampleRate, setRefClock and setRefClockPrescaler__. 

The schematic below shows the Digital Audio setup using an SI4735-D60 with an ESP32 Devkit. 

![SI473X and external active crystal oscillator or signal generator](extras/images/schematic_basic_active_crystal_osc_digital_audio_esp32.png)


You can check the schematic above via [SI47XX_06_ESP32/DIGITAL_AUDIO_SERIAL_PLOTTER example](https://github.com/pu2clr/SI4735/tree/master/examples/SI47XX_06_ESP32/DIGITAL_AUDIO_SERIAL_PLOTTER)


The table below shows the SI4735,  DAC MAX98357A and ESP32 wireup

| Si4735    | Function  |  DAC MAX98357A  | ESP32                                 |
|-----------| ----------|-----------------|---------------------------------------|
| pin 1     | DOUT      |  DIN            |  SerialData / GPIO32                  |
| pin 2     | DFS       |  RC             |  WordSelect / GPIO25                  |
| pin 3     | DCLK      |  BCLK           |  ContinuousSerialClock) / GPIO33)     |



The table below shows the SI4735,  DAC CJMCU and ESP32 wireup

| Si4735    | Function  |  DAC MAX98357A  | ESP32                                 |
|-----------| ----------|-----------------|---------------------------------------|
| pin 1     | DOUT      |  DIN            |  SerialData / GPIO32                  |
| pin 2     | DFS       |  WSEL           |  WordSelect / GPIO25                  |
| pin 3     | DCLK      |  BCLK           |  ContinuousSerialClock) / GPIO33)     |



See the [API Documentation](https://pu2clr.github.io/SI4735/extras/apidoc/html/) for more details. 

<BR>

### Customizing PU2CLR Arduino Library

Maybe you need some Si47XX device functions that the __PU2CLR SI4735 Arduino Library__ has not yet implemented. Also, you may want to change some existent function behaviors. This topic describes some approaches to add new SI473X features to your application.


__Please, check the [API documentation](https://pu2clr.github.io/SI4735/extras/apidoc/html/) before implementing something you think is new. It is possible that what you want has already been implemented__. 

####  Primitive Functions
This library has primitive functions that make it easier for you to implement commands that may not have been implemented yet. The methods [setProperty, getProperty sendCommand, getCommandResponse and getStatusResponse](https://pu2clr.github.io/SI4735/extras/apidoc/html/group__group10.html) can be used to setup the SI473X devices directely. They can also be useful to check some features of the SI473X devices. To use those methods you have to be guided by the ["AN332 Si47XX PROGRAMMING GUIDE REV 1.0"](https://web.engr.oregonstate.edu/~traylor/ece473/data_sheets/AN332.pdf) and __AN332 REV 0.8 UNIVERSAL PROGRAMMING GUIDE AMENDMENT FOR SI4735-D60 SSB AND NBFM PATCHES__ Silicon Labs documentation.  If you are familiar with bit operators in C / C ++, you will have no problem in using the above functions. 

The example below configures the GPIO by sending the 0x81 (GPIO_SET) command(AN332 Si47XX Programming guide page 195). 

```cpp

SI4735 rx;
uint8_t args[] = {0b00001010} // will set the GPIO 1 and 3 to high
uint8_t response[0]

.
.
.

rx.sendCommand(0x81,1,args);
.
.
rx.getCommandResponse(1,response);
.
.
.

```

#### Extending the SI4735 class

The best way to customize the PU2CLR SI4735 Arduino Library for your needs is extending the current version of the library by using C++ OOP approach.  For example: 

```cpp
#include <SI4735.h>
class MyCustomSI4735 : public SI4735 { // extending the original class SI4735
  public:
    // New functions / methods
    int methodA() {    // some SI47XX command that PU2CLR SI4735 Arduino Library does not implement
      return 0;
    }

    int methodB() {    // another SI47XX command that PU2CLR SI4735 Arduino Library does not implement
      return 1;
    }

    // Overwriting existent methods
    void setTuneFrequencyAntennaCapacitor(uint16_t capacitor) { 
      // Here, your setTuneFrequencyAntennaCapacitor code that will replace the original code 
      // Tip: currentFrequencyParams is a protected member of SI4735 class and can be referred in your code
```

<!-- opensource-radar:truncated -->
