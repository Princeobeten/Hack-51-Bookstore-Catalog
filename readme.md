# 📚 Bookstore Catalog

Welcome to the **Bookstore Catalog**! This project is your one-stop shop (well, catalog) for browsing books with style and a hint of humor. Built with HTML, CSS, and JavaScript, it lets you search, filter, and bask in the glory of a *genre dropdown* that actually works. Oh, and there's a dark mode—because every developer needs their *light mode hater* persona.

## 🔧 Features

- **Rotating Banner**: Watch that banner cycle through book images like it’s getting paid per click.
- **Search & Filter**: A *genre filter* and a *search bar* that might just find what you’re looking for. (If it doesn’t, try spelling correctly. I dare you.)
- **Dark Mode**: Click the moon icon to toggle between “dark mode” and “I have no soul” mode.
- **Debounced Search**: Typing too fast? No worries—search input is debounced to prevent accidental *DoS* on your own code.

## 💻 Tech Stack

- **HTML**: Because this catalog needs some structure. We’re not barbarians.
- **CSS**: Styled like it’s going on a runway—featuring *glassmorphism*, neon blues, and shadow effects that will make you feel all fancy.
- **JavaScript**: The brain behind the beauty. Handles search, filtering, theme toggling, and banner image rotation.

## 🚀 Setup

1. Clone the repo.
2. Place your `hack51_sample_book.json` in the same directory. (No JSON, no books—sorry, not sorry.)
3. Run the HTML file in your favorite browser. (If that’s not Chrome, we don’t judge… much.)

## 🔍 The Code

### `script.js`

- **Banner Rotation**: Changes the banner image every 3 seconds. Purely for aesthetic reasons and to distract you from bugs.
- **Fetching Books**: Fetches from `hack51_sample_book.json`. If it fails, you’ll get a lovely error message—because we believe in “transparency.”
- **Filtering Logic**: Filters books by title, author, and genre. So good, it feels like black magic.
- **Theme Toggle**: Dark and light mode toggler that changes the icon for ✨ aesthetic purposes ✨.

### `style.css`

- **CSS Variables**: Defined colors, shadows, and whatnot, so you can change the look without breaking everything. Hopefully.
- **Glassmorphism**: The cards and header look like frosted glass. If that doesn’t impress you, nothing will.
- **Responsive Design**: Works on screens large and small because not everyone uses a 27" monitor to browse a catalog.

## 👀 Final Thoughts

The Bookstore Catalog: simple, stylish, and sarcastic. Designed to make you feel like a pro developer, even if you barely understand it. Enjoy, and may your code never throw a `null` pointer exception!

> “Why did the JavaScript developer break up with HTML? Because they didn't get any 'class'.”