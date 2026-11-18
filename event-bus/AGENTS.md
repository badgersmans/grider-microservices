# Event bus context

## Role

This area implements Lesson 31, A Basic Event Bus Implementation, from `transcript.txt`.

## Files and command

The service entrypoint is `index.js`. Its package manifest is `package.json`.

Run it from the repository root with:

```bash
cd event-bus
npx npq install
npm start
```

The service listens on port `4005`.

## Conventions

Use CommonJS modules, `body-parser` for JSON request bodies, and Node's native `fetch` for fanout. Do not add Axios or Nodemon for this service.

`POST /events` forwards the received JSON body to ports `4000`, `4001`, and `4002`. The service has no persistent storage. Event receiving and emission in the other services are later course steps.

_Drafted by /sync from the introducing change, worth a quick human pass._
