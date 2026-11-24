# Research: Windows hybrid intelligence (Microsoft, 2026-10-07) vs Copilot working from the cloud on what you give it

Done 2026-11-24 (daily run, workflow step 1). Pages fetched with `curl -sL` (browser user agent; the first plain fetch got a Cloudflare block) and stripped of HTML (L20),
text under `$RUNNER_TEMP/windows-hybrid-intelligence/src/`; quotes found with Python `str.find` (L29). One product, one predecessor: read directly, no Deep-Research fan-out.

Sources:
- [BLOG] https://blogs.windows.com/windowsexperience/2026/10/07/building-windows-for-hybrid-intelligence/ ("Building Windows for hybrid intelligence", Pavan Davuluri, Executive Vice President, Windows + Devices, October 7, 2026): the maker's own post, the main source.
- [EMEA] https://news.microsoft.com/source/emea/2026/10/building-windows-for-hybrid-intelligence/ (Microsoft Source EMEA, 07/10/2026): Microsoft's summary, links to [BLOG] as "the original post".
- [PETRI] https://petri.com/microsoft-hybrid-intelligence-strategy-windows-ai/ (Petri, October 20, 2026): press, for the "before".
- [RMAG] https://redmondmag.com/articles/2026/10/07/microsoft-new-windows-strategy-pushes-ai-workloads.aspx (Redmondmag, 10/07/2026): press, for the "before".

## Premise check
**Holds, as an announcement.** [BLOG]: "With intelligent routing, powerful local models, and a performant runtime, Windows lets work run in the right place for each task — local or cloud." and
"With your permission, Copilot will be able to use local context from your PC, take action on your behalf, and tap into local models".
But the Copilot part is **not out yet**: "Copilot features powered by hybrid intelligence are expected to begin rolling out on Copilot+ PCs in the coming months." MXC (the agent container) **is** out: "now generally available".
48 days old on 2026-11-24, so no "just dropped" (brand: a month or less).

## Facts (every claim in the video traces to a row)
| # | Fact | Quote | Source |
|---|---|---|---|
| 1 | Name, date, who | "Building Windows for hybrid intelligence Written By Pavan Davuluri, Executive Vice President, Windows + Devices published October 7, 2026" | [BLOG] |
| 2 | What it is | "That's why we're building Windows as the home for hybrid intelligence: a platform where agents can run locally when it makes sense, reach the cloud when they need to, and operate with the security and manageability organizations expect." | [BLOG] |
| 3 | Routing, per task | "With intelligent routing, powerful local models, and a performant runtime, Windows lets work run in the right place for each task — local or cloud." | [BLOG] |
| 4 | Copilot: three local capabilities, with permission | "With your permission, Copilot will be able to use local context from your PC, take action on your behalf, and tap into local models, bringing you more capability while helping your tokens go further." | [BLOG] |
| 5 | Only on Copilot+ PCs | "Today, we're announcing that on Copilot+ PCs, Copilot will get supercharged with Windows hybrid intelligence, providing three key local capabilities." | [BLOG] |
| 6 | Local context: files | "Local context. With your permission, Copilot can understand relevant content on your PC, including files and recent activity, bringing local context into the flow of work." | [BLOG] |
| 7 | Local actions: organizing files, on your device | "Local actions. Copilot can take action on your behalf across Windows, helping complete tasks like organizing files, assessing device diagnostics, troubleshooting issues, coding, and carrying out workflows directly on your device." | [BLOG] |
| 8 | Local models, cloud when needed | "Local models. Copilot can tap into AI models running on your PC, using local compute for the right tasks while combining it with cloud intelligence when needed." | [BLOG] |
| 9 | You in control | "Copilot understands your PC, takes action with your permission, and uses local models when it makes sense, with you in control at every step." | [BLOG] |
| 10 | When: coming months, Copilot+ PCs | "Copilot features powered by hybrid intelligence are expected to begin rolling out on Copilot+ PCs in the coming months." Footnote 3: "Windows Update required. Features will roll out over time, and availability and timing may vary by device, market, and silicon platform." | [BLOG] |
| 11 | Agent container (MXC), out now | "Today, Microsoft Execution Containers (MXC) , becomes generally available on Windows 11, enabling organizations to define which files and networks agents can access, with those policies enforced at runtime." | [BLOG] |
| 12 | Containment, identity, manageability | "Containment controls what an agent can access. Identity makes clear which agent acted, so IT can distinguish agent activity from the person using the device." | [BLOG] |
| 13 | For individuals too | "For individuals using AI on their personal PC 2 , these safeguards are part of the agent experience itself" | [BLOG] |
| 14 | Which agents support MXC | "Leading agents already support MXC, including Codex from OpenAI, GitHub Copilot, OpenClaw, Replit, LM Studio, OpenShell from NVIDIA, and Unsloth AI." | [BLOG] |
| 15 | Maker's number: local AI already runs at scale | "Across all Copilot+ PCs, over 2 trillion inferences are run locally per month, improving customers' experience across search, imaging, and video calls" | [BLOG] |
| 16 | Why: cloud budgets | "As AI models grow in size and capability, customers' needs are outpacing what their cloud budgets can support. They want to make every AI token count without giving up frontier capabilities." | [BLOG] |
| 17 | Routing example: GitHub HydraFusion | "Earlier this year, GitHub launched HydraFusion , which routes each task to the right model in the cloud. Today, we're extending that intelligence to Windows, enabling HydraFusion to tap into models running locally on device" | [BLOG] |
| 18 | Before (press): every request to the cloud | "Instead of sending every AI request to external services, organizations may be able to keep certain workloads, intellectual property, and sensitive business data on local devices while still accessing cloud-based AI when greater scale or more advanced reasoning is required." | [PETRI] |
| 19 | Before (press): Copilot depends on the cloud today | "That means some Copilot tasks that currently depend heavily on cloud services could eventually be handled locally or split between the PC and Microsoft's cloud." | [RMAG] |
| 20 | Big local model | "Surface Laptop Ultra ... combines up to 128 GB of unified memory with the ability to run AI models exceeding 120 billion parameters locally" | [BLOG] |

