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
| Event bus | `event-bus` | Relays service events on port `4005` |
| Course transcript | `transcript.txt` | Full lecture text and sequence |
| API testing workspace | `blog/yaak-workspace` | Yaak requests synced with the course |

## Service map

| Service | Port | Interface | Storage | Status |
| --- | --- | --- | --- | --- |
| Client | Vite default, usually `5173` | Browser UI | Browser memory | Completed React app uses native `fetch` for both service APIs |
| Posts | `4000` | `GET /posts`, `POST /posts` | In memory | Implemented in `blog/posts/index.js` |
| Comments | `4001` | `GET /posts/:id/comments`, `POST /posts/:id/comments` | In memory | Implemented; Lesson 16 quick test uses Yaak |
| Event Bus | `4005` | `POST /events` | None | Implemented in `event-bus/index.js`; later service event endpoints are pending |

## Current request flow

The posts and comments services can still be called directly at `http://localhost:4000` and `http://localhost:4001`.

The client renders the React app and calls both services directly using native `fetch`.

The event bus accepts service events at `http://localhost:4005/events`. It forwards the same JSON body to ports `4000`, `4001`, and `4002`.

The posts, comments, and query service event endpoints are not implemented yet in this repository snapshot, so fanout errors are expected until later lessons.

```text
Browser -> Vite React client -> posts service
Browser -> Vite React client -> comments service
Posts or comments service -> event bus -> ports 4000, 4001, and 4002
```

## Data boundary

Each service owns its own data. The current toy implementation keeps data in process memory, so restarting a service removes its data.

Do not add direct database access from one service into another service. Later lessons introduce communication between services without breaking that boundary.
