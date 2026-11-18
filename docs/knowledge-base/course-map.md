# Course map

This map records the current repository state, not an assumed completion history.

## Course source

The course map follows `transcript.txt` only. The transcript controls the sequence and the concepts being learned.

The repository may use newer equivalent tooling. Vite is the current client tool in place of the transcript's Create React App setup. This does not change the lesson content.

## Current position

| Course step | Status | Repository evidence |
| --- | --- | --- |
| Application overview | Context available | `transcript.txt` describes posts and comments |
| Project setup | Present | `blog/client`, `blog/posts`, and `blog/comments` exist |
| Posts Service Creation, Lesson 13 | Complete | `blog/posts/index.js` implements the first service |
| Testing the Posts Service, Lesson 14 | Complete | Manual requests are stored in `blog/yaak-workspace` |
| Implementing a Comments Service, Lesson 15 | Complete | `blog/comments/index.js` implements the isolated comments service |
| Quick Comments Test, Lesson 16 | Complete | Yaak requests test comment creation and retrieval |
| Event Bus Overview, Lesson 30 | Context available | `transcript.txt` describes the relay design |
| A Basic Event Bus Implementation, Lesson 31 | Complete | `event-bus/index.js` implements the relay |
| Emitting Events, Lesson 32 | Next | The next transcript step adds service event emission |

## Course architecture being built

The application has a React client, posts and comments services, and a basic event bus. The first version stores service data in memory rather than in a database.

The event bus is implemented, but posts and comments do not yet emit or receive events in this repository snapshot. Those changes are planned in the next transcript steps.

## How to update this map

When starting a new lesson, change the `Current` row and add the next lesson to the table if it is known from the transcript.

When a lesson is complete in the repository, change its status only when the corresponding code or verification exists.
