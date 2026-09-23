# SpendWise Dashboard

## Project Description

SpendWise is a personal budget and expense tracking dashboard. For Week 4, I rebuilt the tracker layout using modern CSS Grid and Flexbox techniques.

The dashboard provides a visual overview of personal finances using realistic static financial information.

## Dashboard Features

The dashboard contains:

* Sidebar navigation menu
* Dashboard header
* Total budget summary
* Total spending summary
* Remaining budget summary
* Food category card
* Transport category card
* Rent category card
* Entertainment category card
* Savings category card
* Utilities category card

## CSS Grid and Flexbox

CSS Grid is used to create the main dashboard structure and arrange the category cards.

Flexbox is used to organize:

* Sidebar navigation items
* Header content
* Summary information
* Category card content

No absolute positioning is used for the page layout.

## CSS Custom Properties

The project uses CSS variables in the `:root` selector for the main theme, including:

* Brand color
* Accent color
* Background color
* Surface color
* Primary text color
* Secondary text color
* Border color

Using CSS variables keeps the color theme consistent and makes the design easier to maintain.

## Responsive Design

The dashboard is responsive and uses a media query below 768px.

On smaller screens:

* The sidebar and main content use a single-column layout.
* Navigation items become flexible and wrap when necessary.
* Summary sections stack vertically.
* Category cards display in one column.

The responsive layout was tested using the Chrome DevTools Device Toolbar at 400px width.

## Card Micro-interactions

The category cards include hover and keyboard focus interactions.

When a user hovers over or focuses on a card:

* The card moves slightly upward.
* A shadow appears.
* A visible focus outline appears for keyboard navigation.

The transition lasts 200ms, which is within the required 250ms limit.

## Dark Theme

A dark theme was added using the `prefers-color-scheme: dark` media query.

The dark theme works by overriding the existing CSS custom properties without changing the main layout structure.

## Technologies Used

* HTML5
* CSS3
* CSS Grid
* Flexbox
* CSS Custom Properties
* CSS Media Queries
* Chrome DevTools
* Git and GitHub
