<div align = center>

#  Arduino IRremote
A library enabling the sending & receiving of infrared signals.

[![Badge License: MIT](https://img.shields.io/badge/License-MIT-ac8b11.svg?style=for-the-badge&labelColor=yellow)](https://opensource.org/licenses/MIT)
 &nbsp; &nbsp;
[![Badge Version](https://img.shields.io/github/v/release/Arduino-IRremote/Arduino-IRremote?style=for-the-badge&color=33660e&labelColor=428813&logoColor=white&logo=DocuSign)](https://github.com/Arduino-IRremote/Arduino-IRremote/releases/latest)
 &nbsp; &nbsp;
[![Badge Commits since latest](https://img.shields.io/github/commits-since/Arduino-IRremote/Arduino-IRremote/latest?style=for-the-badge&color=004463&labelColor=00557f)](https://github.com/Arduino-IRremote/Arduino-IRremote/commits/master)
 &nbsp; &nbsp;
[![Badge LibraryBuild](https://img.shields.io/github/actions/workflow/status/Arduino-IRremote/Arduino-IRremote/LibraryBuild.yml?branch=master&style=for-the-badge&color=551f47&labelColor=752a61)](https://github.com/Arduino-IRremote/Arduino-IRremote/actions)
<br/>
<br/>
[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/badges/StandWithUkraine.svg)](https://stand-with-ukraine.pp.ua)

Available as [Arduino library "IRremote"](https://www.arduinolibraries.info/libraries/i-rremote).

[![Button Install](https://img.shields.io/badge/Install-yellow?style=for-the-badge&logoColor=white&logo=GitBook)](https://www.ardu-badge.com/IRremote)
 &nbsp; &nbsp;
[![Button API](https://img.shields.io/badge/API-1c8840?style=for-the-badge&logoColor=white&logo=OpenStreetMap)](https://arduino-irremote.github.io/Arduino-IRremote/classIRrecv.html)
 &nbsp; &nbsp;
[![Button Changelog](https://img.shields.io/badge/Changelog-00557f?style=for-the-badge&logoColor=white&logo=AzureArtifacts)](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/changelog.md)
 &nbsp; &nbsp;
[![Button Contribute](https://img.shields.io/badge/Contribute-752a61?style=for-the-badge&logoColor=white&logo=GitHub)](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/Contributing.md)

#### If you find this program useful, please give it a star.

&#x1F30E; [Google Translate](https://translate.google.com/translate?sl=en&u=https://github.com/Arduino-IRremote/Arduino-IRremote)

</div>

# Table of contents
- [Supported IR Protocols](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#supported-ir-protocols)
- [Common issues when using IRremote](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#common-issues-when-using-irremote)
- [Migrating legacy projects to the latest version](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/Migrating.md)
  * [New features and changes in version 4.6](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#new-features-and-changes-in-version-46)
- [Why *.hpp instead of *.cpp files](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#why-hpp-instead-of-cpp-files)
- [Using the new *.hpp files](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#using-the-new-hpp-files)
- [Tutorials](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#tutorials)
- [3 ways to specify an IR code](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#3-ways-to-specify-an-ir-code)
- [IRReceiver pinouts](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#irreceiver-pinouts)
- [Receiving IR codes](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#receiving-ir-codes)
  * [decodedIRData structure](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#decodedirdata-structure)
  * [Callback functionality](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#callback-functionality)
  * [Ambiguous protocols](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#ambiguous-protocols)
  * [RAM usage of different protocols](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#ram-usage-of-different-protocols)
  * [Handling unknown Protocols](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#handling-unknown-protocols)
    * [Disclaimer](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#disclaimer)
    * [Other libraries, which may cover these protocols](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#other-libraries-which-may-cover-these-protocols)
    * [Protocol=PULSE_DISTANCE](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#protocolpulse_distance)
    * [Protocol=UNKNOWN](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#protocolunknown)
    * [How to deal with protocols not supported by IRremote](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#how-to-deal-with-protocols-not-supported-by-irremote)
  * [Multiple IR receivers](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#multiple-ir-receivers) 
- [Sending IR codes](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#sending-ir-codes)
  * [Sending UNKNOWN protocol](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#sending-unknown-protocol)
  * [Sending protocol from description](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#sending-protocol-from-description)
  * [Sending IRDB IR codes](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#sending-irdb-ir-codes)
    + [List of public IR code databases](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#list-of-public-ir-code-databases)
  * [Flipper Zero Codes](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#flipper-zero-codes)
  * [Send pin](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#send-pin)
  * [Polarity of send pin](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#polarity-of-send-pin)
  * [Simulate an IR receiver module for sending](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#simulate-an-ir-receiver-module-for-sending)
  * [Increase strength of sent output signal](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#increase-strength-of-sent-output-signal)
  * [Multiple IR sender instances](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#multiple-ir-sender-instances)
- [Tiny NEC receiver and sender](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#tiny-nec-receiver-and-sender)
- [The FAST protocol](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#the-fast-protocol)
- [Feedback LED](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#feedback-led)
- [IRCommandDispatcher class](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#ircommanddispatcher-class)
- [FAQ and hints](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#faq-and-hints)
  * [Receiving stops after analogWrite() or tone() or after running a motor](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#receiving-stops-after-analogwrite-or-tone-or-after-running-a-motor)
  * [Receiving sets overflow flag](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#receiving-sets-overflow-flag)
  * [Problems with Neopixels, FastLed etc.](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#problems-with-neopixels-fastled-etc)
  * [Does not work/compile with another library](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#does-not-workcompile-with-another-library)
  * [Minimal CPU clock frequency](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#minimal-cpu-clock-frequency)
  * [Bang & Olufsen protocol](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#bang--olufsen-protocol)
- [Examples for this library](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#examples-for-this-library)
- [WOKWI online examples](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#wokwi-online-examples)
- [IR control of a robot car](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#ir-control-of-a-robot-car)
- [Issues and discussions](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#issues-and-discussions)
- [Compile options / macros for IRremote](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#compile-options--macros-for-irremote)
- [Macros for TinyIR](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#macros-for-tinyir)
- [Macros for IRCommandDispatcher](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#macros-for-ircommanddispatcher)
    + [Changing include (*.h) files with Arduino IDE](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#changing-include-h-files-with-arduino-ide)
    + [Modifying compile options / macros with PlatformIO](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#modifying-compile-options--macros-with-platformio)
    + [Modifying compile options with Sloeber IDE](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#modifying-compile-options--macros-with-sloeber-ide)
- [Supported Boards](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#supported-boards)
- [Timer and pin usage](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#timer-and-pin-usage)
  * [Incompatibilities to other libraries and Arduino commands like tone() and analogWrite()](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#incompatibilities-to-other-libraries-and-arduino-commands-like-tone-and-analogwrite)
  * [Hardware-PWM signal generation for sending](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#hardware-pwm-signal-generation-for-sending)
  * [Why do we use 30% duty cycle for sending](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#why-do-we-use-30-duty-cycle-for-sending)
- [How we decode signals](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#how-we-decode-signals)
- [NEC encoding diagrams](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#nec-encoding-diagrams)
- [Quick comparison of 5 Arduino IR receiving libraries](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#quick-comparison-of-5-arduino-ir-receiving-libraries)
- [History](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/changelog.md)
- [Useful links](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#useful-links)
- [Contributors](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/Contributors.md)
- [License](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#license)
- [Copyright](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#copyright)

<br/>

# Supported IR Protocols
` NEC / Onkyo / Apple `, &nbsp; &nbsp; ` Denon / Sharp `, &nbsp; &nbsp; ` Panasonic / Kaseikyo `,

` JVC `, &nbsp; &nbsp; ` LG `, &nbsp; &nbsp; ` RC5 `, &nbsp; &nbsp; ` RC6 `, &nbsp; &nbsp; ` Samsung `, &nbsp; &nbsp; ` Sony `, &nbsp; &nbsp; ` Marantz `

` Universal Pulse Distance `, &nbsp; &nbsp; ` Universal Pulse Width `, &nbsp; &nbsp; ` Universal Pulse Distance Width`

` Hash `, &nbsp; &nbsp; ` Pronto `

` BoseWave `, &nbsp; &nbsp; ` Bang & Olufsen `, &nbsp; &nbsp; ` Lego `, &nbsp; &nbsp; ` FAST `, &nbsp; &nbsp; ` Whynter `, &nbsp; &nbsp; ` Marantz `, &nbsp; &nbsp; ` MagiQuest `, &nbsp; &nbsp; ` Velux `, &nbsp; &nbsp; ` OpenLASIR `

Protocols can be switched off and on by defining macros before the line `#include <IRremote.hpp>` like [here](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/examples/SimpleReceiver/SimpleReceiver.ino#L33):

```c++
#define DECODE_NEC
//#define DECODE_DENON
#include <IRremote.hpp>
```
<br/>

# Common issues when using IRremote
Or *"I build a gadget with 2 motors controlled by IR and the [IR stops after the first motor command](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#receiving-stops-after-analogwrite-or-tone-or-after-running-a-motor)"*.<br/>
This is due to the fact, that the motor control by AnalogWrite() uses the same timer as IR receiving.<br/>
See [this table](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#timer-and-pin-usage) for the list of timers and pins.

<br/>

# [Migrating legacy projects to the latest version](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/Migrating.md)

## New features and changes in version 4.6
** Version 4.5.0 does not work for ESP platform, because of missing ESP IRAM_ATTR for receiving interrupt.**
- Support for **multiple receiver instances**.<br/>
`irparams_struct irparams` is now member of `IRrecv`. Thus `rawDataPtr` (pointer to irparams) was removed from `IrReceiver.decodedIRData`.<br/>
Old `IrReceiver.decodedIRData.rawDataPtr->rawbuf` is now `IrReceiver.irparams.rawbuf`, the same holds for `IrReceiver.irparams.rawlen`.
- LED feedback is always enabled for sending. It can only be disabled by using `#define NO_LED_SEND_FEEDBACK_CODE` or `#define NO_LED_FEEDBACK_CODE`.
- The second parameter of the function `IrSender.begin(uint_fast8_t aSendPin, bool aEnableLEDFeedback)` has changed to `uint_fast8_t aFeedbackLEDPin`. Therefore this function call no longer works as expected because it uses the old boolean value of e.g. `ENABLE_LED_FEEDBACK` which evaluates to true or 1 as pin number of the LED feedback pin number.
- New experimental Velux send function.
- Send function for Marantz version of the RC5x protocol. This protocol has an additional 6 bit command extension and adds a short pause after the address is sent to identify this variant of the protocol.

<br/>

# Why *.hpp instead of *.cpp files?
**Every \*.cpp file is compiled separately** by a call of the compiler exclusively for this cpp file. These calls are managed by the IDE / make system.
In the Arduino IDE the calls are executed when you click on *Verify* or *Upload*.

And now **our problem with Arduino** is:<br/>
**How to set [compile options](#compile-options--macros-for-irremote) for all *.cpp files, especially for libraries used?**<br/>
IDE's like [Sloeber](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#modifying-compile-options--macros-with-sloeber-ide) or
[PlatformIO](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#modifying-compile-options--macros-with-platformio) support this by allowing to specify a set of options per project.
They add these options at each compiler call e.g. `-DTRACE`.

But Arduino lacks this feature.
So the **workaround** is not to compile all sources separately, but to concatenate them to one huge source file by including them in your source.<br/>
This is done by e.g. `#include "IRremote.hpp"`.

But why not `#include "IRremote.cpp"`?<br/>
If you try it, you will see lots of errors, because each function of the *.cpp file is now compiled twice:<br/>
first when the huge file is compiled, and second when the .cpp file is compiled separately, as described above.<br/>
Therefore, using the **.cpp** extension is no longer possible. One solution is to use the **.hpp** extension to indicate that it is an included .cpp file.<br/>
Any other extension would work, e.g. *cinclude*, but *hpp* seems to be common sense.

# Using the new *.hpp files
In order to support [compile options](#compile-options--macros-for-irremote) more easily,
you **must** use the statement `#include <IRremote.hpp>` instead of `#include <IRremote.h>` in your main program (aka *.ino file with setup() and loop()).

In **all other files** you must use the following, to **prevent `multiple definitions` linker errors**:

```c++
#define USE_IRREMOTE_HPP_AS_PLAIN_INCLUDE
#include <IRremote.hpp>
```

**Ensure that all macros in your main program are defined before any** `#include <IRremote.hpp>`.<br/>
The following macros will definitely be overridden with default values otherwise:
- `RAW_BUFFER_LENGTH`
- `IR_SEND_PIN`
- `SEND_PWM_BY_TIMER`

<br/>

# Tutorials
- A very elaborated introduction to IR remotes and IRremote library from [DroneBot Workshop ](https://dronebotworkshop.com/ir-remotes/).


# 3 ways to specify an IR code
There are 3 different ways of specifying a particular IR code.
- **Timing (Raw):** Records the exact duration of pulses. Uses the most memory but works for everything.
- **Encoding Schemes:** General rules for each data bit (like how 1s and 0s are shaped).
- **Protocols (Recommended):** Uses predefined names (like NEC or Sony) and small 8 or 16-bit addresses and commands. Most efficient and easiest to read.

## 1. Timing
The timing of each mark/pulse and space/distance_between_pulses is specified in a list or array.
This enables specifying **all IR codes**, but requires a lot of memory and is **not readable at all**.
One formal definition of such a timing array, including **specification of frequency and repeats** is the [**Pronto** format](http://www.harctoolbox.org/Glossary.html#ProntoSemantics).<br/>
Memory can be saved by using a lower time resolution.
For IRremote you can use a 50 &micro;s resolution which halves the memory requirement by using byte values instead of int16 values.
For receiving purposes you can use the **hash of the timing** provided by the `decodeHash()` decoder.

## 2. Encoding schemes
There are 3 main encoding schemes which encode a binary bitstream / hex value:
1. `PULSE_DISTANCE`. The distance between pulses determines the bit value. This always requires a stop bit!
Examples are NEC and KASEIKYO protocols. The pulse width is constant for most protocols.
2. `PULSE_WIDTH`. The width of a pulse determines the bit value, pulse distance is constant. This requires no stop bit!
The only known example is the SONY protocol.
3. [Phase / Manchester encoding](https://en.wikipedia.org/wiki/Manchester_code).
The time of the pulse/pause transition (phase) relative to the clock determines the bit value. Examples are RC5 and RC6 protocols.

Phase encoding has a **constant bit length**, `PULSE_DISTANCE` with constant pulse width and `PULSE_WIDTH` have **no constant bit length**!

A well known example for `PULSE_DISTANCE` with non constant pulse width encoding is the **RS232 serial encoding**.
Here the non constant pulse width is used to enable a **constant bit length**.

Most IR signals have a **special header** to help in setting the automatic gain of the receiver circuit.
This header is not part of the encoding, but is often significant for a special protocol and therefore must be reproducible.

Be aware that there are codes using a `PULSE_DISTANCE` encoding where more than a binary 0/1 is put into a pulse/pause combination.
This requires more than 2 different pulse or pause length combinations.
The [HobToHood protocol](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/examples/ReceiveAndSendHob2Hood/ReceiveAndSendHob2Hood.ino) uses such an encoding.

Using encoding schemes reduces the specification of an IR code to a bitstream / hex value, which is LSB by default and pulse / pause timings of header, 0, and 1.
The hex value is **quite readable**.
These schemes can not put any semantics like address, command or checksum on this bitstream.

## 3. Protocols
There are a few common protocols that are implemented directly in IRremote.
They specify the frequency, the timings of header, 0, and 1 as well as other values like checksum, repeat distance, repeat coding, bit toggling etc.
The semantics of the hex value is also specified, allowing the usage of only 2 parameters **address** and **command** to specify an IR code.
This saves memory and is **highly readable**.
Often the address is also constant, which further reduces memory requirements.


# IRReceiver pinouts
![IRReceiver Pinout](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/pictures/IRReceiverPinout.jpg)

[Adafruit IR Sensor tutorial](https://learn.adafruit.com/ir-sensor)


# Receiving IR codes
In your program you check for a **completely received IR frame** with:<br/>
`if (IrReceiver.decode()) {}`<br/>
This also decodes the received data.<br/>
After successful decoding, the IR data is contained in the IRData structure, available as `IrReceiver.decodedIRData`.

## decodedIRData structure
```c++
struct IRData {
    decode_type_t protocol;     // UNKNOWN, NEC, SONY, RC5, PULSE_DISTANCE, ...
    uint16_t address;           // Decoded address
    uint16_t command;           // Decoded command
    uint16_t extra;             // Used for Kaseikyo unknown vendor ID. Ticks used for decoding Distance protocol.
    IRDecodedRawDataType decodedRawData; // Up to 32 (64 bit for 32 bit CPU architectures) bit decoded raw data, used for send<protocol>Raw functions.
#if defined(DECODE_DISTANCE_WIDTH)
    DistanceWidthTimingInfoStruct DistanceWidthTimingInfo; // 12 bytes
    IRDecodedRawDataType decodedRawDataArray[DECODED_RAW_DATA_ARRAY_SIZE]; // 32/64 bit decoded raw data, to be used for sendPulseDistanceWidthFromArray functions.
#endif
    uint16_t numberOfBits;      // Number of bits received for data (address + command + parity) - to determine protocol length if different length are possible.
    uint8_t flags;              // IRDATA_FLAGS_IS_REPEAT, IRDATA_FLAGS_WAS_OVERFLOW etc. See IRDATA_FLAGS_* definitions
    IRRawlenType rawlen;        // Counter of entries in rawbuf of last received frame.
    uint16_t initialGapTicks;   // Contains the initial gap of the last received frame.
};
```
#### Flags
This is the [list of flags](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/src/IRProtocol.h#L143) contained in the flags field.<br/>
Check it with e.g. `if(IrReceiver.decodedIRData.flags & IRDATA_FLAGS_IS_REPEAT)`.

| Flag name | Description |
|:---|----|
| IRDATA_FLAGS_IS_REPEAT | The gap between the preceding frame is as smaller than the maximum gap expected for a repeat. !!!We do not check for changed command or address, because it is virtually impossible to press 2 different buttons on the remote within around 100 ms!!!
| IRDATA_FLAGS_IS_AUTO_REPEAT | The current repeat frame is a repeat, that is always sent after a regular frame and cannot be avoided. Only specified for protocols DENON, and LEGO. |
| IRDATA_FLAGS_PARITY_FAILED | The current (autorepeat) frame violated parity check. |
| IRDATA_FLAGS_TOGGLE_BIT | Is set if RC5 or RC6 toggle bit is set. |
| IRDATA_FLAGS_EXTRA_INFO | There is extra info not contained in address and data (e.g. Kaseikyo unknown vendor ID, or in decodedRawDataArray). |
| IRDATA_FLAGS_WAS_OVERFLOW | Too many marks and spaces for the specified `RAW_BUFFER_LENGTH`. To avoid endless flagging of overflow, irparams.rawlen is set to 0 in this case. |
| IRDATA_FLAGS_IS_MSB_FIRST | This value is mainly determined by the (known) protocol. |

#### To access the **RAW data**, use:
```c++
auto myRawdata= IrReceiver.decodedIRData.decodedRawData;
```

The definitions for the `IrReceiver.decodedIRData.flags` are described [here](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/src/IRremoteInt.h#L128-L140).

#### Print all fields:
```c++
IrReceiver.printIRResultShort(&Serial);
```

#### Print the raw timing data received:
```c++
IrReceiver.printIRResultRawFormatted(&Serial, true);`
```
The raw data depends on the internal state of the Arduino timer in relation to the received signal and might therefore be slightly different each time. (resolution problem).
The decoded values are the interpreted ones which are tolerant to such slight differences!

#### Print how to send the received data:
```c++
IrReceiver.printIRSendUsage(&Serial);
```

## Callback functionality
Sometimes it can be difficult to call decode() periodically in the main loop to avoid missing any IR frames.
In this case you can use the callback functionality as demonstrated in the [CallbackDemo](https://github.com/Arduino-IRremote/Arduino-IRremote/tree/master/examples/CallbackDemo/CallbackDemo.ino#L126) example.
This enables you to perform `resume()` and short actions independently of the state of your main loop.

## Ambiguous protocols
### NEC, Extended NEC, ONKYO, OpenLASIR
The **NEC protocol** is defined as 8 bit address and 8 bit command. But the physical address and data fields are each 16 bit wide.
The additional 8 bits are used to send the inverted address or command for parity checking.<br/>
The **extended NEC protocol** uses the additional 8 parity bit of address for a 16 bit address, thus disabling the parity check for address.<br/>
The **ONKYO protocol** in turn uses the additional 8 parity bit of address and command for a 16 bit address and command.

The decoder reduces the 16 bit values to 8 bit ones if the parity is correct.
If the parity is not correct, it assumes no parity error, but takes the values as 16 bit values without parity assuming extended NEC or extended NEC protocol protocol.

But now we have a problem when we want to receive e.g. the **16 bit** address 0x00FF or 0x32CD!
The decoder interprets this as a NEC 8 bit address 0x00 / 0x32 with correct parity of 0xFF / 0xCD and reduces it to 0x00 / 0x32.

One way to handle this, is to force the library to **always** use the ONKYO protocol interpretation by using `#define DECODE_ONKYO`.
Another way is to check if `IrReceiver.decodedIRData.protocol` is NEC and not ONKYO and to revert the parity reducing manually.

The **[OpenLASIR protocol](https://github.com/danielweidman/OpenLASIR)** is binary identical to ONKYO but has a different semantics. It is recommended to disable `#define DECODE_ONKYO` and enable `#define DECODE_OPENLASIR` when working with OpenLASIR.

### NEC, NEC2
On a long press, the **NEC protocol** does not repeat its frame, it sends a special short repeat frame.
This enables an easy distinction between long presses and repeated presses and saves a bit of battery energy.
This behavior is quite unique for NEC and its derived protocols like LG and Samsung.

But of course there are also remote control systems, that uses the NEC protocol but only repeat the first frame when a long press is made instead of sending the special short repeat frame. We named this the  **NEC2** protocol and it is sent with `sendNEC2()`.<br/>
But be careful, the NEC2 protocol can only be detected by the NEC library decoder **after** the first frame and if you do a long press!

### Samsung, SamsungLG
On a long press, the **SamsungLG protocol** does not repeat its frame, it sends a special short repeat frame.

## RAM usage of different protocols
The `RAW_BUFFER_LENGTH` determines the length of the **byte buffer** where the received IR timing data is stored before decoding.<br/>
**100** is sufficient for standard protocols **up to 48 bits**, with 1 bit consisting of one mark and space.
We always require additional 4 bytes, 1 byte for initial gap, 2 bytes for header and 1 byte for stop bit.
- **48** bit protocols are PANASONIC, KASEIKYO, SAMSUNG48, RC6.
- **32** bit protocols like NEC, SAMSUNG, WHYNTER, SONY(20), LG(28), OpenLASIR require a **buffer length of 68**.
- **16** bit protocols like BOSEWAVE, DENON, FAST, JVC, LEGO_PF, RC5, SONY(12 or 15) require a **buffer length of 36**.
- MAGIQUEST requires a buffer length of **112**.
- Air conditioners often send a longer protocol data stream **up to 750 bits**.

If the record gap determined by `RECORD_GAP_MICROS` is changed from the default 8 ms to more than 20 ms, the buffer is no longer a byte but a uint16_t buffer, requiring twice as much RAM.
<br/>

## Handling unknown Protocols
### Disclaimer
**This library was designed to fit inside MCUs with relatively low levels of resources and was intended to work as a library together with other applications which also require some resources of the MCU to operate.**

Use the **ReceiveDemo example** to print out all informations about your IR protocol.<br/>
The **ReceiveDump example** gives you more information but has bad repeat detection due to the time required for printing the information.

### Other libraries, which may cover these protocols
#### IRMP
If your protocol seems not to be supported by this library, you may try the [IRMP library](https://github.com/IRMP-org/IRMP), which especially supports manchester protocols much better.

#### IRremoteESP8266
For **air conditioners** , you may try the [IRremoteESP8266 library](https://github.com/crankyoldgit/IRremoteESP8266), which supports an impressive set of protocols and a lot of air conditioners and works also on ESP32.

#### rawirdecode and HeatpumpIR
[Raw-IR-decoder-for-Arduino](https://github.com/ToniA/Raw-IR-decoder-for-Arduino) is not a library, but an arduino example sketch, which provides many methods of decoding especially **air conditioner** protocols. Sending of these protocols can be done by the Arduino library [HeatpumpIR](https://github.com/ToniA/arduino-heatpumpir).


### Protocol=PULSE_DISTANCE
If you get something like this:
```
PULSE_DISTANCE: HeaderMarkMicros=8900 HeaderSpaceMicros=4450 MarkMicros=550 OneSpaceMicros=1700 ZeroSpaceMicros=600  NumberOfBits=56 0x43D8613C 0x3BC3BC
```
then you have a code consisting of **56 bits**, which is probably from an air conditioner remote.<br/>
You can send it with `sendPulseDistanceWidth()`.
```c++
uint32_t tRawData[] = { 0xB02002, 0xA010 };
IrSender.sendPulseDistance(38, 3450, 1700, 450, 1250, 450, 400, &tRawData[0], 48, false, 0, 0);
```
You can send it with calling `sendPulseDistanceWidthData()` twice, once for the first 32 bit and next for the remaining 24 bits.<br/>
The `PULSE_DISTANCE` / `PULSE_WIDTH` decoder just decodes a timing stream to a bitstream stored as hex values.
These decoders can not put any semantics like address, command or checksum on this bitstream.
But the bitstream is way more readable, than a timing stream. This bitstream is read **LSB first by default**.
If LSB does not suit for further research, you can change it [here](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/src/ir_DistanceProtocol.hpp#L78).

**If RAM is not more than 2k, the decoder only accepts mark or space durations up to 2500 microseconds to save RAM space, otherwise it accepts durations up to 10 ms.**

### Protocol=UNKNOWN
If you see something like `Protocol=UNKNOWN Hash=0x13BD886C 35 bits received` as output of e.g. the ReceiveDemo example, you either have a problem with decoding a protocol, or an unsupported protocol.

- If you have an **odd number of bits** received, your receiver circuit probably has problems. Maybe because the IR signal is too weak.
- If you see timings like `+ 600,- 600     + 550,- 150     + 200,- 100     + 750,- 550` then one 450 &micro;s space was split into two 150 and 100 &micro;s spaces with a spike / error signal of 200 &micro;s between. Maybe because of a defective receiver or a weak signal in conjunction with another light emitting source nearby.
- If you see timings like `+ 500,- 550     + 450,- 550     + 450,- 500     + 500,-1550`, then marks are generally shorter than spaces and therefore `MARK_EXCESS_MICROS` (specified in your ino file) should be **negative** to compensate for this at decoding.
- If you see `Protocol=UNKNOWN Hash=0x0 1 bits received` it may be that the space after the initial mark is longer than [`RECORD_GAP_MICROS`](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/src/IRremote.h#L124).
  This was observed for some LG air conditioner protocols. Try again with a line e.g. `#define RECORD_GAP_MICROS 12000` before the line `#include <IRremote.hpp>` in your .ino file.
- To see more info supporting you to find the reason for your UNKNOWN protocol, you must enable the line `//#define DEBUG` in IRremoteInt.h.

### How to deal with protocols not supported by IRremote
If you do not know which protocol your IR transmitter uses, you have several choices.
- Just use the hash value to decide which command was received. See the [SimpleReceiverForHashCodes example](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/examples/SimpleReceiverForHashCodes/SimpleReceiverForHashCodes.ino).
- Use the [IRreceiveDemo example](examples/ReceiveDemo) or [IRreceiveDump example](examples/ReceiveDump) to dump out the IR timing.
 You can then reproduce/send this timing with the [SendRawDemo example](examples/SendRawDemo).
- The [IRMP AllProtocol example](https://github.com/IRMP-org/IRMP#allprotocol-example) prints the protocol and data for one of the **[40 supported protocols](https://github.com/IRMP-org/IRMP?tab=readme-ov-file#list-of-protocols)**.
 The same library can be used to send this codes.
- If you have a bigger Arduino board at hand (> 100 kByte program memory) you can try the
 [IRremoteDecode example](https://github.com/bengtmartensson/Arduino-DecodeIR/blob/master/examples/IRremoteDecode/IRremoteDecode.ino) of the Arduino library [DecodeIR](https://github.com/bengtmartensson/Arduino-DecodeIR).
- Use [IrScrutinizer](http://www.harctoolbox.org/IrScrutinizer.html).
 It can automatically generate a send sketch for your protocol by exporting as "Arduino Raw". It supports IRremote,
 the old [IRLib](https://github.com/cyborg5/IRLib) and [Infrared4Arduino](https://github.com/bengtmartensson/Infrared4Arduino).

## Multiple IR receivers
**This library now supports multiple IR receiver instances (IRrecv) per CPU** by activating `SUPPORT_MULTIPLE_RECEIVER_INSTANCES`
and providing the simple function `UserIRReceiveTimerInterruptHandler()`. 
See the [MultipleReceivers example](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/examples/MultipleReceivers/MultipleReceivers.ino).

There is also another way to use multiple receivers.
You can connect the output pins of each IR receiver to one input pin.
Then you can use the standard receiver object (IrReceiver).
The IR receiver modules internally use an NPN transistor as output device with just a 30k resistor to VCC.
This is basically an "open collector" and allows multiple output pins to be connected to one Arduino input pin.<br/>
However, keep in mind that any weak / disturbed signal from one of the receivers will also interfere with a good signal from another receiver.

<br/>

# Sending IR codes
If you have a device at hand which can generate the IR codes you want to work with (aka IR remote),
**it is recommended** to receive the codes with the [ReceiveDemo example](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/examples/ReceiveDemo/ReceiveDemo.ino), which will tell you on the serial output how to send them.

```
Protocol=LG Address=0x2 Command=0x3434 Raw-Data=0x23434E 28 bits MSB first
Send with: IrSender.sendLG(0x2, 0x3434, <numberOfRepeats>);
```
You will discover that **the address is a constant** and the commands sometimes are sensibly grouped.<br/>
If you are uncertain about the numbers of repeats to use for sending, **3** is a good starting point. If this works, you can check lower values afterwards.

If you have enabled `DECODE_DISTANCE_WIDTH`, the code printed by `printIRSendUsage()` **differs between 8 and 32 bit platforms**,
so it is best to run the receiving program on the same platform as the sending program.

**All sending functions support the sending of repeats** if sensible.
Repeat frames are sent at a fixed period determined by the protocol. e.g. 110 ms from start to start for NEC.<br/>
Keep in mind, that **there is no delay after the last sent mark**.
If you handle the sending of repeat frames by your own, you must insert sensible delays before the repeat frames to enable correct decoding.

Bear in mind, that **some devices only accept commands if they are repeated one or two times**.

Sending **old MSB codes without conversion** can be done by using `sendNECMSB()`, `sendSonyMSB()`, `sendSamsungMSB()`, `sendJVCMSB()`
or by [converting them manually to LSB](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#how-to-convert-old-msb-first-32-bit-ir-data-codes-to-new-lsb-first-32-bit-ir-data-codes).

## Sending UNKNOWN protocol
If the protocol is unknown by IRremote, which often is the case for airconditioner codes, 
you can store the timing sequence in an array and send it with IrSender.sendRaw() or IrSender.sendRaw_P()
like done in [SendDemo](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/examples/SendDemo/SendDemo.ino#L180).
Do not forget to send repeats.

## Sending protocol from description
If you only have the description of the protocol, but no sender which can generate the IR codes, 
then you can try to send the protocol with:

```
sendPulseDistanceWidth(uint_fast8_t aFrequencyKHz, uint16_t aHeaderMarkMicros, uint16_t aHeaderSpaceMicros,
    uint16_t aOneMarkMicros, uint16_t aOneSpaceMicros, uint16_t aZeroMarkMicros, uint16_t aZeroSpaceMicros,
    IRDecodedRawDataType aData, uint_fast8_t aNumberOfBits, uint8_t aFlags, uint16_t aRepeatPeriodMillis,
    int_fast8_t aNumberOfRepeats, void (*aSpecialSendRepeatFunction)() = nullptr)
```

E.g. for the CDTV IR Keyboard protocol a description can be found [here](https://github.com/Korinel/Amiga-CDTV-IR-Keyboard).
Thus, the right parameters for CDTV IR Keyboard Protocol on a 32 bit platform are: 

```
sendPulseDistanceWidth(40, 9000, 4500, 1200, 400, 400, 400, <Your 40 bits>, 40, 
    IRDATA_FLAGS_IS_MSB_FIRST, 110, 3); // 110 and 3 are guessed values!
```

On an 8 bit platform, you must store the 40 bits into an array of two 32 bit unsigned integers and send it with:

```
sendPulseDistanceWidthFromArray(40, 9000, 4500, 1200, 400, 400, 400, <address of your array> 40,
    IRDATA_FLAGS_IS_MSB_FIRST, 110, 3); // 110 and 3 are guessed values!
```

## Sending IRDB IR codes
The codes found in the [irdb database](https://github.com/probonopd/irdb/tree/master/codes) specify  a **device**, a **subdevice** and a **function**.
Most of the times, *device* and *subdevice* can be taken as upper and lower byte of the **address parameter** and *function*
is the **command parameter** for the **new structured functions** with address, command and repeat-count parameters
like e.g. `IrSender.sendNEC((device << 8) | subdevice, 0x19, 2)`.<br/>
An **exact mapping** can be found in the [IRP definition files for IR protocols](https://github.com/probonopd/MakeHex/tree/master/protocols).
"D" and "S" denotes device and subdevice and "F" denotes the function.

### List of public IR code databases
http://www.harctoolbox.org/IR-resources.html

## Flipper Zero codes
The codes found in the [Flipper-IRDB database](https://github.com/Lucaslhm/Flipper-IRDB) are quite straightforward to convert, because the also use the address / command scheme.<br/>
Protocol matching is NECext -> Onkyo, Samsung32 -> Samsung, SIRC20 -> Sony with 20 bits etc.

| [Flipper decoding](https://github.com/flipperdevices/flipperzero-firmware/tree/release/lib/infrared/encoder_decoder) | [IRremote decoding](https://github.com/Arduino-IRremote/Arduino-IRremote/tree/master/src) |
|-|-|
| Samsung32 | Samsung |
| NEC | NEC |
| NECext | ONKYO |
| [\<start bit>\<VendorID:16>\<VendorID parity:4>\<Genre1:4>\<Genre2:4>\<Command:10>\<ID:2>\<Parity:8>\<stop bit>](https://github.com/flipperdevices/flipperzero-firmware/blob/027ea9ea36da137144548295c016d99255af53c3/lib/infrared/encoder_decoder/kaseikyo/infrared_decoder_kaseikyo.c#L26)<br/>and ID is MSB of address.<br/>address: 8A 02 20 00<br/>command: 56 03 00 00<br/>-> **IRremote:**<br/>Address 0x6A8, sendPanasonic (for 02 20) and Command 0x35 | \<start bit>\<VendorID:16>\<VendorID parity:4>\<Address:12>\<Command:8>\<Parity of VendorID parity, Address and Command:8>\<stop bit> |

## Send pin
Any pin can be chosen as send pin as long as `IR_SEND_PIN` is **not** defined.
This is because the PWM signal is generated by default with software bit banging, since `SEND_PWM_BY_TIMER` is not active.<br/>
On **ESP32** ledc channel 0 is used for generating the IR PWM.<br/>
If `IR_SEND_PIN` is specified (as C macro), it reduces program size and improves send timing for AVR.
If you want to use a variable to specify send pin e.g. with `setSendPin(uint8_t aSendPinNumber)`, you must disable this `IR_SEND_PIN` macro e.g. with `#undef IR_SEND_PIN`.
Then you can change send pin at any time before sending an IR frame.
See also [Compile options / macros for this library](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#compile-options--macros-for-this-library).

## Polarity of send pin
By default the polarity is HIGH for active and LOW for inactive or pause.
This corresponds to the connection schema: Pin -> Resistor-> IR-LED -> Ground.<br/>
If you want to use the connection schema: VCC -> IR-LED -> Resistor -> Pin, you must specify `USE_ACTIVE_LOW_OUTPUT_FOR_SEND_PIN`.

## Simulate an IR receiver module for sending
To simulate an IR receiver (such as the TSOP1738) which provides an active-low output, you only need to enable the `USE_NO_SEND_PWM` macro.
In the case you must simulate exotic IR receivers, which provides an active-high output, you also need to enable the `USE_ACTIVE_HIGH_OUTPUT_FOR_NO_SEND_PWM` macro.

## Increase strength of sent output signal
**The best way to increase the IR power for free** is to use 2 or 3 IR diodes in series. One diode requires 1.2 volt at 20 mA or 1.5 volt at 100 mA so you can supply up to 3 diodes with a 5 volt output.<br/>
To power **2 diodes** with 1.2 V and 20 mA and a 5 V supply, set the resistor to: (5 V - 2.4 V) -> 2.6 V / 20 mA = **130 &ohm;**.<br/>
For **3 diodes** it requires 1.4 V / 20 mA = **70 &ohm;**.<br/>
The actual current might be lower since of **loss at the AVR pin**. E.g. 0.3 V at 20 mA.<br/>
If you do not require more current than 20 mA, there is no need to use an external transistor (at least for AVR chips).

On my Arduino Nanos, I always use a 100 &ohm; series resistor and one IR LED :grinning:.

## Multiple IR sender instances
**This library only supports one IR sender object (IRsend) per CPU.**<br/>
However since sending is a serial task, you can use `setSendPin()` to switch the pin to send, thus emulating multiple sender.

<br/>

# Tiny NEC receiver and sender
For applications only requiring NEC, NEC variants or FAST -see below- protocol, there is a special receiver / sender included,
which has very **small code size of 500 bytes and does NOT require any timer**.

## Principle of operation
Unlike IRremote, which samples the input every 50 &micro;s, the TinyIRReceiver uses a **pin change interrupt** for on-the-fly decoding.
This restricts the range of protocols that can be recognised.<br/>
On each level change, the level and the time since the last change are used to incrementally decode the protocol.<br/>
With this operating principle, we **cannot wait for a timeout** and then decode the protocol as IRremote does.<br/>
Instead, we need to know which is the last bit (level change) of a protocol in order to perform the final decoding
and call of the optional **user-provided callback function** `handleReceivedTinyIRData()`.<br/>
This means that **we need to know the number of bits in a protocol** and therefore the protocol family in order to decode successfully.

For each complete IR frame/command received, the decoded data is copied to the `TinyIRReceiverData` structure
and the user-provided `handleReceivedTinyIRData()` function is called in an interrupt context.
However, **interrupts are explicitly enabled here** to allow the use of delay() and millis() etc.

Check out the [TinyReceiver](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#tinyreceiver--tinysender) and [IRDispatcherDemo](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#irdispatcherdemo) examples.<br/>
Take care to include `TinyIRReceiver.hpp` or `TinyIRSender.hpp` instead of `IRremote.hpp`.

The **TinyIRSender** generates its 38 kHz PWM signal by **[software bit banging](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/src/TinyIRSender.hpp#L68)** using the `delayMicroseconds()` and `micros()` functions.

### TinyIRReceiver usage
```c++
//#define USE_ONKYO_PROTOCOL    // Like NEC, but take the 16 bit address and command each as one 16 bit value and not as 8 bit normal and 8 bit inverted value.
//#define USE_FAST_PROTOCOL     // Use FAST protocol instead of NEC / ONKYO
#include "TinyIRReceiver.hpp"

void setup() {
  initPCIInterruptForTinyIRReceiver(); // Enables the interrupt generation on change of IR input signal
}

void loop() {
    if (TinyIRReceiverDecode()) {
        printTinyIRReceiverResultMinimal(&Serial);
    }
    // No resume() required :-)
}
```

### TinyIRSender usage
```c++
#include "TinyIRSender.hpp"

void setup() {
  sendNEC(3, 0, 11, 2); // Send address 0 and command 11 on pin 3 with 2 repeats.
}

void loop() {}
```

Another tiny receiver **supporting more protocols** can be found [here](https://github.com/LuisMiCa/IRsmallDecoder).

# The FAST protocol
The FAST protocol is a proprietary modified JVC protocol **without address, with parity and with a shorter header**.
It is meant to have a quick response to the event which sent the protocol frame on another board.
FAST takes **21 ms for sending** and is sent at a **50 ms period**.
It has full 8 bit parity for error detection.

### FAST protocol characteristics:
- Bit timing is like JVC
- The header is shorter, 3156 &micro;s vs. 12500 &micro;s
- No address and 16 bit data, interpreted as 8 bit command and 8 bit inverted command, leading to a fixed protocol length of (6 + (16 * 3) + 1) * 526 = 55 * 526 = 28930 microseconds or 29 ms.
- Repeats are sent as complete frames but in a 50 ms period / with a 21 ms distance.

### Sending FAST protocol with IRremote
```c++
#define IR_SEND_PIN 3
#include <IRremote.hpp>

void setup() {
  sendFAST(11, 2); // Send command 11 on pin 3 with 2 repeats.
}

void loop() {}
```

### Sending FAST protocol with TinyIRSender
```c++
#define USE_FAST_PROTOCOL // Use FAST protocol. No address and 16 bit data, interpreted as 8 bit command and 8 bit inverted command
#include "TinyIRSender.hpp"

void setup() {
  sendFAST(3, 11, 2); // Send command 11 on pin 3 with 2 repeats.
}

void loop() {}
```
<br/>

The FAST protocol can be received by IRremote and TinyIRReceiver.

# Feedback LED
The feedback LED output is enabled by default. This means that **the LED is on when we receive or send a mark**.
The feedback LED code can be completely removed at compile time using the following macros:
- `NO_LED_RECEIVE_FEEDBACK_CODE` for receiving
- `NO_LED_SEND_FEEDBACK_CODE` for sending
- `NO_LED_FEEDBACK_CODE` for receiving and sending

### Receiving
For receiving, feedback LED can be activated or deactivated programmatically by `enableLEDFeedback()`, `disableLEDFeedback()` or `setLEDFeedback(bool aEnableLEDFeedback)`.<br/>
The starting value is set by the second parameter of `begin(uint_fast8_t aReceivePin, bool aEnableLEDFeedback, uint_fast8_t aFeedbackLEDPin)`. You can use the macros `ENABLE_LED_FEEDBACK` and `DISABLE_LED_FEEDBACK` for the second parameter.

### Sending
LED feedback is **always enabled** when sending and cannot be deactivated programmatically.
It can only be deactivated at compile time.

# IRCommandDispatcher class
If you want to **handle many IR commands** in a structured way, you can use a big **switch statement**, or use the class `IRCommandDispatcher`.<br/>
The IRCommandDispatcher class receives IR commands and maps them to different functions by means of a mapping array `IRMapping[]`.

By default, every mapped command is **blocking**. However it can be declared as **non-blocking** and / or **repeatable**.<br/>
Non-blocking commands are executed immediately, blocking commands are executed if no other command is just running.
If another blocking command is currently running, a **request to stop** is set
and the command is stored for the main loop to be executed by `checkAndRunSuspendedBlockingCommands()`.
The request to stop must be checked by any blocking function using the macros `DELAY_AND_RETURN_IF_STOP()`, `RETURN_IF_STOP`, `BREAK_IF_STOP` and `IS_STOP_REQUESTED`.<br/>
Only commands that are marked as **repeatable** will be exectuted when a IR repeat frame is received.
Therefore this only makes sense for non-blocking comands :-).

Code snippets are from [IRDispatcherDemo](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/examples/IRDispatcherDemo).

```c++
// IR code mapping which is useful if more than one remote is supported
#define IR_0            0x19
#define IR_HASH         0x0D
#define COMMAND_BLINK   IR_0
#define COMMAND_STOP    IR_HASH

// Strings of commands for Serial output
static const char blink20times[] PROGMEM ="blink 20 times";
static const char stop[] PROGMEM ="stop";

/*
 * Main mapping array of commands to C functions and command strings
 * The macro COMMAND_STRING() removes the strings from memory, if USE_DISPATCHER_COMMAND_STRINGS is not enabled
 */
const struct IRToCommandMappingStruct IRMapping[] = {
{ COMMAND_BLINK, IR_COMMAND_FLAG_BLOCKING | IR_COMMAND_FLAG_BEEP, &doLedBlink20times, COMMAND_STRING(blink20times) },
{ COMMAND_STOP, IR_COMMAND_FLAG_BLOCKING, &doStop, COMMAND_STRING(stop) },
/*
 * Short commands that can always be executed
 */
{ COMMAND_TONE1, IR_COMMAND_FLAG_NON_BLOCKING, &doTone1800, tone1800 },
...
/*
 * Repeatable short commands
 */
{ COMMAND_INCREASE_BLINK, IR_COMMAND_FLAG_REPEATABLE_NON_BLOCKING, &doIncreaseBlinkFrequency, increaseBlink },
...

/*
 * This is a blocking function which checks for stop
 */
void doLedBlink20times() {
    for (int i = 0; i < 20; ++i) {
        digitalWrite(LED_BUILTIN, HIGH);
        DELAY_AND_RETURN_IF_STOP(200);
        digitalWrite(LED_BUILTIN, LOW);
        DELAY_AND_RETURN_IF_STOP(200);
    }
}
// Other useful macros are RETURN_IF_STOP, BREAK_IF_STOP and IS_STOP_REQUESTED.
```

Examples of mapping arrays can be found in the [IRDispatcherDemo](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/examples/IRDispatcherDemo/DemoIRCommandMapping.h#L185), for [QuadrupedControl](https://github.com/ArminJo/QuadrupedControl/blob/master/examples/QuadrupedControl/QuadrupedIRCommandMapping.h#L445), for [RobotArmControl](https://github.com/ArminJo/RobotArmControl/blob/master/RobotArmControl/RobotArmIRCommandMapping.h#L320) or for [4 WD RobotCar control](https://github.com/ArminJo/PWMMotorControl/blob/master/examples/IRDispatcherControl/RobotCarIRCommandMapping.h#L308)<br/>

<br/>


# FAQ and hints
## Receiving stops after analogWrite() or tone() or after running a motor
The receiver sample interval of 50 µs is generated by a timer. On many boards this must be a [hardware timer](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#timer-and-pin-usage).
On some boards where a software timer is available, the software timer is used.<br/>
Be aware that the hardware timer used for receiving should not be used for `analogWrite()`.<br/>
Especially **motor** control often uses the `analogWrite()` function and will therefore stop the receiving if used on the pins indicated [here](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#timer-and-pin-usage).<br/>
On the Uno and other AVR boards the receiver timer ist the same as the tone timer. Thus receiving will stop after a `tone()` command.
See [ReceiveDemo example](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/examples/ReceiveDemo/ReceiveDemo.ino#L284-L298) how to deal with it, i.e. how to use `IrReceiver.restartTimer()`.

## Receiving sets overflow flag
The flag `IRDATA_FLAGS_WAS_OVERFLOW` is set, if `RAW_BUFFER_LENGTH` is too small for all the marks and spaces of the protocol.
This can happen on long protocol frames like the ones from air conditioner.
It also can happen, if `RECORD_GAP_MICROS` is smaller than the real gap between a frame and the repetition frame, thus interpreting both as one consecutive frame.
Best is to dump the timing then, to see which reason holds.

## Problems with Neopixels, FastLed etc.
IRremote will not work right when you use **Neopixels** (aka WS2811/WS2812/WS2812B) or other libraries blocking interrupts for a longer time (> 50 &micro;s).<br/>
Whether you use the Adafruit Neopixel library, or FastLED, interrupts get disabled on many lower end CPUs like the basic Arduinos for longer than 50 &micro;s.<br/>
In turn, this stops the IR interrupt handler from sampling the IR signal.

Each WS2812 LED requires 30 &micro;s at **800 kHz**, an **8 pixel** strip requires 240 &micro;s and therefore **skips 4 samples** of the IR signal, which is sampled each 50 &micro;s. <br/>
For example, the standard timing for the NEC protocol is 560 &micro;s or 11 samples. However, with a loss of four samples, however, we **exceed the accepted 25 %** decoding deviation threshold.

One **workaround** is to wait for the IR receiver to be idle before you send the Neopixel data with `if (IrReceiver.isIdle()) { strip.show();}`.<br/>
This **prevents a running IR transmission from beeing broken**, and depending on the update rate of the Neopixel, it may work quite well.<br/>
There are some other solutions to this on **more powerful CPU's**,
[see this page from Marc MERLIN](http://marc.merlins.org/perso/arduino/post_2017-04-03_Arduino-328P-Uno-Teensy3_1-ESP8266-ESP32-IR-and-Neopixels.html)

## Does not work/compile with another library
**Another library is only working/compiling** if you deactivate the line `IrReceiver.begin(IR_RECEIVE_PIN, ENABLE_LED_FEEDBACK);`.<br/>
This is often due to **timer resource conflicts** with the other library. Please see [below](https://github.com/Arduino-IRremote/Arduino-IRremote?tab=readme-ov-file#timer-and-pin-usage).

## Minimal CPU clock frequency
For receiving, the **minimal CPU clock frequency is 4 MHz**, since the 50 &micro;s timer ISR (Interrupt Service Routine) takes around 12 &micro;s on a 16 MHz ATmega.<br/>
The TinyIRReceiver, which requires no polling, works down to 1 MHz.<br/>
For sending, the **minimal CPU clock frequency for software generated PWM is 8 MHz**.
You can switch to timer and hardware PWM generation at fixed pins by `#define SEND_PWM_BY_TIMER`.
### Hardware PWM generation of sending signal with 8 bit timer
- 16 MHZ F_CPU and 38 kHz -> prescaling = 2, divider = 210.526 -> 38.1 kHz with divider 210
- 8 MHZ F_CPU and 38 kHz -> no prescaling , divider = 210.526 -> 38.1 kHz with divider 210
- 4 MHZ F_CPU and 38 kHz -> no prescaling , divider = 105.26 -> 38.1 kHz with divider 105
- 1 MHZ F_CPU and 38 kHz -> no prescaling , divider = 26.31 -> 38.4 kHz with divider 36
TinyIRSender does not support hardware PWM generation.

## Bang & Olufsen protocol
The Bang & Olufsen protocol decoder is not enabled by default, i.e if no protocol is enabled explicitly by #define `DECODE_<XYZ>`. It must always be enabled explicitly by `#define DECODE_BEO`.
This is because it has an **IR transmit frequency of 455 kHz** and therefore requires a different receiver hardware (TSOP7000).<br/>
And because **generating a 455 kHz PWM signal is currently only implemented for `SEND_PWM_BY_TIMER`**, sending only works if `SEND_PWM_BY_TIMER` or `USE_NO_SEND_PWM` is defined.<br/>
For more info, see [ir_BangOlufsen.hpp](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/src/ir_BangOlufsen.hpp#L46).

# Examples for this library
These examples can be found in the Arduino IDE under File > Examples > Examples from Custom Libraries / IRremote.<br/>
**In order to fit the examples to the 8K flash of ATtiny85 and ATtiny88, the [Arduino library ATtinySerialOut](https://github.com/ArminJo/ATtinySerialOut) is required for this CPU's.**<br/>
See also [DroneBot Workshop SimpleReceiver](https://dronebotworkshop.com/ir-remotes/#SimpleReceiver_Example_Code) and [SimpleSender](https://dronebotworkshop.com/ir-remotes/#SimpleSender_Example_Code).

### [SimpleReceiver](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/examples/SimpleReceiver/SimpleReceiver.ino) + [SimpleSender](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/examples/SimpleSender/SimpleSender.ino)
The **SimpleReceiver** and **SimpleSender** examples are a good starting point.
A simple example can be tested online with [WOKWI](https://wokwi.com/projects/338611596994544210).

### [SimpleReceiverForHashCodes](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/examples/SimpleReceiverForHashCodes/SimpleReceiverForHashCodes.ino)
The **SimpleReceiverForHashCodes** uses only the hash decoder.
It converts all IR frames longer than 6 to a 32 bit hash code, thus enabling receiving of unknown protocols.<br/>
See: http://www.righto.com/2010/01/using-arbitrary-remotes-with-arduino.html

### [TinyReceiver](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/examples/TinyReceiver/TinyReceiver.ino) + [TinySender](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/examples/TinySender/TinySender.ino)
If **code size** or **timer usage** matters, look at these examples.<br/>
The **TinyReceiver** example uses the **TinyIRReceiver** library
which can **only receive NEC, Extended NEC, ONKYO and FAST protocols, but does not require any timer**.
They use pin change interrupt for on the fly decoding, which is the reason for the restricted protocol choice.<br/>
TinyReceiver can be tested online with [WOKWI](https://wokwi.com/arduino/projects/339264565653013075).

The **TinySender** example uses the **TinyIRSender** library  which can **only send NEC, ONKYO and FAST protocols**.<br/>
It sends NEC protocol codes in standard format with 8 bit address and 8 bit command as in SimpleSender example. It has options to send using Extended NEC, ONKYO and FAST protocols.
Saves  780 bytes program memory and 26 bytes RAM compared to SimpleSender, which does the same, but uses the IRRemote library (and is therefore much more flexible).

### [SmallReceiver](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/examples/ReceiverTimingAnalysis/ReceiverTimingAnalysis.ino)
If the protocol is not NEC and code size matters, look at this [example](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/examples/SmallReceiver/SmallReceiver.ino).<br/>

### [ReceiveDemo](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/examples/ReceiveDemo/ReceiveDemo.ino) + [AllProtocolsOnLCD](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/examples/AllProtocolsOnLCD/AllProtocolsOnLCD.ino)
ReceiveDemo receives all protocols and **generates a beep with the Arduino tone() function** on each packet received.<br/>
Long press of one IR button (receiving of multiple repeats for one command) is detected.<br/>
AllProtocolsOnLCD additionally **displays the short result on a 1602 LCD**.
The LCD can be connected parallel or serial (I2C).<br/>
By connecting debug pin to ground, you can force printing of the raw values for each frame. The pin number of the debug pin is printed during setup, because it depends on board and LCD connection type.<br/>
This example also serves as an **example how to use IRremote and tone() together**.

#### [ReceiveDump](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/examples/ReceiveDump/ReceiveDump.ino)
Receives all protocols and dumps the received signal in different flavors including **Pronto format**.<br/>
Since the printing takes much time, repeat signals may be skipped or interpreted as UNKNOWN.

#### [SendDemo](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/examples/SendDemo/SendDemo.ino)
Sends all available protocols at least once.

#### [MultipleSendPins](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/examples/MultipleSendPins/MultipleSendPins.ino)
Demonstrates sending IR codes toggling between 2 **different send pins**.

#### [SendAndReceive](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/examples/SendAndReceive/SendAndReceive.ino)
Demonstrates **receiving while sending**.

#### [ReceiveAndSend](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/examples/ReceiveAndSend/ReceiveAndSend.ino)
Record and **play back last received IR signal** at button press. IR frames of known protocols are sent by the appropriate protocol encoder.
`UNKNOWN` protocol frames are stored as raw data and sent with `sendRaw()`.

#### [ReceiveAndSendDistanceWidth](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/examples/ReceiveAndSendDistanceWidth/ReceiveAndSendDistanceWidth.ino)
Try to decode each IR frame with the *universal* **DistanceWidth decoder**, store the data and send it on button press with `sendPulseDistanceWidthFromArray()`.<br/>
If RAM is not more than 2k, the decoder only accepts mark or space durations up to 2500 microseconds to save RAM space, otherwise it accepts durations up to 10 ms.<br/>
Storing data for distance width protocol requires 17 bytes.
The ReceiveAndSend example requires 16 bytes for known protocol data and 37 bytes for raw data of e.g.NEC protocol.

#### [ReceiveOneAndSendMultiple](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/examples/ReceiveOneAndSendMultiple/ReceiveOneAndSendMultiple.ino)
Serves as a IR **remote macro expander**. Receives Samsung32 protocol and on receiving a specified input frame, it sends multiple Samsung32 frames with appropriate delays in between.
This serves as a **Netflix-key emulation** for my old Samsung H5273 TV.

#### [IRDispatcherDemo](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/examples/IRDispatcherDemo/IRDispatcherDemo.ino)
**Calling different functions** of your program for different IR codes.

#### [ControlRelay](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/examples/ControlRelay/ControlRelay.ino)
**Control a relay** (connected to an output pin) with your remote.

#### [IRremoteExtensionTest](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/examples/IRremoteExtensionTest/IRremoteExtensionTest.ino)
Example for a user defined class, which itself uses the IRrecv class from IRremote.

#### [SendLGAirConditionerDemo](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/examples/SendLGAirConditionerDemo/SendLGAirConditionerDemo.ino)
Example for sending LG air conditioner IR codes controlled by Serial input.<br/>
By just using the function `bool Aircondition_LG::sendCommandAndParameter(char aCommand, int aParameter)` you can control the air conditioner by any other command source.<br/>
The file *acLG.h* contains the command documentation of the LG air conditioner IR protocol. Based on reverse engineering of the LG AKB73315611 remote.
![LG AKB73315611 remote](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/pictures/LG_AKB73315611.jpg)<br/>
IReceiverTimingAnalysis can be tested online with [WOKWI](https://wokwi.com/projects/299033930562011656)
Click on the receiver while simulation is running to specify individual IR codes.

#### [ReceiveAndSendHob2Hood](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/examples/ReceiveAndSendHob2Hood/ReceiveAndSendHob2Hood.ino)
Example for receiving and sending AEG / Elektrolux Hob2Hood protocol.<br/>

#### [ReceiverTimingAnalysis](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/examples/ReceiverTimingAnalysis/ReceiverTimingAnalysis.ino)
This example analyzes the signal delivered by your IR receiver module.
Values can be used to determine the stability of the received signal as well as a hint for determining the protocol.<br/>
It also computes the `MARK_EXCESS_MICROS` value, which is the extension of the mark (pulse) duration introduced by the IR receiver module.<br/>
It can be tested online with [WOKWI](https://wokwi.com/arduino/projects/299033930562011656).
Click on the receiver while simulation is running to specify individual NEC IR codes.

#### [UnitTest](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/examples/UnitTest/UnitTest.ino)
ReceiveDemo + SendDemo in one program. Demonstrates **receiving while sending**.
Here you see the delay of the receiver output (blue) from the IR diode input (yellow).
![Delay](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/pictures/IR_UnitTest_delay.bmp)

# WOKWI online examples
- [Simple receiver](https://wokwi.com/projects/338611596994544210)
- [Simple toggle by IR key 5](https://wokwi.com/projects/338611596994544210)
- [TinyReceiver](https://wokwi.com/arduino/projects/339264565653013075)
- [ReceiverTimingAnalysis](https://wokwi.com/projects/299033930562011656)
- [Receiver with LCD output and switch statement](https://wokwi.com/projects/298934082074575369)

# IR control of a robot car
This [example](https://github.com/ArminJo/PWMMotorControl?tab=readme-ov-file#basicircontrol) of the **Arduino PWMMotorControl library** controls the basic functions of a robot car using the IRremote library.<br/>
It controls 2 PWM motor channels, 2 motors at each channel.<br/>
[Here](https://www.instructables.com/Arduino-4WD-Car-Assembly-and-Code-With-Optional-In/) you can find the instructable for car assembly and code.<br/>

IR_RobotCar with TL1838 IR receiver plugged into expansion board.<br/>
![IR_RobotCar](https://github.com/Arduino-IRremote/Arduino-IRremote/blob/master/pictures/IR_RobotCar.jpg)

<br/>

# Issues and discussions

<!-- opensource-radar:truncated -->
