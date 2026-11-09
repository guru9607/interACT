# DESIGN.md — Official UN DGC & SDG Institutional Standard (interACT)

> **Master Design System Specification for interACT**  
> Aligned with the **United Nations Department of Global Communications (UN DGC)** Web Standards and the **UN 2030 Agenda for Sustainable Development (SDGs 3, 16, and 17)**.

---

## 1. Vision, Character & Philosophy

interACT is an international youth initiative dedicated to personal awareness, human values, and transformative silence. It directly advances three United Nations Sustainable Development Goals:
- **SDG 3 (Target 3.4):** Good Health and Well-being (Mental health, holistic resilience)
- **SDG 16 (Target 16.1):** Peace, Justice & Strong Institutions (Violence reduction, personal inner peace)
- **SDG 17 (Target 17.16):** Partnerships for the Goals (Multi-stakeholder youth collaboration)

### Core Directives
1. **UN Institutional Architecture:** The visual structure follows the official **UN DGC Web Standards**—anchored by the **Universal Top Banner**, the **Tri-color SDG Ribbon**, clean section banding, and dignified typography.
2. **Tri-Color Brand Alignment:** Re-integrates the vibrant, authentic colors from the **interACT Logo and UN SDGs**:
   - **SDG 3 Vital Green (`#4C9F38`)**
   - **SDG 16 Peace Blue (`#00AED9` / `#0072CE`)**
   - **SDG 17 Foundation Navy (`#19486A` / `#0B2545`)**
3. **Restraint over Decoration (Zero SaaS Startup Tropes):**
   - ❌ No floating `blur-3xl` ambient gradient blobs
   - ❌ No hyper-rounded bubble pills (`rounded-3xl` or bouncy pill buttons)
   - ❌ No glassmorphism (`backdrop-blur` cards on colored backgrounds)
   - ❌ No commercial marketing jargon ("Start Free Trial", "Boost Growth")
4. **Universal Accessibility (WCAG 2.1 AAA Standard):** Rigorous contrast ratios (> 7:1 for normal text), strict semantic HTML landmarks, full keyboard navigation, and screen-reader accessibility.

---

## 2. Legal Compliance & UN SDG Brand Guidelines

### Is it allowed to use the SDG colors and pattern?
**YES. The United Nations explicitly encourages civil society organizations, NGOs, educational institutions, and youth initiatives to use the Sustainable Development Goals (SDGs) and align with their standards.**

### The Official UN Guidelines for Non-Commercial Educational Alignment:
1. **Permitted & Encouraged:**
   - Adopting the SDG colors, names, and targets (Target 3.4, 16.1, 17.16) to showcase genuine programmatic alignment.
   - Using the tri-color ribbon and DGC-compliant clean layouts to submit deliverables for UN recognition (e.g. UN DGC Association, UN ECOSOC Consultative Status, or UNESCO youth partner programs).
2. **Clear Affiliation Phrasing (Required):**
   - ✅ **Use:** `"A Global Youth Initiative Aligned with the United Nations 2030 Agenda"`
   - ✅ **Use:** `"Supporting the UN Sustainable Development Goals: SDG 3 · SDG 16 · SDG 17"`
   - ❌ **Do Not Use:** Do not claim interACT *is* the United Nations Secretariat itself (e.g. do not say "The Official UN Secretariat Department of interACT").
3. **Disclaimer Requirement (Included in Footer):**
   - Include the clear non-commercial disclaimer in the footer:  
     `"interACT is an independent non-profit youth initiative aligned with the United Nations 2030 Agenda for Sustainable Development."`

---

## 3. Official UN DGC Color System

The palette directly combines the **United Nations Peace Palette** and the **Official SDG Goal Tokens**:

