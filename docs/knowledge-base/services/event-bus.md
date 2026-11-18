# Event bus

## Course position

Lesson 31, A Basic Event Bus Implementation.

## Transcript anchor

This page follows the `A Basic Event Bus Implementation` heading in `transcript.txt`.

## Location and command

Source file: `event-bus/index.js`

Start it from the repository root with:

```bash
cd event-bus
npx npq install
npm start
```

The service listens on port `4005` and prints `Listening on 4005`.

## Responsibility

The event bus accepts an event from a service and forwards the same JSON event to the event endpoints on ports `4000`, `4001`, and `4002`.

This is the simple relay built in the course. It does not persist events, filter event types, or provide retry handling.

## Route

| Method | Route | Input | Result |
| --- | --- | --- | --- |
| `POST` | `/events` | Any JSON event body | `{ "status": "OK" }` immediately after fanout starts |

## Implementation notes

`body-parser` parses the incoming JSON body.

The relay uses Node's native `fetch`, so it has no Axios dependency. Each destination request includes the JSON content type and the exact event body.

The three requests start independently. Non successful HTTP responses and network failures are logged. The route does not wait for all destinations before responding.

The current posts and comments services do not yet expose `POST /events`, and the query service on port `4002` is not present in this repository snapshot. Fanout failures are expected until the later event emission and event receiving lessons are implemented.

The service has no database or other persistent storage.
