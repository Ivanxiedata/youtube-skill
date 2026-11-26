## Student (round 3)

### 1. Main idea
In the paid beta of Claude Sheets, the spreadsheet lives inside Claude and keeps real formulas in the cells, so you can check how each number was worked out instead of redoing the math like you did with a pasted chat table.

### 2. What I learned

**Pasted tables hide the math.** Before, you copied Claude's chat table (plain text) into another tool. In the hiring budget example (three teams, four quarters), the three totals were just plain numbers with no formulas. To trust them you had to redo the sums yourself, and Claude could not see the edits you made in the other tool.

**Same sheet, formulas stay.** Now, on paid plans in the beta, the sheet stays in Claude and you and Claude edit the same cells. Claude's totals are formulas, so you click one and see how it was calculated. Team A's total is =SUM(Q1:Q4), which is fine. Team B's is =SUM(Q1:Q3), so it skipped Q4, and the formula shows that mistake.

**Seeing and undoing Claude's edits.** Claude's edits get an outline as they land, such as a new "START DATE" column filling in. When Claude finishes, a card "Claude updated the sheet" appears with an Undo button that removes only those edits. It stays for just a few seconds.

### 3. What I can't explain, took on faith, or would scroll away from
- "twenty twenty-six beta: you think checking A I numbers will cost you a redo, but actually formulas show how" (the opening line). It is a bit tangled and I had to parse it.
- "paid-plan beta" / "PAID PLANS": which plans exactly? I don't know, and I don't know how to get in.
- "Claude had no live access to your edits": I took on faith why, and what "live access" means in practice.
- "fx" tag: explained only by the label "fx = FORMULA". I'd have missed it if I blinked.
- The meter ("TOTALS WITH NO FORMULA", "3", then "NONE"): confusing. A meter going to "NONE" read like a bad thing at first.
- "a card can undo just those edits, for a few seconds": I don't know what happens after the few seconds. Is the change permanent? Can I still undo it some other way? It says "then it goes" but not what that means for my work.
- "Claude's formulas stay in the cells": it doesn't say why they stay here and not when pasted. I just have to accept it.
- "Claude's edits are outlined as they land": how long does the outline last?
- Does Claude catch the Q4 skip itself, or do I have to spot it? The video implies I check. Slight scroll-away moment is "So, what we learned" recap, which repeats what I just heard.
- The subscribe line at the end: I'd scroll away.
- Numbers: the video never shows actual digits, only grey bars, so I can't see what the totals even were.

### Answers to the 3 questions

**Q1.** Because Claude's totals are real formulas kept in the cells. You click a total and the formula shows how it was calculated, such as =SUM(Q1:Q4) or one that skips Q4. A pasted chat table was plain text with plain-number totals and no formulas, so the only way to check was to redo the math.

**Q2.** Claude's edits are outlined as they land, so you see what changed. When Claude finishes, a card "Claude updated the sheet" appears with an Undo button. It undoes only Claude's edits, not the rest of the sheet, but the card is only there for a few seconds.

**Q3.** After the first answer, the sheet stays in Claude, and you and Claude both keep editing the same cells. You don't paste it into another tool, and Claude can see your edits.
