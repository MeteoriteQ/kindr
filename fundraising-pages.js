const categories = {
  medical: {
    title: "Medical",
    icon: "fa-heart-pulse",
    page: "donate-medical.html",
    text: "Support treatment, surgery, medicines, and hospital care."
  },
  education: {
    title: "Education",
    icon: "fa-graduation-cap",
    page: "donate-education.html",
    text: "Help students cover fees, books, uniforms, and training."
  },
  nonprofit: {
    title: "Non-profit",
    icon: "fa-hand-holding-heart",
    page: "donate-nonprofit.html",
    text: "Back trusted social causes, community work, and relief drives."
  },
  animal: {
    title: "Animal",
    icon: "fa-paw",
    page: "donate-animal.html",
    text: "Fund rescue, shelter, food, and urgent care for animals."
  },
  emergency: {
    title: "Emergency",
    icon: "fa-triangle-exclamation",
    page: "donate-emergency.html",
    text: "Give fast support during accidents, disasters, and family crises."
  }
};

const campaigns = {
  medical: [
    ["Help Aarav complete heart surgery", "Critical pediatric care and medicines.", 68, "₹3,40,000", "₹5,00,000"],
    ["Cancer treatment support for Meera", "Chemotherapy, scans, and travel support.", 54, "₹2,70,000", "₹5,00,000"],
    ["Kidney transplant recovery fund", "Post-surgery care and hospital expenses.", 76, "₹7,60,000", "₹10,00,000"],
    ["Emergency ICU care for Rohan", "Ventilator care and specialist treatment.", 43, "₹1,72,000", "₹4,00,000"],
    ["Medicines for a senior patient", "Monthly medicines and follow-up tests.", 61, "₹91,500", "₹1,50,000"],
    ["Support premature baby care", "NICU bills for a newborn child.", 49, "₹2,45,000", "₹5,00,000"],
    ["Spine surgery assistance", "Surgery, rehabilitation, and physiotherapy.", 57, "₹2,85,000", "₹5,00,000"],
    ["Dialysis care for six months", "Regular dialysis and transport support.", 72, "₹1,44,000", "₹2,00,000"],
    ["Accident recovery treatment", "Operations and recovery expenses.", 35, "₹1,05,000", "₹3,00,000"],
    ["Hospital bills for mother", "Urgent inpatient care and diagnostics.", 82, "₹4,10,000", "₹5,00,000"],
    ["Eye surgery for school teacher", "Procedure and post-care medicines.", 64, "₹96,000", "₹1,50,000"],
    ["Physiotherapy after stroke", "Therapy sessions and mobility aids.", 45, "₹67,500", "₹1,50,000"]
  ],
  education: [
    ["Keep Anika in school", "Fees, books, and uniform support.", 71, "₹71,000", "₹1,00,000"],
    ["Scholarships for rural students", "Tuition help for first-generation learners.", 58, "₹2,32,000", "₹4,00,000"],
    ["Laptop fund for coding learners", "Devices for low-income students.", 44, "₹1,10,000", "₹2,50,000"],
    ["College fees for engineering student", "Semester fees and hostel costs.", 63, "₹1,89,000", "₹3,00,000"],
    ["Books for community library", "Study material for children.", 80, "₹80,000", "₹1,00,000"],
    ["Girls education support", "School fees and safe transport.", 52, "₹1,56,000", "₹3,00,000"],
    ["Skill training for young adults", "Course fees and certification.", 39, "₹78,000", "₹2,00,000"],
    ["Exam coaching assistance", "Competitive exam preparation fees.", 47, "₹94,000", "₹2,00,000"],
    ["Uniforms for 120 students", "School uniforms and shoes.", 66, "₹1,32,000", "₹2,00,000"],
    ["Science lab for local school", "Basic lab equipment and safety kits.", 42, "₹2,10,000", "₹5,00,000"],
    ["Support a nursing student", "Fees, books, and practical training.", 73, "₹1,46,000", "₹2,00,000"],
    ["Digital classroom setup", "Projector, speakers, and learning tools.", 55, "₹1,65,000", "₹3,00,000"]
  ],
  nonprofit: [
    ["Meals for daily wage families", "Fresh food kits for vulnerable families.", 69, "₹2,07,000", "₹3,00,000"],
    ["Winter blankets drive", "Warm blankets for street communities.", 86, "₹1,29,000", "₹1,50,000"],
    ["Clean water for village homes", "Filters and storage tanks.", 46, "₹2,30,000", "₹5,00,000"],
    ["Women safety workshops", "Training, travel, and resource kits.", 51, "₹1,02,000", "₹2,00,000"],
    ["Community health camp", "Doctor visits and basic medicines.", 63, "₹1,89,000", "₹3,00,000"],
    ["Food bank monthly support", "Groceries for families in crisis.", 74, "₹2,96,000", "₹4,00,000"],
    ["Shelter repairs before monsoon", "Roof repairs and hygiene facilities.", 37, "₹1,48,000", "₹4,00,000"],
    ["Assistive devices for seniors", "Wheelchairs and walking aids.", 59, "₹1,77,000", "₹3,00,000"],
    ["Mental health helpline", "Counselor sessions and operations.", 41, "₹1,23,000", "₹3,00,000"],
    ["Support local artisans", "Tools and fair market access.", 67, "₹1,34,000", "₹2,00,000"],
    ["Sanitation kit drive", "Hygiene kits for underserved areas.", 77, "₹1,54,000", "₹2,00,000"],
    ["Community learning center", "Rent, books, and volunteer support.", 48, "₹2,40,000", "₹5,00,000"]
  ],
  animal: [
    ["Rescue surgery for Bruno", "Emergency vet care after an accident.", 62, "₹93,000", "₹1,50,000"],
    ["Food for shelter animals", "Monthly food for rescued dogs and cats.", 79, "₹1,58,000", "₹2,00,000"],
    ["Vaccination camp for street dogs", "Vaccines, transport, and vet support.", 53, "₹1,06,000", "₹2,00,000"],
    ["Build safe kennels", "Monsoon-safe shelter spaces.", 40, "₹2,00,000", "₹5,00,000"],
    ["Animal ambulance fuel fund", "Keep rescue vehicles running.", 57, "₹85,500", "₹1,50,000"],
    ["Treatment for injured kitten", "Surgery, medicines, and foster care.", 88, "₹44,000", "₹50,000"],
    ["Sterilization drive", "Humane population control support.", 46, "₹1,38,000", "₹3,00,000"],
    ["Care for abandoned cattle", "Feed and medical care.", 60, "₹1,20,000", "₹2,00,000"],
    ["Bird rescue rehabilitation", "Safe recovery space and supplies.", 35, "₹52,500", "₹1,50,000"],
    ["Shelter medical supplies", "Bandages, medicines, and cleaning kits.", 64, "₹96,000", "₹1,50,000"],
    ["Adoption camp setup", "Tents, crates, and awareness material.", 43, "₹64,500", "₹1,50,000"],
    ["Winter bedding for rescues", "Warm beds for shelter animals.", 81, "₹81,000", "₹1,00,000"]
  ],
  emergency: [
    ["Flood relief family kits", "Food, clothes, and hygiene supplies.", 75, "₹3,00,000", "₹4,00,000"],
    ["Fire accident home recovery", "Temporary housing and essentials.", 48, "₹1,92,000", "₹4,00,000"],
    ["Road accident urgent support", "Hospital bills and family expenses.", 64, "₹2,56,000", "₹4,00,000"],
    ["Disaster relief medical camp", "Doctors, medicines, and transport.", 39, "₹1,95,000", "₹5,00,000"],
    ["Help rebuild a small shop", "Equipment and inventory after loss.", 58, "₹1,74,000", "₹3,00,000"],
    ["Emergency rent for family", "Short-term housing stability.", 82, "₹82,000", "₹1,00,000"],
    ["Cyclone relief supplies", "Tarps, food kits, and clean water.", 44, "₹2,20,000", "₹5,00,000"],
    ["Support after sudden job loss", "Groceries and school fee bridge.", 50, "₹75,000", "₹1,50,000"],
    ["Ambulance transfer fund", "Urgent patient transport.", 69, "₹69,000", "₹1,00,000"],
    ["Emergency documents recovery", "Legal IDs and essential records.", 36, "₹36,000", "₹1,00,000"],
    ["Landslide relief for families", "Food, bedding, and medicines.", 55, "₹2,75,000", "₹5,00,000"],
    ["Urgent support for orphaned children", "Care, food, and education bridge.", 73, "₹2,19,000", "₹3,00,000"]
  ]
};