```yaml
colors:
  # Primary Action & Global Identity
  un-blue: "#0072CE"             # Primary action buttons, active navigation, hyperlinks
  un-blue-hover: "#0058A3"       # Button active/hover state, pressed links
  un-blue-subtle: "#EBF5FF"      # Active tab pills, info callout background, badge fill

  # Authority & Deep Headings (UN Navy)
  un-navy: "#0B2545"             # Main headlines, charter titles, primary authority text
  un-navy-deep: "#06152B"        # Top civic utility bar ground, deep footer ground
  un-navy-soft: "#14335A"        # Header hover states, secondary header tiers

  # Official UN Sustainable Development Goals (SDG) Tokens
  sdg-3-green: "#4C9F38"         # SDG 3: Good Health and Well-being (Vitality & Awareness)
  sdg-3-light: "#F0FDF4"         # SDG 3 badge and container background
  sdg-3-border: "#BBF7D0"        # Hairline border for health callouts

  sdg-16-blue: "#00AED9"         # SDG 16: Peace & Justice (Inner Calm & Contemplation)
  sdg-16-dark: "#00689D"         # SDG 16 deep contrast title blue
  sdg-16-light: "#F0F9FF"        # SDG 16 badge and container background

  sdg-17-navy: "#19486A"         # SDG 17: Partnerships for the Goals (Global Collaboration)
  sdg-17-light: "#F1F5F9"        # SDG 17 badge and container background

  # Ground & Canvas
  canvas-white: "#FFFFFF"        # Primary page surface, card backgrounds, reading field
  canvas-civic: "#F8F9FA"        # Alternating section bands, table header fills, utility grounds
  canvas-subtle: "#F1F5F9"       # Active state backgrounds, card hover tints

  # Text & Ink (WCAG 2.1 AAA Compliant)
  ink-primary: "#0F172A"         # Body reading text, primary table cell text (Contrast > 12:1)
  ink-secondary: "#334155"       # Subheadings, document abstracts, form help text
  ink-muted: "#475569"           # Metadata, timestamps, table column headers, breadcrumbs
  ink-faint: "#64748B"           # Captions, photo credits, copyright notices

  # Borders & Dividers
  border-hairline: "#E2E8F0"     # Card edges, horizontal rules, table row dividers
  border-medium: "#CBD5E1"       # Input field borders, container outlines
  border-focus: "#0072CE"        # 2px accessible focus ring with 2px offset
```

---

## 4. Typography Hierarchy (UN DGC Compliant)

Pairs an **authoritative institutional Serif** (for charters, declarations, and section titles) with an **international standard Sans-serif** (for interface, manuals, and data tables).

### Font Stack
- **Headlines, Charter Declarations & Section Titles (`font-serif`):** `Merriweather`, `Georgia`, or `Times New Roman`
- **Body Reading, Facilitator Manuals & Interface (`font-sans`):** `Outfit`, `Public Sans`, `Roboto`, or `Inter`
- **Data Tables, Dates, Credentials & IDs (`font-mono`):** `ui-monospace`, `SFMono-Regular`, `JetBrains Mono`

### Type Scale

| Role | Family | Size | Weight | Line Height | Tracking | Usage |
|---|---|---:|---:|---:|---:|---|
| **Charter Title** | Serif | `3.75rem` (60px) | 700 | 1.15 | `-0.02em` | Homepage manifesto headline |
| **Section Header** | Serif | `2.25rem` (36px) | 700 | 1.25 | `-0.01em` | Major program sections, page titles |
| **Pillar Heading** | Serif | `1.5rem` (24px) | 600 | 1.35 | `0` | Module titles, card headers |
| **Lead Subtitle** | Sans | `1.125rem` (18px)| 400 | 1.65 | `0` | Hero intro, executive summaries |
| **Body Reading** | Sans | `1.0rem` (16px) | 400 | 1.7 | `0` | Manuals, articles, guides, descriptions |
| **Interface Label** | Sans | `0.875rem` (14px) | 600 | 1.4 | `0` | Form labels, button text, tab items |
| **Civic Eyebrow** | Sans | `0.75rem` (12px) | 700 | 1.2 | `+0.06em` | Uppercase category tags, official stamps |

---

## 5. UN DGC Layout Patterns & Component Architecture

### A. The Universal Top Utility Bar & 3px SDG Ribbon
Fixed at the very top of every page:
1. **Top Bar (`#0B2545`):** Text "An International Youth Initiative Aligned with the United Nations 2030 Agenda" with language/portal link.
2. **Tri-Color SDG Ribbon (`3px` height):**
   - Green (`#4C9F38` - SDG 3)
   - Blue (`#00AED9` - SDG 16)
   - Navy (`#19486A` - SDG 17)
3. **Main Navbar:** Pure white background, `#0B2545` wordmark, 14px bold links with `#0072CE` active indicator.

