#!/bin/bash

# Detecta ruta completa válida para Docker en Windows
PROJECT_PATH=$(pwd -W 2>/dev/null || pwd)

docker run --rm ^
  -v "${PROJECT_PATH}:/app" ^
  -w /app ^
  node:18 ^
  sh -c "npm install && npx prisma generate"
