# BrandPeek - Brand Discovery App

A polished React Native mobile app built with Expo for discovering amazing brands and their stories.

## 🚀 Features

- **Modern UI**: Clean design inspired by nurdd.club with dark gradients and subtle shadows
- **Brand Discovery**: Browse top brands with beautiful card layouts
- **Detailed Views**: Rich brand profiles with logos, descriptions, tags, and website links
- **Follow System**: Local follow/unfollow functionality for brands
- **Responsive Design**: Optimized for various phone screen sizes
- **Accessibility**: Full accessibility support with proper labels and roles

## 🛠 Tech Stack

- **Framework**: Expo SDK 49
- **Navigation**: React Navigation 6 (Stack Navigator)
- **Styling**: React Native with Expo Linear Gradient
- **API**: Axios for HTTP requests
- **Fonts**: Inter font family
- **Icons**: Expo Vector Icons

## 📱 Backend & API

This app uses **MockAPI** (mockapi.io) as the backend service for demo purposes.

**API Endpoints:**
- `GET /brands` - Fetch all brands
- `GET /brands/:id` - Fetch brand by ID

## 🏗 Project Structure

```
brandpeek/
├── App.js                 # Main app entry point
├── navigation/            # Navigation configuration
│   └── index.js
├── screens/              # Screen components
│   ├── HomeScreen.js
│   └── BrandDetailScreen.js
├── components/           # Reusable components
│   ├── BrandCard.js
│   ├── Button.js
│   ├── Header.js
│   ├── LoadingPlaceholder.js
│   ├── TagList.js
│   └── ErrorMessage.js
├── services/             # API services
│   └── api.js
├── constants/            # App constants
│   ├── colors.js
│   └── routes.js
├── utils/                # Utility functions
│   └── format.js
├── assets/               # Static assets
│   └── fonts/
├── mockapi/              # Mock data
│   └── brands.json
└── README.md
```

## 🔧 Setup & Installation

### Prerequisites
- Node.js (v16 or later)
- Expo CLI installed globally: `npm install -g expo-cli`
- Expo Go app on your mobile device

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd brandpeek
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Setup MockAPI Backend**
   - Go to [mockapi.io](https://mockapi.io)
   - Create a new project
   - Create a resource called `brands`
   - Copy the sample data from `mockapi/brands.json` and paste it into your MockAPI project
   - Update the `BASE_URL` in `services/api.js` with your MockAPI project URL

4. **Start the development server**
   ```bash
   npm start
   # or
   expo start
   ```

5. **Open in Expo Go**
   - Scan the QR code with your phone using the Expo Go app
   - Or use the simulator/emulator options

## 📲 Running on Devices

### Expo Go (Recommended for development)
1. Install Expo Go from App Store (iOS) or Google Play Store (Android)
2. Scan the QR code from the terminal after running `expo start`

### Building APK/IPA

#### Android APK with EAS Build
1. Install EAS CLI: `npm install -g @expo/eas-cli`
2. Login to Expo: `eas login`
3. Configure EAS: `eas build:configure`
4. Build APK: `eas build -p android --profile preview`

#### iOS Build
```bash
eas build -p ios --profile preview
```

## 🎨 Design System

### Color Palette
- **Home Gradient**: Deep navy (#0B0F19) to electric blue (#001F4D)
- **Detail Gradient**: Dark blue (#001F4D) to purple (#4B0082)
- **Primary Gradient**: Purple (#7C3AED) to cyan (#06B6D4)
- **Card Background**: Translucent dark (#121826) with 80% opacity

### Typography
- **Font Family**: Inter (Regular, Medium, SemiBold, Bold)
- **Heading**: 32-36px, Bold
- **Body**: 16-18px, Regular/Medium
- **Cards**: 18px titles, 14px descriptions

### Components
- **Buttons**: 56px height, 12px border radius, gradient backgrounds
- **Cards**: 16px border radius, subtle shadows, translucent backgrounds
- **Spacing**: 16px margins, 12px padding for cards

## 🔌 MockAPI Setup Instructions

1. Visit [mockapi.io](https://mockapi.io) and create an account
2. Create a new project
3. Add a resource named `brands`
4. Configure the schema with these fields:
   - `id` (auto-generated)
   - `name` (string)
   - `logoUrl` (string) 
   - `shortDescription` (string)
   - `longDescription` (string)
   - `website` (string)
   - `tags` (array)

5. Copy the JSON data from `mockapi/brands.json` and add it to your MockAPI project
6. Update the `BASE_URL` in `services/api.js` with your MockAPI endpoint

**Sample MockAPI endpoint format:**
```
https://[your-project-id].mockapi.io/api/v1/brands
```

## 🧪 Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Start with Android simulator
- `npm run ios` - Start with iOS simulator  
- `npm run web` - Start web version
- `npm run build:apk` - Build Android APK with EAS

## 📋 Assignment Submission Checklist

- ✅ Complete React Native Expo project structure
- ✅ Two screens: Home (brand list) and Brand Detail
- ✅ Modern UI with gradients and dark theme
- ✅ MockAPI integration with error handling
- ✅ React Navigation stack setup
- ✅ Responsive design for mobile devices
- ✅ Accessibility labels and roles
- ✅ Loading states and error handling
- ✅ Follow/unfollow functionality (local state)
- ✅ README with setup instructions
- ✅ Mock data and API instructions

## 🎯 Demo & Screenshots

**Expo Snack Demo**: [View in Expo Snack](https://snack.expo.dev) *(Upload this project)*

**GitHub Repository**: `https://github.com/yourusername/brandpeek`

---

**Backend Used**: MockAPI for REST endpoints  
**Project Structure**: Modular React Native with Expo, featuring component-based architecture with /screens, /components, /services separation for maintainable code.
