# Embedded Rust

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![Linting](https://github.com/rust-embedded/awesome-embedded-rust/actions/workflows/Linting.yml/badge.svg)](https://github.com/rust-embedded/awesome-embedded-rust/actions/workflows/Linting.yml)

This is a curated list of resources related to embedded and low-level programming in the Rust programming language, including a selection of useful crates.

[<img src="rust-embedded-logo-256x256.png" alt="Rust Embedded Logo" align="right" width="256">](http://www.rust-embedded.org)

This project is developed and maintained by the [Resources team][team].

Projects marked with a robot emoji 🤖 are developed with the assistance of AI/LLM tools.

## Table of Contents

- [Embedded Rust](#embedded-rust)
  - [Table of Contents](#table-of-contents)
  - [Community](#community)
    - [Community Chat Rooms](#community-chat-rooms)
  - [Books, blogs, and training materials](#books-blogs-and-training-materials)
    - [Free and public materials](#free-and-public-materials)
    - [Paid and commercially available materials](#paid-and-commercially-available-materials)
  - [Tools](#tools)
  - [Real-time](#real-time)
    - [Real-time Operating System (RTOS)](#real-time-operating-system-rtos)
    - [Real-time tools](#real-time-tools)
  - [Runtime Crates](#runtime-crates)
  - [Peripheral Access Crates](#peripheral-access-crates)
    - [Microchip](#microchip)
    - [Nordic](#nordic)
    - [NXP](#nxp)
    - [Raspberry Pi Silicon](#raspberry-pi-silicon)
    - [SiFive](#sifive)
    - [Silicon Labs](#silicon-labs)
    - [StarFive](#starfive)
    - [STMicroelectronics](#stmicroelectronics)
    - [Texas Instruments](#texas-instruments)
    - [MSP430](#msp430)
    - [Espressif](#espressif)
    - [Ambiq Micro](#ambiq-micro)
    - [GigaDevice](#gigadevice)
    - [XMC](#xmc)
    - [Vorago](#vorago)
    - [AMD](#amd)
    - [Wiznet](#wiznet)
    - [Renesas](#renesas)
  - [HAL implementation crates](#hal-implementation-crates)
    - [OS](#os)
    - [Microchip](#microchip-1)
    - [Nordic](#nordic-1)
    - [NXP](#nxp-1)
    - [Raspberry Pi Silicon](#raspberry-pi-silicon-1)
    - [SiFive](#sifive-1)
    - [STMicroelectronics](#stmicroelectronics-1)
    - [Texas Instruments](#texas-instruments-1)
    - [MSP430](#msp430-1)
    - [Espressif](#espressif-1)
    - [Silicon Labs](#silicon-labs-1)
    - [XMC](#xmc-1)
    - [AMD](#amd-1)
    - [GigaDevice](#gigadevice-1)
    - [Vorago](#vorago-1)
    - [Renesas](#renesas-1)
    - [StarFive](#starfive-1)
  - [Architecture support crates](#architecture-support-crates)
    - [ARM](#arm)
    - [RISC-V](#risc-v)
    - [MIPS](#mips)
  - [Board support crates](#board-support-crates)
    - [1BitSquared](#1bitsquared)
    - [Adafruit](#adafruit)
    - [Arduino](#arduino)
    - [Nordic](#nordic-2)
    - [NXP](#nxp-2)
    - [Pimoroni](#pimoroni)
    - [Raspberry Pi](#raspberry-pi)
    - [Sparkfun](#sparkfun)
    - [SeeedStudio](#seeedstudio)
    - [SiFive](#sifive-2)
    - [Sipeed](#sipeed)
    - [Sony](#sony)
    - [STMicroelectronics](#stmicroelectronics-2)
    - [Teensy](#teensy)
    - [Vorago](#vorago-2)
    - [Texas Instruments](#texas-instruments-2)
    - [Special Purpose](#special-purpose)
    - [Sodaq](#sodaq)
    - [Other](#other)
  - [Component abstraction crates](#component-abstraction-crates)
  - [Driver crates](#driver-crates)
    - [WIP](#wip)
  - [no-std crates](#no-std-crates)
    - [WIP](#wip-1)
  - [Panic handling](#panic-handling)
  - [Firmware projects](#firmware-projects)
  - [Old books, blogs, and training materials](#old-books-blogs-and-training-materials)
  - [License](#license)
  - [Code of Conduct](#code-of-conduct)

## Community

In 2018, the Rust community created an embedded working group to help drive adoption in the Rust ecosystem.

- [Embedded WG](https://github.com/rust-embedded/wg/), including newsletters with progress updates.

### Community Chat Rooms

- You can usually find community members (including embedded WG members) in the official [`#rust-embedded:matrix.org` Matrix room]
- [#rust-embedded-space:matrix.org] Most Embedded Rust related Matrix rooms are in the Rust Embedded Space
- [embedded.rs-wasm-iot] - English Telegram chat about Rust and WASM for microcontrollers and IoT
- [embedded.rs] - Telegram chat about Rust for microcontrollers in the Russian language
- [#avr-rust:gitter.im] - For discussion of using Embedded Rust on AVR devices
- [#esp-rs:matrix.org] - For discussion of using Embedded Rust on Espressif devices
- [#nrf-rs:matrix.org] - For discussion of using Embedded Rust on Nordic Semiconductor devices
- [#probe-rs:matrix.org] - For discussion of the Probe-rs debugging toolkit
- [#rp-rs:matrix.org] - For discussion of using Embedded Rust on RP2040 based devices
- [#rtic-rs:matrix.org] - For discussion of the Real-Time Interrupt-driven Concurrency framework
- [#rust-embedded-graphics:matrix.org] - For discussion of the [`embedded-graphics`] crate and ecosystem
- [#stm32-rs:matrix.org] - For discussion of using Embedded Rust on STM32 based devices
- [#atsamd-rs:gitter.im] - For discussions of using Embedded Rust on ATSAMD devices
- [#ethercrab:matrix.org] - For discussion of general EtherCAT and the Rust implementation, EtherCrab
- [#mspm0-rs:matrix.org] - For discussion of using Embedded Rust on Texas Instruments MSPM0 (and MSPS003) devices
- [rust-embedded:QQ group] - Chinese community for Rust embedded
- [#embassy-rs:matrix.org] - For discussion of using async on Embedded Rust using the Embassy ecosystem of crates

[#rust-embedded-graphics:matrix.org]: https://matrix.to/#/#rust-embedded-graphics:matrix.org
[#esp-rs:matrix.org]: https://matrix.to/#/#esp-rs:matrix.org
[`#rust-embedded:matrix.org` Matrix room]: https://matrix.to/#/#rust-embedded:matrix.org
[#rust-embedded-space:matrix.org]: https://matrix.to/#/#rust-embedded-space:matrix.org
[embedded.rs-wasm-iot]: https://t.me/embeddedrust
[embedded.rs]: https://t.me/embedded_rs
[#rtic-rs:matrix.org]: https://matrix.to/#/#rtic-rs:matrix.org
[#nrf-rs:matrix.org]: https://matrix.to/#/#nrf-rs:matrix.org
[#probe-rs:matrix.org]: https://matrix.to/#/#probe-rs:matrix.org
[`embedded-graphics`]: https://crates.io/crates/embedded-graphics
[#stm32-rs:matrix.org]: https://matrix.to/#/#stm32-rs:matrix.org
[#avr-rust:gitter.im]: https://matrix.to/#/#avr-rust_Lobby:gitter.im
[#rp-rs:matrix.org]: https://matrix.to/#/#rp-rs:matrix.org
[#atsamd-rs:gitter.im]: https://matrix.to/#/#atsamd-rs_community:gitter.im
[#ethercrab:matrix.org]: https://matrix.to/#/#ethercrab:matrix.org
[#mspm0-rs:matrix.org]: https://matrix.to/#/#mspm0-rs:matrix.org
[Rust-embedded:QQ group]: https://qm.qq.com/q/A8Hl57xR1C
[#embassy-rs:matrix.org]: https://matrix.to/#/#embassy-rs:matrix.org

## Books, blogs, and training materials

### Free and public materials

These materials are available publicly, typically under permissive licenses.

- [The Embedded Rust Book](https://rust-embedded.github.io/book/) - An introductory book about using the Rust Programming Language on "Bare Metal" embedded systems, such as Microcontrollers.
- [The Rust on ESP Book](https://docs.espressif.com/projects/rust/book/) - This book aims to provide a comprehensive guide on using the Rust programming language with Espressif SoCs and modules.
- [Embedded Rust (no_std) on Espressif](https://docs.espressif.com/projects/rust/no_std-training/) - Training for Rust using no_std (bare metal) approach on ESP32-C3, officially supported by Espressif.
- [Embedded Rust (std) on Espressif](https://esp-rs.github.io/std-training/) - Training for Rust using std approach development on ESP32-C3 by Ferrous Systems. Uses the community-maintained `esp-idf-hal` ecosystem.
- [Discovery](https://rust-embedded.github.io/discovery) by @rust-embedded — this book is an introductory course on microcontroller-based embedded systems that uses Rust as the teaching language. Original author: @japaric
- [Embedded Rust Workshop on the micro:bit v2](https://robamu.github.io/embedded-workshop/book/introduction.html) - This book has a strong focus on teaching the practical application of embassy-rs on the micro:bit v2.
- [Cortex-M Quickstart](https://docs.rs/cortex-m-quickstart/0.3.1/cortex_m_quickstart/) by @japaric – a template and introduction to embedded Rust, suitable for developers familiar with embedded development but new to embedded Rust.
- [Writing an OS in Rust](https://os.phil-opp.com/) A blog series creating a small operating system in Rust
- [MicroRust](https://droogmic.github.io/microrust/) Introductory book for embedded development in Rust on the micro:bit.
- [Physical Computing With Rust](https://rahul-thakoor.github.io/physical-computing-rust/) A (WIP) guide to physical computing with Rust on the Raspberry Pi.
- [Writing an embedded OS in Rust on the Raspberry Pi](https://github.com/rust-embedded/rust-raspi3-OS-tutorials) A set of tutorials that give a guided, step-by-step tour of how to write a monolithic Operating System kernel for an embedded system from scratch. Runs on the Raspberry Pi 3 and the Raspberry Pi 4.
- [Writing embedded drivers in Rust isn't that hard](https://hboeving.dev/blog/rust-2c-driver-p1/) A guide to building an embedded-hal driver. [Part 2](https://hboeving.dev/blog/rust-i2c-driver-p2/)
- [Ferrous Systems' Embedded Training Courses: 2020-current edition](https://github.com/ferrous-systems/embedded-trainings-2020) A hands-on training course for beginner and advanced learners of Embedded Rust, based on Nordic Semiconductor's nRF52840 hardware. This training was given at Oxidize Conferences and by [Ferrous Systems] to corporate customers.
- [Ferrous Systems' Knurling Sessions](https://knurling.ferrous-systems.com/sessions/) are hands-on embedded projects that explore specific concepts using generally available hardware, building full systems and components using microcontrollers, sensors, and actuators.
- [DSP on STM32F407G-DISC1](https://github.com/jacobrosenthal/dsp-discoveryf4-rust/) Unofficial oxidization of the [Digital Signal Processing using Arm Cortex-M based Microcontrollers: Theory and Practice](https://www.amazon.com/Digital-Signal-Processing-Cortex-M-Microcontrollers/dp/1911531166) book. The book isn't necessary to enjoy the examples and learn a functional DSP Rust coding style.
- [Building a sailing starter board with Rust (RTIC)](https://gill.net.in/posts/stm32-pcb-sailing-and-rust/) A step-by-step story/guide to build STM32-based PCB and program it with Rust for fun and games.
- [STM32F4xx with Embedded Rust at the HAL](https://apollolabsblog.hashnode.dev/series/stm32f4-embedded-rust-hal) A blog containing a series of tutorials demonstrating the use of several peripherals through simple examples leveraging the stm32f4xx-hal crate.
- [Embedded Rust programming playlist](https://www.youtube.com/playlist?list=PLP_X41VhYn5X6Wwjnm0bRwI3n2pdaszxU) Various livestreams with Embedded Rust live coding
- [ESP32-C3 Rust Tutorials](https://youtube.com/playlist?list=PLkch9g9DEE0Lkm1LqcD7pZNDmXEczOo-a) Short videos and [Github project](https://github.com/shanemmattner/ESP32-C3_Rust_Tutorials) implementing various peripherals of the ESP32-C3 with the end goal of creating a complete data logger application.
- [Tweede golf's workshop](https://workshop.tweede.golf) - A full workshop about Rust and embedded Rust. The embedded parts use the nRF52840-DK and a LIS3DH breakout board. ([github source](https://github.com/tweedegolf/rust-workshop))
- [impl Rust on ESP32 Book](https://esp32.implrust.com/) - A hands-on guide that uses the ESP32 DevKit V1 to demonstrate how to work with various modules and sensors. ([github source](https://github.com/ImplFerris/esp32-book))
- [Pico Pico Book](https://pico.implrust.com/) - A hands-on guide that uses the Pico 2 (RP2350) to demonstrate how to work with various modules and sensors. ([github source](https://github.com/ImplFerris/pico-pico))

[Ferrous Systems]: https://ferrous-systems.com

### Paid and commercially available materials

These materials are available for purchase. They have been reviewed for relevancy, but are not
specifically endorsed or reviewed for accuracy or quality by the Embedded Working Group.

- [Simplified Embedded Rust: Standard Library Edition](https://www.theembeddedrustacean.com/c/ser-std) - This book provides a quick path to start learning embedded Rust with minimal setup. Book is based on ESP devices and the Wokwi Simulator. This edition uses the standard library development approach which is based on the ESP-IDF framework.
- [Simplified Embedded Rust: Core Library Edition](https://www.theembeddedrustacean.com/c/ser-no-std) - This book provides a quick path to start learning embedded Rust with minimal setup. Book is based on ESP devices and the Wokwi Simulator. This edition uses the core library development approach for bare metal development.
- [Embedded Software with Rust](https://www.manning.com/books/embedded-software-with-rust) - A practical introduction to building firmware that is fast, efficient, and far safer than traditional embedded software written in C or C++.

## Tools

- [xargo](https://github.com/japaric/xargo) Rust package manager with support for non-default std libraries — build Rust runtime for your embedded system.
  - xargo is great, but since it's in maintenance mode, [cargo-xbuild](https://github.com/rust-osdev/cargo-xbuild) is catching up as its intended replacement.
- [svd2rust](https://github.com/japaric/svd2rust) Generate Rust structs with register mappings from SVD files.
- [edc2svd](https://github.com/kiffie/edc2svd) Generate SVD files for PIC32 devices from EDC files. - [![crates.io](https://img.shields.io/crates/v/edc2svd.svg)](https://crates.io/crates/edc2svd)
- [embedded-hal-mock] Mock implementation of `embedded-hal` traits for testing without accessing real hardware. - [![crates.io](https://img.shields.io/crates/v/embedded-hal-mock.svg)](https://crates.io/crates/embedded-hal-mock)
- [bindgen](https://crates.io/crates/bindgen) Automatically generates Rust FFI bindings to C and C++ libraries. - [![crates.io](https://img.shields.io/crates/v/bindgen.svg)](https://crates.io/crates/bindgen)
- [cortex-m semihosting](https://github.com/japaric/cortex-m-semihosting) Semihosting for ARM Cortex-M processors
- [bobbin-cli](https://github.com/bobbin-rs/bobbin-cli) A Rust command line tool to simplify embedded development and deployment.
- [ferros](https://github.com/auxoncorp/ferros) A Rust-based userland which also adds compile-time assurances to seL4 development.
- [cargo-flash](https://probe.rs/docs/tools/cargo-flash/) A small cargo subcommand to download your binary to your target chip. - [![crates.io](https://img.shields.io/crates/v/cargo-flash.svg)](https://crates.io/crates/cargo-flash)
- [cargo-embed](https://probe.rs/docs/tools/cargo-embed/) A superset of cargo-flash with additional useful features like configuration file support, an RTT terminal, or a GDB server. - [![crates.io](https://img.shields.io/crates/v/cargo-embed.svg)](https://crates.io/crates/cargo-embed)
- [cargo-hf2](https://github.com/jacobrosenthal/hf2-rs)  A small cargo subcommand to download cargo builds to Microsoft UF2 bootloaders via HID USB . - [![crates.io](https://img.shields.io/crates/v/cargo-hf2.svg)](https://crates.io/crates/cargo-hf2)
- [cargo-bloat](https://github.com/RazrFalcon/cargo-bloat) Find out what takes most of the space in your executable.
- [cargo-call-stack](https://crates.io/crates/cargo-call-stack) Static, whole program stack usage analyzer.
- [cargo-dfu](https://crates.io/crates/cargo-dfu) Cargo extension for flashing embedded rust programs via DFU.
- [espflash](https://github.com/esp-rs/espflash) Serial flasher utility for Espressif SoCs and modules. - [![crates.io](https://img.shields.io/crates/v/espflash.svg)](https://crates.io/crates/espflash)
- [espup](https://github.com/esp-rs/espup) Tool for installing and maintaining Espressif Rust ecosystem. - [![crates.io](https://img.shields.io/crates/v/espup.svg)](https://crates.io/crates/espup)
- [uf2](https://github.com/sajattack/uf2conv-rs) Converts binary files to Microsoft's UF2 format for copying over to mass storage device uf2 bootloaders - [![crates.io](https://img.shields.io/crates/v/uf2.svg)](https://crates.io/crates/uf2)
- [probe-rs](https://github.com/probe-rs/probe-rs): a modern, embedded debugging toolkit, written in Rust
- [embedded-test](https://github.com/probe-rs/embedded-test): A versatile test harness for embedded devices, supporting unit tests, integration tests, async tests, and more.
- [Knurling Tools](https://knurling.ferrous-systems.com/tools/) are developed by [Ferrous Systems] to ease the development process for building, debugging, and testing embedded Rust systems. These tools include:
  - [defmt](https://github.com/knurling-rs/defmt): a highly efficient logging framework that targets resource-constrained devices, like microcontrollers.
  - [derive-mmio](https://github.com/knurling-rs/derive-mmio): Creating MMIO-friendly APIs for embedded peripherals.
  - [flip-link](https://github.com/knurling-rs/flip-link), a linker wrapper that provides stack overflow protection without an MMU by flipping the standard memory layout of ARM Cortex-M programs
  - [app-template](https://github.com/knurling-rs/app-template), a `cargo-generate` powered project template for quickly setting up new projects using the Knurling Tools.
  - [defmt-test](https://github.com/knurling-rs/defmt-test), an embedded test harness that lets you write and run unit tests as if you were using the built-in `#[test]` attribute, but will run on an embedded target
- [embedded-hal-compat](https://github.com/ryankurte/embedded-hal-compat), a compatibility layer to provide interoperability between `v0.2.x` and `v1.x.x` hal implementations and drivers
- [Embassy start](https://github.com/titanclass/embassy-start) is a GitHub repo template for setting up async embedded Rust projects that use [Embassy](https://github.com/embassy-rs/embassy). This particular template targets nRF hardware and networking using the Uarte for the purposes of illustration only.
- [svd-generator](https://codeberg.org/weathered-steel/svd-generator) CLI tool to parse flattened device tree files, and create a SVD file. - [![crates.io](https://img.shields.io/crates/v/svd-generator.svg)](https://crates.io/crates/svd-generator)
- [rumbac](https://github.com/akavel/rumbac) is a simple CLI flasher for *Arduino Nano 33 BLE Rev2 / Sense Rev2* boards, using the SAM-BA protocol to talk with the Arduino-provided bootloader, porting just enough of the `bossac` tool to Rust
- [commitment-issues](https://github.com/dysonltd/commitment-issues) Compile git metadata into your binary.
- [scope](https://github.com/matheuswhite/scope-rs) Cross-platform serial-monitor TUI with an RTT interface (via `probe-rs`), hex/`@tag` input macros, search, session recording, and Lua plugins. - [![crates.io](https://img.shields.io/crates/v/scope-monitor.svg)](https://crates.io/crates/scope-monitor)

[embedded-hal-mock]: https://crates.io/crates/embedded-hal-mock

## Real-time

### Real-time Operating System (RTOS)

- [Drone OS](https://drone-os.github.io) An Embedded Operating System for writing real-time applications in Rust.
- [FreeRTOS.rs](https://github.com/hashmismatch/freertos.rs) Rust interface for the FreeRTOS API
- [FreeRTOS-rust](https://github.com/lobaro/FreeRTOS-rust) Rust interface for FreeRTOS with Rust entry point and build support crate.
- [RIOT-OS](https://doc.riot-os.org/using-rust.html) directly supports applications written in Rust, both in terms of build system integration and by having safe and idiomatic wrappers.
- [Tock](https://www.tockos.org) An embedded operating system designed for running multiple concurrent, mutually distrustful applications on low-memory and low-power microcontrollers
- [Hubris](https://github.com/oxidecomputer/hubris) A real-time operating system built by Oxide Computer to run the Service Controller processor in the mainboards of their rack-mount servers.
- [Zephyr](https://docs.zephyrproject.org/latest/develop/languages/rust/index.html) An embedded RTOS, written in C, with support for writing applications in Rust.
- [Ariel OS](https://ariel-os.org/) A modular operating system written in Rust, providing multicore preemptive scheduling and application portability on top of Embassy.

### Real-time tools

- [RTIC v1.0](https://rtic.rs/1/book/en/) Real-Time Interrupt-driven Concurrency — A concurrency framework for building real-time systems:
  - [cortex-m rtic](https://github.com/rtic-rs/cortex-m-rtic) RTIC framework for ARM Cortex-M microcontrollers
  - [msp430 rtfm](https://github.com/japaric/msp430-rtfm) RTFM framework for MSP430 MCUs

## Runtime Crates

Basic runtimes for CPUs & MCUs which are needed to run software on them.

- [`cortex-m-rt`](https://crates.io/crates/cortex-m-rt) Support for Cortex-M
- [`cortex-a-rt`](https://crates.io/crates/cortex-a-rt) Support for Cortex-A
- [`cortex-r-rt`](https://crates.io/crates/cortex-r-rt) Support for Cortex-R
- [`riscv-rt`](https://crates.io/crates/riscv-rt) Support for RISC-V
- [`esp-riscv-rt`](https://crates.io/crates/esp-riscv-rt) Support for RISC-V devices from Espressif (ESP32)
- [`xtensa-lx-rt`](https://crates.io/crates/xtensa-lx-rt) Support for Xtensa LX (ESP32)
- [`mips-rt`](https://crates.io/crates/mips-rt) Support for MIPS
- [`msp430-rt`](https://crates.io/crates/msp430-rt) Support for MSP430

## Peripheral Access Crates

Register definition for microcontroller families. Usually generated using [`svd2rust`]. - [![crates.io](https://img.shields.io/crates/v/svd2rust.svg)](https://crates.io/crates/svd2rust)

Peripheral Access Crates were also called Device Crates.

[`svd2rust`]: https://crates.io/crates/svd2rust

*NOTE* You may be able to find even more peripheral access crates by searching for the
[`svd2rust`][svd2rust-kw] keyword on crates.io!

[svd2rust-kw]: https://crates.io/keywords/svd2rust

### Microchip

- [`atsamd11`](https://github.com/atsamd-rs/atsamd) Peripheral access API for Microchip (formerly Atmel) SAMD11 microcontrollers.  This git repo hosts both the peripheral access crate and the hal.
- [`atsamd21`](https://github.com/atsamd-rs/atsamd) Peripheral access API for Microchip (formerly Atmel) SAMD21 microcontrollers.  This git repo hosts both the peripheral access crate and the hal.
- [`atsamd51`](https://github.com/atsamd-rs/atsamd) Peripheral access API for Microchip (formerly Atmel) SAMD51 microcontrollers.  This git repo hosts both the peripheral access crate and the hal.
- [`atsame53`](https://github.com/atsamd-rs/atsamd) Peripheral access API for Microchip (formerly Atmel) SAME53 microcontrollers.  This git repo hosts both the peripheral access crate and the hal.
- [`atsame54`](https://github.com/atsamd-rs/atsamd) Peripheral access API for Microchip (formerly Atmel) SAME54 microcontrollers.  This git repo hosts both the peripheral access crate and the hal.
- [`atsamx7x-rust`](https://github.com/atsams-rs/atsamx7x-rust) Peripheral access API for Microchip (formerly Atmel) SAM S70/E70/V70/V71 microcontrollers.  This git repo hosts both the peripheral access crate and the hal.
- [`avr-device`](https://github.com/Rahix/avr-device) Peripheral access API for Microchip (formerly Atmel) AVR microcontroller family.
- [`sam3x8e`](https://crates.io/crates/sam3x8e) Peripheral access API for Atmel SAMD3X8E microcontrollers (generated using svd2rust)  - [![crates.io](https://img.shields.io/crates/v/sam3x8e.svg)](https://crates.io/crates/sam3x8e)
- [`pic32-pac`](https://crates.io/crates/pic32mx2xx) Peripheral access API for PIC32MX1/2xx - [![crates.io](https://img.shields.io/crates/v/pic32mx2xx)](https://crates.io/crates/pic32mx2xx)

### Nordic

- [`nrf51`](https://crates.io/crates/nrf51) Peripheral access API for nRF51 microcontrollers (generated using svd2rust) - [![crates.io](https://img.shields.io/crates/v/nrf51.svg)](https://crates.io/crates/nrf51)
- [`nrf52810-pac`](https://crates.io/crates/nrf52810-pac) - Peripheral access API for the nRF52810 microcontroller (generated using svd2rust) - [![crates.io](https://img.shields.io/crates/v/nrf52810-pac.svg)](https://crates.io/crates/nrf52810-pac)
- [`nrf52811-pac`](https://crates.io/crates/nrf52811-pac) - Peripheral access API for the nRF52811 microcontroller (generated using svd2rust) - [![crates.io](https://img.shields.io/crates/v/nrf52811-pac.svg)](https://crates.io/crates/nrf52811-pac)
- [`nrf52832-pac`](https://crates.io/crates/nrf52832-pac) - Peripheral access API for the nRF52832 microcontroller (generated using svd2rust) - [![crates.io](https://img.shields.io/crates/v/nrf52832-pac.svg)](https://crates.io/crates/nrf52832-pac)
- [`nrf52833-pac`](https://crates.io/crates/nrf52833-pac) - Peripheral access API for the nRF52833 microcontroller (generated using svd2rust) - [![crates.io](https://img.shields.io/crates/v/nrf52833-pac.svg)](https://crates.io/crates/nrf52833-pac)
- [`nrf52840-pac`](https://crates.io/crates/nrf52840-pac) - Peripheral access API for the nRF52840 microcontroller (generated using svd2rust) - [![crates.io](https://img.shields.io/crates/v/nrf52840-pac.svg)](https://crates.io/crates/nrf52840-pac)
- [`nrf5340-app-pac`](https://crates.io/crates/nrf5340-app-pac) - Peripheral access API for the nRF5340 application core (generated using svd2rust) - [![crates.io](https://img.shields.io/crates/v/nrf5340-app-pac.svg)](https://crates.io/crates/nrf5340-app-pac)
- [`nrf5340-net-pac`](https://crates.io/crates/nrf5340-net-pac) - Peripheral access API for the nRF5340 network core (generated using svd2rust) - [![crates.io](https://img.shields.io/crates/v/nrf5340-net-pac.svg)](https://crates.io/crates/nrf5340-net-pac)
- [`nrf9160-pac`](https://crates.io/crates/nrf9160-pac) - Peripheral access API for the nRF9160 system-in-package (generated using svd2rust) - [![crates.io](https://img.shields.io/crates/v/nrf9160-pac.svg)](https://crates.io/crates/nrf9160-pac)

### NXP

- [`k64`](https://crates.io/crates/k64) - [![crates.io](https://img.shields.io/crates/v/k64.svg)](https://crates.io/crates/k64)
- [`lpc11uxx`](https://crates.io/crates/lpc11uxx) - [![crates.io](https://img.shields.io/crates/v/lpc11uxx.svg)](https://crates.io/crates/lpc11uxx)
- [`lpc55s6x-pac`](https://crates.io/crates/lpc55s6x-pac) - [![crates.io](https://img.shields.io/crates/v/lpc55s6x-pac.svg)](https://crates.io/crates/lpc55s6x-pac)
- [`lpc82x-pac`](https://crates.io/crates/lpc82x-pac) - [![crates.io](https://img.shields.io/crates/v/lpc82x-pac.svg)](https://crates.io/crates/lpc82x-pac)
- [`lpc845-pac`](https://crates.io/crates/lpc845-pac) - [![crates.io](https://img.shields.io/crates/v/lpc845-pac.svg)](https://crates.io/crates/lpc845-pac)
- [`mkw41z`](https://crates.io/crates/mkw41z) - [![crates.io](https://img.shields.io/crates/v/mkw41z.svg)](https://crates.io/crates/mkw41z)
- [`imxrt-ral`](https://github.com/imxrt-rs/imxrt-rs) Register access layer for i.MX RT series. -  [![crates.io](https://img.shields.io/crates/v/imxrt-ral.svg)](https://crates.io/crates/imxrt-ral)
- [`SKEAZN642`](https://crates.io/crates/SKEAZN642) Peripheral access API for KEA64 family microcontrollers (generated using svd2rust) - [![crates.io](https://img.shields.io/crates/v/SKEAZN642.svg)](https://crates.io/crates/SKEAZN642)
- [`mcx-pac`](https://github.com/mcx-rs/mcx-pac) Peripheral Access Crate for NXP MCX Series MCUs - [![crates.io](https://img.shields.io/crates/v/mcx-pac.svg)](https://crates.io/crates/mcx-pac)

### Raspberry Pi Silicon

- [`rp2040-pac`](https://crates.io/crates/rp2040-pac) - Peripheral access API for the RP2040 dual-core system-on-chip (generated using svd2rust) - [![crates.io](https://img.shields.io/crates/v/rp2040-pac.svg)](https://crates.io/crates/rp2040-pac)
- [`rp235x-pac`](https://crates.io/crates/rp235x-pac) - Peripheral access API for the RP2350 family of dual-core microcontrollers - [![crates.io](https://img.shields.io/crates/v/rp235x-pac.svg)](https://crates.io/crates/rp235x-pac)

### SiFive

- [`e310x`](https://github.com/riscv-rust/e310x) - svd2rust generated interface to SiFive [Freedom E310](https://www.sifive.com/cores/e31) MCUs - [![crates.io](https://img.shields.io/crates/v/e310x.svg)](https://crates.io/crates/e310x)

### Silicon Labs

- [`efm32pg12-pac`](https://crates.io/crates/efm32pg12-pac) - Peripheral access API for Silicon Labs EFM32PG12 microcontrollers - [![crates.io](https://img.shields.io/crates/v/efm32pg12-pac)](https://crates.io/crates/efm32pg12-pac)

The [`efm32-rs`](https://github.com/efm32-rs) project has peripheral access APIs for most EFM32 microcontrollers (generated using svd2rust):

- [`efm32g-pac`](https://crates.io/crates/efm32g-pac) - [![crates.io](https://img.shields.io/crates/v/efm32g-pac)](https://crates.io/crates/efm32g-pac)
- [`efm32gg-pac`](https://crates.io/crates/efm32gg-pac) - [![crates.io](https://img.shields.io/crates/v/efm32gg-pac)](https://crates.io/crates/efm32gg-pac)
- [`efm32gg11b-pac`](https://crates.io/crates/efm32gg11b-pac) - [![crates.io](https://img.shields.io/crates/v/efm32gg11b-pac)](https://crates.io/crates/efm32gg11b-pac)
- [`efm32gg12b-pac`](https://crates.io/crates/efm32gg12b-pac) - [![crates.io](https://img.shields.io/crates/v/efm32gg12b-pac)](https://crates.io/crates/efm32gg12b-pac)
- [`efm32hg-pac`](https://crates.io/crates/efm32hg-pac) - [![crates.io](https://img.shields.io/crates/v/efm32hg-pac)](https://crates.io/crates/efm32hg-pac)
- [`efm32jg1b-pac`](https://crates.io/crates/efm32jg1b-pac) - [![crates.io](https://img.shields.io/crates/v/efm32jg1b-pac)](https://crates.io/crates/efm32jg1b-pac)
- [`efm32jg12b-pac`](https://crates.io/crates/efm32jg12b-pac) - [![crates.io](https://img.shields.io/crates/v/efm32jg12b-pac)](https://crates.io/crates/efm32jg12b-pac)
- [`efm32lg-pac`](https://crates.io/crates/efm32lg-pac) - [![crates.io](https://img.shields.io/crates/v/efm32lg-pac)](https://crates.io/crates/efm32lg-pac)
- [`efm32pg-pac`](https://crates.io/crates/efm32pg-pac) - [![crates.io](https://img.shields.io/crates/v/efm32pg-pac)](https://crates.io/crates/efm32pg-pac)
- [`efm32pg22-pac`](https://crates.io/crates/efm32pg22-pac) - [![crates.io](https://img.shields.io/crates/v/efm32pg22-pac)](https://crates.io/crates/efm32pg22-pac)
- [`efm32pg23-pac`](https://crates.io/crates/efm32pg23-pac) - [![crates.io](https://img.shields.io/crates/v/efm32pg23-pac)](https://crates.io/crates/efm32pg23-pac)
- [`efm32tg-pac`](https://crates.io/crates/efm32tg-pac) - [![crates.io](https://img.shields.io/crates/v/efm32tg-pac)](https://crates.io/crates/efm32tg-pac)
- [`efm32tg11b-pac`](https://crates.io/crates/efm32tg11b-pac) - [![crates.io](https://img.shields.io/crates/v/efm32tg11b-pac)](https://crates.io/crates/efm32tg11b-pac)
- [`efm32wg-pac`](https://crates.io/crates/efm32wg-pac) - [![crates.io](https://img.shields.io/crates/v/efm32wg-pac)](https://crates.io/crates/efm32wg-pac)
- [`efm32zg-pac`](https://crates.io/crates/efm32zg-pac) - [![crates.io](https://img.shields.io/crates/v/efm32zg-pac)](https://crates.io/crates/efm32zg-pac)

### StarFive

- [`j71xx-pac`](https://crates.io/crates/jh71xx-pac) - svd2rust generated interface to StarFive [JH71xx](https://www.starfivetech.com/en/site/soc) MCUs - [![crates.io](https://img.shields.io/crates/v/jh71xx-pac.svg)](https://crates.io/crates/jh71xx-pac)

### STMicroelectronics

The [`stm32-rs`](https://github.com/stm32-rs/stm32-rs) project has peripheral access APIs for most STM32 microcontrollers (generated using svd2rust):

- [`stm32f0`](https://crates.io/crates/stm32f0) - [![crates.io](https://img.shields.io/crates/v/stm32f0.svg)](https://crates.io/crates/stm32f0)
- [`stm32f1`](https://crates.io/crates/stm32f1) - [![crates.io](https://img.shields.io/crates/v/stm32f1.svg)](https://crates.io/crates/stm32f1)
- [`stm32f2`](https://crates.io/crates/stm32f2) - [![crates.io](https://img.shields.io/crates/v/stm32f2.svg)](https://crates.io/crates/stm32f2)
- [`stm32f3`](https://crates.io/crates/stm32f3) - [![crates.io](https://img.shields.io/crates/v/stm32f3.svg)](https://crates.io/crates/stm32f3)
- [`stm32f4`](https://crates.io/crates/stm32f4) - [![crates.io](https://img.shields.io/crates/v/stm32f4.svg)](https://crates.io/crates/stm32f4)
- [`stm32f7`](https://crates.io/crates/stm32f7) - [![crates.io](https://img.shields.io/crates/v/stm32f7.svg)](https://crates.io/crates/stm32f7)
- [`stm32g0`](https://crates.io/crates/stm32g0) - [![crates.io](https://img.shields.io/crates/v/stm32g0.svg)](https://crates.io/crates/stm32g0)
- [`stm32g4`](https://crates.io/crates/stm32g4) - [![crates.io](https://img.shields.io/crates/v/stm32g4.svg)](https://crates.io/crates/stm32g4)
- [`stm32h7`](https://crates.io/crates/stm32h5) - [![crates.io](https://img.shields.io/crates/v/stm32h5.svg)](https://crates.io/crates/stm32h5)
- [`stm32h7`](https://crates.io/crates/stm32h7) - [![crates.io](https://img.shields.io/crates/v/stm32h7.svg)](https://crates.io/crates/stm32h7)
- [`stm32l0`](https://crates.io/crates/stm32l0) - [![crates.io](https://img.shields.io/crates/v/stm32l0.svg)](https://crates.io/crates/stm32l0)
- [`stm32l1`](https://crates.io/crates/stm32l1) - [![crates.io](https://img.shields.io/crates/v/stm32l1.svg)](https://crates.io/crates/stm32l1)
- [`stm32l4`](https://crates.io/crates/stm32l4) - [![crates.io](https://img.shields.io/crates/v/stm32l4.svg)](https://crates.io/crates/stm32l4)

### Texas Instruments

- [`tm4c123x`](https://crates.io/crates/tm4c123x) Peripheral access API for TM4C123x microcontrollers (generated using svd2rust)
- [`tm4c129x`](https://crates.io/crates/tm4c129x) Peripheral access API for TM4C129x microcontrollers (generated using svd2rust)
- [`mspm0-metapac`](https://github.com/mspm0-rs/mspm0-data)
  - PAC for all MSPM0 (and MSPS003) microcontrollers. (generated using chiptool)

### MSP430

- [`msp430g2553`](https://github.com/pftbest/msp430g2553) Peripheral access API for MSP430G2553 microcontrollers (generated using svd2rust)
  - [msp430 quickstart](https://github.com/rust-embedded/msp430-quickstart) some examples for msp430
- [`msp430fr2355`](https://crates.io/crates/msp430fr2355) Peripheral access API for MSP430FR2355 microcontrollers (generated using svd2rust)
- [`msp430fr6972`](https://crates.io/crates/msp430fr6972) - [![crates.io](https://img.shields.io/crates/v/msp430fr6972)](https://crates.io/crates/msp430fr6972)

### Espressif

- [`esp32`](https://github.com/esp-rs/esp-pacs/tree/main/esp32) - [![crates.io](https://img.shields.io/crates/v/esp32.svg)](https://crates.io/crates/esp32)
- [`esp32c2`](https://github.com/esp-rs/esp-pacs/tree/main/esp32c2) - [![crates.io](https://img.shields.io/crates/v/esp32c2.svg)](https://crates.io/crates/esp32c2)
- [`esp32c3`](https://github.com/esp-rs/esp-pacs/tree/main/esp32c3) - [![crates.io](https://img.shields.io/crates/v/esp32c3.svg)](https://crates.io/crates/esp32c3)
- [`esp32c5`](https://github.com/esp-rs/esp-pacs/tree/main/esp32c5) - [![crates.io](https://img.shields.io/crates/v/esp32c5.svg)](https://crates.io/crates/esp32c5)
- [`esp32c6`](https://github.com/esp-rs/esp-pacs/tree/main/esp32c6) - [![crates.io](https://img.shields.io/crates/v/esp32c6.svg)](https://crates.io/crates/esp32c6)
- [`esp32c61`](https://github.com/esp-rs/esp-pacs/tree/main/esp32c61) - [![crates.io](https://img.shields.io/crates/v/esp32c61.svg)](https://crates.io/crates/esp32c61)
- [`esp32h2`](https://github.com/esp-rs/esp-pacs/tree/main/esp32h2) - [![crates.io](https://img.shields.io/crates/v/esp32h2.svg)](https://crates.io/crates/esp32h2)
- [`esp32p4`](https://github.com/esp-rs/esp-pacs/tree/main/esp32p4) - [![crates.io](https://img.shields.io/crates/v/esp32p4.svg)](https://crates.io/crates/esp32p4)
- [`esp32s2`](https://github.com/esp-rs/esp-pacs/tree/main/esp32s2) - [![crates.io](https://img.shields.io/crates/v/esp32s2.svg)](https://crates.io/crates/esp32s2)
- [`esp32s3`](https://github.com/esp-rs/esp-pacs/tree/main/esp32s3) - [![crates.io](https://img.shields.io/crates/v/esp32s3.svg)](https://crates.io/crates/esp32s3)
- [`esp8266`](https://github.com/esp-rs/esp8266) - [![crates.io](https://img.shields.io/crates/v/esp8266.svg)](https://crates.io/crates/esp8266) *note: esp8266 is archived, no further development planned*

### Ambiq Micro

- [`ambiq-apollo1-pac`](https://crates.io/crates/ambiq-apollo1-pac) Peripheral access API for Ambiq Apollo 1 microcontrollers (generated using svd2rust)
- [`ambiq-apollo2-pac`](https://crates.io/crates/ambiq-apollo2-pac) Peripheral access API for Ambiq Apollo 2 microcontrollers (generated using svd2rust)
- [`ambiq-apollo3-pac`](https://crates.io/crates/ambiq-apollo3-pac) Peripheral access API for Ambiq Apollo 3 microcontrollers (generated using svd2rust)
- [`ambiq-apollo3p-pac`](https://crates.io/crates/ambiq-apollo3p-pac) Peripheral access API for Ambiq Apollo 3 Plus microcontrollers (generated using svd2rust)

### GigaDevice

- [`gd32vf103-pac`](https://github.com/riscv-rust/gd32vf103-pac) Peripheral access API for GD32VF103 RISC-V microcontrollers (generated using svd2rust) - [![crates.io](https://img.shields.io/crates/v/gd32vf103-pac.svg)](https://crates.io/crates/gd32vf103-pac)
- [`gd32e2`](https://crates.io/crates/gd32e2) Peripheral access API for GD32E23x Cortex-M23 microcontrollers (generated using svd2rust) - [![crates.io](https://img.shields.io/crates/v/gd32e2.svg)](https://crates.io/crates/gd32e2)
- [`gd32f1`](https://crates.io/crates/gd32f1) Peripheral access API for GD32F1x0 Cortex-M3 microcontrollers (generated using svd2rust) - [![crates.io](https://img.shields.io/crates/v/gd32f1.svg)](https://crates.io/crates/gd32f1)
- [`gd32f2`](https://crates.io/crates/gd32f2) Peripheral access API for GD32F20x Cortex-M3 microcontrollers (generated using svd2rust) - [![crates.io](https://img.shields.io/crates/v/gd32f2.svg)](https://crates.io/crates/gd32f2)

### XMC

Peripheral access crates for the different XMC4xxx families of microcontrollers

- [`xmc4100`](https://github.com/xmc-rs/xmc4100) - [![crates.io](https://img.shields.io/crates/v/xmc4100.svg)](https://crates.io/crates/xmc4100)
- [`xmc4200`](https://github.com/xmc-rs/xmc4200) - [![crates.io](https://img.shields.io/crates/v/xmc4200.svg)](https://crates.io/crates/xmc4200)
- [`xmc4300`](https://github.com/xmc-rs/xmc4300) - [![crates.io](https://img.shields.io/crates/v/xmc4300.svg)](https://crates.io/crates/xmc4300)
- [`xmc4400`](https://github.com/xmc-rs/xmc4400) - [![crates.io](https://img.shields.io/crates/v/xmc4400.svg)](https://crates.io/crates/xmc4400)
- [`xmc4500`](https://github.com/xmc-rs/xmc4500) - [![crates.io](https://img.shields.io/crates/v/xmc4500.svg)](https://crates.io/crates/xmc4500)
- [`xmc4700`](https://github.com/xmc-rs/xmc4700) - [![crates.io](https://img.shields.io/crates/v/xmc4700.svg)](https://crates.io/crates/xmc4700)
- [`xmc4800`](https://github.com/xmc-rs/xmc4800) - [![crates.io](https://img.shields.io/crates/v/xmc4800.svg)](https://crates.io/crates/xmc4800)

### AMD

- [`zynq7000`](https://github.com/us-irs/zynq7000-rs/tree/main/firmware/zynq7000) - [![crates.io](https://img.shields.io/crates/v/zynq7000.svg)](https://crates.io/crates/zynq7000)

### Vorago

- [`va108xx`](https://egit.irs.uni-stuttgart.de/rust/va108xx-rs) - [![crates.io](https://img.shields.io/crates/v/va108xx.svg)](https://crates.io/crates/va108xx)
- [`va416xx`](https://egit.irs.uni-stuttgart.de/rust/va416xx-rs) - [![crates.io](https://img.shields.io/crates/v/va416xx.svg)](https://crates.io/crates/va416xx)

### Wiznet

- [`w7500x-pac`](https://crates.io/crates/w7500x-pac) Peripheral Access Crate for Wiznet's W7500x microcontrollers (generated using svd2rust) - [![crates.io](https://img.shields.io/crates/v/w7500x-pac.svg)](https://crates.io/crates/w7500x-pac)

### Renesas

- [`ra2a1`](https://github.com/ra-rs/ra/tree/main/pac/ra2a1) Peripheral Access Crate for ra2a1 microcontrollers (generated using svd2rust) - [![crates.io](https://img.shields.io/crates/v/ra2a1.svg)](https://crates.io/crates/ra2a1)
- [`ra2e1`](https://github.com/ra-rs/ra/tree/main/pac/ra2e1) Peripheral Access Crate for ra2e1 microcontrollers (generated using svd2rust) - [![crates.io](https://img.shields.io/crates/v/ra2e1.svg)](https://crates.io/crates/ra2e1)
- [`ra2e2`](https://github.com/ra-rs/ra/tree/main/pac/ra2e2) Peripheral Access Crate for ra2e2 microcontrollers (generated using svd2rust) - [![crates.io](https://img.shields.io/crates/v/ra2e2.svg)](https://crates.io/crates/ra2e2)
- [`ra2l1`](https://github.com/ra-rs/ra/tree/main/pac/ra2l1) Peripheral Access Crate for ra2l1 microcontrollers (generated using svd2rust) - [![crates.io](https://img.shields.io/crates/v/ra2l1.svg)](https://crates.io/crates/ra2l1)
- [`ra4e1`](https://github.com/ra-rs/ra/tree/main/pac/ra4e1) Peripheral Access Crate for ra4e1 microcontrollers (generated using svd2rust) - [![crates.io](https://img.shields.io/crates/v/ra4e1.svg)](https://crates.io/crates/ra4e1)
- [`ra4m1`](https://github.com/ra-rs/ra/tree/main/pac/ra4m1) Peripheral Access Crate for ra4m1 microcontrollers (generated using svd2rust) - [![crates.io](https://img.shields.io/crates/v/ra4m1.svg)](https://crates.io/crates/ra4m1)
- [`ra4m2`](https://github.com/ra-rs/ra/tree/main/pac/ra4m2) Peripheral Access Crate for ra4m2 microcontrollers (generated using svd2rust) - [![crates.io](https://img.shields.io/crates/v/ra4m2.svg)](https://crates.io/crates/ra4m2)
- [`ra4m3`](https://github.com/ra-rs/ra/tree/main/pac/ra4m3) Peripheral Access Crate for ra4m3 microcontrollers (generated using svd2rust) - [![crates.io](https://img.shields.io/crates/v/ra4m3.svg)](https://crates.io/crates/ra4m3)
- [`ra4w1`](https://github.com/ra-rs/ra/tree/main/pac/ra4w1) Peripheral Access Crate for ra4w1 microcontrollers (generated using svd2rust) - [![crates.io](https://img.shields.io/crates/v/ra4w1.svg)](https://crates.io/crates/ra4w1)
- [`ra6e1`](https://github.com/ra-rs/ra/tree/main/pac/ra6e1) Peripheral Access Crate for ra6e1 microcontrollers (generated using svd2rust) - [![crates.io](https://img.shields.io/crates/v/ra6e1.svg)](https://crates.io/crates/ra6e1)
- [`ra6m1`](https://github.com/ra-rs/ra/tree/main/pac/ra6m1) Peripheral Access Crate for ra6m1 microcontrollers (generated using svd2rust) - [![crates.io](https://img.shields.io/crates/v/ra6m1.svg)](https://crates.io/crates/ra6m1)
- [`ra6m2`](https://github.com/ra-rs/ra/tree/main/pac/ra6m2) Peripheral Access Crate for ra6m2 microcontrollers (generated using svd2rust) - [![crates.io](https://img.shields.io/crates/v/ra6m2.svg)](https://crates.io/crates/ra6m2)
- [`ra6m3`](https://github.com/ra-rs/ra/tree/main/pac/ra6m3) Peripheral Access Crate for ra6m3 microcontrollers (generated using svd2rust) - [![crates.io](https://img.shields.io/crates/v/ra6m3.svg)](https://crates.io/crates/ra6m3)
- [`ra6m4`](https://github.com/ra-rs/ra/tree/main/pac/ra6m4) Peripheral Access Crate for ra6m4 microcontrollers (generated using svd2rust) - [![crates.io](https://img.shields.io/crates/v/ra6m4.svg)](https://crates.io/crates/ra6m4)
- [`ra6t1`](https://github.com/ra-rs/ra/tree/main/pac/ra6t1) Peripheral Access Crate for ra6t1 microcontrollers (generated using svd2rust) - [![crates.io](https://img.shields.io/crates/v/ra6t1.svg)](https://crates.io/crates/ra6t1)
- [`ra6t2`](https://github.com/ra-rs/ra/tree/main/pac/ra6t2) Peripheral Access Crate for ra6t2 microcontrollers (generated using svd2rust) - [![crates.io](https://img.shields.io/crates/v/ra6t2.svg)](https://crates.io/crates/ra6t2)
- [`da14531`](https://crates.io/crates/da14531) Peripheral Access Crate for DA14531 Ultra-Low Power BT 5.1 System-on-Chip - [![crates.io](https://img.shields.io/crates/v/da14531.svg)](https://crates.io/crates/da14531)

## HAL implementation crates

Implementations of [`embedded-hal`] for microcontroller families and systems running some OS. - [![crates.io](https://img.shields.io/crates/v/embedded-hal.svg)](https://crates.io/crates/embedded-hal)

[`embedded-hal`]: https://crates.io/crates/embedded-hal

*NOTE* You may be able to find even more HAL implementation crates by searching for the
[`embedded-hal-impl`] and [`embedded-hal`][embedded-hal-kw] keywords on crates.io!

[`embedded-hal-impl`]: https://crates.io/keywords/embedded-hal-impl
[embedded-hal-kw]: https://crates.io/keywords/embedded-hal

### OS

- [`bitbang-hal`] software protocol implementations for microcontrollers with digital::OutputPin and digital::InputPin
- [`ftdi-embedded-hal`] for FTDI FTx232H chips connected to Linux systems via USB
- [`linux-embedded-hal`] for embedded Linux systems like the Raspberry Pi. - [![crates.io](https://img.shields.io/crates/v/linux-embedded-hal.svg)](https://crates.io/crates/linux-embedded-hal)
- [`freebsd-embedded-hal`] for embedded (or [not](https://www.freebsd.org/cgi/man.cgi?query=cp2112&sektion=4)) FreeBSD systems. - [![crates.io](https://img.shields.io/crates/v/freebsd-embedded-hal.svg)](https://crates.io/crates/freebsd-embedded-hal)

[`bitbang-hal`]: https://crates.io/crates/bitbang-hal
[`ftdi-embedded-hal`]: https://crates.io/crates/ftdi-embedded-hal
[`linux-embedded-hal`]: https://crates.io/crates/linux-embedded-hal
[`freebsd-embedded-hal`]: https://crates.io/crates/freebsd-embedded-hal

### Microchip

- [`atsam4-hal`](https://crates.io/crates/atsam4-hal) - HAL for SAM4E, SAM4N and SAM4S - [![crates.io](https://img.shields.io/crates/v/atsam4-hal.svg)](https://crates.io/crates/atsam4-hal)
- [`atsamd-hal`](https://crates.io/crates/atsamd-hal) - HAL for SAMD11, SAMD21, SAMD51 and SAME54 - [![crates.io](https://img.shields.io/crates/v/atsamd-hal.svg)](https://crates.io/crates/atsamd-hal)
- [`atsamx7x-hal`](https://crates.io/crates/atsamx7x-hal) - HAL for SAM S70/E70/V70/V71-based devices - [![crates.io](https://img.shields.io/crates/v/atsamx7x-hal.svg)](https://crates.io/crates/atsamx7x-hal)
- [`avr-hal`](https://github.com/Rahix/avr-hal) - HAL for AVR microcontroller family and AVR-based boards
- [`pic32-hal`](https://crates.io/crates/pic32-hal) - HAL for PIC32MX - [![crates.io](https://img.shields.io/crates/v/pic32-hal.svg)](https://crates.io/crates/pic32-hal)

### Nordic

- [`nrf51-hal`](https://crates.io/crates/nrf51-hal) - [![crates.io](https://img.shields.io/crates/v/nrf51-hal.svg)](https://crates.io/crates/nrf51-hal)
- [`nrf52810-hal`](https://crates.io/crates/nrf52810-hal) - [![crates.io](https://img.shields.io/crates/v/nrf52810-hal.svg)](https://crates.io/crates/nrf52810-hal)
- [`nrf52811-hal`](https://crates.io/crates/nrf52811-hal) - [![crates.io](https://img.shields.io/crates/v/nrf52811-hal.svg)](https://crates.io/crates/nrf52811-hal)
- [`nrf52832-hal`](https://crates.io/crates/nrf52832-hal) - [![crates.io](https://img.shields.io/crates/v/nrf52832-hal.svg)](https://crates.io/crates/nrf52832-hal)
- [`nrf52833-hal`](https://crates.io/crates/nrf52833-hal) - [![crates.io](https://img.shields.io/crates/v/nrf52833-hal.svg)](https://crates.io/crates/nrf52833-hal)
- [`nrf52840-hal`](https://crates.io/crates/nrf52840-hal) - [![crates.io](https://img.shields.io/crates/v/nrf52840-hal.svg)](https://crates.io/crates/nrf52840-hal)
- [`nrf9160-hal`](https://crates.io/crates/nrf9160-hal) - [![crates.io](https://img.shields.io/crates/v/nrf9160-hal.svg)](https://crates.io/crates/nrf9160-hal)

### NXP

Also check the list of [NXP board support crates][nxp-bsc]!

[nxp-bsc]: #nxp-2

- [`lpc55s6x-hal`](https://crates.io/crates/lpc55s6x-hal) - [![crates.io](https://img.shields.io/crates/v/lpc55s6x-hal.svg)](https://crates.io/crates/lpc55s6x-hal)
- [`lpc8xx-hal`](https://crates.io/crates/lpc8xx-hal) - HAL for lpc82x and lpc845 - [![crates.io](https://img.shields.io/crates/v/lpc8xx-hal.svg)](https://crates.io/crates/lpc8xx-hal)
- [`mkw41z-hal`](https://crates.io/crates/mkw41z-hal) - [![crates.io](https://img.shields.io/crates/v/mkw41z-hal.svg)](https://crates.io/crates/mkw41z-hal)
- [`imxrt-hal`](https://github.com/imxrt-rs/imxrt-rs) - HAL for i.MX RT series. -  [![crates.io](https://img.shields.io/crates/v/imxrt-hal.svg)](https://crates.io/crates/imxrt-hal)

### Raspberry Pi Silicon

- [`rp2040-hal`](https://crates.io/crates/rp2040-hal) - HAL for the RP2040 dual-core system-on-chip - [![crates.io](https://img.shields.io/crates/v/rp2040-hal.svg)](https://crates.io/crates/rp2040-hal)
- [`rp235x-hal`](https://crates.io/crates/rp235x-hal) - HAL for the RP2350 family of dual-core microcontrollers (used in the Raspberry Pi Pico 2 etc.) - [![crates.io](https://img.shields.io/crates/v/rp235x-hal.svg)](https://crates.io/crates/rp235x-hal)

### SiFive

- [`e310x-hal`](https://github.com/riscv-rust/e310x-hal) - HAL for SiFive [Freedom E310](https://www.sifive.com/cores/e31) MCUs - [![crates.io](https://img.shields.io/crates/v/e310x-hal.svg)](https://crates.io/crates/e310x-hal)

### STMicroelectronics

Also check the list of [STMicroelectronics board support crates][stm-bsc]!

[stm-bsc]: #stmicroelectronics-2

- [`stm32f0xx-hal`](https://crates.io/crates/stm32f0xx-hal) - [![crates.io](https://img.shields.io/crates/v/stm32f0xx-hal.svg)](https://crates.io/crates/stm32f0xx-hal)
  - Has examples that can run on boards like the [Nucleo-F042K6] and similar boards
- [`stm32f1xx-hal`](https://github.com/stm32-rs/stm32f1xx-hal) - [![crates.io](https://img.shields.io/crates/v/stm32f1xx-hal.svg)](https://crates.io/crates/stm32f1xx-hal)
  - Can be run on boards like the [Blue-pill], [Nucleo-F103RB], and similar boards
- [`stm32f3xx-hal`](https://crates.io/crates/stm32f3xx-hal) - [![crates.io](https://img.shields.io/crates/v/stm32f3xx-hal.svg)](https://crates.io/crates/stm32f3xx-hal)
- [`stm32f4xx-hal`](https://crates.io/crates/stm32f4xx-hal) - [![crates.io](https://img.shields.io/crates/v/stm32f4xx-hal.svg)](https://crates.io/crates/stm32f4xx-hal)
  - Generic HAL implementation for all MCUs of the stm32f4 series
- [`stm32f7xx-hal`](https://crates.io/crates/stm32f7xx-hal) - [![crates.io](https://img.shields.io/crates/v/stm32f7xx-hal.svg)](https://crates.io/crates/stm32f7xx-hal)
  - Generic HAL implementation for all MCUs of the stm32f7 series
- [`stm32g0xx-hal`](https://crates.io/crates/stm32g0xx-hal) - [![crates.io](https://img.shields.io/crates/v/stm32g0xx-hal.svg)](https://crates.io/crates/stm32g0xx-hal)
- [`stm32h7xx-hal`](https://crates.io/crates/stm32h7xx-hal) - [![crates.io](https://img.shields.io/crates/v/stm32h7xx-hal.svg)](https://crates.io/crates/stm32h7xx-hal)
  - HAL implementation for the STMicro STM32H7xx family of microcontrollers
- [`stm32l0xx-hal`](https://crates.io/crates/stm32l0xx-hal) - [![crates.io](https://img.shields.io/crates/v/stm32l0xx-hal.svg)](https://crates.io/crates/stm32l0xx-hal)
  - HAL implementation for the the STMicro STM32L0xx family of microcontrollers
- [`stm32l1xx-hal`](https://crates.io/crates/stm32l1xx-hal) - [![crates.io](https://img.shields.io/crates/v/stm32l1xx-hal.svg)](https://crates.io/crates/stm32l1xx-hal)
- [`stm32l151-hal`](https://crates.io/crates/stm32l151-hal) - [![crates.io](https://img.shields.io/crates/v/stm32l151-hal.svg)](https://crates.io/crates/stm32l151-hal)
- [`stm32l4xx-hal`](https://crates.io/crates/stm32l4xx-hal) - [![crates.io](https://img.shields.io/crates/v/stm32l4xx-hal.svg)](https://crates.io/crates/stm32l4xx-hal)
  - Generic hal support for stm32l4 devices, has examples that can run on boards like the [Nucleo-L432KC], [Solo], and similar boards
- [`stm32-hal`](https://crates.io/crates/stm32-hal2) - [![crates.io](https://img.shields.io/crates/v/stm32-hal2.svg)](https://crates.io/crates/stm32-hal2)
  - HAL implementation for STM32 devices across multiple families, with a focus on newer ones like L4, L5, and H7.

[Nucleo-L432KC]: https://www.st.com/content/st_com/en/products/evaluation-tools/product-evaluation-tools/mcu-eval-tools/stm32-mcu-eval-tools/stm32-mcu-nucleo/nucleo-l432kc.html
[Solo]: https://solokeys.com/
[Blue-pill]: http://web.archive.org/web/20230317010201/https://stm32duinoforum.com/forum/wiki_subdomain/index_title_Blue_Pill.html
[Nucleo-F103RB]: http://www.st.com/en/evaluation-tools/nucleo-f103rb.html
[Nucleo-F042K6]: http://www.st.com/en/evaluation-tools/nucleo-f042k6.html

### Texas Instruments

- [`tm4c123x-hal`](https://github.com/rust-embedded-community/tm4c-hal/)
- [`embassy-mspm0`](https://github.com/embassy-rs/embassy/tree/main/embassy-mspm0)
  - Embassy HAL implementation for all MSPM0 (and MSPS003) microcontrollers.

### MSP430

- [`msp430fr2x5x-hal`](https://crates.io/crates/msp430fr2x5x-hal)
  - HAL implementation for the MSP430FR2x5x family of microcontrollers

### Espressif

- [`esp-hal`](https://github.com/esp-rs/esp-hal) - [![crates.io](https://img.shields.io/crates/v/esp-hal.svg)](https://crates.io/crates/esp-hal)
  - A `no_std` Hardware Abstraction Layer for Espressif microcontrollers, officially supported by Espressif
- [`esp-idf-hal`](https://github.com/esp-rs/esp-idf-hal) - [![crates.io](https://img.shields.io/crates/v/esp-idf-hal.svg)](https://crates.io/crates/esp-idf-hal)
  - A `std` embedded-hal implementation for Espressif microcontrollers built on top of ESP-IDF, fully supported by the community

### Silicon Labs

- [`tomu-hal`](https://github.com/fudanchii/imtomu-rs)
  - HAL implementation targeted for [Tomu] USB board with EFM32HG309F64 ARMv6-M core. Has support to configure [tomu bootloader] directly from an application via the `toboot_config` macro.

[Tomu]: https://tomu.im/
[tomu bootloader]: https://github.com/im-tomu/tomu-bootloader

### XMC

- [`xmc1100-hal`](https://github.com/david-sawatzke/xmc1100-hal) - [![crates.io](https://img.shields.io/crates/v/xmc1100-hal.svg)](https://crates.io/crates/xmc1100-hal)
- [`xmc4-hal`](https://github.com/xmc-rs/xmc4-hal) - [![crates.io](https://img.shields.io/crates/v/xmc4-hal.svg)](https://crates.io/crates/xmc4-hal)

### GigaDevice

- [`gd32vf103xx-hal`](https://github.com/riscv-rust/gd32vf103xx-hal) - [![crates.io](https://img.shields.io/crates/v/gd32vf103xx-hal.svg)](https://crates.io/crates/gd32vf103xx-hal)
  - HAL for GD32VF103xx microcontrollers
- [`gd32vf103-hal`](https://github.com/luojia65/gd32vf103-hal) - [![crates.io](https://img.shields.io/crates/v/gd32vf103-hal.svg)](https://crates.io/crates/gd32vf103-hal)
  - (WIP) Hardware abstract layer (HAL) for the GD32VF103 RISC-V microcontroller
- [`gd32f1x0-hal`](https://crates.io/crates/gd32f1x0-hal) - [![crates.io](https://img.shields.io/crates/v/gd32f1x0-hal.svg)](https://crates.io/crates/gd32f1x0-hal)
  - HAL implementation for GD32F1x0 microcontrollers

### Vorago

- [`va108xx-hal`](https://egit.irs.uni-stuttgart.de/rust/va108xx-rs) - [![crates.io](https://img.shields.io/crates/v/va108xx-hal.svg)](https://crates.io/crates/va108xx-hal)
  - [Blogpost](https://robamu.github.io/post/rust-ecosystem/)

### AMD

- [`zynq7000-hal`](https://github.com/us-irs/zynq7000-rs/tree/main/firmware/zynq7000-hal) - [![crates.io](https://img.shields.io/crates/v/zynq7000-hal.svg)](https://crates.io/crates/zynq7000-hal)

### Renesas

- [`da14531-hal`](https://crates.io/crates/da14531-hal) HAL crate for DA14531 Ultra-Low Power BT 5.1 System-on-Chip - [![crates.io](https://img.shields.io/crates/v/da14531-hal.svg)](https://crates.io/crates/da14531-hal)

### StarFive

- [`j71xx-hal`](https://crates.io/crates/jh71xx-hal) - HAL crate for StarFive [JH71xx](https://www.starfivetech.com/en/site/soc) MCUs - [![crates.io](https://img.shields.io/crates/v/jh71xx-hal.svg)](https://crates.io/crates/jh71xx-hal)

## Architecture support crates

Crates tailored for general CPU architectures.

### ARM

- [`cortex-a`](https://github.com/andre-richter/cortex-a) Low-level access to Cortex-A processors (early state) - [![crates.io](https://img.shields.io/crates/v/cortex-a.svg)](https://crates.io/crates/cortex-a)
- [`cortex-m`](https://github.com/japaric/cortex-m) Low-level access to Cortex-M processors - [![crates.io](https://img.shields.io/crates/v/cortex-m.svg)](https://crates.io/crates/cortex-m)

### RISC-V

- [`riscv`](https://github.com/rust-embedded/riscv) Low-level access to RISC-V processors - [![crates.io](https://img.shields.io/crates/v/riscv.svg)](https://crates.io/crates/riscv)

### MIPS

- [`mips`](https://github.com/Harry-Chen/rust-mips) Low-level access to MIPS32 processors - [![crates.io](https://img.shields.io/crates/v/mips.svg)](https://crates.io/crates/mips)
- [`mips-mcu`](https://github.com/kiffie/pic32-rs/tree/master/mips-mcu) Low-level access to MIPS MCU cores - [![crates.io](https://img.shields.io/crates/v/mips-mcu.svg)](https://crates.io/crates/mips-mcu)

## Board support crates

Crates tailored for specific boards.

[STM32F3DISCOVERY]: http://www.st.com/en/evaluation-tools/stm32f3discovery.html
[STM32F4DISCOVERY]: https://www.st.com/en/evaluation-tools/stm32f4discovery.html
[STM32F429DISCOVERY]: https://www.st.com/en/evaluation-tools/32f429idiscovery.html
[atsamd-rs]: https://github.com/atsamd-rs/atsamd
[atsamd-rs tier 1 support]: https://github.com/atsamd-rs/atsamd#how-to-use-a-bsp-ie-getting-started-writing-your-own-code
[atsamd-rs tier 2 support]: https://github.com/atsamd-rs/atsamd#how-to-use-a-bsp-ie-getting-started-writing-your-own-code

### 1BitSquared

- [`onebitsy`](https://crates.io/crates/onebitsy) - Board support crate for the [1bitsy] STM32F4-based board - [![crates.io](https://img.shields.io/crates/v/onebitsy.svg)](https://crates.io/crates/onebitsy)

[1bitsy]: https://1bitsy.org/

### Adafruit

- [`metro_m0`](https://crates.io/crates/metro_m0) - Board support for the [Metro M0 board] in the [atsamd-rs] repo. It is an [atsamd-rs tier 1 support] board. [![crates.io](https://img.shields.io/crates/v/metro_m0.svg)](https://crates.io/crates/metro_m0)
- [`metro_m4`](https://crates.io/crates/metro_m4) - Board support for the [Metro M4 board] in the [atsamd-rs] repo. It is an [atsamd-rs tier 1 support] board. [![crates.io](https://img.shields.io/crates/v/metro_m4.svg)](https://crates.io/crates/metro_m4)
- [`pyportal`](https://crates.io/crates/pyportal) - Board support for the [PyPortal board] in the [atsamd-rs] repo. It is an [atsamd-rs tier 2 support] board. [![crates.io](https://img.shields.io/crates/v/pyportal.svg)](https://crates.io/crates/pyportal)
- [`pygamer`](https://crates.io/crates/pygamer) - Board support for the [PyGamer board] in the [atsamd-rs] repo. It is an [atsamd-rs tier 1 support] board. [![crates.io](https://img.shields.io/crates/v/pygamer.svg)](https://crates.io/crates/pygamer)
- [`trellis_m4`](https://crates.io/crates/trellis_m4) - Board support for the [NeoTrellis M4 board] in the [atsamd-rs] repo. It is an [atsamd-rs tier 2 support] board. [![crates.io](https://img.shields.io/crates/v/trellis_m4.svg)](https://crates.io/crates/trellis_m4)
- [`feather-f405`](https://crates.io/crates/feather-f405) - Board support for the [Feather STM32F405 Express]. [![crates.io](https://img.shields.io/crates/v/feather-f405.svg)](https://crates.io/crates/feather-f405)
- [`feather_m0`](https://crates.io/crates/feather_m0) - Board support for the [Feather M0 board], and some variants in the [atsamd-rs] repo. It is an [atsamd-rs tier 1 support] board. [![crates.io](https://img.shields.io/crates/v/feather_m0.svg)](https://crates.io/crates/feather_m0)
- [`feather_m4`](https://crates.io/crates/feather_m4) - Board support for the [Feather M4 board] in the [atsamd-rs] repo. It is an [atsamd-rs tier 1 support] board. [![crates.io](https://img.shields.io/crates/v/feather_m4.svg)](https://crates.io/crates/feather_m4)
- [`circuit_playground_express`](https://crates.io/crates/circuit_playground_express) - Board support for the [Circuit Playground Express board] in the [atsamd-rs] repo. It is an [atsamd-rs tier 2 support] board. [![crates.io](https://img.shields.io/crates/v/circuit_playground_express.svg)](https://crates.io/crates/circuit_playground_express)
- [`edgebadge`](https://crates.io/crates/edgebadge) - Board support for the [EdgeBadge board] in the [atsamd-rs] repo. It is an [atsamd-rs tier 2 support] board. [![crates.io](https://img.shields.io/crates/v/edgebadge.svg)](https://crates.io/crates/edgebadge)
- [`gemma_m0`](https://crates.io/crates/gemma_m0) - Board support for the [Gemma M0 board] in the [atsamd-rs] repo. It is an [atsamd-rs tier 2 support] board. [![crates.io](https://img.shields.io/crates/v/gemma_m0.svg)](https://crates.io/crates/gemma_m0)
- [`itsybitsy_m0`](https://crates.io/crates/itsybitsy_m0) - Board support for the [ItsyBitsy M0 board] in the [atsamd-rs] repo. It is an [atsamd-rs tier 2 support] board. [![crates.io](https://img.shields.io/crates/v/itsybitsy_m0.svg)](https://crates.io/crates/itsybitsy_m0)
- [`itsybitsy_m4`](https://crates.io/crates/itsybitsy_m4) - Board support for the [ItsyBitsy M4 Express board] in the [atsamd-rs] repo. It is an [atsamd-rs tier 2 support] board. [![crates.io](https://img.shields.io/crates/v/itsybitsy_m4.svg)](https://crates.io/crates/itsybitsy_m4)
- [`trinket_m0`](https://crates.io/crates/trinket_m0) - Board support for the [Trinket M0 board] in the [atsamd-rs] repo. It is an [atsamd-rs tier 2 support] board. [![crates.io](https://img.shields.io/crates/v/trinket_m0.svg)](https://crates.io/crates/trinket_m0)
- [`neo_trinkey`](https://crates.io/crates/neo_trinkey) - Board support for the [neo trinkey board] in the [atsamd-rs] repo. It is an [atsamd-rs tier 2 support] board. [![crates.io](https://img.shields.io/crates/v/neo_trinkey.svg)](https://crates.io/crates/neo_trinkey)
- [`neokey_trinkey`](https://crates.io/crates/neokey_trinkey) - Board support for the [neokey trinkey board] in the [atsamd-rs] repo. It is an [atsamd-rs tier 2 support] board. [![crates.io](https://img.shields.io/crates/v/neokey_trinkey.svg)](https://crates.io/crates/neokey_trinkey)
- [`grand_central_m4`](https://crates.io/crates/grand_central_m4) - Board support for the [grand central m4 board] in the [atsamd-rs] repo. It is an [atsamd-rs tier 2 support] board. [![crates.io](https://img.shields.io/crates/v/grand_central_m4.svg)](https://crates.io/crates/grand_central_m4)
- [`qt_py_m0`](https://crates.io/crates/qt_py_m0) - Board support for the [QT Py board] in the [atsamd-rs] repo. It is an [atsamd-rs tier 2 support] board. [![crates.io](https://img.shields.io/crates/v/qt_py_m0.svg)](https://crates.io/crates/qt_py_m0)
- [`adafruit-feather-rp2040`](https://github.com/rp-rs/rp-hal-boards) - Board Support Crate for the [Adafruit Feather RP2040] [![crates.io](https://img.shields.io/crates/v/adafruit-feather-rp2040.svg)](https://crates.io/crates/adafruit-feather-rp2040)
- [`adafruit-itsy-bitsy-rp2040`](https://github.com/rp-rs/rp-hal-boards) - Board Support Crate for the [Adafruit ItsyBitsy RP2040] [![crates.io](https://img.shields.io/crates/v/adafruit-itsy-bitsy-rp2040.svg)](https://crates.io/crates/adafruit-itsy-bitsy-rp2040)
- [`adafruit-kb2040`](https://github.com/rp-rs/rp-hal-boards) - Board Support Crate for the [Adafruit KB2040] [![crates.io](https://img.shields.io/crates/v/adafruit-kb2040.svg)](https://crates.io/crates/adafruit-kb2040)
- [`adafruit-macropad`](https://github.com/rp-rs/rp-hal-boards) - Board Support Crate for the [Adafruit Macropad] [![crates.io](https://img.shields.io/crates/v/adafruit-macropad.svg)](https://crates.io/crates/adafruit-macropad)
- [`adafruit-qt-py-rp2040`](https://github.com/rp-rs/rp-hal-boards) - Board Support Crate for the [Adafruit QT Py RP2040] [![crates.io](https://img.shields.io/crates/v/adafruit-qt-py-rp2040.svg)](https://crates.io/crates/adafruit-qt-py-rp2040)

[Metro M0 board]: https://www.adafruit.com/product/3505
[Metro M4 board]: https://www.adafruit.com/product/3382
[PyPortal board]: https://www.adafruit.com/product/4116
[PyGamer board]: https://www.adafruit.com/product/4242
[NeoTrellis M4 board]: https://www.adafruit.com/product/3938
[Feather STM32F405 Express]: https://www.adafruit.com/product/4382
[Feather M0 board]: https://www.adafruit.com/product/2772
[Feather M4 board]: https://www.adafruit.com/product/3857
[Circuit Playground Express board]: https://www.adafruit.com/product/3333
[EdgeBadge board]: https://www.adafruit.com/product/4400
[Gemma M0 board]: https://www.adafruit.com/product/3501
[ItsyBitsy M0 board]: https://www.adafruit.com/product/3727
[ItsyBitsy M4 Express board]: https://www.adafruit.com/product/3800
[Trinket M0 board]: https://www.adafruit.com/product/3500
[neo trinkey board]: https://www.adafruit.com/product/4870
[neokey trinkey board]: https://www.adafruit.com/product/5020
[grand central m4 board]: https://www.adafruit.com/product/4064
[QT Py board]: https://www.adafruit.com/product/4600
[Adafruit Feather RP2040]: https://www.adafruit.com/product/4884
[Adafruit ItsyBitsy RP2040]: https://www.adafruit.com/product/4888
[Adafruit KB2040]: https://www.adafruit.com/product/5302
[Adafruit Macropad]: https://www.adafruit.com/product/5128
[Adafruit QT Py RP2040]: https://www.adafruit.com/product/4900

### Arduino

- [`avr-hal`](https://github.com/Rahix/avr-hal) - Board support crate for several AVR-based boards including the Arduino Uno and the Arduino Leonardo
- [`arduino_mkr1000`](https://crates.io/crates/arduino_mkr1000) - Board support for the [MKR 1000 WiFi board](https://docs.arduino.cc/hardware/mkr-1000-wifi) in the [atsamd-rs] repo. It is an [atsamd-rs tier 2 support] board. [![crates.io](https://img.shields.io/crates/v/arduino_mkr1000.svg)](https://crates.io/crates/arduino_mkr1000)
- [`arduino_mkrvidor4000`](https://crates.io/crates/arduino_mkrvidor4000) - Board support for the [MKR Vidor board](https://store.arduino.cc/usa/mkr-vidor-4000) in the [atsamd-rs] repo. It is an [atsamd-rs tier 2 support] board. [![crates.io](https://img.shields.io/crates/v/arduino_mkrvidor4000.svg)](https://crates.io/crates/arduino_mkrvidor4000)

<!-- opensource-radar:truncated -->
