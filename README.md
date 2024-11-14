# Next.js + Tailwind CSS + TypeScript + EsLint + Prettier + Husky + Lint-Staged + CommitLint Starter and Boilerplate

A Next.js starter project configured with TypeScript, Tailwind CSS, and a suite of development tools and configurations to ensure a smooth and maintainable development workflow.

## Features

- 🟦 **TypeScript** — for type-safe JavaScript.
- 🎨 **Tailwind CSS** — for utility-first styling.
- 🛠️ **ESLint** — to maintain code quality and consistency.
- ✨ **Prettier** — for consistent code formatting.
- 🔖 **Commitlint** — to enforce conventional commit messages.
- 🚫 **lint-staged** — to run linters on git-staged files.
- 🐶 **Husky** — to manage Git hooks.
- 📜 **Conventional Commit** — to standardize commit messages.
- 🧩 **shadcn** — for a component library with styled themes.
- 🌗 **Next Theme** — to enable light/dark theme toggling.
- 🔒 **Typesafe env** — for strict environment variable validation.

---

## Getting Started

### 1. Clone the Repository

   ```bash
   git clone https://github.com/SajjanKarn/next-starter-kit
   ```

### 2. Install Dependencies

   Navigate into the project directory and install dependencies. **pnpm** is recommended to ensure Husky hooks function correctly:

   ```bash
   cd next-starter-kit
   yarn

   or

   npm i

   or
   pnpm install
   ```

### 3. Run the Development Server

Start the development server with:

```bash
yarn dev
```

Open http://localhost:3000 in your browser to view the app.

# Commit Message Guidelines

This project follows the **Conventional Commits** standard to ensure consistent and readable commit history. Each commit message should follow the structure below:

### Commit Message Format


- **type**: Describes the category of the change. Examples include `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `perf`, `test`, and `build`.
- **scope** (optional): Clarifies what part of the codebase the change affects, such as `api`, `ui`, `auth`, etc.
- **subject**: A short, imperative description of the change, explaining what the commit does (e.g., `add login form validation`).

### Commit Types

| Type       | Description                                                    |
|------------|----------------------------------------------------------------|
| `feat`     | Adds a new feature                                             |
| `fix`      | Fixes a bug                                                    |
| `chore`    | General maintenance tasks, not affecting source code or tests  |
| `docs`     | Documentation changes                                          |
| `style`    | Code style updates (formatting, missing semi-colons, etc.)     |
| `refactor` | Code refactoring without adding features or fixing bugs        |
| `perf`     | Performance improvement                                        |
| `test`     | Adding or updating tests                                       |
| `build`    | Changes affecting the build system or dependencies             |

### Examples

- **Feature**: `feat(auth): add user registration flow`
- **Bug Fix**: `fix(ui): resolve button alignment issue on mobile`
- **Chore**: `chore(deps): update eslint to latest version`
- **Documentation**: `docs(readme): update setup instructions`

### Additional Rules

- Keep the **subject line** to 50 characters or fewer.
- Use the **imperative mood** in the subject line (e.g., "add" not "adding").
- Capitalize the **type** and **scope** consistently (prefer lowercase).
- Avoid ending the **subject line** with a period.

By following these guidelines, the commit history will be clear, organized, and easy to understand.

### Examples

```bash
# Example commands for committing
git commit -m "feat(auth): add user registration flow"
git commit -m "fix(ui): resolve button alignment issue on mobile"
git commit -m "chore(deps): update eslint to latest version"
git commit -m "docs(readme): update setup instructions"
```
