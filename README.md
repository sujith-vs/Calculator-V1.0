📟 Calculator App — Version 1.0

A clean and functional basic calculator built using HTML, CSS, and JavaScript.
This is Version 1.0 of the project, focused on core functionality and a simple UI.

🚀 Features (V1)

✔ Add, Subtract, Multiply, Divide
✔ Decimal (.) support
✔ Continuous operations (e.g., 5 + 4 + 3)
✔ Disabled input field to prevent manual editing
✔ Clear (C) button to reset the calculator
✔ Live expression display using two header lines
✔ Button click animations (hover + active effect)
✔ Responsive grid layout for buttons
✔ Neat UI with header and footer

🧠 How It Works

This version uses a value + operator system, not eval().
The logic works like this:

User enters numbers → stored as first value

User presses an operator → operator stored

User enters second value → stored

Pressing equal computes the result

Continuous operations update firstVal on each step

This creates a calculator engine without using the eval() method.

V2 will move to expression-based evaluation.

📁 Project Structure
calculator/
├── calculator.html     # App structure
├── calculator.css      # Styling and layout
├── calculator.js       # Core calculator logic
└── bodyBg.png          # Background image

🖥️ Tech Stack

HTML5

CSS3 (Flexbox + CSS Grid)

Vanilla JavaScript

No frameworks or libraries used.

🌟 UI Preview (Description)

The calculator UI includes:

A header titled “Calculator”

A main calculator box with:

Two small display lines (previous value + current value)

A disabled input field showing results

A 5-column button grid: numbers, operators, equal, dot, clear

A footer showing the version

Simple, clean, readable interface.

📦 Version

Version 1.0 — Basic Calculator Complete
Upcoming Version (V2) will include:

Expression-based evaluation (eval())

Backspace support

Improved UI

Responsive layout

Keyboard support

🔧 How to Run

Just open the calculator.html file in your browser:

Right Click → Open With → Chrome / Firefox / Edge


No installation required.

👨‍💻 Author

Sujith V
Version 1 of the Calculator Project.

⭐ Future Plans (Version 2.0)

Use eval() for expression-based calculation

Add backspace

Add parentheses ( )

Better error handling

More animations

Modern UI redesign

Possibly a scientific mode
