# PRP: Global Luxury Realty Landing Page

## Goal

**Feature Goal**: Build a single-page, ultra-luxury landing page for Global Luxury Realty (GLR), a Miami-based real estate brokerage serving South Florida. The page must position GLR as the premier brokerage for everyone from first-time home buyers to seasoned investors.

**Deliverable**: A complete, responsive, single-page website with:
- Hero section with dual CTAs (Buy/Sell funnels)
- Social proof section featuring 3-4 sold luxury properties
- Statistics section with 7,700+ "Families Helped" highlight
- Multiple CTA touchpoints throughout with varied copy
- Contact section with email and phone
- Modern luxury aesthetic (navy gradients, gold accents, elegant typography)

**Success Definition**:
- [x] Page loads under 3 seconds
- [x] Fully responsive (mobile, tablet, desktop)
- [x] All CTA buttons have placeholder hrefs ready for funnel URLs
- [x] Luxury aesthetic matches design spec (navy gradient, gold accents, Playfair + Montserrat fonts)
- [x] Smooth scroll animations and hover effects
- [x] Contact information displays correctly

---

## Context

```yaml
documentation:
  - url: "https://tailwindcss.com/docs/installation"
    purpose: "Tailwind CSS setup and utility classes reference"
  
  - url: "https://fonts.google.com/specimen/Playfair+Display"
    purpose: "Playfair Display font for luxury headings"
    
  - url: "https://fonts.google.com/specimen/Montserrat"
    purpose: "Montserrat font for clean body text"

  - url: "https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
    purpose: "Intersection Observer for scroll-triggered animations"

internal_references:
  - file: "PRPs/ai_docs/tailwind-luxury-design-patterns.md"
    purpose: "Pre-built Tailwind patterns for colors, typography, animations, and component structures"

design_spec:
  colors:
    navy_dark: "#0d2847"
    navy_light: "#2b5797"
    gold: "#c9a962"
    gold_light: "#d4b978"
    accent_blue: "#4a9fd4"
    white: "#ffffff"
    
  typography:
    headings: "Playfair Display (serif) - weights 400, 500, 600, 700"
    body: "Montserrat (sans-serif) - weights 300, 400, 500, 600, 700"
    
  effects:
    - "Navy gradient backgrounds (135deg, #0d2847 to #2b5797)"
    - "Gold hover states on all buttons"
    - "Card lift animations on property cards (translateY -8px)"
    - "Gold underline effect on navigation hover"
    - "Fade-in-up animations on scroll"

contact_info:
  email: "globalluxuryrealty.com"
  phone: "+1(786) 501-9206"
  
cta_placeholders:
  buy_funnel: "#buy-quiz"  # Replace with actual URL
  sell_funnel: "#sell-quiz"  # Replace with actual URL

gotchas:
  - "Do NOT use generic stock photos for property images - use placeholder images until client provides real property photos"
  - "Email format provided is 'globalluxuryrealty.com' - may need mailto: prefix clarification"
  - "Ensure CTA button hrefs are easily findable/replaceable when real funnel URLs are provided"
  - "Test gold text contrast on navy backgrounds for accessibility (WCAG AA minimum)"
  - "Playfair Display can look thin at small sizes - use minimum 18px for headings"
```

---

## Implementation Tasks

### Task 1: Project Setup & Configuration
**Dependencies**: None
**Details**:
- [ ] Initialize project with `npm init -y`
- [ ] Install Tailwind CSS: `npm install -D tailwindcss`
- [ ] Create `tailwind.config.js` with custom theme:
  ```js
  extend: {
    colors: {
      navy: { 900: '#0d2847', 800: '#1a3a5c', 700: '#2b5797' },
      gold: { DEFAULT: '#c9a962', light: '#d4b978', dark: '#b8944d' },
      'accent-blue': '#4a9fd4',
    },
    fontFamily: {
      display: ['Playfair Display', 'serif'],
      body: ['Montserrat', 'sans-serif'],
    },
    backgroundImage: {
      'luxury-gradient': 'linear-gradient(135deg, #0d2847 0%, #2b5797 100%)',
    },
  }
  ```
- [ ] Create `src/input.css` with Tailwind directives
- [ ] Create build script in package.json: `"build": "tailwindcss -i ./src/input.css -o ./dist/output.css --watch"`
- [ ] Create `index.html` base structure with Google Fonts import

### Task 2: Navigation Header
**Dependencies**: Task 1
**Details**:
- [ ] Fixed/sticky navigation bar with transparent to solid on scroll
- [ ] GLR logo (text placeholder: "GLOBAL LUXURY REALTY" or "GLR")
- [ ] Navigation links: About, Properties, Stats, Contact
- [ ] CTA button in nav: "Start Your Journey" (gold, links to hero CTAs)
- [ ] Mobile hamburger menu with slide-out drawer
- [ ] Gold underline hover effect on nav links