## Our counted example (invented, inside the maker's use case)
**Twenty files in your Downloads folder, sorted into folders** (row 7: "organizing files"; row 6: "including files").
- Before (today): the meter "YOUR STEPS" counts what you do: upload each file to Copilot (20), then drag each into its folder yourself (20) = 40. Our illustration, not a maker's number.
- Now (soon, on Copilot+ PCs): you ask once (1) and say yes (1, "with your permission", rows 4, 9) = 2; Copilot reads the files on your PC (row 6) and sorts them on your device (row 7).
- The maker gives no count of steps, no time saved. The 40 and 2 are ours (said in the description).

## Narrowing, so the video does not overclaim (write these into every line, L26)
- **Not out yet:** Copilot's hybrid features are "expected to begin rolling out ... in the coming months" (row 10): say "soon" / "coming", never "now you can".
- **Only on Copilot+ PCs** (rows 5, 10), with a Windows Update, varying by device, market and silicon.
- **With your permission** (rows 4, 6, 9): Copilot reads your files and acts only with it.
- **Local or cloud per task:** Windows picks the place; the cloud is still used "when needed" (rows 3, 8). Never "nothing goes to the cloud", never "offline", never "private".
- **The container (MXC)** is available now on Windows 11, for agents that support it (rows 11, 14); organizations define the files and networks (row 11); for personal PCs it is part of the agent experience (row 13). Never "every agent".
- **Before:** the maker never states how Copilot worked before. Press: "some Copilot tasks ... currently depend heavily on cloud services" (row 19), "sending every AI request to external services" (row 18). So "mostly in the cloud" and "works on what you upload", not "always" or "only".
- The 2 trillion are **inferences**, across all Copilot+ PCs, per month, for search, imaging and video calls (row 15): not Copilot chats, not "tasks".

## Left out, and why
- MAI Code 1.1 Flash, Nemotron, DeepSeek V4 Flash, llama.cpp in Windows ML, RTX Spark and Surface Laptop Ultra benchmarks: developer and hardware detail, not the viewer's moment; hardware numbers compare against a MacBook (voice.md: never "one tool beats another").
- Windows Search actions, gaming, mini PCs, OpenClaw: other announcements in the same post.
- Agent 365, Intune: description only.

## Where the analogy stops
The story: a home office with a smart helper. Before: the helper sat in a far-away office (the cloud); to get help with your papers you mailed them over one by one, then filed them yourself when the answer came back.
Now: a helper desk opens in your own room (local models, your files); a dispatcher (routing) sends each job to the desk in the room or to the far office when it needs more; and the helper works inside a glass room that only opens to the drawers you allow (the container).
Where it stops: the far office is still used for some jobs (row 8); the helper needs your yes (row 9); and the desk in your room is only on Copilot+ PCs, coming in the next months (row 10).
The AI is drawn as a robot with a teal screen head (brand casting); the mascot is the user at a PC.
