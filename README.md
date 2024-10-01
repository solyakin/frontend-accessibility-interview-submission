# Dog Catalog Accessibility Exercise

## Project Overview

This project is a front-end-only React application where you can manage a catalog of dogs. The application includes the following pages:

1. **Catalog Page**: Displays cards with dogs. Each card contains the dog’s name and picture.
2. **Manage Page**: Allows you to add new dogs to the catalog.
3. **About Page**: Contains useful links for this exercise.

## Instructions for Building and Running the Application`

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run the application**:

   ```bash
   npm start
   ```

3. The app should now be running on [http://localhost:3000](http://localhost:3000).

## Accessibility Points to Fix

The following are the accessibility issues you need to fix. Each issue is categorized by page.

---

### **About Page (`About.tsx`)**

#### Category: Links

1. Change the links from `<span>` to `<a>` with the attributes `target="_blank"` and `rel="noopener noreferrer"`.
2. Update the link text to be more indicative and less ambiguous.
3. Add an underline to the links to improve visual distinction.

#### Category: Lists

1. Change the list of links to use `<ul>` and `<li>` elements without the default design (bullets).

#### Category: Headings

1. There are two `<h1>` elements. Change one of them to `<h2>` (choose the correct one).

#### Category: ARIA

1. On the button, add:
   - `tabIndex="0"`
   - `aria-label="Click this button to send feedback"`
   - `aria-role="button"`

   Add a comment in the code above the button explaining how we should handle this without using ARIA attributes.

---

### **Catalog Page (`Catalog.tsx`)**

#### Category: Alternative Text

1. Add an `alt` attribute to each dog's picture. The `alt` text should display the dog’s name.
2. Add an empty `alt` attribute to the website’s logo since it is decorative.

#### Category: Semantic HTML

1. Replace the button that is currently a `<div>` with a proper `<button>` element.

#### Category: Colors

1. Ensure the button on each dog card has a contrast ratio of at least 4.5:1 (including hover state).
You can use a contrast checker available on the About Page.

#### Category: Heading

1. Change the main title of the page from `<h3>` to `<h1>`.
2. In each DogCard, change the dog's name from an `<h3>` to an `<h2>`.

---

### **Manage Page (`Manage.tsx`)**

#### **Category: Forms**

1. Add a `<label>` element for each input in the form.
2. Ensure that each input has:
   - `id`
   - `name`
   - `placeholder` (you can refer to the `name` input as an example).
   - Add the corresponding `htmlFor` attribute to each `<label>`.

#### **Category: Alternative Text**

1. The picture below the form should not be reachable. Remove its `tabIndex` and `alt` attribute, as it is purely decorative.

#### **Category: Headings**

1. Change the page's title from `<h2>` to `<h1>`. Adjust the text size via CSS to avoid any visual changes.

---

### **General Navigation Changes**

#### **Category: Navigation**

1. The website contains two `<nav>` and two `<main>` sections. Remove one of each to follow proper semantic structure.

---

### **Font Size**

#### **Category: Font Size**

1. Change all font sizes across the website to use `rem` units instead of `px`. This will ensure accessibility for users who adjust text sizes in their browser.

---

Thank you for completing this exercise! The links on the About Page should assist you with contrast checking, accessibility testing, and more.

---

Let me know if you need to update or adjust anything!
