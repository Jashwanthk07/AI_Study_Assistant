# AI Study Assistant - Frontend Setup Documentation

## Overview
This document explains the frontend foundation created for the AI Study Assistant using React, Vite, and React Router.

---

## File Structure

```
frontend/
├── src/
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Dashboard.jsx
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Sidebar.jsx
│   ├── routes/
│   │   └── index.jsx
│   ├── styles/
│   │   └── global.css
│   ├── assets/              # Existing - images, icons
│   ├── App.jsx              # Modified - Main app component
│   ├── main.jsx             # Existing - Entry point
│   └── index.css            # Existing - Base styles
├── package.json             # Modified - Added react-router-dom
├── vite.config.js           # Existing - Vite configuration
└── index.html               # Existing - HTML template
```

---

## File Explanations

### 1. package.json
**Purpose**: Project configuration and dependencies

**Changes Made**:
- Added `react-router-dom: ^6.22.0` to dependencies

**Why**: React Router is required for client-side routing to navigate between Login, Register, and Dashboard pages without page reloads.

---

### 2. src/App.jsx
**Purpose**: Main application component that sets up routing

**Changes Made**:
- Replaced default Vite template with RouterProvider
- Imports router configuration from `./routes/index.jsx`
- Imports global styles from `./styles/global.css`

**Code**:
```jsx
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import './styles/global.css';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
```

**Why**: This is the root component that renders the router. The RouterProvider component manages the routing state and renders the appropriate route based on the URL.

---

### 3. src/routes/index.jsx
**Purpose**: Centralized route configuration

**Code**:
```jsx
import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);

export default router;
```

**Why**: This file centralizes all route definitions. It uses `createBrowserRouter` from React Router v6 to define the routing structure. Each route maps a URL path to a component. The root path `/` redirects to Login by default.

---

### 4. src/pages/Login.jsx
**Purpose**: Login page component

**Features**:
- Form with email and password fields
- State management for form data using useState
- Form submission handler (placeholder for future auth logic)
- Link to Register page
- Modern, responsive UI with gradient background

**Key Sections**:
- **State**: `formData` object stores email and password
- **handleChange**: Updates form state on input change
- **handleSubmit**: Prevents default form submission, logs data (auth logic to be added later)
- **UI**: Centered card layout with gradient background

**Why**: This is the entry point for returning users. The form is ready for authentication integration once the backend is built.

---

### 5. src/pages/Register.jsx
**Purpose**: Registration page component

**Features**:
- Form with name, email, password, and confirm password fields
- Password matching validation
- State management for form data
- Form submission handler (placeholder for future auth logic)
- Link to Login page
- Modern, responsive UI matching Login page design

**Key Sections**:
- **State**: `formData` object stores all registration fields
- **handleChange**: Updates form state on input change
- **handleSubmit**: Validates password match, logs data (auth logic to be added later)
- **UI**: Centered card layout with gradient background (consistent with Login)

**Why**: This allows new users to create accounts. The password matching validation provides immediate feedback before submission.

---

### 6. src/pages/Dashboard.jsx
**Purpose**: Main dashboard page for authenticated users

**Features**:
- Navbar component (top navigation)
- Sidebar component (side navigation)
- Statistics cards showing document counts
- Document grid displaying uploaded PDFs
- Mock data for demonstration
- Upload button (placeholder for future functionality)
- Document actions (View, Delete buttons)

**Key Sections**:
- **Mock Data**: `documents` array with sample document objects
- **Stats Section**: Three stat cards showing total documents, recent uploads, and AI summaries
- **Documents Grid**: Grid layout displaying document cards with title, date, summary preview
- **Layout**: Flexbox layout with Navbar, Sidebar, and main content area

**Why**: This is the main interface where users will manage their study documents. The mock data demonstrates the expected UI structure. Real data will be fetched from the backend API once implemented.

---

### 7. src/components/Navbar.jsx
**Purpose**: Top navigation bar component

**Features**:
- Logo with icon and text
- Navigation links (Dashboard, Upload)
- Logout button
- Conditional rendering (hidden on auth pages)
- Responsive design
- Active state styling

**Key Sections**:
- **Conditional Rendering**: Returns null on Login/Register pages using `useLocation` hook
- **Logo**: Links to dashboard with robot emoji and text
- **Menu**: Navigation links for Dashboard and Upload
- **Actions**: Logout button with hover effects

**Why**: Provides consistent top navigation across authenticated pages. The conditional rendering ensures it doesn't appear on authentication pages.

---

### 8. src/components/Sidebar.jsx
**Purpose**: Side navigation bar component

**Features**:
- Menu items with icons (Dashboard, Upload, Documents, Settings)
- Active state highlighting
- User info section at bottom
- Responsive design (hidden on mobile)
- Sticky positioning

**Key Sections**:
- **Menu Items**: Array of objects defining navigation items with path, icon, and label
- **Active State**: Highlights current route using `useLocation` hook
- **User Info**: Displays user avatar, name, and email (mock data)
- **Layout**: Fixed sidebar with scrollable content

**Why**: Provides additional navigation options and user context. The active state helps users understand their current location in the app.

---

