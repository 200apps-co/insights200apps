(() => {
  'use strict';
  const root = document.documentElement;
  const toggle = document.getElementById('lang-toggle');
  const device = document.getElementById('demo-device');
  const status = document.getElementById('page-status');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const moments = {
    resume: {he: 'אותו קול. בדיוק מאותה נקודה.', en: 'Same voice. Right where you left off.'},
    library: {he: 'מה שנגע בכם, מחכה לכם כאן.', en: 'What stayed with you is waiting here.'},
    follow: {he: 'פחות לחפש. יותר להיות קרובים.', en: 'Less searching. A closer connection.'}
  };
  let language = 'he';
  let scene = 'resume';

  function syncScene(next) {
    if (!Object.prototype.hasOwnProperty.call(moments, next)) return;
    scene = next;
    document.querySelectorAll('[data-scene]').forEach(button => {
      const selected = button.dataset.scene === scene;
      button.classList.toggle('is-active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    document.getElementById('moment-he').textContent = moments[scene].he;
    document.getElementById('moment-en').textContent = moments[scene].en;
  }

  function setLanguage(next) {
    language = next === 'en' ? 'en' : 'he';
    root.lang = language;
    root.dir = language === 'he' ? 'rtl' : 'ltr';
    toggle.textContent = language === 'he' ? 'EN' : 'עברית';
    toggle.setAttribute('aria-label', language === 'he' ? 'Switch to English' : 'מעבר לעברית');
    document.title = language === 'he' ? 'השידור נגמר. החיבור נשאר. | קול ברמה × 200Apps' : 'The connection stays. | Kol Barama × 200Apps';
    document.querySelectorAll('[data-label-he]').forEach(el => el.setAttribute('aria-label', el.dataset[language === 'he' ? 'labelHe' : 'labelEn']));
    document.querySelectorAll('[data-alt-he]').forEach(el => el.setAttribute('alt', el.dataset[language === 'he' ? 'altHe' : 'altEn']));
    if (window.KBApp) window.KBApp.setLanguage(language);
    const message = language === 'he' ? 'היי חמי, ראיתי את ההמחשה לקול ברמה ואשמח לדבר.' : 'Hi Hemi, I saw the Kol Barama concept and would love to talk.';
    document.querySelectorAll('.whatsapp-link').forEach(link => link.href = 'https://wa.me/972553192012?text=' + encodeURIComponent(message));
    try { localStorage.setItem('kb-proposal-language', language); } catch (_) { /* Private mode and file access can block storage. */ }
  }

  toggle.addEventListener('click', () => setLanguage(language === 'he' ? 'en' : 'he'));
  document.querySelectorAll('[data-scene]').forEach(button => {
    button.addEventListener('click', () => {
      const next = button.dataset.scene;
      if (window.KBApp) window.KBApp.setScene(next);
      syncScene(next);
      status.textContent = language === 'he' ? 'ההמחשה עודכנה: ' + button.querySelector('.he').textContent : 'Demo updated: ' + button.querySelector('.en').textContent;
      if (window.matchMedia('(max-width: 760px)').matches) {
        device.scrollIntoView({behavior: reducedMotion.matches ? 'instant' : 'smooth', block: 'center'});
        device.focus({preventScroll: true});
      }
    });
  });
  document.addEventListener('kb:scene', event => syncScene(event.detail.scene));
  document.getElementById('try-demo').addEventListener('click', () => {
    device.scrollIntoView({behavior: reducedMotion.matches ? 'instant' : 'smooth', block: 'center'});
    const first = device.querySelector('button, input');
    (first || device).focus({preventScroll: true});
  });

  const waveform = document.querySelector('.soundline');
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 104; i++) {
    const bar = document.createElement('span');
    const envelope = Math.sin((i / 103) * Math.PI);
    const amplitude = Math.abs(Math.sin(i * 0.79) * Math.cos(i * 0.23));
    bar.style.setProperty('--bar-height', (6 + envelope * (12 + amplitude * 65)).toFixed(1) + 'px');
    fragment.appendChild(bar);
  }
  waveform.appendChild(fragment);

  try { if (localStorage.getItem('kb-proposal-language') === 'en') setLanguage('en'); } catch (_) { /* Default Hebrew remains usable. */ }
})();
