# Ruta del proyecto actual
$projectPath = (Resolve-Path .).Path

# Ejecutar Docker usando Node 18 y generar Prisma Client con binarios para Linux
docker run --rm `
  -v "${projectPath}:/app" `
  -w /app `
  node:18 `
  sh -c "npm install && npx prisma generate"