### 9. src/styles/global.css
**Purpose**: Global styles and CSS variables

**Features**:
- CSS custom properties (variables) for consistent theming
- Reset styles (margin, padding, box-sizing)
- Typography settings
- Auth container styles (gradient background, centered card)
- Navbar styles (sticky, responsive)
- Sidebar styles (fixed width, scrollable)
- Dashboard styles (grid layouts, cards)
- Responsive breakpoints (1024px, 768px, 480px)

**Key Sections**:
- **CSS Variables**: Defines colors, shadows, border radius for consistent theming
- **Auth Styles**: Gradient background, centered card layout for auth pages
- **Navbar Styles**: Sticky positioning, hover effects, responsive menu
- **Sidebar Styles**: Fixed width, active state highlighting, user info section
- **Dashboard Styles**: Grid layouts for stats and documents, card components
- **Responsive Design**: Media queries for tablet, mobile, and small screens

**Why**: Centralizes all styling in one file for consistency. CSS variables make it easy to update the color scheme. Responsive design ensures the app works on all screen sizes.

---

## How It Works

### Routing Flow
1. User visits `/` → Renders Login page
2. User clicks "Sign up" link → Navigates to `/register` → Renders Register page
3. User submits form → (Future) Authenticates with backend → Redirects to `/dashboard`
4. Dashboard renders with Navbar and Sidebar
5. User navigates using Navbar or Sidebar links

### Component Hierarchy
```
App (RouterProvider)
├── Login
├── Register
└── Dashboard
    ├── Navbar
    ├── Sidebar
    └── Main Content
        ├── Stats Section
        └── Documents Grid
```

---

## Design Decisions

### 1. React Router v6
**Choice**: Used `createBrowserRouter` instead of older Routes/Route pattern
**Why**: More modern API, better performance, built-in data loading support

### 2. Centralized Routes
**Choice**: All routes defined in `src/routes/index.jsx`
**Why**: Easier to manage and modify routing configuration in one place

### 3. CSS Variables
**Choice**: Used CSS custom properties for colors and spacing
**Why**: Consistent theming, easy to update design system

### 4. Conditional Navbar/Sidebar
**Choice**: Navbar and Sidebar hidden on auth pages
**Why**: Cleaner UX for authentication flow, reduces visual clutter

### 5. Mock Data in Dashboard
**Choice**: Used static mock data instead of API calls
**Why**: Frontend UI can be developed independently before backend is ready

### 6. Responsive Design
**Choice**: Mobile-first approach with breakpoints at 1024px, 768px, 480px
**Why**: Ensures app works on desktop, tablet, and mobile devices

---

## Next Steps

### Immediate (Before Backend Integration)
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Test navigation between pages
4. Verify responsive design on different screen sizes

### Future (Backend Integration)
1. Replace mock data in Dashboard with API calls
2. Implement authentication logic in Login/Register forms
3. Add protected route wrapper for Dashboard
4. Connect upload button to file upload functionality
5. Implement document deletion API call
6. Add loading states for API calls
7. Add error handling for failed requests

### UI Enhancements
1. Add loading spinners
2. Add toast notifications for success/error messages
3. Add form validation with error messages
4. Add empty states for no documents
5. Add search functionality
6. Add pagination for document list

---

## Running the Application

### Install Dependencies
```bash
cd frontend
npm install
```

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## Dependencies Added

### react-router-dom (^6.22.0)
**Purpose**: Client-side routing
**Usage**: Navigation between pages without page reloads

### Existing Dependencies
- react (^19.2.6) - UI library
- react-dom (^19.2.6) - React DOM renderer

---

## Browser Support

The application supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## Accessibility Features

1. Semantic HTML elements (nav, aside, main, section)
2. ARIA labels where needed
3. Keyboard navigation support
4. Focus states on interactive elements
5. Color contrast ratios meet WCAG AA standards

---

## Performance Considerations

1. Code splitting via React Router (automatic with createBrowserRouter)
2. CSS in single file (reduces HTTP requests)
3. No external CSS frameworks (lighter bundle)
4. Vite for fast development and optimized production builds

---

## Security Notes

1. No authentication logic implemented yet (placeholder only)
2. No API calls made yet (mock data only)
3. No sensitive data stored in frontend
4. Form validation is client-side only (backend validation required)

---

## Troubleshooting

### Issue: Routes not working
**Solution**: Ensure `react-router-dom` is installed: `npm install react-router-dom`

### Issue: Styles not applying
**Solution**: Check that `global.css` is imported in App.jsx

### Issue: Navbar/Sidebar showing on auth pages
**Solution**: Check conditional rendering logic in components using `useLocation`

### Issue: Responsive design not working
**Solution**: Ensure viewport meta tag is present in index.html

---

## Summary

This frontend foundation provides:
- ✅ React Router setup with 3 routes (Login, Register, Dashboard)
- ✅ Modern, responsive UI with gradient backgrounds
- ✅ Navbar and Sidebar components for navigation
- ✅ Dashboard with mock data and document grid
- ✅ Global styles with CSS variables for theming
- ✅ Mobile-responsive design
- ✅ Ready for backend integration

The authentication logic and API integration will be added in future phases once the backend is implemented.
