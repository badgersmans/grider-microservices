# Posts service

## Course position

Lesson 13, Posts Service Creation.
## Transcript anchor

This page is grounded in the `Posts Service Creation` heading in `transcript.txt`. The transcript is the source for the lesson goal. The code in `blog/posts/index.js` records the current implementation of that goal.
## Lesson 14 testing

Manual testing uses Yaak. The Git synced workspace is stored at `blog/yaak-workspace`.


## Location and command

Source file: `blog/posts/index.js`

Start it from the repository root with:

```bash
cd blog/posts
npm install
npm start
```

The service listens on port `4000` and prints `Listening on 4000`.

## Responsibility

The service creates posts and returns all posts. A post currently has only an `id` and a `title`.

## Routes

| Method | Route | Input | Result |
| --- | --- | --- | --- |
| `GET` | `/posts` | None | All posts as a JSON object |
| `POST` | `/posts` | JSON body with a string `title` | Created post with status `201` |

Example request body:

```json
{
  "title": "My first post"
}
```

Example manual checks:

```bash
curl http://localhost:4000/posts

curl -X POST http://localhost:4000/posts \
  -H "Content-Type: application/json" \
  -d '{"title":"My first post"}'

curl http://localhost:4000/posts
```

## Implementation notes

`body-parser` parses JSON request bodies and exposes them through `req.body`.

`randomBytes(4).toString("hex")` creates an eight character hexadecimal ID.

Posts are stored in the module level `posts` object. There is no database or persistence yet. The `node --watch` command also means a code change restarts the process and clears all stored posts.

There is currently no validation for a missing or non string `title`. That matches the simple course implementation.

## Dependency note

`index.js` imports `body-parser`. The current `package.json` does not list it directly, although the lockfile contains it through the Express dependency tree. Keep this in mind if dependency installation becomes inconsistent.

## Current verification

Lesson 14 manually tests post creation and listing with Yaak before the course moves on to the comments service.
