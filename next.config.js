/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Apache/LiteSpeed (Hostinger) liefert Verzeichnisse über index.html aus.
  // Ohne das entstünde /reparatur/ipad.html neben dem Ordner /reparatur/ipad/
  // und die Markenseiten wären auf dem Webspace nicht erreichbar.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
