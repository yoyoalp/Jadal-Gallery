/* ══════════════════════════════════════════════════════
   Jadal Gallery — app.js  (Firebase Edition)
══════════════════════════════════════════════════════ */

/* ── Artists ─────────────────────────────────────────── */
const ARTISTS = {
  'Mohammed Al-Turki': {
    nameAr: 'محمد التركي', nameEn: 'Mohammed Al-Turki',
    bioAr: 'لوحات تُعيد تخيّل عمّان — معالمها المعمارية من خلال عدسة الألوان المشرقة والإمكانيات المتسعة، دون أن تفقد المدينة هويتها الجوهرية.',
    bioEn: "Paintings of Amman reimagined — architectural landmarks seen through Al-Turki's lens of brighter colors and expanded possibility, without losing the city's core identity.",
    pg: 'pg-1'
  },
  'Ibrahim Abu Touq': {
    nameAr: 'إبراهيم أبو طوق', nameEn: 'Ibrahim Abu Touq',
    bioAr: 'خطّاط ومصمم حروف يُفكِّك الحروف العربية ويخترع خطوطاً جديدة تتحدى الخط التقليدي مع الحفاظ على ثقلها الثقافي.',
    bioEn: 'Calligrapher and type designer who deconstructs Arabic letterforms, inventing new fonts that challenge traditional script while maintaining cultural weight.',
    pg: 'pg-3'
  },
  'Nedal Abu Zena': {
    nameAr: 'نضال أبو زينة', nameEn: 'Nedal Abu Zena',
    bioAr: 'فنان متعدد التخصصات يعمل في الخشب والطلاء والنحت. كل قطعة إعلان عن الموروث الأردني الفلسطيني من خلال الشكل.',
    bioEn: 'Multi-disciplinary artist working across wood, paint, and sculpture. Every piece a declaration of Jordanian-Palestinian heritage through form.',
    pg: 'pg-4'
  },
  'Rumman Arts': {
    nameAr: 'فنون رمّان', nameEn: 'Rumman Arts',
    bioAr: 'فنان ناشئ يُترجم الرمّان — أكثر رموز الأردن حضوراً — إلى ملصقات وأعمال صغيرة. معاصر وفي متناول الجميع وجذوره ثقافية.',
    bioEn: "Emerging artist translating pomegranate — Jordan's most potent symbol — into stickers and small works. Contemporary, accessible, culturally rooted.",
    pg: 'pg-5'
  },
  'Dianna Ishaqat': {
    nameAr: 'ديانا إشقاط', nameEn: 'Dianna Ishaqat',
    bioAr: 'رسّامة بورتريه شركسية. تقع أعمالها عند تقاطع الجذور القوقازية والانتماء الأردني — شهادة بصرية على الهوية المزدوجة.',
    bioEn: 'Circassian painter and portraitist. Her work sits at the intersection of Caucasian roots and Jordanian belonging — visual testimony to dual heritage.',
    pg: 'pg-6'
  },
  'Waddah Morgan': {
    nameAr: 'وداح مورغان', nameEn: 'Waddah Morgan',
    bioAr: 'مصوّر فوتوغرافي سوداني. عشر صور انتُقيت من سنوات توثيق السودان وإثيوبيا — مناظر طبيعية وحياة يومية وذاكرة إنسانية.',
    bioEn: 'Sudanese photographer. Ten photographs culled from years documenting Sudan and Ethiopia — landscapes, daily life, and human memory through his lens.',
    pg: 'pg-8'
  }
};

