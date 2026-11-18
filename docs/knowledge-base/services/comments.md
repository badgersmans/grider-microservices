# Comments service

## Course position

Lesson 15, Implementing a Comments Service.

Transcript section: `NATS Streaming Server - An Event Bus Implementation`.
## Lesson 16 testing

The Quick Comments Test uses Yaak to create two comments for one post ID, retrieve them, and confirm that both remain in the array.


## Location and command

Source file: `blog/comments/index.js`

Start it from the repository root with:

```bash
cd blog/comments
npm install
npm start
```

The service listens on port `4001` and prints `Listening on 4001`.

## Responsibility

The service creates comments associated with a post and returns comments for a specific post.

A comment currently has an `id` and `content`.

## Data structure

Comments are grouped by post ID:

```text
commentsByPostId = {
  postId: [
    { id, content },
    { id, content }
  ]
}
```

This makes lookup by post ID direct. An unknown post ID returns an empty array for a `GET` request.

## Routes

| Method | Route | Input | Result |
| --- | --- | --- | --- |
| `GET` | `/posts/:id/comments` | Post ID in the URL | Comments for that post, or `[]` |
| `POST` | `/posts/:id/comments` | JSON body with a string `content` | Updated comment array with status `201` |

Example request body:

```json
{
  "content": "My first comment"
}
```

## Request flow

For a `POST` request, the service generates a comment ID, reads `content` from `req.body`, finds or creates the array for `req.params.id`, appends the comment, stores the array, and returns the full array.

For a `GET` request, the service reads the array at `commentsByPostId[req.params.id]` and returns it. If no array exists, it returns `[]`.

## Intentional limits

The service stores data in memory. Restarting it removes all comments.

The service does not check whether the post exists in the posts service. A comment can currently be created for any ID. The course introduces service communication after this isolated implementation.

The service returns the full comment array after creation instead of only the new comment. That matches the lesson implementation.

There is no validation for missing or non string `content` in this lesson.

## Testing

Lesson 16 uses the Yaak workspace at `blog/yaak-workspace` for manual requests. The separate `event-bus` service is now present, but this comments service does not yet emit or receive events.
