# Stats Cards

## Purpose

Display KPI values in a repeatable card layout with optional block title.

## Authored Content Contract

- Optional first row: block title (single cell).
- Following rows: one card per row with two cells:
  - Cell 1: KPI value
  - Cell 2: KPI label

Additional cells in a card row are rendered as extra content below the label.

## Architecture Notes

- Uses Collection Grid for repeated KPI cards.
- Supports full-width background at block root.
- Constrains internal content with Foundation Content Width variables.
- Mobile first, with official breakpoints.

## Files

- `stats-cards.js`: transforms authored rows into semantic card list markup.
- `stats-cards.css`: visual styles, spacing, responsive behavior.
- `_stats-cards.json`: Universal Editor definition/model/filter.
