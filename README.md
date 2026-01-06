# Signal Layers

A minimalist, intent-driven UI system where components are laws, not presets. You copy the code. You own it. You change it. The system guides you instead of trapping you.

Signal Layers exists because modern frontend UI has become over-configured, over-abstracted, and under-owned. This library fixes that through a revolutionary signal-based architecture where props are signals of intention, not configuration.

## 🚀 Quick Start

### Prerequisites

**Required Dependencies:**

```bash
react@>=16.8.0 
react-dom@>=16.8.0
tailwindcss@v4
```

### Installation & Setup

#### Option 1: Copy All Components (Recommended)
```bash
npx signal-layers copy
```
This copies all components to `src/components/signals/` in your project.

#### Option 2: Add Specific Components
```bash
npx signal-layers add button
npx signal-layers add card
npx signal-layers add dropdown
```

#### Option 3: List Available Components
```bash
npx signal-layers list
```

## 🧠 Architecture

Signal Layers introduces a revolutionary four-signal architecture:

### Signal Types

1. **Input Signals** (`inputSignal`)
   - Raw props passed to components
   - User intention for styling
   - Example: `primary`, `lg`, `onClick`, `disabled`

2. **Layer Signals** (`layerSignal`)
   - Mapped CSS classes and styling layers
   - Visual presentation logic
   - Example: Maps `primary` → `"bg-blue-500 text-white"`

3. **Data Signals** (`dataSignal`)
   - Processed and validated data
   - Component state and computed values
   - Example: Validated form values, computed dimensions

4. **State Signals** (`stateSignal`)
   - React hooks for interactivity
   - Hover, focus, ripple states
   - Example: `stateSignal.hover.get`, `stateSignal.ripples.set`

### Signal Resolution Rules

- **One signal per layer**: If multiple signals from the same layer are passed, the last one is applied
- **Deterministic**: No magic, no warnings, predictable behavior
- **Composable**: Signals can be combined freely
- **Optional**: All signals are opt-in

## 📦 Available Components

| Component | Description |
|-----------|-------------|
| **Button** | Interactive button with ripple effects |
| **Card** | Content container with layered styling |
| **CheckBox** | Custom checkbox with animations |
| **Dropdown** | Select dropdown with keyboard navigation |
| **FabMenu** | Floating action button menu |
| **ProgressBar** | Animated progress indicator |
| **Slider** | Range slider with drag interaction |
| **Spinner** | Loading spinner animations |
| **Switch** | Toggle switch with smooth transitions |
| **TextField** | Input field with validation states |

## 🎯 Usage Examples

### Basic Button
```jsx
import { Button } from './components/signals/Button.jsx';

// Simple usage
<Button onClick={() => console.log('clicked')}>Click me</Button>

// With signals
<Button primary lg hoverEnlarge>Primary Action</Button>

// Multiple signals
<Button ghost red sm hoverLift activeShrink>Ghost Button</Button>
```

### Interactive Components
```jsx
import { FabMenu } from './components/signals/FabMenu.jsx';

<FabMenu 
  icon="+"
  actions={[
    { icon: "📝", label: "New Document", onClick: () => {} },
    { icon: "📁", label: "Open File", onClick: () => {} },
    { icon: "💾", label: "Save", onClick: () => {} }
  ]}
/>
```

### Form Components
```jsx
import { TextField, CheckBox, Switch } from './components/signals';

<TextField placeholder="Enter your name" lg />
<CheckBox checked={isChecked} onChange={setIsChecked} />
<Switch on={isEnabled} onChange={setIsEnabled} />
```

## 🎨 Signal System

### Structural Signals (Identity)
Define what the component is:

**Tone/Style:** `primary`, `secondary`, `cta`, `ghost`, `neumorphism`
**Color:** `red`, `green`, `blue`, `yellow`, `purple`
**Size:** `xs`, `sm`, `md`, `lg`, `xl`
**Shape:** `square`, `rounded`, `pill`, `circle`

### Behavioral Signals (Interaction)
Define how it behaves:

**Hover:** `hoverEnlarge`, `hoverShrink`, `hoverLift`, `hoverFade`
**Active:** `activeShrink`, `activeRipple`, `activeExplode`
**Effects:** `ripple`, `innerShadow`, `noShadow`

### Layout Signals
**Display:** `block`, `inline`, `center`
**Border:** `border`, `noBorder`, `roundedBorder`

