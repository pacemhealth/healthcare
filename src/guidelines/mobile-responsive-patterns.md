# Mobile-Responsive Design Patterns for Pacem Health

## Overview
All pages have been optimized for mobile responsiveness. This document outlines the standard patterns to use for future development.

## Key Principles

### 1. **Responsive Spacing**
- **Vertical Padding**: Use `py-12 md:py-16` instead of fixed `py-16`
  - Mobile: 48px (3rem)
  - Desktop: 64px (4rem)
- **Margins**: Use `mb-8 md:mb-12` for section spacing
- **Gap**: Use `gap-6 md:gap-8` for grids

### 2. **Typography Sizing**

#### Page Titles (H1)
```tsx
className="text-3xl md:text-4xl lg:text-5xl"
```
- Mobile: 30px
- Tablet: 36px
- Desktop: 48px

#### Section Titles (H2)
```tsx
className="text-2xl md:text-3xl"
```
- Mobile: 24px
- Desktop: 30px

#### Subsection Titles (H3)
```tsx
className="text-xl md:text-2xl"
```
- Mobile: 20px
- Desktop: 24px

#### Body Text (Large)
```tsx
className="text-base md:text-lg lg:text-xl"
```
- Mobile: 16px
- Tablet: 18px
- Desktop: 20px

#### Body Text (Regular)
```tsx
className="text-base md:text-lg"
```
- Mobile: 16px
- Desktop: 18px

#### Statistics/Numbers
```tsx
className="text-4xl md:text-5xl"
```
- Mobile: 36px
- Desktop: 48px

### 3. **Grid Layouts**

#### 3-Column Product Grids
```tsx
className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
```
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns

#### 4-Column Stats Grids
```tsx
className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
```
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 4 columns

#### 2-Column Info Sections
```tsx
className="grid md:grid-cols-2 gap-8 md:gap-12"
```
- Mobile: 1 column
- Desktop: 2 columns

### 4. **Button Sizing**
```tsx
className="px-6 py-3 md:px-8 md:py-4 text-base md:text-lg"
```
- Mobile: Smaller padding (24px/12px), 16px text
- Desktop: Larger padding (32px/16px), 18px text

### 5. **Container Padding**
Always use responsive padding:
```tsx
className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
```
- Mobile: 16px
- Tablet: 24px
- Desktop: 32px

### 6. **Flex Layouts**
For button groups or horizontal elements that should stack on mobile:
```tsx
className="flex flex-col sm:flex-row gap-4"
```

## Standard Section Templates

### Hero Section
```tsx
<section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl">
      <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
        Page Title
      </h1>
      <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
        Description text
      </p>
    </div>
  </div>
</section>
```

### Content Section
```tsx
<section className="py-12 md:py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="mb-8 md:mb-12">
      <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Section Title</h2>
      <p className="text-gray-600">Section description</p>
    </div>
    {/* Content */}
  </div>
</section>
```

### Call to Action Section
```tsx
<section className="py-12 md:py-16 bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl md:text-4xl mb-4 md:mb-6">CTA Title</h2>
    <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 max-w-3xl mx-auto">
      CTA description
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link
        to="/path"
        className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors text-base md:text-lg"
      >
        Primary Action
      </Link>
      <Link
        to="/path"
        className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg hover:bg-white/20 transition-colors text-base md:text-lg"
      >
        Secondary Action
      </Link>
    </div>
  </div>
</section>
```

## Components

### NCD Challenge Section
The `NCDChallengeSection` component is fully responsive and can be imported as:
```tsx
import NCDChallengeSection from '../../../components/NCDChallengeSection';

// Then use in your page:
<NCDChallengeSection />
```

## Testing Checklist

When creating new pages, verify:
- [ ] All section padding uses `py-12 md:py-16`
- [ ] All headings use responsive text sizing
- [ ] All grids specify mobile, tablet, and desktop breakpoints
- [ ] Buttons stack vertically on mobile using `flex-col sm:flex-row`
- [ ] Container padding uses `px-4 sm:px-6 lg:px-8`
- [ ] Large text blocks use responsive sizing
- [ ] Gaps between elements are responsive

## Breakpoints Reference

Tailwind's default breakpoints:
- **sm**: 640px (small tablets)
- **md**: 768px (tablets)
- **lg**: 1024px (small desktops)
- **xl**: 1280px (large desktops)
- **2xl**: 1536px (extra large screens)

## Common Mistakes to Avoid

1. ❌ Fixed large padding: `py-16`
   ✅ Responsive padding: `py-12 md:py-16`

2. ❌ Fixed large text: `text-4xl`
   ✅ Responsive text: `text-3xl md:text-4xl`

3. ❌ Desktop-only grids: `grid-cols-3`
   ✅ Responsive grids: `grid md:grid-cols-2 lg:grid-cols-3`

4. ❌ Fixed gaps: `gap-12`
   ✅ Responsive gaps: `gap-8 md:gap-12`

5. ❌ Large mobile margins: `mb-12`
   ✅ Responsive margins: `mb-8 md:mb-12`
