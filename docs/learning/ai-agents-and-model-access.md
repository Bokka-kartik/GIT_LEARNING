# AI agents and model access

## Why start with OpenClaw—and is there a better option?

OpenClaw is worth exploring if an open-source, customizable approach is what you want; verify its current license and extension options. That does not make it the best choice for everyone: compare it with Hermes on setup effort, model choices, tool access, privacy, reliability, and cost. “Better” depends on which of those matters most to you.

OpenClaw and Hermes commands were present in the initial inventory, but that does not prove either is configured or running. A fair comparison uses the same harmless task in both.

## How the pieces fit together

A **model** generates responses; an **agent** coordinates a task and may call tools; a **gateway** gives clients a common interface to model providers; a **UI** is where the person interacts. One product can combine these roles. For example, a gateway may let the same client switch providers while the agent handles tool use.

## Free-tier trade-offs

Free models can be enough for experiments and tasks that fit a provider's free tier. They will not suit every task: quotas, quality, latency, privacy terms, and outages matter. A gateway does not make upstream providers unlimited or free.

The local FreeLLMAPI project describes an OpenAI-compatible API that routes among providers. Before relying on it, check current provider limits, data terms, and fallback behavior; these can change.

### A verified Claude CLI route

On 21 November 2026, Claude CLI in Termux Ubuntu sent requests through a local FreeLLM endpoint. `ANTHROPIC_BASE_URL` pointed to `localhost:3001`, and the FreeLLM dashboard recorded input-token usage. This confirms that an Anthropic-compatible client can reach a different provider through an API-compatible gateway.

The routing check also demonstrates that a locally running server is not assumed until a listener and HTTP endpoint are verified. Useful checks include `ss -ltnp | grep 3001`, `echo "$ANTHROPIC_BASE_URL"`, and `curl http://localhost:3001/`.

## What did local inference teach?

A quantized 1.7B model using Q4_K_M worked as a local phone experiment. A 7B model loaded, but was difficult and slow to use. Successful loading is not the same as practical inference: RAM use, inference speed, thermal load, and comfort still matter.

## What should come next?

Learn the agent loop before adopting more agent frameworks:

1. Trace `User -> Model -> Tool decision -> Execution -> Result -> Model`.
2. Build one small Node.js tool.
3. Handle tool calls and inspect the tool result.
4. Test invalid input and execution failures.
5. Add iteration limits and clear success or stopping conditions.

The goal is to understand tool execution and error handling before comparing complete frameworks such as OpenClaw or Hermes.

## Cost control with TokenEconomizer

The local project tries to reduce repeated agent-session waste in three ways:

**Micro-skills** retain repository facts, **tool pruning** avoids unused tools, and **loop intervention** nudges an agent after repeated failures.

It is a cost-control tool, not a model or gateway. Its value depends on whether it saves money without lowering task quality.

For a comparison, run the same non-sensitive task and compare result quality, time, cost, and failures—not just token count. Keep credentials and personal data out of notes and test prompts.
