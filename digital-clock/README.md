# ⏰ Digital Clock - Multiple Time Zones

A beautiful, responsive web application that displays the current time across different time zones around the world.

## 🎯 Features

- 🌍 **12 Time Zones**: New York, London, Tokyo, Sydney, Dubai, Singapore, Hong Kong, Mumbai, São Paulo, Moscow, Los Angeles, Bangkok
- ⏰ **Real-time Updates**: Clock updates every second with accurate time
- 📅 **Date Display**: Shows day, month, date, and year for each timezone
- 🔢 **Format Toggle**: Switch between 12-hour and 24-hour format
- 🌐 **UTC Offset**: Displays UTC offset for each timezone
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- ✨ **Modern UI**: Beautiful gradient background with smooth animations
- 🎨 **Interactive**: Add/remove timezone clocks dynamically

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Navigate to the project directory:
```bash
cd digital-clock
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## 🏗️ Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📂 Project Structure

```
digital-clock/
├── src/
│   ├── components/
│   │   └── Clock/
│   │       ├── DigitalClock.tsx    # Main clock component
│   │       └── DigitalClock.css    # Clock styles
│   ├── App.tsx                      # Main app component
│   ├── App.css                      # App styles
│   ├── index.tsx                    # React entry point
│   └── index.css                    # Global styles
├── index.html                       # HTML template
├── vite.config.ts                   # Vite configuration
├── tsconfig.json                    # TypeScript config
├── package.json                     # Dependencies
└── README.md                        # This file
```

## 🎨 Design Features

### Color Scheme
- **Primary Gradient**: #667eea to #764ba2 (Purple)
- **Accent Color**: #667eea (Blue)
- **Background**: White cards with subtle shadows

### Animations
- Slide-down header animation
- Card hover effects with elevation
- Smooth transitions and transforms
- Add zone button animations

### Responsive Breakpoints
- Desktop: Full 3-column grid
- Tablet (768px): Flexible columns
- Mobile (480px): Single column layout

## 💻 Usage

1. **View Default Time Zones**: The app displays New York, London, and Tokyo by default
2. **Add Time Zones**: Click any button in the "Add More Time Zones" section
3. **Remove Time Zones**: Click the ✕ button on any card (keep at least one)
4. **Toggle 24-Hour Format**: Use the checkbox in the controls

## 🔧 Technologies Used

- **React 18**: UI framework
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **CSS3**: Modern styling with gradients and animations
- **Intl API**: For locale-aware time formatting

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## 🎓 What You'll Learn

- React hooks (useState, useEffect)
- Real-time updates with intervals
- Timezone handling with Intl API
- Responsive CSS Grid layouts
- TypeScript interfaces and types
- Vite project setup
- CSS animations and transitions

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to submit pull requests or open issues for suggestions.

## 👤 Author

Created by **Riskiandikayt**

## ⭐ Support

If you find this project useful, please give it a star!

---

**Enjoy tracking time across the globe! 🌍⏰**