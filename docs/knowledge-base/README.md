# Course knowledge base

This folder is the short, maintained map of the microservices course project.

Read this file first when you need project context. Use `transcript.txt` as the sole pedagogical source, and use the source code to inspect the current implementation.

## Course boundary

`transcript.txt` is the only source for course content. Use it for the lesson order, concepts, terminology, and exercises.

Tooling can change when the course goal and observable behavior stay the same. The current React client uses Vite instead of the transcript's Create React App setup. That is a tooling change, not a change to the microservices material.

Do not add unrelated architecture, frameworks, or lessons. Record any necessary tooling difference in the relevant knowledge base page.

## Files

| File | Purpose |
| --- | --- |
| `course-map.md` | Current lesson position and the next course steps |
| `architecture.md` | Services, ports, responsibilities, and request flow |
| `services/posts.md` | The posts service contract, implementation, and test commands |
| `services/comments.md` | The comments service contract, implementation, and test commands |
| `tools/yaak.md` | Yaak setup, workspace, and Lessons 14 through 16 checks |

## Current position

The current lesson is Lesson 16, Quick Comments Test.

Lessons 13 through 15 are complete. The posts service and comments service are implemented, and current work is manual verification of the comments routes with Yaak.

## Update rule

When a lesson changes a route, port, data shape, command, or service responsibility, update the matching knowledge base page in the same change.

Keep planned work separate from observed code. Mark it as planned or next instead of describing it as implemented.

## Sources

| Source | Use |
| --- | --- |
| `transcript.txt` | Sole pedagogical source for the course |
| `blog/client` | React and Vite frontend |
| `blog/posts` | Posts service |
| `blog/comments` | Comments service |
