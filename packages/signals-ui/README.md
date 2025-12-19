# Signals UI

A minimalist, framework-agnostic component library where components respond to signals of intention, not rigid variants or configuration APIs.

## Philosophy

Signal UI is built on the idea that UI is driven by intention, not configuration. Components are simple, ownable files where props are signals of intent.

- **Ownership over abstraction** - Copy components into your project, no vendor lock-in
- **Intention over configuration** - Props are readable English signals, not complex APIs
- **Signals, not variants** - Static, declarative signals that affect behavior and appearance
- **Minimal foundation, infinite extension** - One foundation per component, everything else is opt-in

## Installation

```bash
npm install signalui
```

## Getting Started

Configure Tailwind to Include Signal UI Components

**Important**: You need to tell Tailwind CSS to scan the Signal UI package for component classes. This is done using the `@source` directive in your main CSS file.

In your main CSS file (usually `src/index.css` or `src/styles.css`), add:

```css
@import "tailwindcss";
@source "../node_modules/signalui";
```

**Explanation**: 
- `@import "tailwindcss";` imports the base Tailwind CSS directives
- `@source "../node_modules/signalui";` tells Tailwind to scan the installed package directory for CSS classes used in the components

**Note**: 
- `@source` directive takes relative path from your CSS file to the package directory.

## Basic Usage

```jsx
import { Button } from 'signalui';

function App() {
  return (
    <Button primary lg rounded hoverEnlarge>
      Continue
    </Button>
  );
}
```

## Components

### Button

A semantic button component that responds to signals of intention.

**Signals:**
- **Structural**: `primary`, `secondary`
- **Size**: `sm`, `md`, `lg`
- **Shape**: `rounded`, `pill`
- **Interaction**: `hoverEnlarge`, `hoverInvert`, `pressShrink`
- **JS-level**: `submitForm`, `confirmOnClick`

**Examples:**
```jsx
<Button primary>Primary Button</Button>
<Button secondary sm>Small Secondary</Button>
<Button lg rounded hoverEnlarge>Large Interactive</Button>
<Button submitForm>Submit Form</Button>
<Button confirmOnClick>Delete</Button>
```

## Signal Resolution

- Signals are grouped by category (size, tone, behavior)
- Only one signal per group is applied
- If multiple signals from the same group are passed, the last one is applied
- No runtime warnings, deterministic behavior

## Dependencies

- React (peer dependency, >=16.8.0)
- Tailwind CSS (for styling)

## License

MIT

---

**Published on npm as [signalui](https://www.npmjs.com/package/signalui)**