function setupMobileMenu() {
  const menuBtn = document.querySelector(".menu-btn");
  const mobileMenu = document.querySelector("#mobile-menu");
  const mobileOverlay = document.querySelector("#mobile-overlay");
  if (!menuBtn || !mobileMenu || !mobileOverlay) return;

  function closeMobileMenu() {
    menuBtn.classList.remove("active");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open menu");
    mobileMenu.setAttribute("aria-hidden", "true");
    mobileMenu.classList.remove("show");
    mobileOverlay.setAttribute("aria-hidden", "true");
    mobileOverlay.classList.remove("show");
    document.body.classList.remove("menu-open");
  }

  function openMobileMenu() {
    menuBtn.classList.add("active");
    menuBtn.setAttribute("aria-expanded", "true");
    menuBtn.setAttribute("aria-label", "Close menu");
    mobileMenu.setAttribute("aria-hidden", "false");
    mobileMenu.classList.add("show");
    mobileOverlay.setAttribute("aria-hidden", "false");
    mobileOverlay.classList.add("show");
    document.body.classList.add("menu-open");
  }

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.contains("show") ? closeMobileMenu() : openMobileMenu();
  });

  mobileMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMobileMenu));
  mobileOverlay.addEventListener("click", closeMobileMenu);
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && mobileMenu.classList.contains("show")) closeMobileMenu();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1050) closeMobileMenu();
  });
}

