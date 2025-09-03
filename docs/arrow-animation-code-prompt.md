# Animated Growth Arrow Code Generation Prompt

## Task Description

Create a React component with Motion (Framer Motion) that renders an animated upward growth arrow for a business growth consulting website hero section. The arrow should be the centerpiece visual element indicating business growth and success.

## Technical Requirements

### Framework & Libraries
- **React** with TypeScript
- **Motion (Framer Motion)** for animations
- **TailwindCSS** for styling
- **Next.js 15** compatibility

### Component Specifications

#### File Structure
- Create component at: `src/components/growth-arrow.tsx`
- Export as named export: `GrowthArrow`
- Include TypeScript interfaces for props

#### Props Interface
```typescript
interface GrowthArrowProps {
  className?: string;
  delay?: number;
  size?: 'sm' | 'md' | 'lg';
}
```

## Animation Requirements

### 1. Arrow Path Animation
- **SVG-based curved path** that draws from bottom-left to top-right
- **Progressive path drawing** using `pathLength` animation
- **Duration**: 2.5-3 seconds
- **Easing**: Smooth, organic curve (easeInOut)
- **Path shape**: Elegant S-curve or smooth arc upward

### 2. Visual Styling
- **Stroke width**: 4-6px
- **Color gradient**: Blue to purple (#3B82F6 → #6366F1 → #8B5CF6)
- **Stroke cap**: Rounded ends
- **No fill**: Stroke only for the path

### 3. Arrow Head
- **Triangular arrow head** at the top
- **Appears after path completes** with spring animation
- **Scale animation**: From 0 to 1
- **Same gradient coloring** as path

### 4. Growth Indicators
- **3-4 circular dots** along the arrow path
- **Sequential appearance** (staggered timing)
- **Increasing sizes**: 2px → 4px → 6px → 8px radius
- **Colors**: Match gradient progression
- **Subtle shadow/glow effects**

### 5. Pulsing Effect
- **Continuous pulse** at arrow tip
- **Soft circular glow**
- **Opacity animation**: 0.3 → 1 → 0.3
- **Scale animation**: 1 → 1.5 → 1
- **Infinite loop** with 2-second duration

## Animation Sequence & Timing

```
0.0s - 0.5s: Component fade in
0.5s - 3.0s: Arrow path draws progressively
1.5s: First growth dot appears
2.0s: Second growth dot appears
2.5s: Third growth dot appears
3.0s: Arrow head appears with spring
3.5s: Pulsing effect starts (infinite loop)
```

## Responsive Design

### Size Variants
- **Small**: 80px width, 200px height
- **Medium**: 120px width, 300px height  
- **Large**: 160px width, 400px height

### Responsive Classes
```css
w-20 h-48 md:w-32 md:h-72 lg:w-40 lg:h-96
```

## Color Scheme & Gradients

### Primary Gradient
```css
Linear gradient: #3B82F6 → #6366F1 → #8B5CF6
Stops: 0%, 50%, 100%
```

### Growth Dots Colors
- Dot 1: #3B82F6 (blue-500)
- Dot 2: #6366F1 (indigo-500)  
- Dot 3: #8B5CF6 (purple-500)
- Dot 4: #A855F7 (purple-400)

## Performance Considerations
- Use `will-change: transform` for animated elements
- Optimize SVG viewBox for crisp rendering
- Minimal DOM manipulation
- Efficient animation timing

## Usage Example
```tsx
// In hero section
<GrowthArrow 
  className="absolute right-8 top-1/2 -translate-y-1/2" 
  delay={1} 
  size="lg" 
/>
```

## Quality Standards
- **Smooth 60fps animations**
- **No jank or stuttering**
- **Accessible** (respects prefers-reduced-motion)
- **Clean, readable code**
- **Proper TypeScript types**

## Expected Deliverables
1. Complete React component file
2. Proper TypeScript interfaces
3. Responsive design implementation
4. Smooth animation sequences
5. Professional visual quality

## Design Intent
The arrow should convey:
- **Upward growth and progress**
- **Professional sophistication**
- **Dynamic business success**
- **Premium brand quality**
- **Forward momentum**

Create code that produces a visually stunning, smooth animated arrow that serves as the hero visual element for a premium business growth consulting brand.