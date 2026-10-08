const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = 4599;

// Temporary server to receive the base64 image from the browser
const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/save') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const payload = JSON.parse(body);
        const base64Data = payload.image.replace(/^data:image\/png;base64,/, "");
        const targetPath = path.join(__dirname, '../public/aim_logo_circle.png');
        
        fs.writeFileSync(targetPath, base64Data, 'base64');
        console.log('SUCCESS: Circular logo saved to ' + targetPath);
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'ok' }));
        
        // Shut down the server after a short delay
        setTimeout(() => {
          process.exit(0);
        }, 1000);
      } catch (err) {
        console.error('ERROR saving image:', err);
        res.writeHead(500);
        res.end('Error');
      }
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Temp server listening on port ${PORT}`);
  
  // Create the HTML file that loads the logo, crops it, and POSTs it back
  const logoPath = path.join(__dirname, '../public/aim_logo.png');
  // Read logo as base64 to avoid CORS issues when loading local image in canvas
  const logoBase64 = fs.readFileSync(logoPath).toString('base64');
  
  const htmlContent = `
<!DOCTYPE html>
<html>
<head><title>Crop Logo</title></head>
<body>
  <canvas id="canvas" width="128" height="128"></canvas>
  <script>
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = function() {
      // Clear canvas
      ctx.clearRect(0, 0, 128, 128);
      
      // Draw white circular background with light gray border
      ctx.beginPath();
      ctx.arc(64, 64, 62, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#E2E8F0';
      ctx.stroke();
      
      // Clip for the logo
      ctx.save();
      ctx.beginPath();
      ctx.arc(64, 64, 56, 0, Math.PI * 2);
      ctx.clip();
      
      // Draw image inside clip
      ctx.drawImage(img, 12, 12, 104, 104);
      ctx.restore();
      
      // Send base64 to server
      const dataUrl = canvas.toDataURL('image/png');
      fetch('http://localhost:${PORT}/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: dataUrl })
      })
      .then(r => r.json())
      .then(d => {
        document.body.innerHTML = '<h1>Done! Check console.</h1>';
      });
    };
    img.src = 'data:image/png;base64,${logoBase64}';
  </script>
</body>
</html>
  `;
  
  const htmlPath = path.join(__dirname, 'crop.html');
  fs.writeFileSync(htmlPath, htmlContent);
  console.log(`HTML generator written to ${htmlPath}`);
});
