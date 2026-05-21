/* ── Jadal Gallery — app.js ── */

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

/* ── Language Toggle ── */
function initLang() {
  const saved = localStorage.getItem('jadal-lang') || 'ar';
  setLang(saved, false);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cur = document.documentElement.lang;
      setLang(cur === 'ar' ? 'en' : 'ar', true);
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

/* ── Nav ── */
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

  // Close menu when a link is tapped
  mobile && mobile.querySelectorAll('.nav__link').forEach(a => {
    a.addEventListener('click', () => {
      mobile.classList.remove('open');
      burger && burger.classList.remove('is-open');
    });
  });

  // Close menu on outside tap
  document.addEventListener('click', e => {
    if (mobile && mobile.classList.contains('open') &&
        !mobile.contains(e.target) && !burger.contains(e.target)) {
      mobile.classList.remove('open');
      burger.classList.remove('is-open');
    }
  });

  // Active link
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(a => {
    const href = a.getAttribute('href');
    if (href && (href === page || (page === '' && href === 'index.html'))) {
      a.classList.add('active');
    }
  });
}

/* ── Gallery ── */
function getArtworks() {
  const saved = localStorage.getItem('jadal-artworks');
  if (saved) {
    try { return JSON.parse(saved); } catch(e) {}
  }
  return DEFAULT_ARTWORKS;
}

function saveArtworks(list) {
  localStorage.setItem('jadal-artworks', JSON.stringify(list));
}

function buildCard(art) {
  const lang = document.documentElement.lang;
  const title  = lang === 'en' ? art.titleEn  : art.titleAr;
  const artist = lang === 'en' ? art.artistEn : art.artistAr;
  const medium = lang === 'en' ? art.mediumEn : art.mediumAr;
  const desc   = lang === 'en' ? art.descEn   : art.descAr;
  const priceLabel = lang === 'en' ? 'JOD' : 'دينار';
  const inquire = lang === 'en' ? 'Inquire' : 'استفسر';

  const imgHTML = art.img
    ? `<img src="${art.img}" alt="${title}" loading="lazy">`
    : `<div class="card__placeholder ${art.pg || 'pg-1'}"></div>`;

  const safeArtist = art.artistEn.replace(/'/g, "\\'");
  return `
  <article class="card" data-category="${art.category}" data-id="${art.id}"
    onclick="showArtistBio('${safeArtist}')" style="cursor:pointer">
    <div class="card__img">
      ${imgHTML}
      <div class="card__badge"><span class="ar">${art.mediumAr}</span><span class="en">${art.mediumEn}</span></div>
    </div>
    <div class="card__body">
      <div class="card__meta">
        <span class="card__medium"><span class="ar">${art.mediumAr}</span><span class="en">${art.mediumEn}</span></span>
        <span class="card__year">${art.year}</span>
      </div>
      <h3 class="card__title">
        <span class="ar">${art.titleAr}</span>
        <span class="en">${art.titleEn}</span>
      </h3>
      <p class="card__artist">
        <span class="ar">${art.artistAr}</span>
        <span class="en">${art.artistEn}</span>
      </p>
      <p class="card__desc">
        <span class="ar">${art.descAr}</span>
        <span class="en">${art.descEn}</span>
      </p>
      <div class="card__foot">
        <div class="card__price">
          ${art.price.toLocaleString()} <span>${priceLabel}</span>
        </div>
        <span class="card__inquiry" onclick="event.stopPropagation();handleInquiry('${title}', ${art.price})">${inquire}</span>
      </div>
    </div>
  </article>`;
}

function renderGallery(filter) {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  const artworks = getArtworks();
  const list = filter && filter !== 'all'
    ? artworks.filter(a => a.category === filter)
    : artworks;
  grid.innerHTML = list.map(buildCard).join('');
}

function renderFeatured() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  const artworks = getArtworks().slice(0, 3);
  grid.innerHTML = artworks.map(buildCard).join('');
}

function initFilters() {
  document.querySelectorAll('.flt').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.flt').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      renderGallery(btn.dataset.cat);
    });
  });
}

/* ── Add Artwork Modal ── */
let uploadedImg = null;

function initModal() {
  const openBtn = document.getElementById('openModal');
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('closeModal');
  const form = document.getElementById('addArtworkForm');
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

  form.addEventListener('submit', e => {
    e.preventDefault();
    submitArtwork();
  });
}

