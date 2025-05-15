#!/bin/bash

# Usa pwd -W si existe (Git Bash en Windows), o pwd normal
if command -v pwd -W > /dev/null 2>&1; then
  PROJECT_PATH=$(pwd -W)
else
  PROJECT_PATH=$(pwd)
fi

docker run --rm \
  -v "$PROJECT_PATH:/app" \
  -w /app \
  node:18 \
  sh -c "npm install && npx prisma generate"