### Task 3: Hero Section
**Dependencies**: Task 1
**Details**:
- [ ] Full viewport height (min-h-screen)
- [ ] Background: Luxury Miami skyline/waterfront placeholder image with navy gradient overlay
- [ ] Main headline: "Miami's Premier Luxury Real Estate Experience" (Playfair Display, white)
- [ ] Subheadline: "From first-time buyers to seasoned investors, we make your real estate dreams a reality" (Montserrat, white/80)
- [ ] Dual CTA buttons side-by-side:
  - **Buy CTA**: "Find Your Dream Home" (gold button, links to #buy-quiz)
  - **Sell CTA**: "Discover Your Home's Value" (gold outline button, links to #sell-quiz)
- [ ] Scroll indicator arrow at bottom (animated bounce)

### Task 4: Social Proof - Sold Properties Section
**Dependencies**: Task 1
**Details**:
- [ ] Section title: "Recent Success Stories" or "Exclusive Properties Sold"
- [ ] Grid of 3-4 property cards (responsive: 1 col mobile, 2 col tablet, 4 col desktop)
- [ ] Each property card includes:
  - Property image (placeholder: use https://placehold.co/800x600/0d2847/c9a962?text=Luxury+Property)
  - "SOLD" badge (gold text)
  - Property name/address
  - Location (e.g., "Miami Beach, FL")
  - Sale price (gold, Playfair Display)
- [ ] Card hover effect: lift + scale image + gold border glow
- [ ] Section CTA: "Ready to Sell? See What Your Home is Worth" (links to #sell-quiz)

**Placeholder Properties**:
1. Ocean View Estate - Miami Beach - $8,500,000
2. Waterfront Villa - Coral Gables - $6,200,000
3. Penthouse Suite - Brickell - $4,800,000
4. Modern Mansion - Fisher Island - $12,500,000

### Task 5: Statistics/Trust Section
**Dependencies**: Task 1
**Details**:
- [ ] Navy gradient background
- [ ] Large statistic: "7,700+"
- [ ] Strikethrough text: "Transactions" (white/40, line-through)
- [ ] Replacement text: "Families Helped" (gold, Playfair Display, positioned to right/below strikethrough)
- [ ] Additional stats row (optional):
  - "$2B+ in Sales Volume"
  - "15+ Years Experience"
  - "South Florida's Trusted Partner"
- [ ] CTA: "Join Our Family of Satisfied Clients" (links to #buy-quiz)

### Task 6: Value Proposition Section
**Dependencies**: Task 1
**Details**:
- [ ] Section explaining GLR's approach
- [ ] Title: "Why Choose Global Luxury Realty?"
- [ ] 3 feature cards/columns:
  1. **For Buyers**: "Expert guidance from your first home to your forever estate"
  2. **For Sellers**: "Maximum value through our exclusive marketing network"
  3. **For Investors**: "Data-driven insights for smart real estate decisions"
- [ ] Each card has icon placeholder, title, description
- [ ] Section CTAs:
  - "Start Your Home Search" (links to #buy-quiz)
  - "Get Your Free Market Analysis" (links to #sell-quiz)

### Task 7: Testimonial/Quote Section (Optional Enhancement)
**Dependencies**: Task 5
**Details**:
- [ ] Simple quote block with large quotation marks
- [ ] Placeholder testimonial text
- [ ] Client name and transaction type
- [ ] Background: subtle navy with gold accent border

### Task 8: Contact Section
**Dependencies**: Task 1
**Details**:
- [ ] Section title: "Let's Start Your Journey"
- [ ] Contact information display:
  - Email: globalluxuryrealty.com (with mailto link if confirmed)
  - Phone: +1(786) 501-9206 (with tel link)
- [ ] Final dual CTAs:
  - "I'm Ready to Buy" (links to #buy-quiz)
  - "I Want to Sell" (links to #sell-quiz)
- [ ] Simple contact form placeholder (Name, Email, Phone, Message) - optional

### Task 9: Footer
**Dependencies**: Task 1
**Details**:
- [ ] Dark navy background
- [ ] GLR logo/name
- [ ] Copyright: "© 2026 Global Luxury Realty. All rights reserved."
- [ ] Social media icon placeholders (Instagram, Facebook, LinkedIn)
- [ ] Quick links: Privacy Policy, Terms of Service (placeholder hrefs)

### Task 10: Animations & Interactions
**Dependencies**: Tasks 2-9
**Details**:
- [ ] Implement scroll-triggered fade-in animations using Intersection Observer
- [ ] Smooth scroll for anchor links
- [ ] Button hover effects (gold glow, slight scale)
- [ ] Navigation background opacity change on scroll
- [ ] Property card hover animations (lift, image zoom, border glow)
- [ ] Mobile menu open/close animation

### Task 11: Responsive Testing & Polish
**Dependencies**: Task 10
**Details**:
- [ ] Test all breakpoints: 320px, 375px, 768px, 1024px, 1440px, 1920px
- [ ] Verify text readability at all sizes
- [ ] Check button tap targets on mobile (minimum 44x44px)
- [ ] Verify all animations are smooth (no jank)
- [ ] Test navigation menu on mobile
- [ ] Verify all CTA placeholder links are in place

---

## CTA Copy Variations Reference

Use varied CTA copy throughout the page to avoid repetition:

### Buy Funnel CTAs (link to #buy-quiz):
- "Find Your Dream Home"
- "Start Your Home Search"
- "Explore Available Properties"
- "Begin Your Journey Home"
- "I'm Ready to Buy"
- "Discover Miami Living"

### Sell Funnel CTAs (link to #sell-quiz):
- "Discover Your Home's Value"
- "What's My Home Worth?"
- "Get Your Free Market Analysis"
- "See What Buyers Will Pay"
- "I Want to Sell"
- "Request Your Home Valuation"

---

## File Structure

```
GLR Homepage/
├── index.html              # Main single-page site
├── package.json            # NPM config
├── tailwind.config.js      # Tailwind configuration
├── src/
│   ├── input.css           # Tailwind directives + custom CSS
│   └── js/
│       └── main.js         # Scroll animations, mobile menu, nav effects
├── dist/
│   └── output.css          # Compiled Tailwind CSS
├── assets/
│   └── images/             # Property images (placeholders initially)
└── PRPs/                   # This PRP and references
```

---

## Validation Gates

### Per-Task Validation
- **Task 1**: Run `npx tailwindcss -i ./src/input.css -o ./dist/output.css` successfully, verify colors render
- **Task 2**: Navigation visible, mobile menu toggles, scroll effect works
- **Task 3**: Hero fills viewport, both CTAs visible and clickable
- **Task 4**: Property cards display in grid, hover effects work
- **Task 5**: Statistics display with strikethrough effect rendering correctly
- **Task 6**: Feature cards align properly on all breakpoints
- **Task 8**: Contact info displays, links are clickable (tel:, mailto:)
- **Task 10**: Scroll animations trigger correctly, no console errors
- **Task 11**: Lighthouse mobile score > 80

### Final Validation Checklist
- [ ] Open in Chrome DevTools, test all responsive breakpoints
- [ ] All 6+ Buy CTAs link to `#buy-quiz`
- [ ] All 6+ Sell CTAs link to `#sell-quiz`
- [ ] Page loads in under 3 seconds (test with Lighthouse)
- [ ] No horizontal scroll on any viewport
- [ ] All text passes WCAG AA contrast ratio
- [ ] Smooth scrolling works for all anchor links
- [ ] Mobile hamburger menu opens/closes correctly
- [ ] All hover animations are smooth (60fps)
- [ ] Email and phone contact info display correctly

---

## Quality Gates

### "No Prior Knowledge" Test
_"If someone knew nothing about this codebase, would they have everything needed to implement this successfully?"_

- [x] All color hex values explicitly provided
- [x] Font names and weights specified
- [x] File structure defined
- [x] CTA copy variations listed
- [x] Placeholder property data provided
- [x] Animation patterns documented in ai_docs
- [x] Contact information provided
- [x] Validation commands specified

---

## Confidence Score: 9/10

**Rationale**: This PRP provides comprehensive specifications including exact colors, typography, component structures, CTA copy variations, and validation criteria. The only uncertainty is:
- Final property images (using placeholders)
- Email format clarification (globalluxuryrealty.com vs info@globalluxuryrealty.com)
- Exact funnel URLs (using placeholder hrefs)

All of these can be easily swapped in after initial implementation.

---

## Post-Implementation Notes

After the page is built, the client needs to provide:
1. **Funnel URLs**: Replace `#buy-quiz` and `#sell-quiz` with actual quiz funnel URLs
2. **Property Photos**: 4 high-quality photos of sold luxury properties
3. **Property Details**: Actual addresses, sale prices, and any specific details
4. **Logo**: GLR logo file (PNG/SVG preferred)
5. **Hero Image**: High-quality Miami skyline or luxury property hero image
6. **Email Clarification**: Confirm if email is `info@globalluxuryrealty.com` or another format
