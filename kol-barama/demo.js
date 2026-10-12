(() => {
  'use strict';
  const state = { scene: 'resume', lang: 'he', time: 872, expanded: false, search: '', filter: 'all', saved: new Set(), followed: new Set(), notice: null };
  const text = {
    he: {
      brand: 'קול ברמה', area: 'הקול שלכם. בזמן שלכם.', greeting: 'טוב שחזרתם.', resumeTitle: 'ממשיכים מאותו רגע.', resumeSub: 'השיעור שלכם חיכה לכם כאן.', collection: 'מהספרייה שלכם', cover: 'השיעור\nהשבועי', series: 'הרב אהרון בוטבול', episode: 'פרק לדוגמה · 32 דקות', position: 'מיקום בהאזנה', continue: 'להמשיך מאותה נקודה', back15: '15 שניות אחורה', next15: '15 שניות קדימה', closeControls: 'סגירת פקדי ההמחשה', controlsHint: 'הזיזו את הסמן. הנקודה נשמרת בהדגמה.', demo: 'המחשה בלבד · ללא שמע', home: 'בשבילכם', library: 'הספרייה', follow: 'במעקב', libraryTitle: 'מה תרצו לשמוע?', librarySub: 'הקולות שאוהבים, במקום אחד.', search: 'חיפוש שיעור או סדרה', searchPlaceholder: 'מה מחפשים היום?', all: 'הכול', law: 'הלכה', thought: 'מחשבה', voices: 'תוכניות', save: 'שמירה', saved: 'נשמר', saveName: 'שמירת', unsaveName: 'ביטול שמירת', noResults: 'לא מצאנו התאמה. נסו לחפש משהו אחר.', followTitle: 'הקולות שלא מפספסים.', followSub: 'בחרו סדרה וראו איך עדכון יכול להיראות.', subscribe: 'מעקב', subscribed: 'במעקב', subscribeName: 'מעקב אחר', unsubscribeName: 'ביטול מעקב אחר', notification: 'כך ייראה עדכון לדוגמה', newEpisode: 'פרק חדש מחכה לכם', notificationEmpty: 'כל סדרה, בקצב שלכם.', notificationEmptySub: 'לחצו על ״מעקב״ כדי להמחיש עדכון.', notificationFoot: 'הדגמה בלבד · לא נשלחת התראה', savedStatus: 'נוסף לספרייה שלכם בהדגמה', removedStatus: 'הוסר מהשמורים בהדגמה', followStatus: 'הסדרה נוספה למעקב בהדגמה', unfollowStatus: 'המעקב הוסר בהדגמה', positionStatus: 'נקודת ההאזנה עודכנה', minutes: 'דקות', demoSeries: 'סדרה לדוגמה', viewLabel: 'תצוגת אפליקציה להמחשה', coverChapter: 'מקום למחשבה. בכל יום.', savedCount: 'שמורים', results: 'תוצאות', lesson1: 'שיעור עם הרב אהרון בוטבול', lesson2: 'שיעור עם הרב יעקב סיני', lesson3: 'תוכנית בוקר', desc1: 'רב התחנה · שיעור לדוגמה', desc2: 'הרב יעקב סיני · שיעור לדוגמה', desc3: 'שיחות וענייני היום · תוכן לדוגמה', navLabel: 'ניווט בהמחשת האפליקציה'
    },
    en: {
      brand: 'Kol Barama', area: 'Your voices. Your time.', greeting: 'Welcome back.', resumeTitle: 'Right where you left off.', resumeSub: 'Your lesson has been waiting here.', collection: 'FROM YOUR LIBRARY', cover: 'The weekly\nlesson', series: 'RABBI AHARON BOTBOL', episode: 'Sample episode · 32 min', position: 'Listening position', continue: 'Continue from my place', back15: 'Back 15 seconds', next15: 'Forward 15 seconds', closeControls: 'Close demo controls', controlsHint: 'Move the slider. Your place stays saved in this demo.', demo: 'Interactive demo · No audio', home: 'For you', library: 'Library', follow: 'Following', libraryTitle: 'What speaks to you?', librarySub: 'The voices you love, all in one place.', search: 'Search lessons or series', searchPlaceholder: 'Find your next listen', all: 'All', law: 'Halacha', thought: 'Reflection', voices: 'Shows', save: 'Save', saved: 'Saved', saveName: 'Save', unsaveName: 'Unsave', noResults: 'No matches yet. Try another search.', followTitle: 'Keep your favorites close.', followSub: 'Follow a series to preview an update.', subscribe: 'Follow', subscribed: 'Following', subscribeName: 'Follow', unsubscribeName: 'Unfollow', notification: 'A SAMPLE UPDATE', newEpisode: 'A new episode is waiting', notificationEmpty: 'Every series. Your own pace.', notificationEmptySub: 'Tap Follow to preview an update.', notificationFoot: 'Demo only · No notification is sent', savedStatus: 'Added to your demo library', removedStatus: 'Removed from your demo library', followStatus: 'Following this series in the demo', unfollowStatus: 'Unfollowed this series in the demo', positionStatus: 'Listening position updated', minutes: 'min', demoSeries: 'Sample series', viewLabel: 'Interactive app concept', coverChapter: 'A little room for reflection.', savedCount: 'saved', results: 'results', lesson1: 'A lesson with Rabbi Aharon Botbol', lesson2: 'A lesson with Rabbi Yaakov Sinai', lesson3: 'A morning program', desc1: 'The station’s rabbi · Sample lesson', desc2: 'Rabbi Yaakov Sinai · Sample lesson', desc3: 'Conversation and current affairs · Sample', navLabel: 'App demo navigation'
    }
  };
  const lessons = [{ id: 'law', title: 'lesson1', desc: 'desc1', length: 32, color: 'rose', number: '01' }, { id: 'thought', title: 'lesson2', desc: 'desc2', length: 24, color: 'sand', number: '02' }, { id: 'voices', title: 'lesson3', desc: 'desc3', length: 46, color: 'olive', number: '03' }];
  const icons = {
    arrow: '<path d="M5 12h14m-5-5 5 5-5 5"/>',
    search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4.5 4.5"/>',
    bookmark: '<path d="M6 4h12v17l-6-4-6 4z"/>',
    home: '<path d="m3 10 9-7 9 7v10H3z"/><path d="M9 20v-7h6v7"/>',
    library: '<path d="M4 4h4v16H4zM10 4h4v16h-4zM17 4l4 1-1 15-4-1z"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM9 21h6"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    close: '<path d="m6 6 12 12M6 18 18 6"/>'
  };
  let root;
  const t = key => text[state.lang][key];
  const el = (tag, cls, value) => { const node = document.createElement(tag); if (cls) node.className = cls; if (value !== undefined) node.textContent = value; return node; };
  const icon = name => { const node = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); node.setAttribute('viewBox', '0 0 24 24'); node.setAttribute('fill', 'none'); node.setAttribute('stroke', 'currentColor'); node.setAttribute('stroke-width', '1.6'); node.setAttribute('stroke-linecap', 'round'); node.setAttribute('stroke-linejoin', 'round'); node.setAttribute('aria-hidden', 'true'); node.classList.add('app-icon'); node.innerHTML = icons[name] || icons.bell; return node; };
  const localized = (tag, cls, key) => { const node = el(tag, cls); for (const lang of ['he', 'en']) { const span = el('span', lang, text[lang][key]); span.lang = lang; node.append(span); } return node; };
  const button = (cls, label, fn, focusKey) => { const node = el('button', cls); node.type = 'button'; node.setAttribute('aria-label', label); node.addEventListener('click', fn); if (focusKey) node.dataset.appFocus = focusKey; return node; };
  const time = seconds => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
  function announce(message) { const target = root && root.querySelector('.app-sr-status'); if (target) { target.textContent = ''; requestAnimationFrame(() => { target.textContent = message; }); } }
  function repaintWithFocus(key) { render(); if (key) root.querySelector(`[data-app-focus="${key}"]`)?.focus({ preventScroll: true }); }
  function title(heading, subtitle) { const wrap = el('div', 'app-section-title'); wrap.append(el('h3', '', heading), el('p', '', subtitle)); return wrap; }
  function art(item, large = false) {
    const node = el('div', `app-art app-art-${item.color}${large ? ' app-art-large' : ''}`);
    node.setAttribute('aria-hidden', 'true');
    node.append(el('span', 'app-art-orbit app-art-orbit-one'), el('span', 'app-art-orbit app-art-orbit-two'));
    if (large) {
      const top = el('div', 'app-art-top'); top.append(localized('span', '', 'series'), el('span', 'app-art-index', '01 / 03'));
      node.append(top, localized('div', 'app-art-type', 'cover'));
      const foot = el('div', 'app-art-foot'); foot.append(el('span', '', t('coverChapter')));
      const wave = el('span', 'app-wave'); [7, 14, 22, 12, 28, 18, 9, 24, 13, 6].forEach(h => { const bar = el('i'); bar.style.height = `${h}px`; wave.append(bar); }); foot.append(wave); node.append(foot);
    } else node.append(el('span', 'app-art-number', item.number));
    return node;
  }
  function renderResume(main) {
    main.append(title(t('resumeTitle'), t('resumeSub')));
    main.append(art(lessons[0], true));
    const info = el('div', 'app-now-info'); info.append(el('span', 'app-kicker', t('collection')), localized('h4', '', 'lesson1'), el('p', '', t('episode'))); main.append(info);
    const player = el('div', 'app-player');
    const range = el('input', 'app-range'); range.type = 'range'; range.min = '0'; range.max = '1920'; range.step = '1'; range.value = String(state.time); range.setAttribute('aria-label', t('position')); range.setAttribute('aria-valuetext', `${time(state.time)} / 32:00`);
    range.style.setProperty('--app-progress', `${state.time / 1920 * 100}%`);
    const times = el('div', 'app-time-row'); times.dir = 'ltr'; const current = el('span', 'app-current-time', time(state.time)); times.append(current, el('span', '', '32:00'));
    range.addEventListener('input', () => { state.time = Number(range.value); current.textContent = time(state.time); const expandedTime = root.querySelector('.app-time-position'); if (expandedTime) expandedTime.textContent = time(state.time); range.style.setProperty('--app-progress', `${state.time / 1920 * 100}%`); range.setAttribute('aria-valuetext', `${time(state.time)} / 32:00`); });
    range.addEventListener('change', () => announce(`${t('positionStatus')}: ${time(state.time)}`)); player.append(range, times); main.append(player);
    if (!state.expanded) {
      const cta = button('app-primary', t('continue'), () => { state.expanded = true; repaintWithFocus('back15'); announce(t('controlsHint')); }, 'continue'); cta.append(el('span', '', t('continue')), icon('arrow')); main.append(cta);
    } else {
      const controls = el('div', 'app-skip-controls'); controls.dir = 'ltr';
      const skip = (offset, label, key) => { const b = button('app-skip', label, () => { state.time = Math.max(0, Math.min(1920, state.time + offset)); repaintWithFocus(key); announce(`${t('positionStatus')}: ${time(state.time)}`); }, key); b.append(el('span', '', offset < 0 ? '↶' : '↷'), el('b', '', '15')); return b; };
      const close = button('app-close-controls', t('closeControls'), () => { state.expanded = false; repaintWithFocus('continue'); }, 'close'); close.append(icon('close'));
      controls.append(skip(-15, t('back15'), 'back15'), el('span', 'app-time-position', time(state.time)), skip(15, t('next15'), 'next15'), close); main.append(controls);
    }
  }
  function renderLibrary(main) {
    main.append(title(t('libraryTitle'), t('librarySub')));
    const searchWrap = el('div', 'app-search'); searchWrap.append(icon('search'));
    const input = el('input'); input.type = 'search'; input.placeholder = t('searchPlaceholder'); input.setAttribute('aria-label', t('search')); input.value = state.search; input.autocomplete = 'off'; input.addEventListener('input', () => { state.search = input.value; updateLibraryResults(); }); searchWrap.append(input); main.append(searchWrap);
    const filters = el('div', 'app-filters'); filters.setAttribute('role', 'group'); filters.setAttribute('aria-label', state.lang === 'he' ? 'סינון לפי נושא' : 'Filter by topic');
    ['all', 'law', 'thought'].forEach(key => { const b = button(`app-chip${state.filter === key ? ' app-is-active' : ''}`, t(key), () => { state.filter = key; repaintWithFocus(`filter-${key}`); }, `filter-${key}`); b.setAttribute('aria-pressed', String(state.filter === key)); b.textContent = t(key); filters.append(b); }); main.append(filters);
    const resultHeader = el('div', 'app-list-label'); resultHeader.append(el('span', '', t('demoSeries')), el('span', 'app-save-count', `${state.saved.size} ${t('savedCount')}`)); main.append(resultHeader, el('div', 'app-library-results'));
    requestAnimationFrame(updateLibraryResults);
  }
  function updateLibraryResults() {
    const container = root?.querySelector('.app-library-results'); if (!container) return;
    container.replaceChildren();
    const query = state.search.toLocaleLowerCase().trim();
    const matched = lessons.filter(item => (state.filter === 'all' || item.id === state.filter) && `${t(item.title)} ${t(item.desc)} ${t(item.id)}`.toLocaleLowerCase().includes(query));
    if (!matched.length) container.append(el('p', 'app-empty', t('noResults')));
    matched.forEach(item => {
      const row = el('div', 'app-library-row'); row.append(art(item));
      const info = el('div', 'app-row-info'); info.append(localized('h4', '', item.title), el('p', '', `${item.length} ${t('minutes')} · ${t(item.id)}`)); row.append(info);
      const isSaved = state.saved.has(item.id);
      const save = button(`app-save${isSaved ? ' app-is-saved' : ''}`, `${t(isSaved ? 'unsaveName' : 'saveName')} ${t(item.title)}`, () => { if (state.saved.has(item.id)) state.saved.delete(item.id); else state.saved.add(item.id); updateLibraryResults(); root.querySelector('.app-save-count').textContent = `${state.saved.size} ${t('savedCount')}`; root.querySelector(`[data-app-focus="save-${item.id}"]`)?.focus({ preventScroll: true }); announce(t(state.saved.has(item.id) ? 'savedStatus' : 'removedStatus')); }, `save-${item.id}`);
      save.setAttribute('aria-pressed', String(isSaved)); save.append(icon(isSaved ? 'check' : 'bookmark')); row.append(save); container.append(row);
    });
  }
  function renderFollow(main) {
    main.append(title(t('followTitle'), t('followSub')));
    const list = el('div', 'app-follow-list');
    lessons.forEach(item => {
      const row = el('div', 'app-follow-row'); row.append(art(item));
      const info = el('div', 'app-follow-info'); info.append(localized('h4', '', item.title), localized('p', '', item.desc)); row.append(info);
      const followed = state.followed.has(item.id);
      const b = button(`app-follow-button${followed ? ' app-is-followed' : ''}`, `${t(followed ? 'unsubscribeName' : 'subscribeName')} ${t(item.title)}`, () => {
        if (state.followed.has(item.id)) { state.followed.delete(item.id); if (state.notice === item.id) state.notice = [...state.followed].at(-1) || null; }
        else { state.followed.add(item.id); state.notice = item.id; }
        repaintWithFocus(`follow-${item.id}`); announce(t(state.followed.has(item.id) ? 'followStatus' : 'unfollowStatus'));
      }, `follow-${item.id}`);
      b.setAttribute('aria-pressed', String(followed)); b.append(icon(followed ? 'check' : 'plus'), el('span', '', t(followed ? 'subscribed' : 'subscribe'))); row.append(b); list.append(row);
    }); main.append(list);
    const notice = el('div', `app-notification${state.notice ? ' app-has-notice' : ''}`); const badge = el('span', 'app-notification-icon'); badge.append(icon('bell')); notice.append(badge);
    const info = el('div');
    if (state.notice) { const item = lessons.find(x => x.id === state.notice); info.append(el('span', 'app-notification-eyebrow', t('notification')), el('h4', '', t('newEpisode')), localized('p', '', item.title)); }
    else info.append(el('h4', '', t('notificationEmpty')), el('p', '', t('notificationEmptySub')));
    notice.append(info); main.append(notice);
  }
  function render() {
    if (!root) return;
    root.replaceChildren(); root.className = 'app-root'; root.dir = state.lang === 'he' ? 'rtl' : 'ltr'; root.lang = state.lang; root.setAttribute('aria-label', t('viewLabel'));
    const header = el('header', 'app-header'); const logo = el('img', 'app-logo'); logo.src = 'assets/logo.png'; logo.alt = t('brand'); logo.width = 94; logo.height = 45; header.append(logo);
    const miniWave = el('span', 'app-header-wave'); miniWave.setAttribute('aria-hidden', 'true'); [10, 17, 24, 13, 19].forEach(h => { const bar = el('i'); bar.style.height = `${h}px`; miniWave.append(bar); }); header.append(miniWave); root.append(header);
    const main = el('div', `app-main app-scene-${state.scene}`); if (state.scene === 'resume') renderResume(main); else if (state.scene === 'library') renderLibrary(main); else renderFollow(main); root.append(main);
    const nav = el('nav', 'app-nav'); nav.setAttribute('aria-label', t('navLabel'));
    [['resume', 'home', 'home'], ['library', 'library', 'library'], ['follow', 'follow', 'bell']].forEach(([scene, label, image]) => { const b = button(`app-nav-button${scene === state.scene ? ' app-current' : ''}`, t(label), () => { setScene(scene); root.querySelector(`[data-app-focus="nav-${scene}"]`)?.focus({ preventScroll: true }); }, `nav-${scene}`); b.setAttribute('aria-pressed', String(scene === state.scene)); b.append(icon(image), el('span', '', t(label))); nav.append(b); }); root.append(nav);
    const status = el('div', 'app-sr-status'); status.setAttribute('role', 'status'); status.setAttribute('aria-live', 'polite'); status.setAttribute('aria-atomic', 'true'); root.append(status);
  }
  function setScene(scene) { if (!['resume', 'library', 'follow'].includes(scene)) return; const changed = scene !== state.scene; state.scene = scene; render(); if (changed) document.dispatchEvent(new CustomEvent('kb:scene', { detail: { scene } })); }
  function setLanguage(lang) { state.lang = lang === 'en' ? 'en' : 'he'; render(); }
  function reset() { state.time = 872; state.expanded = false; state.search = ''; state.filter = 'all'; state.saved.clear(); state.followed.clear(); state.notice = null; setScene('resume'); }
  window.KBApp = { setScene, setLanguage, reset };
  function init() { root = document.getElementById('phone-app'); if (!root) return; state.lang = document.documentElement.lang.startsWith('en') ? 'en' : 'he'; render(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true }); else init();
})();
