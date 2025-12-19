# Signal UI

Signal UI is a source-first, intent-driven UI system where components are laws, not presets.
You copy the code. You own it. You change it. The system guides you instead of trapping you.

This project exists because modern frontend UI has become over-configured, over-abstracted, and under-owned.
Signal UI fixes that.

## Getting Started

Copy components directly into your project with a single command:

```bash
# Copy all components
npx signals-ui@latest copy

# Add a specific component
npx signals-ui@latest add button
```

All components will be copied to your project folder. 

No dependencies, no lock-in.

## Why Signal UI Exists

Modern component libraries suffer from the same disease:

- Too many variants to remember
- Configuration APIs instead of language
- Hidden behavior inside helpers
- Design systems that scale visually but not mentally
- Copy-paste culture without understanding
- "Customizable" components that resist real change

Libraries either:
- Lock you in, or
- Leave you alone without structure

Signal UI does neither.

Signal UI gives you structure without ownership loss
and freedom without chaos

## Core Philosophy

### 1. Ownership is non-negotiable

- Components are copied into your project
- There is no runtime dependency
- No hidden logic
- No black boxes
- Once copied, the code is yours.
- Signal UI ends the moment the file lands in your repo.

### 2. Intent over configuration

We do not configure components.
We declare intent.

```jsx
<Button primary compact hoverMotion />
```

Not:

```jsx
<Button variant="primary" size="sm" animation="hover-scale" />
```

Intent is:
- readable
- memorable
- human

### 3. Signals are language

A signal is a boolean prop expressing intent.

- No key–value pairs
- No enums
- No variants
- No schemas
- Presence = meaning.

```jsx
danger
compact
hoverMotion
```

Signals do not do anything.
They are read and interpreted.

### 4. HTML already has state — we respect it

Signal UI does not re-model state.
We rely on:
- semantic elements
- `:hover`, `:focus-visible`, `:active`
- keyboard navigation
- native accessibility

We listen and style.
We do not replace.

## The Mental Model (Read This Carefully)

Signal UI has a strict conceptual flow.
This is the entire system.

### 1️⃣ Signal Contracts (Foundation)

Everything starts with a Signal Contract.
A contract defines:
- what the component is
- what it guarantees
- what it allows
- what it forbids

A contract:
- does NOT define styles
- does NOT define behavior
- does NOT contain logic

It defines design constraints.
Think of it as the constitution of a component.

### 2️⃣ Signal Layers (Responsibility Planes)

Contracts declare Signal Layers.
A layer is a responsibility boundary.

Common layers:
- Foundation
- Visual
- Behavior
- Composition
- Accessibility (a11y)

Layers:
- interpret signals
- never create intent
- never talk to each other implicitly

Layers prevent chaos by localizing meaning.

### 3️⃣ Intent Slots (Where meaning is read)

Inside each layer exist Intent Slots.
An intent slot is:
- a named place
- where signals are interpreted

Example:
- Visual layer → tone slot
- Behavior layer → motion slot

Slots make files:
- editable
- teachable
- safe to extend

They are designed emptiness.

### 4️⃣ Signals (Boolean only)

Signals are:
- boolean
- explicit
- readable
- optional

They express what the user wants, not how it's done.
Signals are not reactive systems.
They are inputs.

### 5️⃣ Signal Groups (Semantic Compression)

A signal group allows one signal to trigger multiple reactions.

Example:
```jsx
danger
```

Internally:
- visual layer turns red
- behavior layer adds feedback
- a11y layer increases contrast

The user never coordinates this.
The system does.

### 6️⃣ Shared Signals (For complex systems)

Complex components (Menu, Navbar, Card) may share signals.
Shared signals:
- live in separate files
- remain boolean
- unify behavior across components

Still:
- no values
- no magic
- no coupling

## Component Structures

Signal UI supports two structures, depending on scale.

### A) Single-file (JS / JSX)

For:
- solo developers
- quick prototypes
- learning
- small systems

Everything lives in one file.
The file is the documentation.

### B) Foldered (TS / Enterprise)

For:
- teams
- contributors
- audits
- long-lived systems

Each component becomes a small system:
- contract
- shared signals
- layers
- orchestrator

Same philosophy.
Different organization.

## Extensibility Philosophy

Signal UI does not add features through plugins.
Extensibility happens through:
- copying files
- adding layers
- editing intent slots
- introducing new signals

Motion libraries:
- are optional
- belong in behavior layers
- can be replaced or removed

Signal UI never enforces:
- Framer Motion
- GSAP
- Anime.js

It allows them.

## Accessibility Philosophy

Accessibility is:
- explicit
- local
- visible

There is no hidden a11y helper.
Every component:
- uses semantic HTML
- exposes keyboard paths
- documents its guarantees

This makes accessibility auditable.

## Community & Contribution Model

Signal UI grows horizontally.
Community contributions are:
- intent slot implementations
- signal packs
- behavior layers
- examples

Nothing auto-installs.
Nothing mutates your files.
You choose what enters your codebase.

## What Signal UI Is NOT

- Not a theme system
- Not a variant library
- Not a design kit
- Not a visual identity

Signal UI does not make apps look unique.
It makes uniqueness unavoidable.

## Final Definition

Signal UI is a component system built on intent.
Components are contracts.
Props are signals.
Signals are interpreted through layers.
Layers expose intent slots.
Code is owned, readable, and changeable.
Nothing is hidden. Nothing is forced.
This is not a shortcut.
This is a foundation.