/* ── Default artworks (shown when Firestore is empty) ─── */
const DEFAULT_ARTWORKS = [
  {
    id: 1, titleAr: 'عمّان المعاد تخيّلها', titleEn: 'Amman Reimagined',
    artistAr: 'محمد التركي', artistEn: 'Mohammed Al-Turki',
    mediumAr: 'زيت على قماش', mediumEn: 'Oil on Canvas',
    category: 'painting', year: 2026, price: 450,
    descAr: 'معالم عمّان المعمارية من خلال عدسة الألوان المشرقة والإمكانيات المتسعة، دون أن تفقد المدينة هويتها الجوهرية.',
    descEn: "Amman's architectural landmarks seen through Al-Turki's lens of brighter colors and expanded possibility, without losing the city's core identity.",
    pg: 'pg-1', img: null
  },
  {
    id: 2, titleAr: 'معالم', titleEn: 'Landmarks',
    artistAr: 'محمد التركي', artistEn: 'Mohammed Al-Turki',
    mediumAr: 'أكريليك على قماش', mediumEn: 'Acrylic on Canvas',
    category: 'painting', year: 2026, price: 380,
    descAr: 'تأمل في معالم عمّان الأثرية، تُعاد صياغتها بلغة بصرية معاصرة تمزج بين التاريخ والحاضر.',
    descEn: "A meditation on Amman's heritage landmarks, reshaped in a contemporary visual language that merges history with the present.",
    pg: 'pg-2', img: null
  },
  {
    id: 3, titleAr: 'تفكيك الحرف', titleEn: 'Deconstruction of the Letter',
    artistAr: 'إبراهيم أبو طوق', artistEn: 'Ibrahim Abu Touq',
    mediumAr: 'طباعة يدوية وخط عربي', mediumEn: 'Printmaking & Arabic Calligraphy',
    category: 'print', year: 2026, price: 320,
    descAr: 'تفكيك الحروف العربية وإعادة اختراعها في خطوط جديدة تتحدى الخط التقليدي مع الحفاظ على ثقلها الثقافي.',
    descEn: 'Arabic letterforms deconstructed and reinvented into new fonts that challenge traditional script while maintaining their cultural weight.',
    pg: 'pg-3', img: null
  },
  {
    id: 4, titleAr: 'إرث الأرض', titleEn: 'Heritage of the Land',
    artistAr: 'نضال أبو زينة', artistEn: 'Nedal Abu Zena',
    mediumAr: 'خشب وطلاء ونحت', mediumEn: 'Wood, Paint & Sculpture',
    category: 'installation', year: 2026, price: 850,
    descAr: 'كل قطعة إعلان عن الموروث الأردني الفلسطيني من خلال الشكل والمادة والمكان.',
    descEn: 'Every piece a declaration of Jordanian-Palestinian heritage through form, material, and space.',
    pg: 'pg-4', img: null
  },
  {
    id: 5, titleAr: 'رمّان', titleEn: 'Pomegranate',
    artistAr: 'فنون رمّان', artistEn: 'Rumman Arts',
    mediumAr: 'وسائط متعددة', mediumEn: 'Mixed Media',
    category: 'mixed-media', year: 2026, price: 180,
    descAr: 'الرمّان — أكثر رموز الأردن حضوراً — يُترجَم إلى أعمال صغيرة معاصرة وملصقات بصرية في متناول الجميع.',
    descEn: "Pomegranate — Jordan's most potent symbol — translated into stickers and small contemporary works. Accessible, culturally rooted.",
    pg: 'pg-5', img: null
  },
  {
    id: 6, titleAr: 'جذران', titleEn: 'Two Roots',
    artistAr: 'ديانا إشقاط', artistEn: 'Dianna Ishaqat',
    mediumAr: 'زيت على قماش', mediumEn: 'Oil on Canvas',
    category: 'painting', year: 2026, price: 560,
    descAr: 'بورتريه يقع عند تقاطع الجذور القوقازية والانتماء الأردني — شهادة بصرية على الهوية المزدوجة.',
    descEn: 'Portrait at the intersection of Caucasian roots and Jordanian belonging — visual testimony to dual heritage.',
    pg: 'pg-6', img: null
  },
  {
    id: 7, titleAr: 'بورتريه شركسي', titleEn: 'Circassian Portrait',
    artistAr: 'ديانا إشقاط', artistEn: 'Dianna Ishaqat',
    mediumAr: 'زيت على قماش', mediumEn: 'Oil on Canvas',
    category: 'painting', year: 2026, price: 490,
    descAr: 'عمل يُجسِّد التقليد الشركسي بعيون أردنية — ثقافة حيّة في خضم التحوّل.',
    descEn: 'A work embodying Circassian tradition through Jordanian eyes — a living culture in the midst of transformation.',
    pg: 'pg-7', img: null
  },
  {
    id: 8, titleAr: 'السودان في ذاكرتي', titleEn: 'Sudan in Memory',
    artistAr: 'وداح مورغان', artistEn: 'Waddah Morgan',
    mediumAr: 'تصوير فوتوغرافي', mediumEn: 'Photography',
    category: 'photography', year: 2026, price: 280,
    descAr: 'عشر صور انتُقيت من سنوات توثيق السودان وإثيوبيا — مناظر طبيعية وحياة يومية وذاكرة إنسانية.',
    descEn: 'Ten photographs culled from years documenting Sudan and Ethiopia — landscapes, daily life, and human memory through his lens.',
    pg: 'pg-8', img: null
  }
];

