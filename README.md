# CarDealerApp

<img src="/public/filter_page.png"/>
<img src="/public/results_page.png"/>

## Overview

CarDealerApp is a modern web application built with Next.js and Tailwind CSS. It allows users to filter and view vehicle models based on vehicle type and model year. The application utilizes data from the National Highway Traffic Safety Administration (NHTSA) API to provide detailed vehicle information.

## Features

- **Filter Vehicles:** Users can filter vehicles by type and model year.
- **View Vehicle Models:** Displays a list of vehicle models based on the selected type and year.
- **Responsive Design:** Fully responsive design using Tailwind CSS for a seamless experience across devices.

## Technologies

- **Next.js:** A React framework for building server-rendered or statically-exported applications.
- **Tailwind CSS:** A utility-first CSS framework for creating custom designs without leaving your HTML.
- **TypeScript:** A strongly typed programming language that builds on JavaScript, providing better tooling at any scale.
- **React Suspense:** A feature for handling asynchronous rendering in React, improving the user experience by managing loading states.

## Setup

### Prerequisites

- Node.js (v18.17.0 or higher)
- npm (v8.5.1 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Cunegundess/CarDealerApp.git
   cd CarDealerApp
   ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a .env.local file in the root directory of the project and add the following environment variables:
    ```bash
    NEXT_PUBLIC_VEHICLE_MODEL_ENDPOINT=https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json
    NEXT_PUBLIC_VEHICLE_TYPES_ENDPOINT=https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json
    ```

### Running the Development Server

- Start the development server with:
    ```bash
    npm run dev
    ```
Open http://localhost:3000 in your browser to view the application.

### Linting
- To run ESLint and check for code quality issues, use:
    ```bash
    npm run lint
    ```

### Building for Production
- To build the application for production, use:
   ```bash
   npm run build
   ```
This command creates an optimized production build of your application, which can be deployed to a hosting service.

### Running Production Build Locally
- To start the production build locally after running the build command:
   ```bash
   npm start
   ```

### Folder Structure
- app/: Contains the application logic and pages, including dynamic routes like result/[makeId]/[year].
- components/: Contains reusable React components.
- public/: Static assets such as images.
- node_modules/: Directory where project dependencies are installed.

### Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature).
3. Commit your changes (git commit -am 'Add new feature').
4. Push to the branch (git push origin feature/your-feature).
5. Open a pull request.

### License
This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgements
Next.js - The React framework used for building the application.
Tailwind CSS - The CSS framework used for styling.
NHTSA API - Provides vehicle data.
React Suspense - Used for handling asynchronous rendering and improving user experience.