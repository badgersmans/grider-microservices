# Yaak

## Course use

Yaak is the manual API client for Lesson 14, Testing the Posts Service.

It replaces the transcript's Postman walkthrough without changing the lesson goal. The goal is still to send requests to the posts service and inspect the responses.

## Workspace

The Git synced Yaak workspace lives at `blog/yaak-workspace`.

Keep the workspace in the repository so request definitions can follow the course as it progresses. Review workspace diffs before committing them.

## Encryption

Workspace encryption is enabled. The encryption key is stored in Bitwarden and is not stored in this repository.

Never put the key in a knowledge base page, source file, environment file, commit message, or request definition. Treat request data as potentially sensitive and do not commit real credentials or tokens.

## Current posts service checks

Run the service from `blog/posts`:

```bash
npm start
```

Use Yaak to send these requests to `http://localhost:4000`:

| Method | URL | Body |
| --- | --- | --- |
| `GET` | `/posts` | None |
| `POST` | `/posts` | JSON with a `title` string |

A successful create request returns status `201` and the new post. A later `GET /posts` returns the stored posts until the service restarts.

## Installation

On Apple Silicon macOS, install Yaak with:

```bash
brew install --cask yaak
```
