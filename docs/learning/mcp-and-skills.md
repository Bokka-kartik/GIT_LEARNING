# MCP and agent skills

## What should I understand before trying MCP?

The Model Context Protocol is a standard way for an AI application to connect to tools and context providers. It does not provide the model. Review what an MCP server can read or change before connecting it.

The local folder `playwright-mcp-test` suggests browser automation was being explored, but its package manifest only confirms a Playwright test dependency. That is not proof of an MCP integration.

### Skills are a separate layer

A skill is reusable instructions for a task or working style—not a model or necessarily an executable. This repo keeps canonical skills in `.agents/skills/` and Claude Code discovery entries in `.claude/skills/`; see the [skills guide](../skills/README.md).

**Ponytail** favors the smallest complete change. **Caveman** makes replies terse without dropping technical facts. They change how an agent approaches or explains work; they do not make a weak model stronger.

## What is the difference between MCP and an agent skill?

MCP is a connection and permission layer for tools or context. A skill is instruction for how an agent should approach a task. The two can be used together: MCP may expose an email or calendar action, while a skill defines when and how an agent should use it.

A local model can discuss external actions, but that does not prove it can perform them. Browser automation or a Playwright package also does not prove that MCP is configured. Require a real MCP server, one exposed tool, client connection, and confirmed permission behavior before describing the integration as complete.

On 19 November 2026, this distinction was explored with an email-action question. MCP was considered as the possible tool boundary, but no MCP server or email integration was completed.

### A small trial

Try one small task. Check an MCP server's permissions and data access; compare a skill's result with and without it. Keep secrets out of the experiment.
