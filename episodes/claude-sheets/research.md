# Research: claude-sheets (workflow step 1)

Made 2026-11-26 from the maker's own pages, fetched with `curl -sL` (browser user agent) and stripped of HTML; every quote below was found in the stripped text with Python `str.find` (lessons L20, L29, L40).
Both pages were checked to be the articles themselves: [A] has its headline "Introducing Claude Whiteboards, Claude Sheets, and Claude Data" and the date "November 10, 2026"; [B] has its headline "Get started with Claude Sheets" and every section listed in its "On this page" nav.

Sources:
- **[A]** Anthropic (claude.com), "Introducing Claude Whiteboards, Claude Sheets, and Claude Data", November 10, 2026, Product updates: https://claude.com/resources/articles/sheets-whiteboards-data
- **[B]** Claude Help Center, "Get started with Claude Sheets" (updated this week): https://support.claude.com/en/articles/18324300

The premise holds in the maker's own words: Claude Sheets is a spreadsheet inside Claude that you and Claude edit in the same cells (rows 1, 3), Claude can add tabs, write formulas that work across tabs, apply formatting and conditional formatting, and add dropdowns, checkboxes, and charts (row 3), formulas stay in the cells so you can check how each number was calculated (row 4), each edit is outlined as it lands (row 5), and an "Undo" takes back only that change (row 6).
Age: launched in beta November 10, 2026; today is 2026-11-26, 16 days later.

