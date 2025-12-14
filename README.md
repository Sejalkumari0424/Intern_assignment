# Battery Analytics Dashboard

A comprehensive React-based dashboard for analyzing battery performance metrics, health monitoring, and charging insights. This dashboard provides real-time visualization of battery data including cycle statistics, temperature distribution, performance metrics, and long-term trends.

## 🚀 Live Demo

**Production URL:** [https://assignment-6xsyvybg-sejalkumari0424s-projects.vercel.app](https://assignment-6xsyvybg-sejalkumari0424s-projects.vercel.app)

## 📋 Features

- **Cycle Navigation**: Navigate through different battery cycles
- **Cycle Statistics**: Detailed statistics for each cycle
- **Performance Metrics**: Real-time performance monitoring
- **Temperature Distribution**: Visual representation of temperature patterns
- **Battery Health**: Comprehensive health monitoring and analysis
- **Alerts & Safety**: Safety alerts and notifications
- **Charging Insights**: Detailed charging pattern analysis
- **Long-Term Trends**: Historical data visualization and trend analysis

## 🛠️ Tech Stack

- **React 18.2.0** - UI framework
- **TypeScript** - Type safety
- **Vite 5.0.0** - Build tool and dev server
- **Recharts 2.10.0** - Data visualization
- **Axios 1.6.0** - HTTP client
- **date-fns 2.30.0** - Date utilities

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sejalkumari0424/Intern_assignment.git
   cd Intern_assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🏃 Running Locally

### Development Mode

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
Intern_assignment/
├── src/
│   ├── components/          # React components
│   │   ├── AlertsSafety.tsx
│   │   ├── BatteryHealth.tsx
│   │   ├── ChargingInsights.tsx
│   │   ├── CycleNavigation.tsx
│   │   ├── CycleStatistics.tsx
│   │   ├── LongTermTrends.tsx
│   │   ├── PerformanceMetrics.tsx
│   │   └── TemperatureDistribution.tsx
│   ├── services/            # API services
│   │   └── api.ts
│   ├── styles/              # CSS styles
│   │   └── App.css
│   ├── App.tsx              # Main App component
│   ├── main.tsx             # Entry point
│   └── types.ts             # TypeScript type definitions
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.js           # Vite configuration
├── vercel.json              # Vercel deployment config
└── netlify.toml             # Netlify deployment config
```

## 🌐 Deployment

### Vercel

The project is configured for automatic deployment on Vercel:

1. Push your code to the `main` branch
2. Vercel will automatically build and deploy your application
3. Your live URL will be available in the Vercel dashboard

**Deployment Configuration:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Framework: Vite

### Netlify

The project is also configured for Netlify deployment:

1. Connect your GitHub repository to Netlify
2. Netlify will automatically detect the build settings
3. Deploy with a single click

**Deployment Configuration:**
- Build Command: `npm run build`
- Publish Directory: `dist`

## 📝 GitHub Repository

**Public Repository:** [https://github.com/Sejalkumari0424/Intern_assignment](https://github.com/Sejalkumari0424/Intern_assignment)

This is a public repository containing:
- Complete source code
- Configuration files
- Documentation
- Instructions to run locally

## 🔧 Configuration

### Environment Variables

No environment variables are required for local development. The API endpoints are configured in `src/services/api.ts`.

### Allowed IMEIs

The dashboard supports the following IMEI numbers:
- `865044073967657`
- `865044073949366`

## 📄 License

This project is part of an assignment submission.

## 👤 Author

**Sejal Kumari**

---

## 🎯 Quick Start

```bash
# Clone and install
git clone https://github.com/Sejalkumari0424/Intern_assignment.git
cd Intern_assignment
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

For more details, visit the [GitHub repository](https://github.com/Sejalkumari0424/Intern_assignment).
