const resumeUpdateDate = "20.04.2025";

const translations = {
  ru: {
    section_skills: "Навыки",
    section_projects: "Проекты",
    section_contacts: "Контакты",
    cv_title: "Резюме",
    cv_text: "Здесь можно скачать резюме",
    cv_download: "Скачать резюме (RU)",
    footer_text: "© 2025 Life4five. Сделано с ❤",
    nav_about: "О себе",
    nav_skills: "Навыки",
    nav_projects: "Проекты",
    nav_contacts: "Контакты",
    about_text: "Я студент по Data Science, изучаю Python и хочу развиваться в AI.",
    lorem: "Пока модель не уверена, что эта секция имеет значение. Она предсказывает контент с вероятностью 56.2% - этого недостаточно для продакшна. Зато я уже сделал красивую рамку.",
    cv_update: "Обновлено: " + resumeUpdateDate
  },
  en: {
    section_skills: "Skills",
    section_projects: "Projects",
    section_contacts: "Contacts",
    cv_title: "CV",
    cv_text: "You can download the resume here",
    cv_download: "Download resume (EN)",
    footer_text: "© 2025 Life4five. Made with ❤",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contacts: "Contacts",
    about_text: "I'm a Data Science student learning Python and aiming to grow in AI.",
    lorem: "The model isn’t confident this section matters - only a 56.2% prediction score. That’s below production threshold. But hey, the border looks nice already.",
    cv_update: "Updated: " + resumeUpdateDate
  }
};

  
function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key] || key;
  });

  // 👇 Меняем ссылку на резюме
  const cvLink = document.getElementById("cv_link");
  if (cvLink) {
    cvLink.href = lang === "ru" ? "./res/cv_ru.pdf" : "./res/cv_en.pdf";
  }

  // 👇 Также не забудь переключать активный класс у кнопок
  document.querySelectorAll(".lang-toggle").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}


// Навигация: переключение активного пункта
const navItems = document.querySelectorAll("#sidebar ul li");

navItems.forEach(item => {
item.addEventListener("click", () => {
  // Удаляем active у всех
  navItems.forEach(el => el.classList.remove("active"));
  // Добавляем active только к текущему
  item.classList.add("active");
});
});