/* ── Firebase state ──────────────────────────────────── */
let db         = null;   // Firestore
let stor       = null;   // Storage
let isAdmin    = false;
let _imageFile = null;   // raw File object for upload
let uploadedImg = null;  // base64 preview

/* ── Firebase init ───────────────────────────────────── */
function initFirebase() {
  if (typeof firebase === 'undefined' || !window.FIREBASE_CONFIG) return;
  // Check if config is still placeholder
  if (window.FIREBASE_CONFIG.apiKey === 'PASTE_YOUR_API_KEY') return;
  try {
    if (!firebase.apps.length) firebase.initializeApp(window.FIREBASE_CONFIG);
    db   = firebase.firestore();
    stor = firebase.storage();
  } catch(e) {
    console.warn('Firebase init failed – using local data', e);
  }
}

/* ── Data layer ──────────────────────────────────────── */
async function getArtworks() {
  if (db) {
    try {
      const snap = await db.collection('artworks').orderBy('createdAt', 'asc').get();
      if (!snap.empty) {
        return snap.docs.map(d => ({ ...d.data(), _docId: d.id }));
      }
    } catch(e) {
      console.warn('Firestore read error', e);
    }
  }
  // Fallback: localStorage (works during development before Firebase is set up)
  const raw = localStorage.getItem('jadal-artworks');
  if (raw) { try { return JSON.parse(raw); } catch(e) {} }
  return DEFAULT_ARTWORKS;
}

async function persistArtwork(art, imageFile) {
  let imgUrl = art.img; // base64 or null

  // Upload image to Firebase Storage if available
  if (imageFile && stor) {
    try {
      const ref  = stor.ref(`artworks/${Date.now()}_${imageFile.name}`);
      const snap = await ref.put(imageFile);
      imgUrl = await snap.ref.getDownloadURL();
    } catch(e) {
      console.warn('Storage upload failed – keeping base64', e);
    }
  }

  const payload = { ...art, img: imgUrl };
  delete payload._docId; // don't store Firestore doc ID in the doc itself

  if (db) {
    try {
      await db.collection('artworks').add({
        ...payload,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      return;
    } catch(e) {
      console.warn('Firestore write error – falling back to localStorage', e);
    }
  }

  // Fallback: localStorage
  const list = JSON.parse(localStorage.getItem('jadal-artworks') || 'null') || [];
  list.push({ ...payload, id: Date.now() });
  localStorage.setItem('jadal-artworks', JSON.stringify(list));
}

async function removeArtwork(docId, localId) {
  if (db && docId) {
    try {
      await db.collection('artworks').doc(docId).delete();
      return;
    } catch(e) {
      console.warn('Firestore delete error', e);
    }
  }
  // Fallback: localStorage
  const list = JSON.parse(localStorage.getItem('jadal-artworks') || '[]');
  localStorage.setItem('jadal-artworks',
    JSON.stringify(list.filter(a => a.id !== localId)));
}

/* ── Admin auth ──────────────────────────────────────── */
function initAdminLogin() {
  checkAdminSession();

  // Triple-click the footer copyright line → open admin prompt
  let clicks = 0, timer;
  document.querySelectorAll('.footer__bottom').forEach(el => {
    el.addEventListener('click', () => {
      clicks++;
      clearTimeout(timer);
      timer = setTimeout(() => { clicks = 0; }, 700);
      if (clicks >= 3) { clicks = 0; promptAdmin(); }
    });
  });
}

function checkAdminSession() {
  if (sessionStorage.getItem('jadal-admin') === '1') {
    isAdmin = true;
  }
}

function promptAdmin() {
  const lang = document.documentElement.lang;
  if (isAdmin) {
    if (confirm(lang === 'en' ? 'Log out of admin mode?' : 'خروج من وضع المسؤول؟')) {
      isAdmin = false;
      sessionStorage.removeItem('jadal-admin');
      updateAdminUI();
      renderGallery(document.querySelector('.flt.on')?.dataset.cat);
      renderFeatured();
    }
    return;
  }

  const pw = prompt('Admin password:');
  if (pw === null) return;

  if (pw === (window.ADMIN_PASSWORD || '')) {
    isAdmin = true;
    sessionStorage.setItem('jadal-admin', '1');
    updateAdminUI();
    renderGallery(document.querySelector('.flt.on')?.dataset.cat);
    renderFeatured();
  } else {
    alert(lang === 'en' ? 'Incorrect password' : 'كلمة مرور خاطئة');
  }
}

function updateAdminUI() {
  // Show/hide the Add Artwork button
  const addBtn = document.getElementById('openModal');
  if (addBtn) addBtn.style.display = isAdmin ? '' : 'none';

  // Create or update the admin badge
  let badge = document.getElementById('adminBadge');
  if (!badge) {
    badge = document.createElement('div');
    badge.id = 'adminBadge';
    badge.className = 'admin-badge';
    badge.title = 'Triple-click footer to logout';
    badge.textContent = '🔑 Admin';
    document.body.appendChild(badge);
  }
  badge.style.display = isAdmin ? 'flex' : 'none';
}

/* ── Language toggle ─────────────────────────────────── */
function initLang() {
  const saved = localStorage.getItem('jadal-lang') || 'ar';
  setLang(saved, false);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLang(document.documentElement.lang === 'ar' ? 'en' : 'ar', true);
    });
  });
}

