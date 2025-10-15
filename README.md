# loopTechEval

This repository contains the test suite for the 2025 Loop Technical Evaluation. The tests are built using **Playwright** and **TypeScript**. The test suite automatically navigates to the designated webpage and verifies various UI elements.

---

## ⚙️ Prerequisites

To successfully run the tests, you must have the following software/packages installed on your system:

1.  **Node.js** (v20 LTS version recommended)
2.  **npm** (Node Package Manager, or **Yarn**)

### Installation Steps

1.  **Clone the repository and navigate to it:**
    ```bash
    git clone https://[https://github.com/faraz-an/loopTechEval.git](https://github.com/faraz-an/loopTechEval.git)
    cd loopTechEval
    ```
2.  **Install dependencies:** This command installs all required packages, including **Playwright itself** and its browser binaries.
    ```bash
    npm install
    # or
    yarn install
    ```

---

## 🧪 Running Tests (Playwright)

The tests are **data-driven**, pulling all task, column, and tag information from the `src/data/scenarios.json` file. 

### 1. Default (Headless) Run

To run the tests using the browser in the background without a visible UI, execute the following command:

```bash
npx playwright test