const API_URL = 'https://protonx-production-776d.up.railway.app';
const ids = { totalServers: 'serversCount', totalUsers: 'usersCount', totalCommands: 'commandsCount' };

async function loadStats() {
  try {
    const res = await fetch(`${API_URL}/api/stats`);
    const data = await res.json();
    for (const [key, id] of Object.entries(ids)) {
      document.getElementById(id).textContent = data[key] + '';
    }
  } catch (err) {
    console.error('Failed to load stats:', err);
    for (const id of Object.values(ids)) document.getElementById(id).textContent = '---';
  }
}

loadStats();
setInterval(loadStats, 30000);