# Lesson: agent-compute-engine
Main idea (one sentence, at most about 25 words: what the viewer will think differently; not the headline, not the mechanism):
AI agents sometimes obey hidden instructions, so don't rely on them refusing: keep the keys off their computer, and a trick finds none. (23 words)

Why it matters (to the viewer or the field, with the research.md row):
It will let you have an agent read email from strangers without betting your accounts on the model saying no: if a hidden line tricks it, it finds no keys on its computer (rows 3, 6), and every request it makes still has to pass a gate that checks which agent, which machine, for whom and your company's rules before the key is added (rows 8, 11). Spoken: the "sometimes, they don't" line, the "zero keys inside" line, the gate line and the takeaway.

Misconception it corrects:
"A good AI agent never falls for a scam email, so safety is the model's job." Said out loud in the hook ("your AI agent never falls for one scam email?") and corrected in the next breath ("But sometimes it does"), then with Google's own words: models usually ignore the hidden line, sometimes they don't (row 3); Google "could not rely on" models ignoring every trick (row 4).

The 3 questions a viewer can answer afterwards (how / why / what changes, never "what happened"), each with its full answer and the picture that shows it working:
1. Q: Why is an agent that usually ignores hidden instructions still a risk on an ordinary cloud computer? / A: Because, in Google's words, models usually ignore a hidden line but sometimes obey it, and on an ordinary cloud computer the keys (the passwords and tokens for your email, files and calendar) are there for the agent to fetch, because any program on that computer can ask for its keys. / Picture: the same scam email read twice by the robot: once it shrugs it off (tick), once it obeys (cross) and rummages its computer, pulling out 3 keys while the meter "KEYS A TRICK CAN FIND" climbs 0 to 3 [rows 3, 4, 14, 15]
2. Q: How does an agent with zero keys still open your files? / A: Every request leaves its sealed computer through a gate outside it; the gate checks which agent, which machine, for whom and your company's rules, then adds the key on the way out, so the agent never sees the key. / Picture: one request envelope "OPEN MY FILES" slides out of the sealed room to the gate; the gate ticks "WHICH AGENT, WHICH MACHINE, FOR WHOM" and "COMPANY RULES", stamps a key onto the envelope outside the room, the files open; the robot's pockets stay empty. Then a second envelope "SEND MY FILES TO A STRANGER" reaches the gate: no company rule allows that address, it is stopped (red cross) [rows 7, 8, 9, 11]
3. Q: What changes when a hidden line does trick the agent, and what can it still do? / A: It searches its computer and finds 0 keys instead of 3 (our example), and anything it asks for still has to pass the gate's check of which agent, which machine, for whom and the company's rules; it can still do what those rules allow, so the gate limits a trick rather than stopping it. / Picture: split screen on the same email: BEFORE, the ordinary computer, the meter at 3; NOW, the sealed computer, the robot obeys, searches, finds nothing, meter at 0; its request still stops at the gate [rows 2, 6, 8, 11; the 3 keys are ours] Then the tricked "READ MY CALENDAR" goes through: "TRICKED, BUT ALLOWED: IT GOES THROUGH".

What we leave out on purpose (and why):
- Pausing idle agents between tool calls, shared memory, snapshots, persistence (row 18): a second idea (cost and speed); one idea per video.
- Titanium chips, SPIFFE, mTLS, the four identities: the "how" under the gate; the viewer needs only what the gate checks and that it adds the key.
- Agent Substrate (open source on GKE), Agent Registry, customer quotes: not the one idea.
- "Prompt injection" as a term is named once (row 17) for search, not taught as a field; the video teaches the defence, not the attack catalogue.

Lesson check (re-quoted from film/script.txt after gate round 3; every quoted phrase grepped against it):
- L58: main idea 23 words, no who/when/how many.
- L59: the gap "the model usually ignores it... sometimes, it doesn't" is the main idea; status said aloud: "not open to customers yet".
- L60: Q1 "Why is an agent that usually ignores hidden instructions still a risk on an ordinary cloud computer?", Q2 how, Q3 "What changes ... and what can it still do?"; every answer part spoken.
- L61: the agent falling for it once (red cross, "SOMETIMES IT FALLS FOR IT"); the drawer emptied to 0; "SEND MY FILES TO A STRANGER" stopped at the gate.
- L62/L72: why it matters, spoken: a tricked agent "used to find three keys; now zero".
- L63: misconception said and corrected: "your AI agent never falls for one scam email? But sometimes it does."
- L64/L69: reasons in the same breath: "programs there can ask the machine for its keys"; "it checks which agent, which machine, for whom, and your company's rules... then adds the key".
- L65: every line serves Q1-Q3; the status clause is 5 words ("not open to customers yet").
- L66: takeaway conditions: keys off the computer ("now zero"); the gate's limit ("the gate passes only what your rules allow").
- L67: "keys" = "passwords and tokens for your email, files and calendar"; "who" = "which agent, which machine, for whom".
- L68: "never sees it" (row 9).
- L70: what slips through without the gate: Q1's picture (3 keys fetched).
- L71: on screen only 1, 3 and 0, all spoken.

For the takeaway, every condition the main idea's trust rests on and the word that carries each:
- the agent can still be tricked: "tricked";
- the keys are off the agent's computer: "now zero";
- the gate still checks every request against which agent, which machine, for whom and the company's rules: "every request still passes the gate's check";
- the numbers are ours: "in our example";
- the before is an ordinary cloud computer, not every agent: "used to" refers back to the spoken "on an ordinary cloud computer".
