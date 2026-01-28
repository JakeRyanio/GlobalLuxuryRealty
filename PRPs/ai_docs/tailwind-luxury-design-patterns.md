# Tailwind CSS Luxury Design Patterns

## Color Implementation

### Navy Gradient Background
```css
/* Tailwind config extension */
backgroundImage: {
  'luxury-gradient': 'linear-gradient(135deg, #0d2847 0%, #2b5797 100%)',
  'hero-overlay': 'linear-gradient(to bottom, rgba(13,40,71,0.7), rgba(13,40,71,0.9))',
}

colors: {
  'navy': {
    900: '#0d2847',
    800: '#1a3a5c',
    700: '#2b5797',
  },
  'gold': {
    DEFAULT: '#c9a962',
    light: '#d4b978',
    dark: '#b8944d',
  },
  'accent-blue': '#4a9fd4',
}
```

### Gold Button Styling
```html
<button class="bg-gold hover:bg-gold-light text-navy-900 font-semibold px-8 py-4 
               transition-all duration-300 hover:shadow-lg hover:shadow-gold/30">
  Get Your Home Value
</button>
```

## Typography Stack

### Font Import
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Tailwind Config
```js
fontFamily: {
  'display': ['Playfair Display', 'serif'],
  'body': ['Montserrat', 'sans-serif'],
}
```

### Usage Pattern
```html
<h1 class="font-display text-5xl md:text-7xl text-white">
  Miami's Premier <span class="text-gold">Luxury</span> Real Estate
</h1>
<p class="font-body text-lg text-white/80">
  Body text content here
</p>
```

## Animation Patterns

### Card Lift Effect
```html
<div class="transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
  <!-- Card content -->
</div>
```

### Gold Underline Navigation
```html
<a class="relative text-white after:absolute after:bottom-0 after:left-0 after:w-0 
          after:h-0.5 after:bg-gold after:transition-all after:duration-300 
          hover:after:w-full">
  Navigation Item
</a>
```

### Fade-in on Scroll (CSS)
```css
.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}
```

## Component Patterns

### Hero Section Structure
```html
<section class="relative min-h-screen bg-luxury-gradient">
  <!-- Background image with overlay -->
  <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('hero.jpg')">
    <div class="absolute inset-0 bg-hero-overlay"></div>
  </div>
  
  <!-- Content -->
  <div class="relative z-10 flex items-center min-h-screen">
    <div class="container mx-auto px-6 text-center">
      <!-- Headlines and CTAs -->
    </div>
  </div>
</section>
```

### Property Card
```html
<div class="group bg-white/5 backdrop-blur-sm border border-white/10 
            overflow-hidden transform transition-all duration-500 
            hover:-translate-y-2 hover:border-gold/50">
  <div class="aspect-[4/3] overflow-hidden">
    <img class="w-full h-full object-cover transition-transform duration-700 
                group-hover:scale-110" src="property.jpg" alt="">
  </div>
  <div class="p-6">
    <span class="text-gold text-sm font-body uppercase tracking-wider">SOLD</span>
    <h3 class="font-display text-2xl text-white mt-2">Property Name</h3>
    <p class="text-white/60 font-body mt-2">Location</p>
    <p class="text-gold font-display text-xl mt-4">$4,500,000</p>
  </div>
</div>
```

### Strikethrough + Replacement Text
```html
<div class="text-center">
  <span class="text-6xl font-display text-white">7,700+</span>
  <div class="mt-2">
    <span class="line-through text-white/40 font-body">Transactions</span>
    <span class="text-gold font-display text-2xl ml-2">Families Helped</span>
  </div>
</div>
```

## Responsive Breakpoints

```html
<!-- Mobile-first approach -->
<h1 class="text-4xl md:text-5xl lg:text-7xl">Headline</h1>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <!-- Property cards -->
</div>
```

## CTA Button Variations

### Primary (Gold)
```html
<button class="bg-gold hover:bg-gold-light text-navy-900 font-semibold 
               px-8 py-4 transition-all duration-300">
  Primary Action
</button>
```

### Secondary (Outline)
```html
<button class="border-2 border-gold text-gold hover:bg-gold hover:text-navy-900 
               font-semibold px-8 py-4 transition-all duration-300">
  Secondary Action
</button>
```

### Ghost (Text only)
```html
<a class="text-gold hover:text-gold-light font-semibold underline 
          underline-offset-4 transition-colors duration-300">
  Learn More
</a>
```
