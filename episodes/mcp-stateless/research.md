# Research: MCP goes stateless (spec 2026-07-28) vs session-based MCP (2025-11-25)

Done 2026-11-20/21. Primary sources only for every technical claim: the MCP specification, its changelog, the two SEPs,
and the maintainers' own blog. The premise came from an unverified research scan; it checks out.

## Status (said in the video)
**Shipped.** The 2026-07-28 revision is the *current* MCP protocol version; the session removal and the handshake removal are in it.
| Fact | Source |
|---|---|
| "The **current** protocol version is 2026-07-28" | [Versioning](https://modelcontextprotocol.io/specification/versioning) |
| Release candidate locked 2026-05-21; final specification published 2026-07-28 | [MCP blog: release candidate](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/) |
| "Today, we're officially pushing the release button on ... 2026-07-28"; TypeScript, Python, Go and C# SDKs speak it the same day | [MCP blog: the 2026-07-28 specification](https://blog.modelcontextprotocol.io/posts/2026-07-28/) (David Soria Parra, Den Delimarsky, lead maintainers, Jul 28 2026) |
| SEP-2575 "Make MCP Stateless" and SEP-2567 "Sessionless MCP via Explicit State Handles" are both **Final** | [SEP-2575](https://modelcontextprotocol.io/seps/2575-stateless-mcp), [SEP-2567](https://modelcontextprotocol.io/seps/2567-sessionless-mcp) |
| The draft changelog after 2026-07-28 has only minor changes (no reversal) | [Draft changelog](https://modelcontextprotocol.io/specification/draft/changelog) |

## Before: MCP 2025-11-25 (the predecessor)
| Fact | Source |
|---|---|
| MCP is an open protocol that connects LLM applications to external data sources and tools | [Spec overview](https://modelcontextprotocol.io/specification/2026-07-28) |
| The initialization phase MUST be the first interaction: `initialize` request, then `initialized` notification (the handshake) | [2025-11-25 Lifecycle](https://modelcontextprotocol.io/specification/2025-11-25/basic/lifecycle) |
| On Streamable HTTP a server MAY assign a session ID at initialization in `MCP-Session-Id`; the client MUST then send it on every request | [2025-11-25 Transports](https://modelcontextprotocol.io/specification/2025-11-25/basic/transports) |
| The server holds session state; a plain round-robin load balancer can't spread a client's requests, so operators use sticky sessions | [SEP-2575 motivation](https://modelcontextprotocol.io/seps/2575-stateless-mcp) |
| If the server instance holding a session fails, that session state is lost and the client must reconnect and redo the handshake | [SEP-2575 motivation](https://modelcontextprotocol.io/seps/2575-stateless-mcp) |

## New: MCP 2026-07-28
| Fact | Source |
|---|---|
| The `initialize`/`initialized` handshake is removed; every request carries its protocol version and client capabilities in `_meta` (SEP-2575) | [Changelog 2026-07-28](https://modelcontextprotocol.io/specification/2026-07-28/changelog), item 2 |
| Protocol-level sessions and the `Mcp-Session-Id` header are removed from Streamable HTTP (SEP-2567) | [Changelog 2026-07-28](https://modelcontextprotocol.io/specification/2026-07-28/changelog), item 1 |
| Servers that need cross-call state mint an explicit handle from a tool (e.g. `create_basket()` returns `basket_id`) and the model passes it back as an ordinary argument | [Changelog](https://modelcontextprotocol.io/specification/2026-07-28/changelog) item 1, [SEP-2567 abstract](https://modelcontextprotocol.io/seps/2567-sessionless-mcp) |
| "Any request can now land on any server instance behind a plain round-robin load balancer without needing shared storage" | [MCP blog](https://blog.modelcontextprotocol.io/posts/2026-07-28/) |
| Stateless by default "enables straightforward horizontal scaling and improves resilience, as any request can be handled by any server instance" | [SEP-2575 rationale](https://modelcontextprotocol.io/seps/2575-stateless-mcp) |
| New optional `server/discover` for clients that want capabilities up front | [Changelog](https://modelcontextprotocol.io/specification/2026-07-28/changelog) item 3 |
| A server on 2026-07-28 that gets an old client's `Mcp-Session-Id` ignores it; interop with older versions means implementing the older revision too | [2026-07-28 Streamable HTTP](https://modelcontextprotocol.io/specification/2026-07-28/basic/transports/streamable-http) |

## The story: a diner (everyday life)
Everyone has eaten somewhere with table service. Mapping, checked against how the protocol works:
| Diner | MCP | Holds because |
|---|---|---|
| Customer | AI app (MCP client) | it asks for things |
| Waiter | MCP server instance | it serves requests |
| Shaking hands with your waiter | the `initialize` handshake | done once, before anything else |
| Table number | `Mcp-Session-Id` | handed out at the start, shown on every later request |
| Order kept in the waiter's head | session state on one server instance | other instances don't have it |
| "Not my table" | a different instance can't serve the session without sticky routing / a shared store | SEP-2575 |
| Waiter goes home, order lost | the instance fails, session state is lost, start over | SEP-2575 |
| Complete order slip | a self-describing request (version, client info, capabilities in `_meta`) | changelog item 2 |
| Busy night: add waiters | horizontal scaling behind a round-robin load balancer | blog |
| Ticket for your basket | an explicit, server-minted state handle passed back as an argument | SEP-2567 |

Where the analogy stops (not said in the video):
- The session ID was optional (a server MAY assign one); stdio servers never had one. The hook's "how MCP worked" means remote MCP over HTTP with sessions.
- A request that is in flight when its stream breaks is still lost; the client re-sends it as a new request (changelog item 9). "The next one takes your order" means the next request, not a rescued one.
- The ticket is passed by the model as a tool argument; "the app shows it" simplifies who carries it.
- Old and new versions do not talk to each other unless an implementation supports both revisions; the video does not cover migration.
- Real waiters' slips are a common restaurant practice; no historical claim about restaurants is made, so none needs a source.

## Left out on purpose
- Multi Round-Trip Requests, `subscriptions/listen`, caching hints, header routing, Tasks, auth changes: real, but a second idea in a 60 s video.
- Download numbers and partner quotes from the blog: marketing, not the lesson.
- Press reading ("breaking in both directions", WorkOS, The Register, Hashnode): the spec's own backward-compatibility text is the primary source.

## How this was researched
Two items (old revision, new revision), so the maker's own documents were read directly instead of the Deep-Research fan-out,
as Episode 0 did. Pages fetched as markdown from modelcontextprotocol.io (`.md` suffix) and the official blog.