## 🔧 Advanced Usage

### Custom Signal Mapping
Each component contains a signal mapping section where you can customize how signals translate to CSS:

```jsx
// Inside Button.jsx
const layer = (name, scope = "btn") => (className) =>
  (layerSignal[scope] ||= {},
  layerSignal[scope][name] ||= [],
  (layerSignal[scope][name][0] = className));

// Composite Signal
  inputSignal.ghost && (
btn.shape("rounded-full"),
btn.shadow("shadow-none"),
btn.color("bg-transparent text-gray-800"),
btn.hover("hover:scale-110 hover:bg-gray-100/50 hover:text-gray-900"),
btn.active("active:scale-95 active:bg-gray-100/75 active:text-gray-900"),
btn.animation("transition-all duration-500 cursor-pointer")
)

// Individual Signals
inputSignal.xs      && btn.size("px-2 py-1 text-xs"),
inputSignal.sm      && btn.size("px-3 py-1.5 text-sm"),
inputSignal.md      && btn.size("px-4 py-2 text-base"),
inputSignal.lg      && btn.size("px-6 py-3 text-lg"),
inputSignal.xl      && btn.size("px-8 py-4 text-xl")
```

### State Management
Interactive components use state signals for React hooks:

```jsx
const state = (name, priority = 0, initial = false) => (
  (stateSignal._hooks ||= {})[name] ||= (() => {
    const [get, set] = useState(initial);
    return { get, set };
  })(),
  priority && (!stateSignal._priority || priority > stateSignal._priority) &&
    (stateSignal[name] = stateSignal._hooks[name], stateSignal._priority = priority)
);
```

## 🛠️ Development

### Component Structure
Each component follows this structure:

```jsx
export function ComponentName(contract = {}) {
  /* ────────────────────────────────────────────────────────────────────────────
   * CONTRACT
   * ──────────────────────────────────────────────────────────────────────────── */
  const [inputSignal, layerSignal, dataSignal, stateSignal] = [{ ...contract }, {}, {}, {}];
  
  /* ────────────────────────────────────────────────────────────────────────────
   * CONTRACT TOOLS
   * ──────────────────────────────────────────────────────────────────────────── */
  const layer = (name, scope = "root") => (className) => { /* ... */ };
  const data = (name, key = name) => { /* ... */ };
  const state = (name, priority = 0, initial = false) => { /* ... */ };
  
  /* ────────────────────────────────────────────────────────────────────────────
   * LAYERS
   * ──────────────────────────────────────────────────────────────────────────── */
  // Signal mappings here
  
  /* ────────────────────────────────────────────────────────────────────────────
   * RENDER
   * ──────────────────────────────────────────────────────────────────────────── */
  return (
    // JSX with className={classes(layerSignal.root)}
  );
}
```

## 📚 Philosophy

### Ownership Over Abstraction
- **Copy, don't import**: Components are copied into your project
- **No vendor lock-in**: You own the code completely
- **No hidden logic**: Everything is visible and editable
- **The file is the product**: Components are self-contained documentation

### Intention Over Configuration
- **No variant enums**: Use `primary`, not `variant="primary"`
- **No size schemas**: Use `lg`, not `size="large"`
- **Signals express intent**: Props describe what you want, not how to configure it
- **Composable API**: Mix and match signals freely

### HTML Already Has State
- **Respect browser behavior**: Use `:hover`, `:focus`, `:active`
- **Semantic HTML**: Proper elements and accessibility
- **Keyboard navigation**: Built-in browser support
- **No re-modeling**: Don't fight the platform

## 🤝 Contributing

Signal Layers follows the "copy and edit" philosophy. To contribute:

1. **Copy components** to your project
2. **Make changes** as needed
3. **Share improvements** with the community
4. **No PRs required** - this is a copy-first system

## 📄 License

MIT License - feel free to use, modify, and distribute.

## 🔗 Links

- **GitHub**: https://github.com/aryanbatras/minimalist-ui
- **Issues**: https://github.com/aryanbatras/minimalist-ui/issues
- **NPM**: https://www.npmjs.com/package/signal-layers

## Tailwind CSS Settings for Development

To get autocompletion and hover information for the signals,
add the following to your vscode settings.json :

"tailwindCSS.experimental.classRegex": [
  ["\\b\\w+\\s*\\(\\s*[\"'`]([^\"'`]*)[\"'`]"]
]