function setLang(lang, save) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.textContent = lang === 'ar' ? 'EN' : 'ع';
  });
  if (save) localStorage.setItem('jadal-lang', lang);
}

/* ── Nav ─────────────────────────────────────────────── */
function initNav() {
  const nav    = document.querySelector('.nav');
  const burger = document.querySelector('.nav__burger');
  const mobile = document.querySelector('.nav__mobile');

  window.addEventListener('scroll', () => {
    nav && nav.classList.toggle('scrolled', window.scrollY > 20);
  });

  burger && burger.addEventListener('click', () => {
    const open = mobile && mobile.classList.toggle('open');
    burger.classList.toggle('is-open', open);
  });

  mobile && mobile.querySelectorAll('.nav__link').forEach(a => {
    a.addEventListener('click', () => {
      mobile.classList.remove('open');
      burger && burger.classList.remove('is-open');
    });
  });

  document.addEventListener('click', e => {
    if (mobile && mobile.classList.contains('open') &&
        !mobile.contains(e.target) && burger && !burger.contains(e.target)) {
      mobile.classList.remove('open');
      burger.classList.remove('is-open');
    }
  });

  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(a => {
    const href = a.getAttribute('href');
    if (href && (href === page || (page === '' && href === 'index.html'))) {
      a.classList.add('active');
    }
  });
}

/* ── Card builder ────────────────────────────────────── */
function buildCard(art) {
  const lang       = document.documentElement.lang;
  const title      = lang === 'en' ? (art.titleEn  || '') : (art.titleAr  || '');
  const priceLabel = lang === 'en' ? 'JOD' : 'دينار';
  const inquire    = lang === 'en' ? 'Inquire' : 'استفسر';
  const deleteLabel = lang === 'en' ? 'Delete' : 'حذف';

  const imgHTML = art.img
    ? `<img src="${art.img}" alt="${title}" loading="lazy">`
    : `<div class="card__placeholder ${art.pg || 'pg-1'}"></div>`;

  const safeArtist = (art.artistEn || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
  const safeDocId  = (art._docId   || '').replace(/'/g, "\\'");

  const deleteBtn = isAdmin ? `
    <button class="card__delete" title="${deleteLabel}"
      onclick="event.stopPropagation();handleDelete('${safeDocId}',${art.id||0})">✕</button>
  ` : '';

  return `
  <article class="card" data-category="${art.category||''}" data-id="${art.id||''}"
    onclick="showArtistBio('${safeArtist}')" style="cursor:pointer">
    <div class="card__img">
      ${imgHTML}
      <div class="card__badge">
        <span class="ar">${art.mediumAr||''}</span>
        <span class="en">${art.mediumEn||''}</span>
      </div>
      ${deleteBtn}
    </div>
    <div class="card__body">
      <div class="card__meta">
        <span class="card__medium">
          <span class="ar">${art.mediumAr||''}</span>
          <span class="en">${art.mediumEn||''}</span>
        </span>
        <span class="card__year">${art.year||''}</span>
      </div>
      <h3 class="card__title">
        <span class="ar">${art.titleAr||''}</span>
        <span class="en">${art.titleEn||''}</span>
      </h3>
      <p class="card__artist">
        <span class="ar">${art.artistAr||''}</span>
        <span class="en">${art.artistEn||''}</span>
      </p>
      <p class="card__desc">
        <span class="ar">${art.descAr||''}</span>
        <span class="en">${art.descEn||''}</span>
      </p>
      <div class="card__foot">
        <div class="card__price">
          ${(art.price||0).toLocaleString()} <span>${priceLabel}</span>
        </div>
        <span class="card__inquiry"
          onclick="event.stopPropagation();handleInquiry('${title}',${art.price||0})">
          ${inquire}
        </span>
      </div>
    </div>
  </article>`;
}

/* ── Gallery render ──────────────────────────────────── */
async function renderGallery(filter) {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  // Show loading dots
  grid.innerHTML = '<div class="gallery-loading"><span></span><span></span><span></span></div>';

  const artworks = await getArtworks();
  const list = (filter && filter !== 'all')
    ? artworks.filter(a => a.category === filter)
    : artworks;

  const lang = document.documentElement.lang;
  grid.innerHTML = list.length
    ? list.map(buildCard).join('')
    : `<p class="gallery-empty">${lang === 'en' ? 'No artworks found.' : 'لا توجد أعمال.'}</p>`;

  updateAdminUI();
}

async function renderFeatured() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  const artworks = (await getArtworks()).slice(0, 3);
  grid.innerHTML = artworks.map(buildCard).join('');
}

/* ── Filters ─────────────────────────────────────────── */
function initFilters() {
  document.querySelectorAll('.flt').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.flt').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      renderGallery(btn.dataset.cat);
    });
  });
}

