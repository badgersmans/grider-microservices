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
| Testing the Posts Service, Lesson 14 | Current | Manual requests are stored in `blog/yaak-workspace` |
| Implementing a Comments Service | Next | `blog/comments` has package setup, but no service source file yet |

## Course architecture being built

The application has a React client, a posts service, and a comments service. The first version stores data in memory rather than in a database.

The course later uses service communication patterns to connect comments with posts. That behavior is not part of the current posts service implementation.

## How to update this map

When starting a new lesson, change the `Current` row and add the next lesson to the table if it is known from the transcript.

When a lesson is complete in the repository, change its status only when the corresponding code or verification exists.
