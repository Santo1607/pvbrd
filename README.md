# 🎂 Birthday Website for Pavatharani

A beautiful, animated single-page birthday website with confetti, memories, blessings, and interactive surprises!

## ✨ Features

- 🎉 **Animated Confetti Background** - Colorful particles falling continuously
- 💝 **Hero Section** - Large birthday greeting with animated hearts and sparkles
- 💌 **Heartfelt Message** - Personal birthday message with glowing animation
- 📸 **Memories Gallery** - 6 photo cards with captions and hover effects
- 🌈 **Floating Blessings** - Animated blessing cards that appear with stagger effect
- 🎁 **Surprise Button** - Click to trigger fireworks and birthday music!
- ✨ **Sparkle Footer** - Animated footer with twinkling stars

## 🚀 Quick Start

### On Replit (Current Setup)
Just click "Run" and the website will start automatically!

### Locally in VS Code
1. Download this project as a zip file from Replit
2. Extract and open in VS Code
3. Run these commands:
   ```bash
   npm install
   npm run dev
   ```
4. Open http://localhost:5000 in your browser

## 📝 Customization

**See the full [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) for detailed instructions!**

Quick tips:
- **Change photos**: Replace images in `attached_assets/generated_images/`
- **Change music**: Update the audio URL in `client/src/components/SurpriseButton.tsx`
- **Edit message**: Modify text in `client/src/components/MessageSection.tsx`
- **Change name**: Update `client/src/components/HeroSection.tsx`

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript
- **Styling**: Tailwind CSS + Custom Animations
- **UI Components**: Shadcn/ui
- **Build Tool**: Vite
- **Backend**: Express.js (serving the frontend)

## 📁 Project Structure

```
client/
  ├── src/
  │   ├── components/     # Reusable React components
  │   ├── pages/          # Page components
  │   └── index.css       # Global styles and animations
  └── public/             # Static assets
attached_assets/
  └── generated_images/   # Photo gallery images
```

## 🎨 Color Scheme

The website uses a beautiful pink/purple theme that works in both light and dark modes:
- Primary: Pink (#C2185B)
- Accents: Purple, Yellow, Blue gradients
- Smooth animations and transitions throughout

## 📱 Responsive Design

Fully responsive and looks great on:
- 📱 Mobile phones
- 📱 Tablets
- 💻 Desktop computers

---

Made with 💖 for Pavatharani's special day!
