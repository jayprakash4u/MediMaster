# Industrial Color System

## Overview

This project uses a professional, industrial-grade color palette designed for enterprise applications. The system is built around three core principles:

1. **PrimaryTeal / Aqua** - Interaction Layer (Buttons, Labels, Accents)
2. **Deep Navy** - Branding Layer (Logo, Typography, Illustration)
3. **Neutral Light Blue/Grey** - Surface Layer (Input fields, Card shadows)

## Color Scales

### 1. PrimaryTeal / Aqua - Interaction Layer

Used for interactive elements that guide user actions.

**Teal (Primary Actions)**
- `teal-500` (`#14B8A6`) - Main primary color for buttons, primary CTAs
- `teal-400` (`#2DD4BF`) - Hover states, secondary emphasis
- `teal-600` (`#0D9488`) - Active states, darker accents

**Aqua (Accents & Highlights)**
- `aqua-500` (`#06B6D4`) - Secondary actions, badges, highlights
- `aqua-400` (`#38D9E8`) - Lighter accents
- `aqua-600` (`#0891B2`) - Darker accents

**Cyan (Tertiary)**
- `cyan-400` (`#22D3EE`) - Additional accent color

### 2. Deep Navy - Branding Layer

Core brand identity elements - logos, headings, navigation.

**Navy (Brand Colors)**
- `navy-500` (`#3B66E2`) - Main brand color
- `deepNavy-600` (`#254DC8`) - Deep navy primary (headings, nav)
- `deepNavy-700` (`#1A3BA8`) - Darker brand elements
- `deepNavy-900` (`#0F1F4D`) - Near-black navy (top bars, footers)

**DeepNavy (Dark UI)**
- `deepNavy-600` (`#262626`) - Dark backgrounds
- `deepNavy-700` (`#1F1F1F`) - Darker surfaces
- `deepNavy-900` (`#1A1A1A`) - Near-black

### 3. Neutral Light Blue/Grey - Surface Layer

Structural elements, backgrounds, cards, inputs.

**Gray (Backgrounds & Surfaces)**
- `gray-50` (`#FBFCFD`) - Pure white backgrounds
- `gray-100` (`#F5F7FA`) - Light card backgrounds
- `gray-200` (`#E8ECF0`) - Hover states
- `gray-300` (`#D5D9E0`) - Borders
- `gray-400` (`#A4A9B4`) - Disabled text

**Neutral (Cards & Paper)**
- `neutral-50` (`#FFFFFF`) - White cards, paper
- `neutral-100` (`#F9FAFB`) - Off-white surfaces
- `neutral-300` (`#E5E7EB`) - Input borders
- `neutral-500` (`#6B7280`) - Placeholder text

**Slate (Text & Content)**
- `slate-50` (`#F8FAFC`) - Light backgrounds
- `slate-700` (`#334155`) - Dark text
- `slate-900` (`#020617`) - Near-black text

**Blue**
- Standard blue scale for compatibility

### Semantic Colors

For status, feedback, and functional indicators:

- `success` (`#10B981`) - Success states, positive feedback
- `warning` (`#F59E0B`) - Warnings, caution
- `error` (`#EF4444`) - Errors, destructive actions
- `info` (`#06B6D4`) - Information, neutral feedback

### Background & Surface

Specialized color tokens:

- `background.DEFAULT` (`#F9FAFB`) - Main page background
- `background.dark` (`#1F2937`) - Dark backgrounds
- `background.card` (`#FFFFFF`) - Card backgrounds
- `foreground.DEFAULT` (`#1F2937`) - Primary text
- `foreground.muted` (`#6B7280`) - Secondary text

### Border & Shadow

- `border` (`#E5E7EB`) - Default borders
- `input` (`#D5D9E0`) - Input field borders
- `ring` (`#14B8A6`) - Focus rings

## Usage Guidelines

### Buttons & Interactive Elements

**Primary Actions** (teal-500)
```jsx
<button className="bg-teal-500 hover:bg-teal-600 text-white">
  Primary Action
</button>
```

**Secondary Actions** (deepNavy-600)
```jsx
<button className="bg-deepNavy-600 hover:bg-deepNavy-700 text-white">
  Secondary Action
</button>
```

**Accent Actions** (aqua-500)
```jsx
<button className="bg-aqua-500 hover:bg-aqua-600 text-white">
  Accent Action
</button>
```

