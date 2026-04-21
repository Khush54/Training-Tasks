# 📝 Real-Time Character Counter & Text Analyzer

## 🎯 Project Objective
- Building a responsive React-based text analysis tool that provides instant feedback. This project simulates modern social media input fields (like Twitter or LinkedIn) by tracking character limits, word counts, and providing real-time UI warnings.

---

## 🛠️ Core Features
- Live Text Analysis: Instant calculation of words and characters as you type.
- Smart Focus: Automatically focuses on the textarea upon page load using useRef.
- Dynamic Warnings:
    - Caution (Yellow): UI updates when 160         characters (80% of limit) are reached.
    - Danger (Red): UI alerts when the 200-character limit is exceeded.
- Efficient Reset: A 'Clear Text' button that resets state and uses useRef to directly manipulate the DOM for field reset and focus.
- Live Preview: Dedicated section to view your formatted text in real-time.

---

## 🧪 Technical Implementation (Hooks Used)
- useState: To manage the input text and the analysis results object.
- useRef: Used for Auto-focus on mount, Used to Reset the textarea value directly in the DOM for a cleaner UI flow.
- useEffect: Monitors the text state to trigger the analysis function automatically.
- useCallback: Memoizes the analysis logic to ensure the function is not recreated on every re-render, improving performance.

---

## 📁 Component Architecture
- App.jsx: The main controller managing state and logic.
- TextInput.jsx: Handles the input area, refs, and clear functionality.
- AnalysisPanel.jsx: Displays metrics (Chars, Words, Status).
- Warning.jsx: Renders conditional messages based on character count.
- Preview.jsx: Shows the live text preview.

---

## 💡 Key Learnings
- Effectively managing complex states and objects in React.
- Understanding the lifecycle of hooks like useEffect and useCallback.
- Implementing Ref Lifting to control child DOM elements from a parent component.
- Designing responsive and user-friendly CSS layouts using Flexbox and Grid.