export default async function handler(req, res) {
  // Obfuscated strings untuk keamanan
  const _0x3f3c = [
    'roblox', 
    'user-agent', 
    'toLowerCase', 
    'headers', 
    'includes', 
    'Access Denied', 
    'status', 
    'send', 
    'https://raw.githubusercontent.com/businessmanalex88-stack/BypassWhoAmI/refs/heads/main/Menu%20Cheats',
    'text/plain', 
    'Content-Type',
    'cache-control',
    'no-cache, no-store, must-revalidate',
    'x-powered-by',
    'Warpah VIP API'
  ];
  
  const _0x1a2f = function (i) { return _0x3f3c[i]; };

  try {
    // Set security headers
    res.setHeader(_0x1a2f(11), _0x1a2f(12));
    res.setHeader(_0x1a2f(13), _0x1a2f(14));
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    
    // Get user agent
    const ua = req[_0x1a2f(3)][_0x1a2f(1)]?.[_0x1a2f(2)]() || "";
    
    // Log untuk monitoring
    console.log(`Request from: ${req.headers['x-forwarded-for'] || req.connection.remoteAddress}`);
    console.log(`User-Agent: ${ua}`);
    
    // Check if request is from Roblox
    if (ua[_0x1a2f(4)](_0x1a2f(0))) {
      console.log('✅ Roblox request detected, serving script...');
      
      // Fetch script dari GitHub
      const response = await fetch(_0x1a2f(8), {
        headers: {
          'User-Agent': 'WarpahVIP-Loader/1.0'
        }
      });
      
      if (!response.ok) {
        throw new Error(`GitHub fetch failed: ${response.status}`);
      }
      
      const scriptContent = await response.text();
      
      // Set headers untuk script
      res.setHeader(_0x1a2f(10), _0x1a2f(9));
      res.setHeader('Content-Length', Buffer.byteLength(scriptContent, 'utf8'));
      
      return res.send(scriptContent);
    } 
    // Jika ada user-agent (browser), redirect ke TikTok
    else if (ua && ua.length > 0) {
      console.log('🌐 Browser request detected, redirecting...');
      res.writeHead(302, { 
        'Location': 'https://tiktok.com/@warpahvippubg',
        'Cache-Control': 'no-cache'
      });
      return res.end();
    }
    // Tidak ada user-agent, tolak akses
    else {
      console.log('❌ No user-agent, denying access...');
      return res[_0x1a2f(6)](403)[_0x1a2f(7)](_0x1a2f(5));
    }
    
  } catch (error) {
    console.error('Error in loader:', error);
    return res.status(500).json({ 
      error: 'Internal Server Error',
      timestamp: new Date().toISOString()
    });
  }
}
