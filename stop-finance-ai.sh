#!/bin/bash

echo "🛑 Stopping Finance AI..."

pkill ollama 2>/dev/null || true

docker stop n8n 2>/dev/null || true

echo ""
echo "✅ Stopped"
