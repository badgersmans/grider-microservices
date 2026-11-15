# AI agent guide

Read `docs/knowledge-base/README.md` before changing the project. It points to the current course position and the service notes.

## Course source and boundary

`transcript.txt` is the only pedagogical source for this repository. Follow its lecture order, concepts, and exercises.

The transcript defines what the course teaches. Source files define what is currently implemented. If they differ, preserve the transcript goal and document the implementation difference.

Tooling may be modernized when the learning goal and observable behavior stay the same. Vite may replace Create React App for the client. Do not add unrelated frameworks, architectures, or lessons that are not in the transcript.

When a lesson is implemented, record its transcript heading in the matching knowledge base page.


## Project facts

This repository follows a microservices course project. The current lesson is Lesson 16, Quick Comments Test.


The repository has three separate projects:

| Project | Path | Role |
| --- | --- | --- |
| Client | `blog/client` | React frontend using Vite |
| Posts | `blog/posts` | Express posts service on port `4000` |
| Comments | `blog/comments` | Express comments service on port `4001` |
## API testing

Yaak is the manual API client for Lessons 14 through 16. The Git synced workspace is `blog/yaak-workspace`.

Workspace encryption is enabled. The encryption key stays in Bitwarden and must never be stored in the repository or knowledge base.


## Working rules

1. Read the matching knowledge base page before editing a service.
2. Keep each service independent. Do not make one service read another service's database.
3. Update `docs/knowledge-base/course-map.md` when the course position changes.
4. Update the relevant service page when a route, port, data shape, command, or responsibility changes.
5. Treat source code as the authority for the current implementation. Treat `transcript.txt` as the authority for course meaning and sequence.
6. Mark planned behavior as planned. Do not describe it as implemented.
7. Keep this project simple and follow the course structure unless a change is explicitly requested.

## Local commands

Run the posts service from `blog/posts` with `npm start`.

Run the Vite client from `blog/client` with `npm run dev`.

Run the comments service from `blog/comments` with `npm start`.