/* ── Add Artwork modal ───────────────────────────────── */
function initModal() {
  const openBtn   = document.getElementById('openModal');
  const overlay   = document.getElementById('modalOverlay');
  const closeBtn  = document.getElementById('closeModal');
  const form      = document.getElementById('addArtworkForm');
  const fileInput = document.getElementById('fileInput');
  const uploadZone = document.getElementById('uploadZone');

  if (!openBtn) return;

  openBtn.addEventListener('click', () => overlay.classList.add('open'));
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });

  uploadZone.addEventListener('click', () => fileInput.click());
  uploadZone.addEventListener('dragover', e => { e.preventDefault(); uploadZone.classList.add('drag'); });
  uploadZone.addEventListener('dragleave', () => uploadZone.classList.remove('drag'));
  uploadZone.addEventListener('drop', e => {
    e.preventDefault();
    uploadZone.classList.remove('drag');
    handleFile(e.dataTransfer.files[0]);
  });

  fileInput.addEventListener('change', () => handleFile(fileInput.files[0]));
  form.addEventListener('submit', e => { e.preventDefault(); submitArtwork(); });
}

function handleFile(file) {
  if (!file || !file.type.startsWith('image/')) return;
  _imageFile = file;
  const reader = new FileReader();
  reader.onload = ev => {
    uploadedImg = ev.target.result;
    const zone = document.getElementById('uploadZone');
    zone.innerHTML = `<img class="upload-zone__preview" src="${uploadedImg}" alt="preview">`;
  };
  reader.readAsDataURL(file);
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay && overlay.classList.remove('open');
  uploadedImg = null;
  _imageFile  = null;
  const form = document.getElementById('addArtworkForm');
  form && form.reset();
  const zone = document.getElementById('uploadZone');
  if (zone) zone.innerHTML = `
    <div class="upload-zone__icon">🖼</div>
    <p class="ar">اضغط أو اسحب صورة العمل الفني هنا</p>
    <p class="en">Click or drag artwork image here</p>`;
}

async function submitArtwork() {
  const val = id => document.getElementById(id)?.value.trim() || '';

  const submitBtn = document.querySelector('#addArtworkForm button[type="submit"]');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="ar">جاري الحفظ...</span><span class="en">Saving...</span>';
  }

  const newArt = {
    id:       Date.now(),
    titleAr:  val('fTitleAr')  || 'بدون عنوان',
    titleEn:  val('fTitleEn')  || 'Untitled',
    artistAr: val('fArtistAr') || 'فنان',
    artistEn: val('fArtistEn') || 'Artist',
    mediumAr: val('fMediumAr') || '',
    mediumEn: val('fMediumEn') || '',
    category: document.getElementById('fCategory')?.value || 'painting',
    year:     parseInt(val('fYear')) || new Date().getFullYear(),
    price:    parseFloat(val('fPrice')) || 0,
    descAr:   val('fDescAr'),
    descEn:   val('fDescEn'),
    pg:       `pg-${Math.floor(Math.random() * 8) + 1}`,
    img:      uploadedImg
  };

  try {
    await persistArtwork(newArt, _imageFile);
    closeModal();
    await renderGallery(document.querySelector('.flt.on')?.dataset.cat);
    await renderFeatured();
  } catch(e) {
    console.error('Failed to save artwork', e);
    const lang = document.documentElement.lang;
    alert(lang === 'en' ? 'Failed to save. Please try again.' : 'فشل الحفظ. حاول مرة أخرى.');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<span class="ar">إضافة إلى المجموعة</span><span class="en">Add to Collection</span>';
    }
  }
}

