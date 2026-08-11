# Backend

A project created with FastAPI CLI.

## Quick Start

### Start the development server

```bash
uv run fastapi dev
```

Visit http://localhost:8000

### Deploy to FastAPI Cloud

Sign up and log in at https://fastapicloud.com, then deploy with:

```bash
uv run fastapi deploy
```

## Project Structure

- `main.py` - Your FastAPI application
- `pyproject.toml` - Project dependencies

## Learn More

- [FastAPI Documentation](https://fastapi.tiangolo.com)
- [FastAPI Cloud](https://fastapicloud.com)


## Developer Setup Guide

This project uses [pre-commit](https://pre-commit.com/) to automatically check and format code before changes are committed.

### One-Time Repository Setup

From inside the `./backend` directory, follow these steps to set up your local development environment:

#### 1. Install Dependencies
Ensure you have [uv](https://github.com/astral-sh/uv) installed. Then, sync the project dependencies (which includes `pre-commit` as a dev dependency):
```bash
uv sync
```

#### 2. Enable uv Speed Optimization for Hooks
To make pre-commit utilize `uv` under the hood for lightning-fast hook environment creation, export the native environment variable.

Add this to your shell profile (`.bashrc`, `.zshrc`) or run it in your terminal:
```bash
export PRE_COMMIT_USE_UV=1
```

### 3. Install the Git Hooks
Register the pre-commit hooks into your local `.git` directory:
```bash
cd ..
uv run pre-commit install
```

## Running Hooks Manually

If you want to verify your changes before staging a commit, you can trigger the pipeline manually at any time:
```bash
uv run pre-commit run --all-files
```
