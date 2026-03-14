# NeuralForge AI - Plateforme de Développement de Modèles IA Sur Mesure

## Design Guidelines

### Design References
- **zoom.com**: Clean, professional, full-screen hero with background image, smooth animations
- **Style**: Modern Dark/Light mode, glassmorphism, bold gradients, premium tech aesthetic

### Color Palette
- **Dark Mode**:
  - Background: #0A0A0F (Deep Navy Black)
  - Surface: #12121A (Dark Card)
  - Accent Primary: #6C63FF (Electric Purple)
  - Accent Secondary: #00D4AA (Neon Teal)
  - Text Primary: #FFFFFF
  - Text Secondary: #A0A0B0
  - Border: #1E1E2E
- **Light Mode**:
  - Background: #F8F9FC (Soft White)
  - Surface: #FFFFFF
  - Accent Primary: #6C63FF (Electric Purple)
  - Accent Secondary: #00D4AA (Neon Teal)
  - Text Primary: #0A0A0F
  - Text Secondary: #6B7280
  - Border: #E5E7EB

### Typography
- Font: Inter (sans-serif)
- H1: 56px bold
- H2: 40px bold
- H3: 24px semibold
- Body: 16px regular
- Small: 14px regular

### Key Component Styles
- Buttons: Gradient purple-to-teal, rounded-xl, hover scale
- Cards: Glassmorphism with backdrop-blur, subtle border
- Navbar: Sticky, backdrop-blur, transparent
- Sections: Full-width, alternating backgrounds
- Animations: Scroll-triggered fade-in, slide-up, carousel auto-scroll

### Images to Generate
1. **hero-bg-ai-network.jpg** - Futuristic AI neural network visualization, dark blue/purple tones, abstract digital brain connections, cinematic (photorealistic, 1024x576)
2. **gallery-ai-dashboard.jpg** - Modern AI analytics dashboard on a screen, data visualization, clean UI (photorealistic, 1024x576)
3. **gallery-ai-robotics.jpg** - Industrial robotics arm with AI overlay, factory setting, blue lighting (photorealistic, 1024x576)
4. **gallery-ai-medical.jpg** - AI-powered medical imaging analysis, brain scan on monitor, hospital setting (photorealistic, 1024x576)
5. **gallery-ai-agriculture.jpg** - Drone flying over green farmland with AI data overlay, precision agriculture (photorealistic, 1024x576)
6. **team-placeholder-male.jpg** - Professional headshot silhouette, dark gradient background, male figure, corporate style (minimalist, 1024x1024)
7. **team-placeholder-female.jpg** - Professional headshot silhouette, dark gradient background, female figure, corporate style (minimalist, 1024x1024)

---

## Development Tasks

### Files to Create (max 8):
1. **src/pages/Index.tsx** - Main landing page with ALL sections (hero, gallery, expertise, domains carousel, AI models, stack, method, team, contact, footer)
2. **src/components/Navbar.tsx** - Sticky navbar with logo, nav links, dark/light toggle, Sign In/Sign Up buttons
3. **src/components/ThemeProvider.tsx** - Dark/Light mode context provider
4. **src/pages/SignIn.tsx** - Sign In page with form
5. **src/pages/SignUp.tsx** - Sign Up page with form (personal + enterprise info)
6. **src/pages/Dashboard.tsx** - Connected user view with sidebar profile, AI models browsing, model details, buy license, custom model form
7. **src/pages/ModelDetail.tsx** - Individual AI model detail page with license purchase options
8. **src/App.tsx** - Updated routing

### Section Breakdown for Index.tsx:
- Hero: Full-screen background image, title "NeuralForge AI", subtitle, CTA buttons
- Gallery: Grid of 4 images with hover effects
- Expertise: Roadmap cards (Conseil → Développement → Tests → Déploiement)
- Domains: Auto-scrolling carousel (Industrie, Logistique, Santé, Agriculture, IT, Finance, Énergie, Transport)
- AI Models: Cards for each model (fire detection, cheating, violence, crowd, brain tumor) + "Custom Your AI Model" button
- Stack: Tech icons/cards (Python, TensorFlow, PyTorch, Docker, Kubernetes, AWS)
- Method: Timeline from concept to deployment
- Team: 3 founder cards
- Contact: Form + email
- Footer: Links, social, copyright