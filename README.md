# Apple-Inspired Landing Page (React)

A responsive front-end project built with React, inspired by the design and structure of the Apple homepage. It features modular components, CSS Modules for styling, and dynamic content integration using the YouTube Data API.

## ✨ Key Features

- **Modular Component Structure:** Organized into reusable components like `Header`, `Footer`, `Alert`, and several content sections (`FirstSection` through `SixthSection`).
- **Responsive Design:** Utilizes Bootstrap for grid and utility classes, ensuring a consistent experience across devices.
- **Dynamic Footer Accordion:** The footer links collapse into an accordion on smaller screens for better mobile navigation.
- **Latest YouTube Videos:** Integrates with the YouTube Data API to fetch and display the latest videos from a specific channel.
- **Styling:** Uses a combination of **Bootstrap** and **CSS Modules** for component-specific, scoped styling.

## 🛠️ Tech Stack

- **Framework:** React
- **Bundler:** Vite (Inferred)
- **Styling:** CSS Modules, Bootstrap 5
- **External Libraries:** jQuery (for footer accordion), Axios (for API calls)

## 📦 Installation & Setup

### Prerequisites

You will need a **YouTube Data API v3 Key** to fetch video data.

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/DesalegnTamirat/appleReplica-react.git
    cd appleReplica-react
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up Environment Variables:**
    Create a file named `.env` in the project root directory and add your YouTube API Key.

    ```
    # .env
    VITE_YOUTUBE_API_KEY="YOUR_YOUTUBE_API_KEY"
    ```

4.  **Run the project:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will typically be available at `http://localhost:5173`.