function handleFile(file) {
  if (!file || !file.type.startsWith('image/')) return;
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
  const form = document.getElementById('addArtworkForm');
  form && form.reset();
  const zone = document.getElementById('uploadZone');
  if (zone) zone.innerHTML = `
    <div class="upload-zone__icon">🖼</div>
    <p class="ar">اضغط أو اسحب صورة العمل الفني هنا</p>
    <p class="en">Click or drag artwork image here</p>`;
}

function submitArtwork() {
  const val = id => document.getElementById(id)?.value.trim();
  const newArt = {
    id: Date.now(),
    titleAr:  val('fTitleAr')  || 'بدون عنوان',
    titleEn:  val('fTitleEn')  || 'Untitled',
    artistAr: val('fArtistAr') || 'فنان',
    artistEn: val('fArtistEn') || 'Artist',
    mediumAr: val('fMediumAr') || 'وسيط',
    mediumEn: val('fMediumEn') || 'Medium',
    category: val('fCategory') || 'painting',
    year:     parseInt(val('fYear')) || new Date().getFullYear(),
    price:    parseFloat(val('fPrice')) || 0,
    descAr:   val('fDescAr') || '',
    descEn:   val('fDescEn') || '',
    pg:       `pg-${Math.floor(Math.random()*8)+1}`,
    img:      uploadedImg
  };

  const list = getArtworks();
  list.push(newArt);
  saveArtworks(list);
  renderGallery();
  closeModal();
}

/* ── Contact Form ── */
function initContact() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  // Set Formspree action — replace YOUR_FORM_ID with actual ID
  form.action = 'https://formspree.io/f/YOUR_FORM_ID';
  form.method = 'POST';

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const orig = btn.textContent;
    btn.textContent = '...';
    btn.disabled = true;
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        btn.textContent = document.documentElement.lang === 'en' ? 'Sent ✓' : 'أُرسلت ✓';
        form.reset();
        setTimeout(() => { btn.textContent = orig; btn.disabled = false; }, 3000);
      } else {
        throw new Error();
      }
    } catch {
      btn.textContent = document.documentElement.lang === 'en' ? 'Error — try again' : 'خطأ — أعد المحاولة';
      btn.disabled = false;
    }
  });
}

/* ── Artist Bio Modal ── */
function showArtistBio(artistEn) {
  const artist = ARTISTS[artistEn];
  if (!artist) return;
  const lang = document.documentElement.lang;

  const overlay  = document.getElementById('artistOverlay');
  const nameEl   = document.getElementById('artistModalName');
  const imgEl    = document.getElementById('artistModalImg');
  const bioEl    = document.getElementById('artistModalBio');

  if (!overlay) return;

  nameEl.textContent = lang === 'en' ? artist.nameEn : artist.nameAr;
  imgEl.className    = artist.pg;
  bioEl.textContent  = lang === 'en' ? artist.bioEn  : artist.bioAr;

  overlay.classList.add('open');
}

function initArtistModal() {
  const overlay  = document.getElementById('artistOverlay');
  const closeBtn = document.getElementById('closeArtistModal');
  if (!overlay) return;

  closeBtn.addEventListener('click', () => overlay.classList.remove('open'));
  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('open');
  });
}

function handleInquiry(title, price) {
  const lang = document.documentElement.lang;
  const msg = lang === 'en'
    ? `Hello, I'm interested in the artwork "${title}" priced at ${price} JOD. Could you provide more details?`
    : `مرحباً، أنا مهتم بالعمل الفني "${title}" بسعر ${price} دينار. هل يمكنكم تزويدي بمزيد من التفاصيل؟`;
  const wa = `https://wa.me/962793310203?text=${encodeURIComponent(msg)}`;
  window.open(wa, '_blank');
}

/* ── Lang observer to re-render dynamic content ── */
function watchLang() {
  const obs = new MutationObserver(() => {
    renderGallery(document.querySelector('.flt.on')?.dataset.cat);
    renderFeatured();
  });
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  initLang();
  initNav();
  renderFeatured();
  renderGallery();
  initFilters();
  initModal();
  initArtistModal();
  initContact();
  watchLang();
});
