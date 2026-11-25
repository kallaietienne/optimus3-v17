// index.html + helyi Leaflet -> www/ (ezt másolja be a Capacitor az APK-ba)
import { cpSync, mkdirSync, rmSync, existsSync } from 'node:fs';

rmSync('www', { recursive: true, force: true });
mkdirSync('www/lib/leaflet', { recursive: true });
cpSync('index.html', 'www/index.html');

const leaflet = 'node_modules/leaflet/dist';
if (!existsSync(leaflet)) {
  console.error('Hiányzik a leaflet. Futtasd előbb: npm install');
  process.exit(1);
}
cpSync(leaflet, 'www/lib/leaflet', { recursive: true });
console.log('www/ kész');