/* ── Delete artwork ──────────────────────────────────── */
async function handleDelete(docId, localId) {
  if (!isAdmin) return;
  const lang = document.documentElement.lang;
  if (!confirm(lang === 'en' ? 'Delete this artwork?' : 'هل تريد حذف هذا العمل؟')) return;
  await removeArtwork(docId, localId);
  await renderGallery(document.querySelector('.flt.on')?.dataset.cat);
  await renderFeatured();
}

/* ── Contact form ────────────────────────────────────── */
function initContact() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const lang = document.documentElement.lang;
    const btn  = form.querySelector('button[type="submit"]');
    const orig = btn.innerHTML;

    // No Formspree ID yet → send via WhatsApp
    if (!window.FORMSPREE_ID) {
      const name    = document.getElementById('cName')?.value    || '';
      const email   = document.getElementById('cEmail')?.value   || '';
      const subject = document.getElementById('cSubject')?.value || '';
      const message = document.getElementById('cMsg')?.value     || '';
      const text = `${name} — ${email}\n${subject}\n\n${message}`;
      window.open(`https://wa.me/962793310203?text=${encodeURIComponent(text)}`, '_blank');
      form.reset();
      return;
    }

    btn.innerHTML  = '<span class="ar">جاري الإرسال...</span><span class="en">Sending...</span>';
    btn.disabled   = true;

    try {
      const res = await fetch(`https://formspree.io/f/${window.FORMSPREE_ID}`, {
        method:  'POST',
        body:    new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        btn.innerHTML = `<span class="ar">أُرسلت ✓</span><span class="en">Sent ✓</span>`;
        form.reset();
        setTimeout(() => { btn.innerHTML = orig; btn.disabled = false; }, 3000);
      } else { throw new Error(); }
    } catch {
      btn.innerHTML = `<span class="ar">خطأ — أعد المحاولة</span><span class="en">Error — try again</span>`;
      btn.disabled  = false;
    }
  });
}

/* ── Artist bio modal ────────────────────────────────── */
function showArtistBio(artistEn) {
  const artist = ARTISTS[artistEn];
  if (!artist) return;
  const lang    = document.documentElement.lang;
  const overlay = document.getElementById('artistOverlay');
  if (!overlay) return;
  document.getElementById('artistModalName').textContent = lang === 'en' ? artist.nameEn : artist.nameAr;
  document.getElementById('artistModalImg').className    = artist.pg;
  document.getElementById('artistModalBio').textContent  = lang === 'en' ? artist.bioEn  : artist.bioAr;
  overlay.classList.add('open');
}

function initArtistModal() {
  const overlay  = document.getElementById('artistOverlay');
  const closeBtn = document.getElementById('closeArtistModal');
  if (!overlay) return;
  closeBtn.addEventListener('click', () => overlay.classList.remove('open'));
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });
}

/* ── WhatsApp inquiry ────────────────────────────────── */
function handleInquiry(title, price) {
  const lang = document.documentElement.lang;
  const msg  = lang === 'en'
    ? `Hello, I'm interested in the artwork "${title}" priced at ${price} JOD. Could you provide more details?`
    : `مرحباً، أنا مهتم بالعمل الفني "${title}" بسعر ${price} دينار. هل يمكنكم تزويدي بمزيد من التفاصيل؟`;
  window.open(`https://wa.me/962793310203?text=${encodeURIComponent(msg)}`, '_blank');
}

/* ── Language observer (re-renders on lang change) ───── */
function watchLang() {
  new MutationObserver(() => {
    renderGallery(document.querySelector('.flt.on')?.dataset.cat);
    renderFeatured();
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
}

/* ── Init ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initFirebase();
  initLang();
  initNav();
  initAdminLogin();
  renderFeatured();
  renderGallery();
  initFilters();
  initModal();
  initArtistModal();
  initContact();
  watchLang();
  updateAdminUI(); // hide Add button by default
});