function campaignCard(categoryKey, item) {
  const [title, copy, progress, raised, goal] = item;
  const category = categories[categoryKey];
  return `
    <article class="campaign-card">
      <div class="campaign-art" aria-hidden="true"><i class="fa-solid ${category.icon}"></i></div>
      <div class="campaign-body">
        <h3>${title}</h3>
        <p>${copy}</p>
        <div class="progress" aria-label="${progress}% funded"><span style="width:${progress}%"></span></div>
        <div class="campaign-meta"><span><b>${raised}</b> raised</span><span>${goal}</span></div>
      </div>
    </article>
  `;
}

function renderDonateSections() {
  const host = document.querySelector("[data-donate-sections]");
  if (!host) return;

  host.innerHTML = Object.keys(categories).map(key => {
    const category = categories[key];
    const cards = campaigns[key].slice(0, 6).map(item => campaignCard(key, item)).join("");
    return `
      <section class="category-section" id="${key}">
        <div class="section-inner">
          <div class="section-head">
            <div>
              <span class="kicker">${category.title}</span>
              <h2>${category.title} fundraisers</h2>
              <p>${category.text}</p>
            </div>
            <div class="slider-controls" aria-label="${category.title} carousel controls">
              <button type="button" data-scroll-row="${key}" data-direction="-1" aria-label="Previous ${category.title} cards"><i class="fa-solid fa-arrow-left"></i></button>
              <button type="button" data-scroll-row="${key}" data-direction="1" aria-label="Next ${category.title} cards"><i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
          <div class="campaign-row" data-row="${key}">${cards}</div>
          <div class="see-more-wrap"><a class="see-more" href="${category.page}" target="_blank" rel="noopener">See more</a></div>
        </div>
      </section>
    `;
  }).join("");
}

function renderCategoryGrid() {
  const grid = document.querySelector("[data-category-grid]");
  if (!grid) return;

  const categoryKey = grid.dataset.categoryGrid;
  const category = categories[categoryKey];
  const items = campaigns[categoryKey] || [];
  const title = document.querySelector("[data-category-title]");
  const desc = document.querySelector("[data-category-desc]");

  if (title) title.textContent = `${category.title} fundraisers`;
  if (desc) desc.textContent = category.text;
  grid.innerHTML = items.map(item => campaignCard(categoryKey, item)).join("");
}

function setupRowButtons() {
  document.querySelectorAll("[data-scroll-row]").forEach(button => {
    button.addEventListener("click", () => {
      const row = document.querySelector(`[data-row="${button.dataset.scrollRow}"]`);
      if (!row) return;
      const direction = Number(button.dataset.direction || 1);
      row.scrollBy({ left: direction * row.clientWidth * 0.85, behavior: "smooth" });
    });
  });
}

function renderFundraiseCategories() {
  const grid = document.querySelector("[data-fundraise-categories]");
  if (!grid) return;

  grid.innerHTML = Object.keys(categories).map(key => {
    const category = categories[key];
    return `
      <article class="category-tile">
        <div class="category-icon"><i class="fa-solid ${category.icon}"></i></div>
        <h3>${category.title}</h3>
        <p>${category.text}</p>
        <a class="category-action" href="start-fundraiser.html">Start now</a>
      </article>
    `;
  }).join("");
}

setupMobileMenu();
renderDonateSections();
renderCategoryGrid();
renderFundraiseCategories();
setupRowButtons();