### B. Action Buttons
- **Primary Civic Action (UN Blue):** Solid `#0072CE` background, white text, 6px border radius (`rounded-md`), 1px solid `#0058A3` bottom edge. Focus ring: `2px solid #0072CE` with 2px offset.
- **Secondary Civic Action (Neutral):** White background, 1px solid `#CBD5E1` border, `#0B2545` text, subtle `#F8F9FA` hover.

### C. Institutional Cards & Framework Pillars
- **Container:** Pure white `#FFFFFF`, sharp 8px radius (`rounded-lg`), 1px solid `#E2E8F0` border.
- **Top Authority Stripe:**
  - Pillar 1 (Awareness): `border-t-4 border-t-[#4C9F38]` (SDG 3 Green)
  - Pillar 2 (Contemplation): `border-t-4 border-t-[#00AED9]` (SDG 16 Blue)
  - Pillar 3 (Silence): `border-t-4 border-t-[#19486A]` (SDG 17 Navy)
- **Shadow:** Minimal crisp shadow (`shadow-sm`).

### D. Declaration & Manifesto Quotes
- Full-width callout container with 4px left border in `#0072CE`.
- Large serif quote text in `#0B2545` with authoritative source attribution below in `#64748B`.

### E. Data Tables & Event Registries (Portal & Staff)
- Full-width table with crisp 1px `#E2E8F0` borders.
- Header row: `#F8F9FA` background, uppercase 12px `#475569` text with 700 weight.
- Zebra striping: Alternate rows with `#FFFFFF` and `#FAFBFD`.
- Status indicators: High-contrast rectangular badges with 4px radius.

---

## 6. Strict Prohibitions & Anti-Patterns

1. ❌ **No Floating Blur Blobs:** Never use `blur-3xl`, `bg-teal-200/20`, or animated ambient gradient circles.
2. ❌ **No Glassmorphism:** Avoid semi-transparent `backdrop-blur-md` cards on colored backgrounds. Use solid `#FFFFFF` on `#F8F9FA`.
3. ❌ **No Hyper-Rounded Bubble Pills:** All primary buttons and cards use crisp 6px to 8px radius (`rounded-md` or `rounded-lg`). Do not use `rounded-3xl` or `rounded-[2rem]` for main containers.
4. ❌ **No Commercial SaaS Terminology:** Avoid "Start Free Trial", "Boost Growth", "Supercharge". Use dignified civic language: "Explore Curriculum", "Register for Workshop", "Access Facilitator Portal".
5. ❌ **No Low-Contrast Text:** Text must never be lighter than `#475569` on white grounds.

---

## 7. Facilitator Governance & Confidential Accreditation Policy

1. **Strictly Internal Criteria (Confidential):**
   - Organizational affiliation criteria (Brahma Kumaris practice and Centre coordination) is **STRICTLY CONFIDENTIAL AND INTERNAL**.
   - It must **NEVER** appear in any public-facing copy, metadata, badges, forms, footers, or disclaimers.
   - Publicly, interACT operates as an open, universal, and non-sectarian global youth initiative.

2. **Public Presentation (By Institutional Nomination Only):**
   - To the public, facilitator onboarding is presented as **"By Institutional Partner Nomination Only"**.
   - Open public self-registration is closed across all public pathways.
   - All public portals, gathering registries (`/join`), event dossiers (`/events/[id]`), curriculum syllabi (`/modules`), and the homepage maintain a dignified, empirical, and universally accessible civil society presentation aligned with UN SDGs 3, 16, and 17.

3. **Official Field Manual Classification:**
   - Field Manuals adhere to standardized UN institutional document codes:
     - `DOC-ACT-100`: 3-Hour Combined Program Master Script (`#0072CE`)
     - `DOC-ACT-101`: Module Awareness (A) Manual (`#4C9F38`)
     - `DOC-ACT-102`: Module Contemplation (C) Manual (`#00AED9`)
     - `DOC-ACT-103`: Module Transformative Silence (T) Manual (`#19486A`)
     - `DOC-ACT-SYS`: Portal & Field Operations Guide (`#0B2545`)
     - `DOC-IA-CERT-SVC`: Serialized Certificate Generation Authority (`#0B2545`)

