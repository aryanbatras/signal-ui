# Signals UI — Compact Authoritative Summary

## One-line Definition
Signal UI is a source-first, minimalist, framework-agnostic component library where props are signals of intention, not configuration. Users copy files, own the code, and edit behavior directly.

## Core Non-Negotiable Principles

### 1. Ownership over abstraction
- Components are copied into the user's repo
- No vendor lock-in, no runtime dependency
- No hidden logic, helpers, or black boxes
- The file is the product — users read, edit, and ship it

### 2. Intention over configuration
- No `variant="primary"`, no sizes enums, no schemas
- Props are plain English signals: `primary`, `lg`, `hoverEnlarge`
- Signals express what the user wants, not how it's configured

### 3. Signals (what they are / are not)
- Signals = static, declarative inputs
- They are not reactive systems, observers, state, or Solid/React signals
- Components simply read props → output classes/attributes

### 4. Signals, not variants
- No variant explosion
- No combinatorial APIs
- Signals are composable, optional, readable

### 5. Minimal foundation, infinite extension
Each component ships with:
- One semantic foundation
- Zero forced variations
- Everything else is opt-in and user-editable

### 6. HTML already has state — respect it
- HTML provides `:hover`, `:focus`, `:active`, keyboard, semantics
- Signal UI listens to HTML state and styles on top
- Never re-model browser behavior

## Signal Types

### A. Structural signals (identity)
Define what the component is.
- Examples: `primary`, `secondary`, `sm`, `lg`
- Grouped (tone, size, shape)
- Only one per group applies
- If multiple → last one wins
- No warnings, no magic

### B. Behavioral signals (interaction intent)
Define how it behaves.
- Verb-intent naming: `hoverEnlarge`, `pressShrink`, `focusJump`
- Optional, expressive, memorable
- Not bulk-loaded

### C. JS-level signals
Map intent to tiny inline JS behavior.
- Examples: `submitForm`, `confirmOnClick`
- Implemented inline, explicitly
- No helpers or abstractions

## Signal Resolution Rules (Critical)
- Signals are grouped (tone, size, behavior)
- One signal per group
- Multiple passed → last wins
- Deterministic, readable, low cognitive load
- No runtime validation or warnings

## Mandatory Component File Structure
Every component file must contain:
- Docblock at top (this is the documentation)
- Title + one-line summary
- Foundation
- Signals grouped (structural / size / interaction / JS-level)
- Defaults
- 1–2 usage examples
- Single exported function: `export function ComponentName(props) { ... }`
- Explicit props: Signals first, then `className`, `children`, `...props`
- Single classes array
- One-line `if (signal) classes.push("...")`
- No maps, no resolvers, no helpers, no filters
- Clear commented sections:
  - Foundation
  - Tone / Visual
  - Size
  - Shape
  - Interaction
  - JS behavior
  - Escape hatch
- Return semantic HTML
- Spread `...props`
- `className={classes.join(" ")}`

## Coding Rules (Strict)
- Boring, explicit JS/JSX
- No helper functions
- No class maps
- No config files
- No DSLs
- No Tailwind configs or preview tooling shipped
- Accessibility included inline (semantic element, focus-visible)

## Menus & Complex Widgets Pattern
Public API: one exported component (e.g. `Menu.jsx`)
- Accepts:
  - `items` array
  - top-level signals (`compact`, `dark`, `alignRight`)
- Internals:
  - `MenuButton.jsx`, `MenuList.jsx`, `MenuItem.jsx`
  - Live in same copied folder
  - Meant to be edited by the user
- Signals cascade inward
- Minimal inline keyboard logic (arrows, Enter, Escape)
- No external state machines
- Items shape example: `{ label, onPress, href?, divider?, danger?, icon? }`

## Documentation Rules
- The file is the documentation
- No external docs required to use components
- Comments explain intent and defaults
- External docs only optional for philosophy

## CLI Philosophy (Later)
- CLI only copies files
- No generators, no prompts, no intelligence
- Ownership stays local

## Community & Extension
- Community shares plain files
- Users manually copy what they want
- No plugins, no auto-install
- Grows horizontally, never bloated

## Final Frozen Definition
Signal UI is a minimalist component library built on intention over configuration.
- Components are simple, ownable files.
- Props are signals.
- Signals express intent.
- HTML provides state.
- We only listen and style.
- Nothing more. Nothing less.