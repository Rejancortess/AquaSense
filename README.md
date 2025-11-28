# PIT AquaSense

PIT AquaSense is a mobile application designed to monitor water quality on campus. It tracks metrics such as pH, turbidity, and temperature in real-time and provides notifications when water quality is unsafe.

---

## App Flow


1. **Onboarding Screens**  
   - Introduces the app features and benefits.  
   - Swipeable or scrollable screens with images and short descriptions.  
   - Option to skip and go directly to authentication.  

2. **Sign Up / Sign In**  
   - **Sign Up:** Create a new account via email/password or Google (Firebase Auth).  
   - **Sign In:** Log in to an existing account.  
   - Validation for email and password input.  

3. **Main App / Dashboard**  
   - Access real-time water quality metrics.  
   - Scan QR codes for new readings.  
   - View historical data and notifications.  

---

## Team Roles

| Name | Role | Responsibilities |
|------|------|-----------------|
| Rejan Mamugay | Full Stack Developer / UI/UX Designer | Implement UI with React Native, handle navigation, integrate Expo features, design wireframes and mockups, set up Firebase backend (database, authentication, storage) |
| Kent Olape | Frontend Developer | Implement UI components, integrate Expo features, assist with navigation and app functionality |
| Ronald Salig | Frontend Developer | Implement UI components, assist with screens and user interactions |

---

## Technology Stack

**Frontend:**  
- React Native (Expo)  
- React Navigation  
- Tailwind CSS (via `tailwind-rn` or `nativewind`)  

**Backend:**  
- Firebase  
  - Authentication  
  - Firestore (database)  

**Other Tools:**  
- Expo CLI  
- VSCode  
- Git/GitHub  

---

## Features

- Onboarding screens for first-time users  
- User authentication (Sign Up / Sign In)  
- Real-time water quality monitoring  
- Notifications for water quality alerts  
- Historical data visualization  
- Camera access for QR scanning  

---

## Setup / Installation

### Prerequisites

- Node.js (v18+ recommended)  
- npm or yarn  
- Expo CLI (`npm install -g expo-cli`)  
- Git  
- A Firebase project (Firestore, Authentication enabled)  

### 1. Clone the repository

```bash
git clone https://github.com/Rejancortess/AquaSense.git
cd AquaSense
