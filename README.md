# Web-Based Arduino Simulator (Prototype)
### FOSSEE Semester Internship 2026 - Screening Task

## Project Overview
This is a web-based prototype I built for the "Open Source Hardware" screening task. The goal was to create a simulator that mimics the behavior of an Arduino Uno board directly in the browser.

I focused on building a clean, responsive UI where users can interact with the board (toggling an LED) and see the corresponding C++ code update in real-time. It’s designed to show how React state can simulate hardware logic without needing a heavy backend.

**👉 Live Demo:** [(https://fossee-arduino-p3q47fwvq-alis-projects-eb70b3f4.vercel.app/)]

---

## Features
* **Interactive Board:** You can click the "Push Button" on the UI to actually turn the LED on/off on the board image.
* **Live Code View:** The C++ code panel isn't static—it updates automatically to match the state of the board (showing `HIGH` or `LOW` logic).
* **Serial Monitor:** I added a log console that mimics the Arduino Serial Monitor (9600 baud), showing timestamped logs when the button is pressed.
* **Architecture:** The project is built with components, making it easy to add more sensors or parts later.
  <img width="862" height="649" alt="image" src="https://github.com/user-attachments/assets/6efa5a9f-3585-4fae-ade8-c48c8a0b5fbb" />
  <img width="784" height="641" alt="image" src="https://github.com/user-attachments/assets/80bdff2c-6a49-4d8c-b7d2-6daa5360aef1" />


## Tech Stack
* **Frontend:** React.js + Vite (Fast and lightweight)
* **Styling:** CSS3 (Custom styling for the "Dark Mode" IDE look)
* **Deployment:** Vercel

## How to Run This Locally
If you want to test the code on your own machine:

1.  **Clone the repo:**
    ```bash
    git clone [(https://github.com/ali0786mehdi/fossee-arduino-sim.git)
    ```
2.  **Go into the folder:**
    ```bash
    cd fossee-arduino-sim
    ```
3.  **Install the packages:**
    ```bash
    npm install
    ```
4.  **Run the app:**
    ```bash
    npm run dev
    ```

## Why I Used React
I chose React for this task because hardware simulators need to feel instant. If I used a traditional backend for every button click, there would be lag. By using React's state management, the LED responds instantly—just like real hardware. It also keeps the code modular, so adding new components (like sensors) in the future would be straightforward.

---
*Submitted by ALI MEHDI MIRZA*
