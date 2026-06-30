# AGENTS.md

When working on UI components, always use the `shadcn` skill to create or scaffold the component itself when appropriate.

When working on UI components or Storybook stories, always use the `big-6-sb-mcp` MCP tools to access Storybook component and documentation knowledge before answering or taking any action.

- **CRITICAL: Never hallucinate component properties.**
- Before using any property on a design system component, query Storybook MCP documentation first.
- Use `list-all-documentation` to discover components.
- Use `get-documentation` to inspect supported props, examples, and existing usage.
- Use `get-storybook-story-instructions` before creating or updating stories.
- Run `run-story-tests` to validate story behaviour.

## Component creation rules

- Use the `shadcn` skill when creating a new component built from shadcn/ui primitives.
- Prefer components with explicit props and no hidden external state.
- Story-backed UI components should be presentational and stateless where practical.
- If state is required, keep it shallow and expose the behaviour through props whenever possible.

## Storybook rules

- Every reusable UI component should have a Storybook story.
- Stories should use Storybook autodocs.
- Define `argTypes` for component props so controls and documentation are explicit.
- Prefer CSF stories that demonstrate prop-driven states rather than embedded app logic.
- Add interaction tests in Storybook where behaviour can be validated through stories.
- Treat Storybook as the primary home for component-level unit and interaction coverage when appropriate.

## Constraints

- Only use props that are explicitly documented or shown in stories/examples.
- If a prop is not documented, do not assume it exists.
- If documentation is incomplete, stop and ask rather than guessing.
