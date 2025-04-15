#!/usr/bin/env node

const { spawn } = require('child_process');
const http = require('http');
const readline = require('readline');

const API_KEY = process.env.GENERATE_API_KEY || 'defaultapikey';
const BASE_URL = 'http://localhost:3000';

// Create interface for command line input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function startServer() {
  console.log('🚀 Starting development server...');
  
  // Start the Next.js development server
  const server = spawn('npm', ['run', 'dev'], { 
    stdio: ['ignore', 'pipe', 'pipe'],
    shell: true
  });
  
  let serverStarted = false;
  
  server.stdout.on('data', (data) => {
    const output = data.toString();
    
    if (output.includes('started server on') || output.includes('ready - started server on')) {
      serverStarted = true;
      console.log('✅ Server started successfully!');
      showMenu();
    }
    
    console.log(output.trim());
  });
  
  server.stderr.on('data', (data) => {
    console.error(`⚠️ ${data.toString().trim()}`);
  });
  
  server.on('close', (code) => {
    console.log(`Server process exited with code ${code}`);
    rl.close();
  });
  
  // Check if server started after a timeout
  setTimeout(() => {
    if (!serverStarted) {
      console.log('⏳ Server is taking longer than expected to start...');
    }
  }, 10000);
  
  return server;
}

function makeApiRequest(endpoint, method = 'GET', body = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: endpoint,
      method: method,
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    };
    
    const req = http.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            const jsonData = JSON.parse(data);
            resolve(jsonData);
          } catch (e) {
            resolve(data);
          }
        } else {
          reject(`Request failed with status code ${res.statusCode}: ${data}`);
        }
      });
    });
    
    req.on('error', (e) => {
      reject(`Request error: ${e.message}`);
    });
    
    if (body) {
      req.write(JSON.stringify(body));
    }
    
    req.end();
  });
}

async function generateArticle() {
  console.log('🔄 Generating new article...');
  
  try {
    const result = await makeApiRequest('/api/articles/generate', 'POST');
    console.log('✅ Success:', result.message || JSON.stringify(result));
  } catch (error) {
    console.error('❌ Error:', error);
  }
  
  showMenu();
}

async function startScheduler() {
  console.log('🔄 Starting article scheduler...');
  
  try {
    const result = await makeApiRequest('/api/scheduler', 'POST');
    console.log('✅ Success:', result.message || JSON.stringify(result));
  } catch (error) {
    console.error('❌ Error:', error);
  }
  
  showMenu();
}

async function stopScheduler() {
  console.log('🔄 Stopping article scheduler...');
  
  try {
    const result = await makeApiRequest('/api/scheduler', 'DELETE');
    console.log('✅ Success:', result.message || JSON.stringify(result));
  } catch (error) {
    console.error('❌ Error:', error);
  }
  
  showMenu();
}

async function checkSchedulerStatus() {
  console.log('🔄 Checking scheduler status...');
  
  try {
    const result = await makeApiRequest('/api/scheduler');
    console.log('✅ Status:', result.isRunning ? 'Running' : 'Stopped');
  } catch (error) {
    console.error('❌ Error:', error);
  }
  
  showMenu();
}

async function listArticles() {
  console.log('🔄 Fetching articles...');
  
  try {
    const result = await makeApiRequest('/api/articles');
    
    if (result.articles && result.articles.length > 0) {
      console.log(`✅ Found ${result.articles.length} articles:`);
      result.articles.forEach((article, index) => {
        console.log(`${index + 1}. ${article.title} (${article.slug})`);
      });
    } else {
      console.log('❌ No articles found');
    }
  } catch (error) {
    console.error('❌ Error:', error);
  }
  
  showMenu();
}

function showMenu() {
  console.log('\n📋 Article Generator Test Menu:');
  console.log('1. Generate a new article');
  console.log('2. Start scheduler');
  console.log('3. Stop scheduler');
  console.log('4. Check scheduler status');
  console.log('5. List all articles');
  console.log('0. Exit');
  
  rl.question('\nEnter your choice: ', (choice) => {
    switch (choice) {
      case '1':
        generateArticle();
        break;
      case '2':
        startScheduler();
        break;
      case '3':
        stopScheduler();
        break;
      case '4':
        checkSchedulerStatus();
        break;
      case '5':
        listArticles();
        break;
      case '0':
        console.log('👋 Exiting...');
        process.exit(0);
        break;
      default:
        console.log('❌ Invalid choice, please try again');
        showMenu();
    }
  });
}

// Start the server when the script is run
const server = startServer(); 