<!--
Sync Impact Report:
- Version change: None → 1.0.0 (Initial Ratification)
- Added principles: Simplicity (Vanilla Stack), Visual Excellence, Docker-First, Semantic Structure, Responsive Design.
- Added sections: Governance rules for SemVer and Amendments.
- Templates requiring updates: ✅ None (Templates reference constitution generically).
-->
# SmartWatch Pro Constitution

## Core Principles

### I. Simplicity & Vanilla Stack
**The project MUST use plain HTML5, CSS3, and Vanilla JavaScript (ES6+).** Complex frontend frameworks (React, Vue, etc.) are currently prohibited unless the project scope fundamentally changes to a complex web application. This ensures maximum portability, performance, and ease of understanding.

### II. Visual Excellence & Aesthetics
**The user interface MUST be modern, visually striking, and animated.** Use gradients, smooth transitions, and high-quality assets to create a premium feel. "Basic" or "Bootstrap-default" looks are unacceptable. Animations should enhance, not distract (e.g., hover effects, smooth scrolling).

### III. Docker-First Deployment
**The application MUST be runnable via Docker at all times.** The `Dockerfile` is the source of truth for the runtime environment. Any new dependency or configuration MUST be reflected in the Docker configuration immediately to ensure consistent deployment across environments.

### IV. Responsive & Mobile-First
**The layout MUST be fully responsive across all device sizes (Mobile, Tablet, Desktop).** Use CSS Grid and Flexbox. Hardcoded fixed widths that break on smaller screens are prohibited. Testing on mobile viewports is mandatory for all UI changes.

### V. Semantic & Clean Architecture
**Code MUST be semantic and well-structured.** Use proper HTML5 tags (`<main>`, `<section>`, `<article>`, `<nav>`). CSS should use variables (`:root`) for colors and easy theming. JavaScript should be modular where possible, avoiding global namespace pollution.

## Quality Standards

### Performance
**The landing page MUST load instantly.** Optimize images (WebP), minify assets where possible (manually or via simple scripts), and avoid render-blocking resources.

### Accessibility
**All interactive elements MUST be accessible.** interactable elements must have focus states, images must have `alt` text, and color contrast should meet WCAG AA standards.

## Governance

### Amendment Process
This Constitution is the supreme law of the project. Amendments require:
1.  **Documentation**: A distinct Pull Request updating this file.
2.  **Rationale**: Clear explanation of why the change is needed.
3.  **Consensus**: Approval from project maintainers.

### Versioning Policy
This project follows **Semantic Versioning (SemVer 2.0.0)**:
-   **MAJOR**: Breaking changes to design philosophy, tech stack (e.g., switching to React), or removal of core features.
-   **MINOR**: New sections, significant design overhauls, or adding new feature sets (e.g., adding a blog).
-   **PATCH**: Bug fixes, text updates, or minor styling tweaks.

**Version**: 1.0.0 | **Ratified**: 2025-12-11 | **Last Amended**: 2025-12-11
