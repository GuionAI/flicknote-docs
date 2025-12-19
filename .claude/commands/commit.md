---
description: Create a git commit following Conventional Commits
allowed-tools: Bash(git status:*), Bash(git diff:*), Bash(git log:*), Bash(git commit:*)
---

Analyze the staged changes and create a git commit following the Conventional Commits specification.

## Current State

Git status:
!`git status`

Staged changes:
!`git diff --cached`

Recent commits (for style reference):
!`git log -10 --oneline`

## Instructions

1. Review the staged changes above
2. Generate a commit message following Conventional Commits format:
   - Type: feat, fix, refactor, docs, style, test, chore, perf, ci, build, revert
   - Scope: optional, in parentheses
   - Description: concise summary in present tense
   - Body: optional, detailed explanation
   - Footer: optional, breaking changes or issue references
3. Match the existing commit style in this repository
4. Create the commit with this format:

```
<type>[optional scope]: <description>

[optional body]

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

5. Execute the commit using `git commit -m` with a heredoc for proper multi-line formatting
6. Show the final commit hash and message

IMPORTANT: Only commit the already staged files. Do NOT stage additional files.
CUT THE SHIT, don't summary when you done!
