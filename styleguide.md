# Styleguide: Recipe Finder (Mid-Fidelity Prototype)

This styleguide documents the design tokens, visual elements, typography, and UI components used in the Recipe Finder mid-fidelity interactive prototype.

---

## 1. Design Overview & Principles

- **Fidelity**: Mid-Fidelity Wireframe / Interactive Prototype.
- **Concept**: Natural language "Mad Libs" sentence interface with dynamic recipe card generation.
- **Aesthetic**: Minimalist, content-focused, and neutral (unbranded). Prioritizes clean layout hierarchy, clear contrast, and intuitive controls for usability testing.

---

## 2. Color Palette

| Token / Role | Hex Code | Visual Preview & Description |
| :--- | :--- | :--- |
| **Page Background** | `#fdfdfd` | Clean, subtle off-white background to reduce glare |
| **Surface / Card Background** | `#ffffff` | Pure white background for card containers |
| **Placeholder Fill** | `#f9f9f9` | Very light neutral fill for image wireframe boxes |
| **Primary Text / Headings** | `#111111` / `#222222` | Deep charcoal / near-black for high contrast readability |
| **Secondary / Body Text** | `#555555` | Medium gray for descriptions and supplementary information |
| **Subtle / Meta Text** | `#666666` | Muted gray for empty states and helper notes |
| **Primary Accent (Interactive)** | `#2563eb` | Royal blue used for hover states, focus rings, and active dropdown options |
| **Accent Tint (Hover Surface)** | `#eff6ff` | Soft ice blue background highlight on dropdown hover/focus |
| **Borders & Dividers** | `#d1d5db` | Light gray border for recipe cards and tags |
| **Section Divider** | `#e0e0e0` | Dashed horizontal divider separating sentence interface and results |
| **Wireframe Placeholder Stroke** | `#bbbbbb` | Light-medium gray diagonal crosslines (`X`) |

---

## 3. Typography System

**Font Family**: System UI Stack  
`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`

| Level | Size | Weight | Transform / Spacing | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Sentence Interface** | `2.25rem` (~36px) | `700` (Bold) | Uppercase, `letter-spacing: 0.05em` | Main conversational Mad-Libs prompt |
| **Section Heading** | `1.5rem` (24px) | `800` (Extra Bold) | Uppercase, `letter-spacing: 0.05em` | "RECIPES" results heading |
| **Card Title** | `1.1rem` (~17.6px) | `700` (Bold) | Normal, `line-height: 1.3` | Recipe title on cards |
| **Tag Badges** | `0.7rem` (~11.2px) | `600` (Semi-Bold) | Uppercase | Category tags (Craving, Time, Ingredient) |
| **Body / Description** | `0.85rem` (~13.6px) | `400` (Regular) | Normal, `line-height: 1.4` | Recipe summary text |

---

## 4. UI Components

### 4.1 Sentence Interface & Dropdowns
- **Layout**: Stacked uppercase sentences using Flexbox (`gap: 16px`).
- **Input Style**: Native `<select>` inputs styled as fill-in-the-blank underlined blanks:
  - **Default State**: Transparent background, bold uppercase text (`#111111`), `border-bottom: 3px solid #111111`.
  - **Hover State**: Turns blue (`#2563eb`) with matching blue bottom border and a soft blue background (`#eff6ff`).
  - **Focus State**: Maintains blue active indicator (`#2563eb`) for keyboard navigation.
  - **Transition**: `color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease`.

### 4.2 Recipe Cards
- **Container**: Minimal card box with `1px solid #d1d5db` border, `border-radius: 4px`, and subtle elevation (`box-shadow: 0 1px 3px rgba(0,0,0,0.05)`).
- **Image Wireframe Placeholder**:
  - `1:1` square aspect ratio.
  - `2px solid #222222` outer box.
  - Inner vector SVG `X` stroke (`#bbbbbb`) replicating paper sketch conventions.
- **Tag Badges**:
  - Pill badges (`#f3f4f6` background, `#374151` text, `#e5e7eb` border) showing filter attributes.
- **Description**:
  - Concise two-line overview text in medium gray (`#555555`).

### 4.3 Empty / Fallback State
- Muted italic text (`#666666`) spanning the full width of the results section when no recipe matches the selected criteria.

---

## 5. Layout & Spacing

- **Max Container Width**: `800px` centered with auto margins (`margin: 0 auto`).
- **Page Padding**: `40px 20px`.
- **Card Grid**: CSS Grid with `repeat(auto-fit, minmax(220px, 1fr))` and `24px` gutters.
- **Section Spacing**: `50px` top margin with `30px` padding above the results grid.

---

## 6. Interaction & Architecture

- **State Management**: Reactive filtering in pure JavaScript (`app.js`).
- **Data Source**: Local JSON array (`recipes.json`) containing 90 structured recipes.
- **Event Handling**: Dropdown `change` events dynamically filter and re-render matching recipe cards.
