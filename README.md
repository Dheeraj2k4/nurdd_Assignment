# BrandPeek

A modern React Native app for discovering and exploring top brands with beautiful UI and seamless navigation.

## Description

BrandPeek is a mobile application that allows users to browse and discover popular brands. It features a clean, modern interface with gradient backgrounds, custom typography, and smooth animations. Users can view brand listings on the home screen and tap to see detailed information about each brand.

## Installation Instructions

1. **Prerequisites**: Node.js (v16+), Expo CLI
2. **Clone the repository**:
   ```bash
   git clone <url>
   cd brandpeek
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```

## Usage

1. **Start the development server**:
   ```bash
   npx expo start
   ```
2. **Run the app**:
   - Scan QR code with Expo Go app
   - Press `i` for iOS simulator
   - Press `a` for Android emulator

## Dependencies

- **React Native** with Expo SDK 53
- **React Navigation** - Screen navigation
- **expo-linear-gradient** - Gradient backgrounds
- **axios** - API calls
- **lottie-react-native** - Splash animations
- **@expo-google-fonts/syne** - Syne fonts for headings
- **@expo-google-fonts/poppins** - Poppins fonts for body text
- **expo-image** - Optimized image loading
- **expo-font** - Custom font loading (Nordic Club)
- **@expo/vector-icons** - Icon library

**Backend**: MockAPI for brand data (`https://6896f0b5250b078c204085df.mockapi.io/`)

## 🚀 Features

- **Modern UI**: Clean design inspired by nurdd.club with dark gradients and subtle shadows
- **Brand Discovery**: Browse top brands with beautiful card layouts
- **Detailed Views**: Rich brand profiles with logos, descriptions, tags, and website links
- **Follow System**: Local follow/unfollow functionality for brands
- **Responsive Design**: Optimized for various phone screen sizes
- **Accessibility**: Full accessibility support with proper labels and roles

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

## 🎯 Demo & Screenshots

**Expo APK Demo**: (https://expo.dev/accounts/dheerxj/projects/brandpeek/builds/3e690d90-3411-413a-81fc-a22d51956c90)

---
**Backend Used**: MockAPI for REST endpoints  
**Project Structure**: Modular React Native with Expo, featuring component-based architecture with /screens, /components, /services separation for maintainable code.
