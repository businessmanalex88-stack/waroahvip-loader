export default async function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';
  
  // Detect jika dari executor (biasanya tidak ada user-agent atau berbeda)
  const isExecutor = 
    !userAgent ||                           // Tidak ada user agent
    userAgent.includes('Roblox') ||         // Roblox HttpService
    userAgent.includes('HttpService') ||    // Roblox HttpService
    userAgent.includes('RobloxStudio') ||   // Roblox Studio
    userAgent.length < 10 ||                // User agent terlalu pendek
    userAgent === '-' ||                    // Default executor
    !userAgent.includes('Mozilla');        // Bukan browser biasa
  
  console.log('User-Agent:', userAgent);
  console.log('Is Executor:', isExecutor);
  
  // Jika dari browser biasa, redirect ke TikTok
  if (!isExecutor) {
    res.writeHead(302, {
      'Location': 'https://vt.tiktok.com/ZSDqAP9Fv/'
    });
    return res.end();
  }
  
  // Jika dari executor, return script
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  
  try {
    const response = await fetch('https://raw.githubusercontent.com/businessmanalex88-stack/BypassWhoAmI/refs/heads/main/Menu%20Cheats');
    
    if (!response.ok) {
      throw new Error(`GitHub fetch failed: ${response.status}`);
    }
    
    const script = await response.text();
    
    // Tambah comment identifier untuk debug
    const finalScript = `-- Script loaded from warpahvip.site
-- User-Agent: ${userAgent}
-- Timestamp: ${new Date().toISOString()}

${script}`;
    
    res.status(200).send(finalScript);
    
  } catch (error) {
    console.error('Error fetching script:', error);
    res.status(500).send(`-- Error loading script: ${error.message}
-- Please try again later
-- Contact: warpahvip.site`);
  }
}