## Facts
| # | Fact | Quoted sentence | Source |
|---|---|---|---|
| 1 | What it is | "Claude Sheets is a spreadsheet built into Claude. Ask for a tracker, budget, or model, and Claude builds a working sheet that you, your team, and Claude can edit together." | [B] |
| 2 | Beta, which plans | "Claude Sheets is available in beta on Pro, Max, Ultra, Team, and Enterprise plans. It’s on by default on Team plans. On Enterprise plans, it’s off by default until it’s turned on in" (Organization settings > Artifacts) | [B] |
| 2b | Launch date, all paid plans | "Today we’re launching Claude Whiteboards and Claude Sheets in beta" ... "These are available on all paid plans." (dated November 10, 2026) | [A] |
| 3 | Same cells; what Claude can add | "A sheet is an artifact that you and Claude edit in the same cells. Claude can add tabs, write formulas that work across tabs, apply formatting and conditional formatting, and add dropdowns, checkboxes, and charts." | [B] |
| 4 | **Formulas stay in the cells (the aha)** | "Formulas stay in the cells, so you can see and check how each number was calculated." | [B] |
| 5 | Each edit outlined | "When Claude changes a sheet, each edit is outlined as it lands, so you can see what changed." / "It can edit in the cells, outlining each new edit so you can track changes." | [B] / [A] |
| 6 | Undo only that change, for a short time | "When Claude finishes, a card says what Claude updated. If it shows “Undo,” select it to take back only that change. The card goes away a few seconds after you’re back in the sheet, or as soon as you work in the cells. After that, use" (Version history) "to restore an earlier version, which also removes edits made after it." | [B] |
| 7 | **Before** (maker's words) | "Working with Claude on a project often meant moving the output over to another tool or program, where Claude didn’t have live access to follow progress and changes." | [A] |
| 8 | Now it stays in Claude | "Now, your documents, boards, sheets, and dashboards can stay in Claude, with access for your team to continue editing together." | [A] |
| 9 | Generated from a prompt | "Claude can now generate spreadsheets with tabs, formulas, formatting, and drop-downs, often from just a prompt like asking for a campaign tracker or a hiring budget." | [A] |
| 10 | Maker's example prompt (our counted example comes from it) | "“Make a hiring budget by team and quarter.”" | [B] |
| 11 | Ask about cells | "Select cells and ask Claude about them, like “Why is this total higher than last month?”" | [B] |
| 12 | You edit too; functions | "Type in cells, write formulas, and format your data yourself. Claude Sheets includes over 250 functions." | [B] |
| 13 | Fix an error | "Select a cell that shows an error, then select “Fix with Claude.” Select “Keep” or “Discard” when you see the fix." | [B] |
| 14 | Cell history | "Right-click a cell and select “View history” to see recent edits to that cell or its row, who made them, and when." | [B] |
| 15 | Simple for now | "For now, sheets have simple spreadsheet functionality, but we are working on adding more." / "Claude Sheets is in beta and covers common spreadsheet work." | [A] / [B] |
| 16 | Export | "To download a sheet, export it as an .xlsx or CSV file." | [B] |
| 17 | Not supported | "Macros, VBA, Power Query, DAX, and print layout." / "Sheets can’t pull live data from connected apps" | [B] |
| 18 | Usage | "Claude Sheets counts toward your plan’s usage limits, like the rest of your work with Claude." | [B] |
| 19 | Sharing | "Sheets start private to you." ... "People you share it with who have “Can edit” access can work on it alongside you and Claude." | [B] |
| 20 | Platforms | "Web, desktop, Claude for iOS, and Claude for Android." | [B] |

## Our example (not Anthropic's numbers)
A **hiring budget by team and quarter** (the maker's own example prompt, row 10): **3 teams x 4 quarters** (12 quarter cells, typed inputs) and **3 team totals** (ours), the numbers a formula calculates.
- **Before (ours):** the answer arrives in chat as a table of text; you paste it into another tool, where our **3 totals are plain numbers with no formula** (a pasted table of text holds values, not formulas); to check one you redo the math by hand; and Claude had no live access to the edits you make there (row 7).
- **Now (ours):** Claude builds the same budget as a sheet in Claude, writing each total as a **formula** (row 3: "write formulas"); each shows how it was calculated (row 4). Meter: **"TOTALS WITH NO FORMULA · OUR EXAMPLE"**, 3 before; now its boxes stay empty under a teal tick "ALL 3 HAVE FORMULAS".
- Anthropic gives no count; the 3 and the "ALL 3 HAVE FORMULAS" are ours, and every line and card that states them says "our" or "OUR EXAMPLE". "ALL 3" means our example sheet; the sources do not say Claude writes every number as a formula.
- **The caught mistake (ours):** a team total whose formula sums only 3 of its 4 quarters ("=SUM(Q1:Q3)"): its formula shows it; the pasted number would only look wrong, if at all.

## Narrowing list (every line that states the feature carries its condition)
1. **Beta**, launched **November 10, 2026**, on **paid plans** (Pro, Max, Ultra, Team, Enterprise); on by default on Team, **off by default on Enterprise** until it's turned on in Organization settings > Artifacts (rows 2, 2b; the defaults are the help page's, undated).
2. "Formulas stay in the cells, so you can see and check how each number was calculated" (row 4): it is about numbers a **formula** calculates; a number someone types in is just a number. Say "you **can** check", not "it is checked" or "it is right": a formula shows how, it does not prove the inputs or the formula right.
3. Each Claude **edit is outlined as it lands** (row 5). The **Undo** is on the card after Claude finishes, it takes back **only that change**, and the card goes away **a few seconds** after you're back in the sheet or as soon as you work in the cells; after that, **Version history**, which also removes later edits (row 6). Never "undo any edit any time".
4. "Before" is the maker's: the output moved **to another tool** where **Claude didn't have live access to follow progress and changes** (row 7). "No formulas" is true of **our** pasted table, not a claim that Claude's chat could never write a formula.
5. You and Claude edit **the same cells** (row 3); teammates with "Can edit" access too (row 19). The sources do not say Claude watches every keystroke live; say "the same cells", and for the before, "couldn't follow your changes" (row 7).
6. **Simple** spreadsheet functionality for now (row 15); no macros, no live data (row 17); it counts toward usage limits (row 18).

## Left out, and why
- Claude Whiteboards and Claude Data (same launch post): other products, another topic.
- Sorting, filters, people chips, comments, sharing details, import from Excel or Google Sheets, partner tools: answer none of the lesson's questions; some go in the description.
- "Write this formula" from plain words and "Fix with Claude" (rows 13): a second way in would split the one idea (formulas you can check); in the description.
- Claude for Excel (a different product that works in Excel files).

## Where the analogy stops
The story is a school maths test: before, our pasted table was like a test handed in with answers only (a pasted number shows no working); now each total's working sits in its cell, like a student who writes out the sum.
It stops here: showing the working lets you **check** a number, it does not mean the working is right (the inputs or the formula can still be wrong; row 4 says "see and check"); and unlike a test, you and Claude keep editing the same page afterwards (row 3).
