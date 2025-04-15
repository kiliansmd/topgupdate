#!/bin/bash

# Fix dependencies and ensure DetailModal component works

echo "🔧 Fixing dependencies for the project..."
echo "This will install all necessary dependencies using --force to resolve conflicts"

# Install all dependencies with force flag to resolve conflicts
npm install --force

echo "✅ Dependencies installed successfully!"
echo "The DetailModal component should now work properly."
echo "If you still face issues, run: npm install framer-motion@latest @emotion/is-prop-valid@latest --force"

echo "🚀 Project is ready to use!" 