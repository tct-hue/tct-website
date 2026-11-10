// js/main.js
document.addEventListener("DOMContentLoaded", () => {
  // 0. Set Dynamic Hero Background Image from TCT_DATA
  if (TCT_DATA.organization && TCT_DATA.organization.heroBgImage) {
    document.documentElement.style.setProperty(
      "--hero-bg-image",
      `url('../${TCT_DATA.organization.heroBgImage}')`
    );
  }

  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  // 2. Render Impact Stats
  const impactContainer = document.getElementById("impactStatsContainer");
  if (impactContainer && TCT_DATA.impactStats) {
    impactContainer.innerHTML = TCT_DATA.impactStats.map(stat => `
      <div class="stat-box">
        <div class="stat-number">${stat.number}</div>
        <div class="stat-label">${stat.labelMm}</div>
      </div>
    `).join("");
  }

  // 3. Render 4 Pledges
  const pledgeContainer = document.getElementById("pledgeListContainer");
  if (pledgeContainer && TCT_DATA.pledges) {
    pledgeContainer.innerHTML = TCT_DATA.pledges.map(p => `<li>${p}</li>`).join("");
  }

  // 4. Render Team Members
  const teamContainer = document.getElementById("teamContainer");
  if (teamContainer && TCT_DATA.team) {
    teamContainer.innerHTML = TCT_DATA.team.map(member => `
      <div class="team-card">
        <h4>${member.nameMm}</h4>
        <div>${member.nameEn}</div>
        <div class="team-role">${member.roleMm}</div>
      </div>
    `).join("");
  }

  // 5. Render Courses with Filter
  const coursesContainer = document.getElementById("coursesContainer");
  const renderCourses = (filter = "all") => {
    const filtered = filter === "all"
      ? TCT_DATA.courses
      : TCT_DATA.courses.filter(c => c.category === filter);

    coursesContainer.innerHTML = filtered.map(c => `
      <div class="course-card">
        <div>
          <span class="course-badge">${c.badge} • ${c.duration}</span>
          <h3>${c.title}</h3>
          <div class="course-mm">${c.titleMm}</div>
          <p><strong>Target:</strong> ${c.target}</p>
          <ul class="course-skills">
            ${c.skills.map(s => `<li>${s}</li>`).join("")}
          </ul>
        </div>
        <div>
          <p style="font-size:0.85rem; margin-bottom:0.8rem;"><strong>Practical Project:</strong> ${c.projects}</p>
          <a href="#join" class="btn btn-primary btn-full">သင်တန်းလျှောက်ထားရန်</a>
        </div>
      </div>
    `).join("");
  };

  if (coursesContainer) {
    renderCourses("all");
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderCourses(btn.dataset.filter);
      });
    });
  }

  // 6. Render Featured Software (TCT Typing Tutor) & Additional Downloads
  const featuredSoftwareContainer = document.getElementById("featuredSoftwareContainer");
  if (featuredSoftwareContainer && TCT_DATA.featuredSoftware) {
    const sw = TCT_DATA.featuredSoftware;
    featuredSoftwareContainer.innerHTML = `
      <div class="software-grid">
        <div>
          <span class="badge-gold">${sw.badge}</span>
          <h3 class="software-title">${sw.name}</h3>
          <div class="software-meta">
            <span>💻 ${sw.version}</span>
            <span>🪟 ${sw.os}</span>
            <span>⚡ ${sw.fileSize}</span>
          </div>
          <p>${sw.description}</p>
          <ul class="software-feature-list">
            ${sw.features.map(f => `<li>✓ ${f}</li>`).join("")}
          </ul>
        </div>
        <div class="software-download-panel">
          <div class="typing-preview-icon">⌨️</div>
          <h4 style="color:var(--gold); margin-bottom:0.5rem;">အခမဲ့ ဒေါင်းလုဒ်ရယူရန်</h4>
          <p style="font-size:0.85rem; color:#E2E8F0; margin-bottom:1.2rem;">${sw.guideText}</p>
          <a href="${sw.downloadUrl}" download class="btn btn-primary btn-full">⬇ Download TCT Typing Tutor</a>
        </div>
      </div>
    `;
  }

  const downloadsContainer = document.getElementById("downloadsContainer");
  if (downloadsContainer && TCT_DATA.softwareDownloads) {
    downloadsContainer.innerHTML = TCT_DATA.softwareDownloads.map(item => `
      <div class="download-card">
        <div>
          <span class="course-badge">${item.category} • ${item.size}</span>
          <h4>${item.title}</h4>
          <div class="course-mm">${item.titleMm} (${item.version})</div>
          <p style="font-size:0.9rem; margin-bottom:1.2rem;">${item.desc}</p>
        </div>
        <a href="${item.downloadUrl}" download class="btn btn-primary btn-full">⬇ ${item.btnLabel}</a>
      </div>
    `).join("");
  }

  // 7. Render Training Journey
  const journeyContainer = document.getElementById("journeyContainer");
  if (journeyContainer && TCT_DATA.journeyLocations) {
    journeyContainer.innerHTML = TCT_DATA.journeyLocations.map(item => `
      <div class="journey-card">
        <h4>📍 ${item.region}</h4>
        <p>${item.places}</p>
      </div>
    `).join("");
  }

  // 8. Render Testimonials
  const testimonialsContainer = document.getElementById("testimonialsContainer");
  if (testimonialsContainer && TCT_DATA.testimonials) {
    testimonialsContainer.innerHTML = TCT_DATA.testimonials.map(t => `
      <div class="quote-card">
        <p>“${t.quote}”</p>
        <h4 style="margin-top:0.8rem; color:var(--navy);">— ${t.name} (${t.location})</h4>
      </div>
    `).join("");
  }

  // 9. Render News
  const newsContainer = document.getElementById("newsContainer");
  if (newsContainer && TCT_DATA.news) {
    newsContainer.innerHTML = TCT_DATA.news.map(n => `
      <div class="news-card">
        <span class="course-badge">${n.tag} • ${n.date}</span>
        <h4 style="color:var(--navy); margin-bottom:0.5rem;">${n.title}</h4>
        <p>${n.summary}</p>
      </div>
    `).join("");
  }

  // 10. Render Gallery with Real Photos & Regional Filter
  const galleryContainer = document.getElementById("galleryContainer");
  const renderGallery = (region = "all") => {
    const filtered = region === "all"
      ? TCT_DATA.gallery
      : TCT_DATA.gallery.filter(g => g.region === region);

    galleryContainer.innerHTML = filtered.map(g => `
      <div class="gallery-card">
        ${g.image ? `<img src="${g.image}" alt="${g.title}" class="gallery-img" loading="lazy">` : ""}
        <div class="gallery-body">
          <h4 style="color:var(--navy); margin-bottom:0.4rem;">${g.title}</h4>
          <p style="font-size:0.9rem; color:var(--text-muted);">${g.desc}</p>
        </div>
      </div>
    `).join("");
  };

  if (galleryContainer) {
    renderGallery("all");
    document.querySelectorAll(".gallery-filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".gallery-filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderGallery(btn.dataset.region);
      });
    });
  }

  // 11. Render Refund Table & FAQs
  const refundTableBody = document.getElementById("refundTableBody");
  if (refundTableBody && TCT_DATA.refundGrades) {
    refundTableBody.innerHTML = TCT_DATA.refundGrades.map(r => `
      <tr>
        <td><strong>${r.grade}</strong></td>
        <td>${r.criteria}</td>
        <td>${r.benefit}</td>
      </tr>
    `).join("");
  }

  const faqContainer = document.getElementById("faqContainer");
  if (faqContainer && TCT_DATA.faqs) {
    faqContainer.innerHTML = TCT_DATA.faqs.map(f => `
      <div class="faq-item">
        <strong>Q: ${f.q}</strong>
        <p style="font-size:0.9rem; margin-top:0.3rem;">A: ${f.a}</p>
      </div>
    `).join("");
  }

  // 12. Handle Registration Form
  const regForm = document.getElementById("registrationForm");
  if (regForm) {
    regForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("studentName").value.trim();
      const course = document.getElementById("studentCourse").value;
      alert(`ကျေးဇူးတင်ပါသည် ${name}။ (${course}) သင်တန်းအတွက် စာရင်းပေးသွင်းမှု (သို့) စုံစမ်းမေးမြန်းမှုကို လက်ခံရရှိပါသည်။ သင်တန်းမှူးထံ တင်ပြပြီး အတည်ပြုချက် ရသောအခါ သင်တန်းမှ ပြန်လည်ဆက်သွယ်ပေးပါမည်။`);
      regForm.reset();
    });
  }
});
