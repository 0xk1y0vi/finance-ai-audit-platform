#!/bin/bash

echo "🚀 Starting Finance AI..."

docker start n8n 2>/dev/null || true

if ! pgrep -x "ollama" > /dev/null
then
    nohup ollama serve >/tmp/ollama.log 2>&1 &
    sleep 5
fi

echo ""
echo "Services Status:"
echo ""

docker ps

echo ""
echo "Ollama:"
ollama list

echo ""
echo "✅ Finance AI Ready"
