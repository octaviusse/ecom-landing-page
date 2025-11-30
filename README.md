# SmartWatch Pro - E-commerce Landing Page

A modern, responsive e-commerce landing page for a smartwatch product built with HTML, CSS, and JavaScript.

## Features

- 🎨 Modern, gradient-based design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🛒 Functional shopping cart
- 🎨 Color selection for products
- ⭐ Customer reviews section
- 📊 Technical specifications
- 🎯 Smooth scrolling navigation
- ✨ Animated elements and interactions
- 🐳 Docker support for easy deployment

## Technologies Used

- HTML5
- CSS3 (with animations and gradients)
- Vanilla JavaScript (ES6+)
- Nginx (for Docker deployment)

## Running Locally

Simply open `index.html` in your web browser.

## Running with Docker

### Build the Docker image:
```bash
docker build -t smartwatch-landing .
```

### Run the container:
```bash
docker run -d -p 8080:80 smartwatch-landing
```

### Access the website:
Open your browser and navigate to `http://localhost:8080`

### Stop the container:
```bash
docker stop $(docker ps -q --filter ancestor=smartwatch-landing)
```

## Project Structure

```
ecom-landing-page/
├── index.html      # Main HTML file
├── styles.css      # CSS styles and animations
├── script.js       # JavaScript functionality
├── Dockerfile      # Docker configuration
└── README.md       # Project documentation
```

## Features Overview

### Hero Section
- Eye-catching gradient background
- Animated smartwatch display
- Color selection options
- Price and discount information
- Add to cart functionality

### Features Section
- 6 key product features with icons
- Hover animations
- Clean card-based layout

### Specifications Section
- Technical details grid
- Easy-to-read format

### Reviews Section
- Customer testimonials
- Star ratings
- Social proof

### Shopping Cart
- Modal-based cart interface
- Add/remove items
- Color tracking
- Total calculation
- Checkout functionality

## Customization

You can easily customize:
- Colors in the `:root` CSS variables
- Product price in the HTML
 - Product price (DZD) in the HTML
- Features and specifications
- Customer reviews
- Brand name and logo

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for educational and commercial use.
