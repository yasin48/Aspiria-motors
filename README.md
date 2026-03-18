# Aspiria Motors

Welcome to the **Aspiria Motors** marketing website repository. Aspiria Motors is pioneering the future of hydrogen-powered mobility with cutting-edge swappable hydrogen pods, AI-driven assistant tools, and XR interactive windshield interfaces.

## 🚀 Overview

This repository contains the interactive marketing website for Aspiria Motors, designed to showcase our revolutionary hydrogen vehicle ecosystem. Built for performance, aesthetics, and user engagement, the site leverages dynamic scroll-animations, premium glassmorphism layouts, and highly responsive components.

## ✨ Key Features

- **Immersive User Experience**: Extensive use of entrance animations, hover states, and dynamic page transitions using Framer Motion.
- **Detailed Marketing Pages**:
  - **Home**: Overview of our vision and featured vehicles.
  - **About Us**: The story of Aspiria Motors and our founding principles.
  - **Technology**: Deep dive into our Swappable Hydrogen Pods, AI Driver Assistant, and XR Interface.
  - **Investors**: Market opportunity, timelines, and financial highlights.
  - **Contact**: Reach out to our team seamlessly.
- **Modern UI Patterns**: Utilization of custom GlassCards, responsive grids, and clean typography defined in the Aspiria Design System.

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React](https://react.dev/)
- **Styling**: Vanilla CSS using custom semantic properties and responsive media queries.
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Language**: TypeScript

## 📁 Project Structure

```text
aspiria-motors/
├── public/                 # Static assets (placeholder images, icons, etc.)
├── src/
│   ├── app/                # Next.js App Router (Pages, Layouts, CSS)
│   │   ├── about/
│   │   ├── technology/
│   │   ├── contact/
│   │   └── globals.css     # Global styles and design system CSS tokens
│   └── components/         # Reusable UI components
│       ├── ui/             # Standard components (Button, GlassCard, SectionHeading)
│       └── home/           # Page-specific modular components
```

## 💻 Getting Started

### Prerequisites

Ensure you have Node.js installed.

### Installation & Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yasin48/Aspiria-motors.git
   cd Aspiria-motors
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Design System

The project adheres to the **Aspiria Design System**, utilizing predefined semantic CSS variables (`var(--color-primary-cyan)`, `var(--spacing-md)`, etc.) maintained globally in `src/app/globals.css`. Components are built natively from scratch to ensure a perfectly cohesive, highly branded, and deeply optimized visual aesthetic.

## 📄 License & Credits

© 2026 Aspiria Motors. All Rights Reserved.
