# Claude code frontend website rules

## Always do first
- **Invoke the frontend-design skill** before writing any frontend code, every session

- Mobile-first responsive

## Brand Assets

- Always check the `brand_assets/` folder before designing. It may contain logos, colors, and other assets.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values.

## Anti-Generic Guardrails

- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Pick a unique palette.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a readable body font.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filters.
- **Animations:** Only animate `transform` and `opacity`. Never use `transition-all`.
- **Interactive states:** Every clickable element needs `hover`, `focus-visible`, and `active` states.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base + elevated + floating), not flat design.

## Hard Rules

- Do not add sections, features, or content not in the reference.
- Do not “improve” a reference design — match it.
- Do not stop after one screenshot pass.
- Do not use `transition-all`.
- Do not use default Tailwind blue/indigo as primary color.