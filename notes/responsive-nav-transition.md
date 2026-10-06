## Smooth Hamburger Menu Transition

### Why `display: none` → `display: flex` had no transition

- `display` is a discrete property: it has no in-between values, so the browser can't animate it.
- When the class toggles, the element goes from "not rendered" to "rendered" in a single frame, so the menu just pops in.
- Transitions need a starting value and an ending value that can be blended (numbers, lengths, colors, opacity).

### Why I chose `max-height` (Option 1)

```css
nav ul {
  overflow: hidden;
  max-height: 0; /* collapsed */
  transition: max-height 300ms ease;
}

nav ul.open {
  max-height: 500px; /* expanded */
}
```

| Part                              | Why it's needed                                                              |
| --------------------------------- | ---------------------------------------------------------------------------- |
| `max-height: 0`                   | Replaces `display: none`. The menu is still in the layout but has no height. |
| `overflow: hidden`                | Clips the links so they don't spill out while collapsed.                     |
| `max-height: 500px`               | An animatable number. Must be taller than the menu's real height.            |
| `transition` on the base `nav ul` | Makes it animate both opening and closing.                                   |

**Why not `height`?** `height: auto` can't be animated, and the menu's real height isn't known ahead of time. `max-height` gets around this with a "big enough" number.

**Why Option 1 over Option 2?**

- Option 1 pushes the page content down as the menu opens, which is the normal behavior for a navbar that drops down in the flow.
- Option 2 (`opacity` + `transform`) is for menus that float over the page with `position: absolute`.

**Trade-off:** the animation speed depends on the `max-height` value. If it's far larger than the menu's real height, the close animation feels delayed. Keep it close to the real height.
