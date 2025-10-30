# 🎉 How to Customize & Run Your Birthday Website

## 📸 Changing the Pictures

### Option 1: Quick Replace (Easiest)
1. Go to the `attached_assets/generated_images/` folder
2. Replace the 6 image files with your own photos
3. **Important:** Keep the same filenames or update them in the code

### Option 2: Use Your Own Images
1. Add your photos to `attached_assets/generated_images/` folder
2. Open `client/src/components/MemoriesGallery.tsx`
3. Update the import paths at the top:

```tsx
// Change these lines to match your image filenames
import image1 from '@assets/generated_images/YOUR_IMAGE_1.png';
import image2 from '@assets/generated_images/YOUR_IMAGE_2.png';
// ... and so on
```

4. Update the captions in the `memories` array if you want different text

---

## 🎵 Changing the Music

### Easy Method:
1. Find a Happy Birthday MP3 file (or any song you want)
2. Go to `client/src/components/SurpriseButton.tsx`
3. Find line 13 where it says:
   ```tsx
   const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
   ```
4. Replace the URL with:
   - Your own music URL, OR
   - A local file path like `'/birthday-music.mp3'` (place the file in `client/public/` folder)

### Recommended Free Music Sources:
- **Pixabay Music**: https://pixabay.com/music/
- **Incompetech**: https://incompetech.com/
- **Bensound**: https://www.bensound.com/

---

## 💻 Running in VS Code

### Step 1: Download from Replit
1. In Replit, click the **three dots menu (⋮)** in the top right
2. Select **"Download as zip"**
3. Save and extract the zip file to your computer

### Step 2: Open in VS Code
1. Open VS Code
2. Click **File → Open Folder**
3. Select the extracted project folder

### Step 3: Install Dependencies
Open the terminal in VS Code (Terminal → New Terminal) and run:

```bash
npm install
```

### Step 4: Run the Website
In the terminal, run:

```bash
npm run dev
```

Then open your browser and go to: **http://localhost:5000**

---

## 🎨 Quick Customization Tips

### Change the Name
Open `client/src/components/HeroSection.tsx` and change "Pavatharani" to any name you want!

### Edit the Birthday Message
Open `client/src/components/MessageSection.tsx` and update the message text.

### Modify Blessing Cards
Open `client/src/components/BlessingsSection.tsx` and edit the `blessings` array to add your own wishes.

### Change Colors
Edit `client/src/index.css` to modify the color scheme (look for the CSS variables at the top).

---

## 🚨 Troubleshooting

**Images not showing?**
- Make sure image paths match exactly (case-sensitive!)
- Check that images are in the correct folder

**Music not playing?**
- Try clicking the button twice
- Check browser console for errors (F12)
- Make sure the audio URL or file path is correct

**Website won't start?**
- Make sure you ran `npm install` first
- Check that Node.js is installed (run `node --version`)
- Try deleting `node_modules` folder and running `npm install` again

---

## 📱 Sharing Your Website

Once you're happy with it, you can:
1. **Publish on Replit**: Click the "Publish" button in Replit
2. **Deploy to Vercel/Netlify**: Free hosting for static sites
3. **Share the link**: Send the URL to friends!

---

Need help? The code is well-organized and commented. Happy customizing! 🎉
