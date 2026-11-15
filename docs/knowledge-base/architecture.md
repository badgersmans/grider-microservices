# Architecture
## Course alignment

`transcript.txt` is the sole pedagogical source. The architecture must follow its microservices concepts, service boundaries, data ownership, and communication lessons.

Tooling modernization is allowed only when it preserves the lesson goal and observable behavior. The client uses Vite as the modern equivalent of the transcript's Create React App setup.

Do not introduce unrelated architecture or implementation patterns ahead of the lesson that teaches them.

## Repository layout

| Area | Path | Current role |
| --- | --- | --- |
| Frontend | `blog/client` | React application built and served by Vite |
| Posts service | `blog/posts` | Creates and lists posts |
| Comments service | `blog/comments` | Creates and lists comments by post ID |
| Course transcript | `transcript.txt` | Full lecture text and sequence |
| API testing workspace | `blog/yaak-workspace` | Yaak requests synced with the course |

## Service map

| Service | Port | Interface | Storage | Status |
| --- | --- | --- | --- | --- |
| Client | Vite default, usually `5173` | Browser UI | Browser memory | Completed React app uses native `fetch` for both service APIs |
| Posts | `4000` | `GET /posts`, `POST /posts` | In memory | Implemented in `blog/posts/index.js` |
| Comments | `4001` | `GET /posts/:id/comments`, `POST /posts/:id/comments` | In memory | Implemented; Lesson 16 quick test uses Yaak |

## Current request flow

The posts service can be called directly at `http://localhost:4000`.

The client renders the completed React app and calls both services directly using native `fetch`.

Its Vite entrypoint is `blog/client/src/index.jsx`.

Browser cross origin access still depends on server CORS configuration, which is handled in a later transcript lesson.


```text
Browser -> Vite React client -> posts service
Browser -> Vite React client -> comments service
```

## Data boundary

Each service owns its own data. The current toy implementation keeps data in process memory, so restarting a service removes its data.

Do not add direct database access from one service into another service. Later lessons introduce communication between services without breaking that boundary.
