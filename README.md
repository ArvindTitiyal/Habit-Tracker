# Habit Tracker

Habit Tracker is a web application that helps you manage and track your daily habits. Built with React, Redux, and React-Router, it allows users to add, view, and update their habits for the week.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- Add new habits
- View habits in a detailed list
- Mark habits as done, not done, or none
- View a weekly summary of habits
- Responsive design for better user experience
- Notifications for habit status changes using React Toastify

## Installation

To get started with the Habit Tracker, follow these steps:

1. Clone the repository:

    ```sh
    git clone https://github.com/ArvindTitiyal/Habit-Tracker.git
    cd Habit-Tracke
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Start the development server:

    ```sh
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000` to see the app in action.

## Usage

### Adding a Habit

1. Click on the "Add Habits" button in the top right corner.
2. Enter the name of the habit in the input field.
3. Click "Save" to add the habit to the list.

### Viewing and Updating Habits

1. The main view displays all habits for the week.
2. Click on the "Week View" button to see the habit's status for each day of the week.
3. Click on the icons to mark a habit as done, not done, or none.

### Notifications

- Notifications will appear when you add, delete, or update a habit, providing instant feedback on your actions.

## Deployment

To deploy the app using GitHub Pages:

1. Install the `gh-pages` package:

    ```sh
    npm install gh-pages --save-dev
    ```

2. Update the `package.json` file to include the following scripts:

    ```json
    "homepage": "https://your-username.github.io/your-repo-name",
    "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
    }
    ```

3. Deploy the app:

    ```sh
    npm run deploy
    ```

4. Your app should now be accessible at `https://arvindtitiyal.github.io/Habit-Tracker`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

1. Fork the repository.
2. Create a new branch:

    ```sh
    git checkout -b feature/your-feature-name
    ```

3. Make your changes.
4. Commit your changes:

    ```sh
    git commit -m 'Add some feature'
    ```

5. Push to the branch:

    ```sh
    git push origin feature/your-feature-name
    ```

6. Open a pull request.


## Contact

If you have any questions or feedback, feel free to reach out:

- **Email**: your-email@example.com
- **GitHub**: [ArvindTitiyal](https://github.com/ArvindTitiyal)

---

Thank you for using Habit Tracker! Happy habit tracking!
