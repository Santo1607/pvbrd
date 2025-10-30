# Design Guidelines for Pavatharani's Birthday Website

## Design Approach
**Selected Approach:** Custom Celebration Experience inspired by modern event websites (Partiful, Paperless Post) combined with personal storytelling elements from social platforms like Instagram.

**Core Principle:** Create an immersive, emotionally resonant single-page experience that feels like unwrapping a gift — each section reveals something special as users scroll.

## Typography System

**Primary Font:** Google Fonts - "Playfair Display" (headings) for elegant, celebratory feel
**Secondary Font:** "Inter" (body text) for readability and modern contrast

**Hierarchy:**
- Hero Heading: 4xl-6xl (responsive), bold weight, letter-spacing tight
- Section Headings: 3xl-4xl, semibold
- Subheadings: xl-2xl, medium weight
- Body Text: base-lg, regular weight with 1.6 line height
- Captions: sm-base, light weight, italic for photo captions

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm

**Section Structure:**
- Each section: Full viewport width with py-16 to py-24 padding (responsive)
- Inner content containers: max-w-6xl mx-auto with px-6 to px-8
- Consistent vertical flow with generous breathing room between sections

**Grid Patterns:**
- Memories Gallery: 2-column grid on tablet (md:grid-cols-2), 3-column on desktop (lg:grid-cols-3)
- Blessing Cards: Masonry-style grid with varied positioning, 2-3 columns on desktop
- All grids collapse to single column on mobile

## Component Library

### Landing Section (Hero)
- Full viewport height (100vh) with centered content
- Large heading with stagger-fade animation on load
- Subtext with delayed fade-in (200ms after heading)
- Background: Animated confetti particles using canvas or CSS particles (20-30 elements floating upward)
- Optional floating balloon elements anchored to bottom corners

### Message Section
- Centered layout with max-w-3xl for optimal reading
- Message text in elegant container with subtle background treatment
- Typing animation effect OR glowing pulse animation on text
- Decorative quotation marks or heart icons flanking the message

### Memories Gallery
- Card-based layout with rounded corners (rounded-2xl)
- Image placeholders with 4:3 or 1:1 aspect ratio
- Captions positioned as overlays at bottom of each card
- Hover effect: Gentle scale (scale-105) and shadow expansion
- Image treatment: Subtle border or frame effect around each photo

### Blessings Section
- Floating card design with varied sizes (some larger, some smaller)
- Cards appear with stagger animation on scroll into view
- Each card: Soft shadow, rounded corners (rounded-xl), padding p-6 to p-8
- Random rotation (-2 to 2 degrees) for organic, scattered feel
- Messages display with fade-in animation sequentially

### Surprise Button
- Prominent placement: Center-aligned in dedicated section
- Large button size (px-8 py-4 text-lg minimum)
- Pulse animation on idle state to draw attention
- Click triggers: Music playback + fireworks overlay animation
- Fireworks: Canvas-based particles shooting upward from button position

### Footer
- Minimal height (py-12)
- Centered text with sparkle animation (twinkling stars using CSS keyframes)
- Small decorative elements (hearts, stars) scattered around text

## Animation Guidelines

**Entry Animations:**
- Sections fade-in with slight upward slide (20-30px) on scroll
- Stagger children elements by 100-150ms for polished reveal

**Interactive Animations:**
- Hover states: Transform scale (1.02-1.05), smooth 200ms transition
- Button clicks: Brief scale-down (0.98) then return for tactile feedback
- Continuous animations: Confetti float, balloon drift, sparkle twinkle

**Performance:** Use `will-change` sparingly, prefer CSS transforms over position changes

## Images Section

**Hero Section:** No large background image - use animated particle effects instead

**Memories Gallery Images:**
- 6 placeholder images needed
- Suggested dimensions: 800x800px or 800x600px
- Image descriptions for placeholders:
  1. "The laughter never ends 😄" - Friends laughing together
  2. "My forever drama queen 💅" - Playful candid moment
  3. "Unforgettable days 💫" - Special occasion memory
  4. "Adventures together 🌟" - Outdoor/activity shot
  5. "Forever grateful 💖" - Heartfelt moment
  6. "Here's to many more! 🎉" - Celebratory photo

Images should have subtle vignette or soft border treatment for cohesive gallery feel.

## Accessibility Considerations
- Maintain WCAG AA contrast ratios for all text
- Ensure animations can be paused or respect `prefers-reduced-motion`
- Provide text alternatives for decorative elements
- Keyboard navigation for surprise button and interactive elements

## Technical Implementation Notes
- Single-page application with smooth scroll behavior
- Audio player: Use HTML5 `<audio>` with user-initiated playback (surprise button)
- Confetti/Fireworks: Use lightweight canvas library or CSS animations
- Responsive breakpoints: Mobile (< 640px), Tablet (640-1024px), Desktop (> 1024px)
- Loading state: Brief fade-in on page load with initial confetti burst