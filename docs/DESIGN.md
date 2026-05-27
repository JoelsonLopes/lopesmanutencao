---
name: Lopes Industrial Cold Storage
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf1'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fa'
  on-surface: '#111c2c'
  on-surface-variant: '#44474e'
  inverse-surface: '#263142'
  inverse-on-surface: '#ebf1ff'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#495f82'
  primary: '#001026'
  on-primary: '#ffffff'
  primary-container: '#0b2545'
  on-primary-container: '#778db2'
  inverse-primary: '#b1c7f0'
  secondary: '#395f95'
  on-secondary: '#ffffff'
  secondary-container: '#9dc3ff'
  on-secondary-container: '#274f84'
  tertiary: '#1d0b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#3c1d00'
  on-tertiary-container: '#b38259'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#b1c7f0'
  on-primary-fixed: '#001c3b'
  on-primary-fixed-variant: '#314769'
  secondary-fixed: '#d5e3ff'
  secondary-fixed-dim: '#a7c8ff'
  on-secondary-fixed: '#001c3b'
  on-secondary-fixed-variant: '#1d477c'
  tertiary-fixed: '#ffdcc2'
  tertiary-fixed-dim: '#f3bb8e'
  on-tertiary-fixed: '#2e1500'
  on-tertiary-fixed-variant: '#643e1b'
  background: '#f9f9ff'
  on-background: '#111c2c'
  surface-variant: '#d8e3fa'
typography:
  display-lg:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Outfit
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 42px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-sm:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  mono-technical:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style

The design system is engineered to project **Industrial Reliability**, **Technical Precision**, and **Thermal Integrity**. It serves a maintenance company where failure is not an option; therefore, the UI must feel as stable and high-performing as the machinery it supports.

### Design Narrative
The style leverages **Modern Industrialism**. It moves away from generic corporate aesthetics toward a specialized "Steel and Ice" look. By combining high-contrast typography with a clinical, chilled color palette, the UI evokes the specific environment of cold room maintenance—sterile, organized, and technically advanced.

### Aesthetic Principles
- **Precision:** Elements are aligned to a strict grid to mirror engineering blueprints.
- **Clarity:** Excessive ornamentation is discarded in favor of legibility and rapid information retrieval.
- **Cold Tactility:** Subtle use of semi-transparent layers and "frosted" finishes to reinforce the refrigeration context.
- **High Utility:** Interaction points are oversized and high-contrast, ensuring they are functional even in high-stress maintenance scenarios.

## Colors

The palette is anchored in "Cold Industrial" tones, strictly avoiding any warm hues like purple, violet, or pink.

- **Primary (Deep Navy):** Represents the weight of industrial machinery and professional stability. Used for headers, primary buttons, and critical iconography.
- **Secondary (Steel Blue):** Bridges the gap between deep shadows and light surfaces. Used for secondary actions and active states.
- **Background (Ice White):** A cool-tinted white that prevents the "clinical" feel from becoming sterile, instead feeling refrigerated and fresh.
- **Technical Cyan & Emerald:** Used exclusively for high-priority actions (WhatsApp) and status indicators, providing a sharp "on/off" visual signal against the navy backdrop.

## Typography

This design system utilizes a tiered typographic approach to separate high-level branding from technical data.

- **Headlines (Outfit):** Set in Bold or Extra Bold. The geometric nature of Outfit suggests modern construction and architectural planning.
- **Body & Labels (Inter):** Chosen for its exceptional legibility in technical contexts. Body copy should maintain a generous line height (1.5x) to ensure readability against the light background.
- **Technical Labels:** Small, uppercase labels with increased letter spacing are used for categorizing equipment types or service statuses, mimicking industrial nameplates.

## Layout & Spacing

The layout philosophy is based on a **Fixed-Fluid Hybrid Grid**. 

### Grid System
- **Desktop:** 12-column grid with a 1200px max-width. Use 24px gutters to allow the UI to breathe.
- **Mobile:** Single column with 16px side margins. 
- **Industrial Rhythm:** Use an 8px base unit for all padding and margins to maintain mathematical consistency, reflecting the precision of mechanical engineering.

### Whitespace
Whitespace is treated as a functional element—"The Cold Air"—that prevents the technical information from feeling cluttered. Use `xl` (80px) spacing between major sections to emphasize the scale and professionalism of the operation.

## Elevation & Depth

To maintain the "Industrial" feel, this design system avoids soft, organic shadows in favor of **Tonal Layering** and **Frosted Glass**.

- **Surface Layers:** Depth is primarily created by shifting background colors. The main canvas is Ice White (#EEF4F8), while elevated cards use Pure White (#FFFFFF).
- **Hard Technical Shadows:** When shadows are necessary for interactivity (like on a primary CTA), use a low-blur, 15% opacity Navy shadow to make the element feel "weighted" and heavy rather than "airy."
- **Frosted Overlays:** Modals and navigation bars should use a backdrop-filter (blur: 10px) with a semi-transparent Ice White fill (80% opacity) to simulate the condensation on a cold room window.

## Shapes

The shape language is **Soft-Industrial**. 

- **Primary Radius:** A 4px (0.25rem) radius is applied to most UI components (buttons, input fields). This creates a "machined" look—not as sharp as raw steel, but not as soft as a consumer app.
- **Secondary Radius:** Larger containers (Cards) use an 8px radius to subtly distinguish them from smaller interactive components.
- **Icons:** Use thick-stroke (2px) icons with slightly rounded caps to match the font weight of Inter Medium.

## Components

### Buttons
- **Primary:** Deep Navy (#0B2545) with White text. Bold weight. Minimal 4px radius.
- **WhatsApp Action:** Technical Cyan (#00B4D8) background. This is the only "vibrant" element allowed to break the navy/steel theme to ensure immediate conversion.
- **Secondary:** Transparent with a 2px Steel Blue border.

### Input Fields
- **Industrial Spec:** Fields should have a light grey border (#D1D9E0) that darkens to Steel Blue on focus. Use a light blue tint (#F4F7F9) for the background to differentiate from the page surface.

### Status Chips
- **Active/Safe:** Emerald Green (#20BF55) background with 10% opacity and solid green text.
- **Maintenance Required:** Deep Navy background with white text (High contrast).

### Cards
- Use Pure White (#FFFFFF) surfaces with a 1px "Ice" border (#D1D9E0). No shadows unless the card is hoverable/interactive.

### Lists & Data
- Maintenance logs and equipment lists should use zebra-striping with Ice White and Pure White to maintain order in high-density information environments.