const $ = (selector) => document.querySelector(selector);
const views = [...document.querySelectorAll('.view')];
const titleMap = {home:'Home', profile:'Profile', chat:'Chat', music:'Music', ledger:'Ledger', letter:'Letter', books:'Books', memory:'Memory', social:'Social', bbs:'BBS'};
function showView(name) {
  views.forEach((view) => view.classList.toggle('active', view.id === `${name}-view`));
  $('#page-title').textContent = titleMap[name];
  document.querySelectorAll('[data-view]').forEach((button) => button.classList.toggle('active', button.dataset.view === name));
  closeDrawer(); window.scrollTo({top: 0, behavior: 'smooth'});
}
document.querySelectorAll('[data-view]').forEach((button) => button.addEventListener('click', () => showView(button.dataset.view)));
const drawer = $('#drawer'), shade = $('#shade');
function closeDrawer(){ drawer.classList.remove('open'); shade.classList.remove('visible'); drawer.setAttribute('aria-hidden','true'); }
$('#menu').addEventListener('click', () => { drawer.classList.add('open'); shade.classList.add('visible'); drawer.setAttribute('aria-hidden','false'); }); shade.addEventListener('click', closeDrawer);
let playing = false; $('#play').addEventListener('click', () => { playing = !playing; $('#play').textContent = playing ? 'Ⅱ' : '▶'; $('#track-name').textContent = playing ? '月光收集者' : '留白的宇宙'; });
function updateTime(){ const now = new Date(); const time = now.toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'}); $('#clock').textContent=time; $('#hero-clock').textContent=time; $('#date-label').textContent=now.toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric',weekday:'long'}).toUpperCase().replace(',', ' /'); } updateTime(); setInterval(updateTime, 30000);
