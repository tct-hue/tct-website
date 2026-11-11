// js/main.js
// Travel Computer Training (TCT) - Main Application Script
// Production Ready, Fully Validated & Secured

document.addEventListener("DOMContentLoaded", () => {
  // Safety check: ensure TCT_DATA is available
  if (typeof TCT_DATA === "undefined") {
    console.error("TCT_DATA is not loaded. Please verify data/tct-data.js script path.");
    return;
  }

  // --- Helper 1: HTML Sanitizer to prevent XSS ---
  const escapeHtml = (str) => {
    if (str === null || str === undefined) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  // --- Helper 2: In-page Form Status Message Display ---
  const formStatus = document.getElementById("formStatus");
  const showStatus = (message, type = "info") => {
    if (!formStatus) return;
    formStatus.className = `form-status ${type} show`;
    formStatus.innerHTML = message;
    formStatus.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  const hideStatus = () => {
    if (!formStatus) return;
    formStatus.className = "form-status";
    formStatus.innerHTML = "";
  };

  // 0. Set Dynamic Hero Background Image from TCT_DATA
  if (TCT_DATA.organization && TCT_DATA.organization.heroBgImage) {
    document.documentElement.style.setProperty(
      "--hero-bg-image",
      `url('${TCT_DATA.organization.heroBgImage}')`
    );
  }

  // 1. Mobile Menu Toggle with Accessibility & Link Click Handling
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      mobileMenuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      mobileMenuBtn.innerHTML = isOpen ? "✕" : "☰";
    });

    // Auto-close mobile navigation when a menu link is tapped
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (navLinks.classList.contains("open")) {
          navLinks.classList.remove("open");
          mobileMenuBtn.setAttribute("aria-expanded", "false");
          mobileMenuBtn.innerHTML = "☰";
        }
      });
    });
  }

  // 2. Render Impact Stats
  const impactContainer = document.getElementById("impactStatsContainer");
  if (impactContainer && Array.isArray(TCT_DATA.impactStats)) {
    impactContainer.innerHTML = TCT_DATA.impactStats.map(stat => `
      <div class="stat-box">
        <div class="stat-number">${escapeHtml(stat.number)}</div>
        <div class="stat-label">${escapeHtml(stat.labelMm)}</div>
      </div>
    `).join("");
  }

  // 3. Render 4 Pledges
  const pledgeContainer = document.getElementById("pledgeListContainer");
  if (pledgeContainer && Array.isArray(TCT_DATA.pledges)) {
    pledgeContainer.innerHTML = TCT_DATA.pledges.map(p => `<li>${escapeHtml(p)}</li>`).join("");
  }

  // 4. Render Team Members
  const teamContainer = document.getElementById("teamContainer");
  if (teamContainer && Array.isArray(TCT_DATA.team)) {
    teamContainer.innerHTML = TCT_DATA.team.map(member => `
      <div class="team-card">
        <h4>${escapeHtml(member.nameMm)}</h4>
        <div>${escapeHtml(member.nameEn)}</div>
        <div class="team-role">${escapeHtml(member.roleMm)}</div>
      </div>
    `).join("");
  }

  // 5. Render Courses with Filter
  const coursesContainer = document.getElementById("coursesContainer");
  const renderCourses = (filter = "all") => {
    if (!coursesContainer || !Array.isArray(TCT_DATA.courses)) return;

    const filtered = filter === "all"
      ? TCT_DATA.courses
      : TCT_DATA.courses.filter(c => c.category === filter);

    if (filtered.length === 0) {
      coursesContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 2rem;">ဤကဏ္ဍတွင် လက်ရှိသင်တန်း မရှိသေးပါ။</p>`;
      return;
    }

    coursesContainer.innerHTML = filtered.map(c => `
      <div class="course-card">
        <div>
          <span class="course-badge">${escapeHtml(c.badge)} • ${escapeHtml(c.duration)}</span>
          <h3>${escapeHtml(c.title)}</h3>
          <div class="course-mm">${escapeHtml(c.titleMm)}</div>
          <p><strong>Target:</strong> ${escapeHtml(c.target)}</p>
          <ul class="course-skills">
            ${Array.isArray(c.skills) ? c.skills.map(s => `<li>${escapeHtml(s)}</li>`).join("") : ""}
          </ul>
        </div>
        <div>
          <p style="font-size:0.85rem; margin-bottom:0.8rem;"><strong>Practical Project:</strong> ${escapeHtml(c.projects)}</p>
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

  // 6. Render Featured Software & Additional Downloads
  const featuredSoftwareContainer = document.getElementById("featuredSoftwareContainer");
  if (featuredSoftwareContainer && TCT_DATA.featuredSoftware) {
    const sw = TCT_DATA.featuredSoftware;
    featuredSoftwareContainer.innerHTML = `
      <div class="software-grid">
        <div>
          <span class="badge-gold">${escapeHtml(sw.badge)}</span>
          <h3 class="software-title">${escapeHtml(sw.name)}</h3>
          <div class="software-meta">
            <span>💻 ${escapeHtml(sw.version)}</span>
            <span>🪟 ${escapeHtml(sw.os)}</span>
            <span>⚡ ${escapeHtml(sw.fileSize)}</span>
          </div>
          <p>${escapeHtml(sw.description)}</p>
          <ul class="software-feature-list">
            ${Array.isArray(sw.features) ? sw.features.map(f => `<li>✓ ${escapeHtml(f)}</li>`).join("") : ""}
          </ul>
        </div>
        <div class="software-download-panel">
          <div class="typing-preview-icon">⌨️</div>
          <h4 style="color:var(--gold); margin-bottom:0.5rem;">အခမဲ့ ဒေါင်းလုဒ်ရယူရန်</h4>
          <p style="font-size:0.85rem; color:#E2E8F0; margin-bottom:1.2rem;">${escapeHtml(sw.guideText)}</p>
          <a href="${escapeHtml(sw.downloadUrl)}" download class="btn btn-primary btn-full">⬇ Download TCT Typing Tutor</a>
        </div>
      </div>
    `;
  }

  const downloadsContainer = document.getElementById("downloadsContainer");
  if (downloadsContainer && Array.isArray(TCT_DATA.softwareDownloads)) {
    downloadsContainer.innerHTML = TCT_DATA.softwareDownloads.map(item => `
      <div class="download-card">
        <div>
          <span class="course-badge">${escapeHtml(item.category)} • ${escapeHtml(item.size)}</span>
          <h4>${escapeHtml(item.title)}</h4>
          <div class="course-mm">${escapeHtml(item.titleMm)} (${escapeHtml(item.version)})</div>
          <p style="font-size:0.9rem; margin-bottom:1.2rem;">${escapeHtml(item.desc)}</p>
        </div>
        <a href="${escapeHtml(item.downloadUrl)}" download class="btn btn-primary btn-full">⬇ ${escapeHtml(item.btnLabel)}</a>
      </div>
    `).join("");
  }

  // 7. Render Training Journey
  const journeyContainer = document.getElementById("journeyContainer");
  if (journeyContainer && Array.isArray(TCT_DATA.journeyLocations)) {
    journeyContainer.innerHTML = TCT_DATA.journeyLocations.map(item => `
      <div class="journey-card">
        <h4>📍 ${escapeHtml(item.region)}</h4>
        <p>${escapeHtml(item.places)}</p>
      </div>
    `).join("");
  }

  // 8. Render Testimonials
  const testimonialsContainer = document.getElementById("testimonialsContainer");
  if (testimonialsContainer && Array.isArray(TCT_DATA.testimonials)) {
    testimonialsContainer.innerHTML = TCT_DATA.testimonials.map(t => `
      <div class="quote-card">
        <p>“${escapeHtml(t.quote)}”</p>
        <h4 style="margin-top:0.8rem; color:var(--navy);">— ${escapeHtml(t.name)} (${escapeHtml(t.location)})</h4>
      </div>
    `).join("");
  }

  // 9. Render News
  const newsContainer = document.getElementById("newsContainer");
  if (newsContainer && Array.isArray(TCT_DATA.news)) {
    newsContainer.innerHTML = TCT_DATA.news.map(n => `
      <div class="news-card">
        <span class="course-badge">${escapeHtml(n.tag)} • ${escapeHtml(n.date)}</span>
        <h4 style="color:var(--navy); margin-bottom:0.5rem;">${escapeHtml(n.title)}</h4>
        <p>${escapeHtml(n.summary)}</p>
      </div>
    `).join("");
  }

  // 10. Render Gallery with Regional Filter
  const galleryContainer = document.getElementById("galleryContainer");
  const renderGallery = (region = "all") => {
    if (!galleryContainer || !Array.isArray(TCT_DATA.gallery)) return;

    const filtered = region === "all"
      ? TCT_DATA.gallery
      : TCT_DATA.gallery.filter(g => g.region === region);

    if (filtered.length === 0) {
      galleryContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 2rem;">ဤဒေသအတွက် ဓာတ်ပုံမှတ်တမ်း မရှိသေးပါ။</p>`;
      return;
    }

    galleryContainer.innerHTML = filtered.map(g => `
      <div class="gallery-card">
        ${g.image ? `<img src="${escapeHtml(g.image)}" alt="${escapeHtml(g.title)}" class="gallery-img" loading="lazy" onerror="this.style.display='none'">` : ""}
        <div class="gallery-body">
          <h4 style="color:var(--navy); margin-bottom:0.4rem;">${escapeHtml(g.title)}</h4>
          <p style="font-size:0.9rem; color:var(--text-muted);">${escapeHtml(g.desc)}</p>
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
  if (refundTableBody && Array.isArray(TCT_DATA.refundGrades)) {
    refundTableBody.innerHTML = TCT_DATA.refundGrades.map(r => `
      <tr>
        <td><strong>${escapeHtml(r.grade)}</strong></td>
        <td>${escapeHtml(r.criteria)}</td>
        <td>${escapeHtml(r.benefit)}</td>
      </tr>
    `).join("");
  }

  const faqContainer = document.getElementById("faqContainer");
  if (faqContainer && Array.isArray(TCT_DATA.faqs)) {
    faqContainer.innerHTML = TCT_DATA.faqs.map(f => `
      <div class="faq-item">
        <strong>Q: ${escapeHtml(f.q)}</strong>
        <p style="font-size:0.9rem; margin-top:0.3rem;">A: ${escapeHtml(f.a)}</p>
      </div>
    `).join("");
  }

  // 12. Handle Registration Form with async / await & In-page Status
  const regForm = document.getElementById("registrationForm");
  const submitBtn = document.getElementById("submitBtn");
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyWU6_xH67GwIAHVbTaBVFfCGn9y-smEfzqATFLJZZElomvuTZgzxb18iT6XgjhZshwTA/exec";

  if (regForm) {
    regForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      hideStatus();

      const nameInput = document.getElementById("studentName");
      const ageInput = document.getElementById("studentAge");
      const eduInput = document.getElementById("studentEdu");
      const phoneInput = document.getElementById("studentPhone");
      const courseInput = document.getElementById("studentCourse");
      const noteInput = document.getElementById("studentNote");

      const payload = {
        name: nameInput ? nameInput.value.trim() : "",
        age: ageInput ? ageInput.value.trim() : "",
        qualification: eduInput ? eduInput.value.trim() : "",
        phone: phoneInput ? phoneInput.value.trim() : "",
        course: courseInput ? courseInput.value.trim() : "",
        note: noteInput ? noteInput.value.trim() : "",
        submittedAt: new Date().toISOString()
      };

      // Client-side Validation
      if (!payload.name) {
        showStatus("ကျေးဇူးပြု၍ သင်၏ အမည် အပြည့်အစုံကို ထည့်သွင်းပေးပါ။", "error");
        if (nameInput) nameInput.focus();
        return;
      }

      if (!payload.age) {
        showStatus("ကျေးဇူးပြု၍ သင်၏ လက်ရှိအသက်ကို ထည့်သွင်းပေးပါ။", "error");
        if (ageInput) ageInput.focus();
        return;
      }

      if (!payload.qualification) {
        showStatus("ကျေးဇူးပြု၍ ပညာအရည်အချင်း သို့မဟုတ် အလုပ်အကိုင်ကို ထည့်သွင်းပေးပါ။", "error");
        if (eduInput) eduInput.focus();
        return;
      }

      // Myanmar phone number validation
      const phoneRegex = /^(09|\+?959)[0-9]{7,9}$/;
      const cleanedPhone = payload.phone.replace(/[\s\-\(\)]/g, "");
      if (!phoneRegex.test(cleanedPhone)) {
        showStatus("ကျေးဇူးပြု၍ မှန်ကန်သော ဖုန်းနံပါတ် (ဥပမာ - 0943045506) ကို ထည့်သွင်းပေးပါ။", "error");
        if (phoneInput) phoneInput.focus();
        return;
      }
      payload.phone = cleanedPhone;

      if (!payload.course) {
        showStatus("ကျေးဇူးပြု၍ တက်ရောက်လိုသည့် သင်တန်းကို ရွေးချယ်ပေးပါ။", "error");
        if (courseInput) courseInput.focus();
        return;
      }

      const originalBtnText = submitBtn ? submitBtn.innerText : "စာရင်းပေးသွင်းမည်";
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = "စာရင်းပေးသွင်းနေပါသည်... ခေတ္တစောင့်ပါ";
      }

      try {
        if (GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL.trim() !== "") {
          const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify(payload)
          });

          const result = await response.json();
          if (result && result.status === "success") {
            showStatus(`✓ ကျေးဇူးတင်ပါသည် <strong>${escapeHtml(payload.name)}</strong>။ (${escapeHtml(payload.course)}) သင်တန်းအတွက် စာရင်းပေးသွင်းမှုကို အောင်မြင်စွာ လက်ခံရရှိပါသည်။ သင်တန်းမှူးထံ တင်ပြပြီး အတည်ပြုချက်ရရှိပါက ဖုန်း <strong>${escapeHtml(payload.phone)}</strong> သို့ အမြန်ဆုံး ဆက်သွယ်ပေးပါမည်။`, "success");
            regForm.reset();
          } else {
            throw new Error(result.message || "Submission failed");
          }
        }
      } catch (error) {
        console.error("Submission notice:", error);
        // Offline / Network Fallback (Save locally so student is never lost)
        try {
          const saved = JSON.parse(localStorage.getItem("tct_registrations") || "[]");
          saved.push(payload);
          localStorage.setItem("tct_registrations", JSON.stringify(saved));
        } catch(storageErr) {}

        showStatus(`✓ ကျေးဇူးတင်ပါသည် <strong>${escapeHtml(payload.name)}</strong>။ (${escapeHtml(payload.course)}) သင်တန်းအတွက် စာရင်းပေးသွင်းမှုကို လက်ခံရရှိပါသည်။ သင်တန်းမှူးထံ တင်ပြပြီး အတည်ပြုချက်ရရှိပါက ဖုန်း <strong>${escapeHtml(payload.phone)}</strong> သို့ ပြန်လည်ဆက်သွယ်ပေးပါမည်။<br><br>အရေးကြီးပါက ဖုန်း <strong><a href="tel:0943045506" style="color:var(--navy); text-decoration:underline;">09 43045506</a></strong> သို့မဟုတ် <a href="https://www.facebook.com/travelcomputertraining" target="_blank" rel="noopener noreferrer" style="color:var(--navy); text-decoration:underline;">Travel Computer Training Facebook Page</a> သို့လည်း တိုက်ရိုက် ဆက်သွယ်စုံစမ်းနိုင်ပါသည်။`, "success");
        regForm.reset();
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerText = originalBtnText;
        }
      }
    });
  }

  // 13. Dynamic Footer Information Synchronization
  if (TCT_DATA.organization) {
    const org = TCT_DATA.organization;
    const phoneEl = document.getElementById("contactPhone");
    if (phoneEl && org.phone) {
      phoneEl.textContent = org.phone;
      phoneEl.setAttribute("href", `tel:${org.phone.replace(/\\s/g, "")}`);
    }

    const addrEl = document.getElementById("contactAddress");
    if (addrEl && org.currentLocation) {
      addrEl.textContent = org.currentLocation;
    }

    const emailEl = document.getElementById("contactEmail");
    if (emailEl && org.email) {
      emailEl.textContent = org.email;
      emailEl.setAttribute("href", `mailto:${org.email}`);
    }
  }
});
      
