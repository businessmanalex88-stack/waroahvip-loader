export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'text/plain');
  
  try {
    const response = await fetch('https://raw.githubusercontent.com/businessmanalex88-stack/BypassWhoAmI/refs/heads/main/Menu%20Cheats');
    
    if (!response.ok) {
      throw new Error('Failed to fetch script');
    }
    
    const script = await response.text();
    res.status(200).send(script);
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('-- Error loading script');
  }
}