**Outline Buttons**
```jsx
<button className="border-2 border-teal-500 text-teal-500 hover:bg-teal-50">
  Outline Action
</button>
```

### Typography

**Headings** (deepNavy)
```jsx
<h1 className="text-4xl font-bold text-deepNavy-900">
  Main Heading
</h1>
```

**Body Text** (slate)
```jsx
<p className="text-slate-700">
  Regular body content with excellent readability.
</p>
```

**Muted Text**
```jsx
<p className="text-slate-500">
  Secondary information.
</p>
```

### Cards & Surfaces

```jsx
<div className="bg-white rounded-xl border border-gray-200 shadow-card">
  {/* Card content */}
</div>
```

### Input Fields

```jsx
<input 
  className="border-gray-300 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10" 
/>
```

### Labels & Badges

**Teal Badge**
```jsx
<span className="bg-teal-100 text-teal-800 px-2 py-1 rounded-full text-xs">
  New
</span>
```

**Aqua Badge**
```jsx
<span className="bg-aqua-100 text-aqua-800 px-2 py-1 rounded-full text-xs">
  Featured
</span>
```

**Navy Badge**
```jsx
<span className="bg-deepNavy-100 text-deepNavy-800 px-2 py-1 rounded-full text-xs">
  Premium
</span>
```

### Shadows

```jsx
/* Subtle shadow */
<div className="shadow-sm">...</div>

/* Default card shadow */
<div className="shadow-card">...</div>

/* Elevated card */
<div className="shadow-lg">...</div>

/* Teal glow effect */
<div className="shadow-glowTeal">...</div>
```

## Tailwind Configuration

All colors are defined in `tailwind.config.js` and available via Tailwind classes:

- `bg-teal-500` - Background teal
- `text-deepNavy-900` - Text navy
- `border-gray-300` - Border gray
- `shadow-card` - Card shadow
- `hover:bg-teal-600` - Hover states
- `focus:ring-teal-500/10` - Focus rings

## Design Principles

1. **High Contrast**: Deep navy text on light backgrounds ensures WCAG AA accessibility
2. **Clear Hierarchy**: Primary actions use teal, secondary use navy, accents use aqua
3. **Industrial Feel**: Subtle shadows and clean borders create professional depth
4. **Consistent Spacing**: Use Tailwind's spacing scale (4, 6, 8, 12, 16, 24, etc.)
5. **Meaningful Color**: Semantic colors for status, brand colors for identity

## Accessibility

- Text contrast ratios meet WCAG 2.1 AA standards
- Focus states are clearly visible with `ring` classes
- Color is not the only means of conveying information
- Disabled states use `gray-400` and reduced opacity

## Migration Guide

### From Old Colors

| Old | New |
|-----|-----|
| `#0B1F3A` | `deepNavy-900` |
| `#2563EB` | `deepNavy-600` or `blue-600` |
| `#2BB675` | `teal-500` |
| `#F4F6F9` | `gray-100` |
| `#FFFFFF` | `neutral-50` |

### Example Migration

```jsx
// Before
<div style={{ backgroundColor: "#F4F6F9" }}>
  <button style={{ backgroundColor: "#2563EB" }}>
    Click
  </button>
</div>

// After
<div className="bg-gray-100">
  <button className="bg-deepNavy-600 hover:bg-deepNavy-700 text-white">
    Click
  </button>
</div>
```

## Plugins

The following Tailwind CSS plugins are installed:

- `@tailwindcss/typography` - For rich text content
- `@tailwindcss/forms` - Form styling
- `@tailwindcss/aspect-ratio` - Aspect ratio utilities

## Custom Animations

Defined animations for professional transitions:

```jsx
<div className="animate-fade-in">...</div>
<div className="animate-slide-up">...</div>
<div className="animate-scale-in">...</div>
```

## Best Practices

1. **Use semantic color names** where possible (primary, secondary, success)
2. **Reserve teal for interactive elements** to maintain clear affordances
3. **Use deep navy for brand elements** to establish identity
4. **Leverage neutral surfaces** to create visual hierarchy
5. **Apply consistent shadows** for depth and elevation
6. **Test contrast ratios** when introducing new color combinations
7. **Use focus-visible states** for keyboard navigation

## Browser Support

All colors use standard hex codes with full browser support:
- Chrome/Edge: Full support
- Firefox: Full support  
- Safari: Full support
- IE11: Fallback support with appropriate polyfills
