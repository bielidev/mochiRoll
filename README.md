# Mochi Roll

A high-fidelity terminal-inspired media library dashboard built with **React**, **TypeScript**, and **Tailwind CSS**. This interface features a retro-futuristic cyberpunk aesthetic, leveraging a custom design system based on deep obsidian tones and neon accents.

---

## Technical Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Custom Theme)
- **Icons:** Google Material Symbols
- **Fonts:** Plus Jakarta Sans (Headlines), Inter (Body), Space Grotesk (Labels)

---

## Design System Features

The project implements a highly customized `tailwind.config.ts` to achieve the Cyberpunk UI seen in Mochi Roll:

- **Color Palette:** Custom tokens such as `surface-container`, `primary-fixed`, and `on-tertiary` to manage high-contrast neon elements.
- **Visual Effects:** Intensive use of `backdrop-blur`, custom `drop-shadow` for glow effects, and double-border styling for glassmorphism components.
- **Typography:** Triple-font strategy to differentiate between system headers, terminal logs, and content labels.

---

## Project Structure

- **Navigation:** Sticky header with integrated terminal search and system status indicators.
- **Sidebar:** Root directory navigation with active state indicators and operator profile status.
- **System Library:** Grid-based content display featuring:
  - Dynamic media cards with "Watched" or "Queued" status badges.
  - Metadata overlay (PID, Rating, Source).
  - Interactive hover states for media playback.
- **Status Bar:** Fixed footer displaying real-time memory usage, sector activity, and network protocols.
