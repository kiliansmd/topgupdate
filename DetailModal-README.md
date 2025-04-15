# DetailModal Component Guide

## Fix for "DetailModal not found in registry" Error

If you're seeing an error like `DetailModal not found in registry` when trying to install this component via Shadcn UI CLI, here's how to fix it:

### The Issue

The `DetailModal` component is a **custom component** in your project, not an official Shadcn UI component. It cannot be installed or updated using the Shadcn UI CLI command:

```bash
npx shadcn@latest add detail-modal  # This will NOT work
```

### The Solution

You already have the `DetailModal` component in your project at `components/ui/detail-modal.tsx`. To use it:

1. Import it directly from your components directory:
   ```tsx
   import { DetailModal } from "@/components/ui/detail-modal"
   ```

2. If you're experiencing dependency issues, run the included fix script:
   ```bash
   ./fix-dependencies.sh
   ```

### What the fix does

1. Ensures `framer-motion` and other dependencies are properly installed
2. Adds the component to the main `components/index.ts` file for easier importing
3. Resolves dependency conflicts using the `--force` flag

### Important Notes

- `DetailModal` is not an official Shadcn UI component
- Any customization should be done by directly editing the `components/ui/detail-modal.tsx` file
- If you need similar functionality from official Shadcn UI components, consider using:
  - `Dialog` (`npx shadcn-ui@latest add dialog`)
  - `Sheet` (`npx shadcn-ui@latest add sheet`)

## Manual Fix Commands

If you prefer to fix manually:

```bash
# Install required dependencies
npm install framer-motion@latest @emotion/is-prop-valid@latest --force

# Install all dependencies with force flag
npm install --force
``` 