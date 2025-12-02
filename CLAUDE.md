# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

FlickNote documentation website built with Docus (Nuxt-based documentation framework). Uses SSG (Static Site Generation) for deployment on Cloudflare.

## Commands

```bash
# Development
bun run dev        # Start dev server at http://localhost:3000

# Build for production
bun run build      # Outputs to .output directory

# Deploy to Cloudflare
bun run deploy     # Builds and deploys via wrangler
```

## Cloudflare Deployment

- Config: `wrangler.jsonc` (not wrangler.toml)
- Serves static assets from `dist`
- Deployed to `docs.flicknote.app`

## Architecture

Docus project with `nuxt.config.ts`:
- Extends `docus` theme layer
- SSG via `nitro.preset: 'cloudflare-pages-static'`
- Root `/` redirects to `/getting-started/introduction`

### Content Structure

Documentation is written in Markdown with MDC (Markdown Components) syntax:
- `content/` - All documentation pages
- Numbered prefixes control navigation order (e.g., `1.getting-started/`, `2.essentials/`)
- Frontmatter uses `seo:` for page metadata

### MDC Syntax

Pages use Vue components via MDC syntax:
- Block components: `::component-name` / `::`
- Inline components: `:component-name`
- Props via YAML: `---` block after component name
- Slots via `#slot-name`

Example:
```md
::u-page-hero
#title
Page Title

#description
Description text
::
```

### Static Assets

Place static files in `public/` directory.
