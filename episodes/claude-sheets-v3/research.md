# Research: claude-sheets-v2 (workflow step 1)

Made 2026-11-27 from the maker's own pages, fetched with `curl -sL` (browser user agent) and stripped of HTML; every quote below was found in the stripped text with Python `str.find` (lessons L20, L29, L40).
All three pages were checked to be the articles themselves: [A] has its headline "Introducing Claude Whiteboards, Claude Sheets, and Claude Data" and the date "November 10, 2026"; [B] has "Claude Sheets is a spreadsheet built into Claude." and its sections; [P] has its headline "Why showing your work works" and the date "March 20, 2021".
This is the second take on the topic (the first, `episodes/claude-sheets/`, ended not ready on one must-fix); this one tells it through the math teacher's "show your work" (lesson L3, gate G13).

Sources:
- **[A]** Anthropic (claude.com), "Introducing Claude Whiteboards, Claude Sheets, and Claude Data", November 10, 2026, Product updates: https://claude.com/resources/articles/sheets-whiteboards-data
- **[B]** Claude Help Center, "Get started with Claude Sheets": https://support.claude.com/en/articles/18324300
- **[P]** Pima County Public Library, "Why showing your work works", PimaLib_Kids, March 20, 2021 (the story's facts): https://www.library.pima.gov/blogs/post/why-showing-your-work-works/

The premise holds in the maker's own words: Claude Sheets is a spreadsheet inside Claude that you and Claude edit in the same cells (rows 1, 3), formulas stay in the cells so you can check how each number was calculated (row 4), each edit is outlined as it lands (row 5), and when Claude finishes, a card that shows "Undo" can take back only that change, until the card goes a few seconds after you're back in the sheet or as soon as you work in the cells (row 6); beta since November 10, 2026, on all paid plans (rows 2, 2b).
Age: 17 days old today (2026-11-27).

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
| S1 | **Story:** teachers ask for the work | "Many math teachers ask their students to show their work or to write a sentence or two explaining their thinking." | [P] |
| S2 | **Story:** why: the work shows the mistake | "Showing work can help you figure out where you made a mistake." / "Seeing how a learner solved a problem helps a teacher, tutor, or caregiver know what the learner does or does not understand." | [P] |
| S3 | **Story:** an answer alone misleads; the work shows the slip | "If Mica only writes down the final answer, the teacher might assume that Mica doesn’t know how to multiply two-digit numbers. But if Mica shows his work or explains the steps he took, the teacher will see that Mica knows how to multiply but just mixed up two digits." | [P] |
| S4 | **Story:** a skipped step | "Her picture or diagram would probably have helped her realize that she skipped an important step by not subtracting the number of students absent from 126." | [P] |
| S5 | **Story:** not always needed | "It’s true that not every math problem requires lots of shown work or a sentence explaining how the student solved it." | [P] |

## The story everyone knows: the math teacher's "show your work" (rows S1-S5)
- **Mechanism match.** A teacher who gets only the final answer can't see how it was reached; with the steps written out, the teacher sees where a mistake came from (S2, S3), such as a skipped step (S4).
  A spreadsheet number typed or pasted in is an answer alone; a formula in the cell is the written step: it shows which cells were added, so a skipped one shows (row 4).
- **Before, through the story (our example):** a hiring budget from Claude's chat pasted into another tool is like homework with only the answers: our 3 totals are plain numbers, so checking one means doing the sum again; and in that tool Claude had no live access to your edits (row 7).
- **Now, through the story:** in Claude Sheets, our totals can be formulas in the cells (Claude can write formulas, row 3), like the steps on the page: you check each formula instead of redoing the sum (row 4).
- **Where the analogy stops:** (1) shown work lets you **check** a number; it does not make it right: the inputs or the formula can still be wrong (row 4 says "see and check"); (2) a teacher grades a finished page, but you and Claude keep editing the same cells (row 3), Claude's edits outlined as they land (row 5); (3) the "answers only" homework is the picture of **our pasted table**, not a claim about what Claude's chat can write; (4) not every number needs a formula, just as not every problem needs lots of shown work (S5): typed inputs (our 12 quarter cells) are just numbers.

## Our example (not Anthropic's numbers)
A **hiring budget by team and quarter** (the maker's own example prompt, row 10): **3 teams x 4 quarters** (12 quarter cells, typed inputs) and **3 team totals** (ours), the numbers a formula calculates.
- **Before (ours):** the budget comes back from chat; you paste it into another tool, where our **3 totals are just text, no formula** (in our example the pasted table held plain text, no formulas); to check one you redo the math; and Claude had no live access to your edits there (row 7).
- **Now (ours):** Claude builds the same budget as a sheet in Claude, writing each total as a **formula** (row 3: "write formulas"); each shows how it was calculated (row 4). Meter: **"TOTALS WITH NO WORK SHOWN · OUR EXAMPLE"**, 3 before; now its boxes empty as each total gets its formula, and a teal tick "ALL 3 SHOW THEIR WORK".
- Anthropic gives no count; the 3 and "ALL 3" are ours, and every line and card that states them says "our" or "OUR EXAMPLE". The sources do not say Claude writes every number as a formula.
- **The caught mistake (ours):** a team total whose formula sums only 3 of its 4 quarters ("=SUM(Q1:Q3)"): its formula shows the skipped quarter, like the skipped step in S4.

## Narrowing list (every line that states the feature carries its condition)
1. **Beta**, launched **November 10, 2026**, on **paid plans** (Pro, Max, Ultra, Team, Enterprise); on by default on Team, **off by default on Enterprise** until it's turned on in Organization settings > Artifacts (rows 2, 2b; the defaults are the help page's, undated).
2. "Formulas stay in the cells, so you can see and check how each number was calculated" (row 4): it is about numbers a **formula** calculates; a number typed in is just a number. Say "you **can** check", never "it is checked", "it is right" or "trust": a formula shows how, it does not prove the inputs or the formula right.
3. Each Claude **edit is outlined as it lands** (row 5). The **Undo** is on the card after Claude finishes, it takes back **only that change**, and the card goes away **a few seconds** after you're back in the sheet or as soon as you work in the cells; after that, **Version history**, which also removes later edits (row 6). Never "undo any edit any time".
4. "Before" is the maker's: the output moved **to another tool** where **Claude didn't have live access to follow progress and changes** (row 7). "No formulas" / "no work shown" is true of **our** pasted table, not a claim that Claude's chat could never write a formula.
5. You and Claude edit **the same cells** (row 3); teammates with "Can edit" access too (row 19). Do not say Claude watches every keystroke; for the before, "no live access to your edits" (row 7).
6. **Simple** spreadsheet functionality for now (row 15); no macros, no live data (row 17); it counts toward usage limits (row 18).
7. The story's facts are the library post's (S1-S5): "many" math teachers, "can help", "might assume"; never "every teacher" or "always".

## Left out, and why
- Claude Whiteboards and Claude Data (same launch post): other products, another topic.
- Sorting, filters, comments, sharing details, import, partner tools: answer none of the lesson's questions; some go in the description.
- "Fix with Claude" and cell history (rows 13, 14): a second way to check would split the one idea; in the description.
- The critics of "show your work" (some teachers argue it slows mental math): true but about grading children, not about checking a number; the analogy's limit (S5) is kept.
- Claude for Excel (a different product).
