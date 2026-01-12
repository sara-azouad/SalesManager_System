// i18n.js - Internationalization System for MyManager Backoffice
const translations = {
  en: {
    // Global
    dashboard: "Dashboard",
    users: "Users",
    products: "Products",
    statistics: "Statistics",
    clients: "Clients",
    orders: "Orders",
    invoices: "Invoices",
    logout: "Logout",
    refreshData: "Refresh Data",
    latestPosts: "Latest Posts",

    // Page Titles
    dashboardTitle: "Dashboard",
    usersTitle: "Users Management",
    productsTitle: "Products Management",
    statsTitle: "Statistics Dashboard",
    clientsTitle: "Clients Management",
    ordersTitle: "Orders Management",
    invoicesTitle: "Invoices Management",

    // Table headers
    id: "ID",
    name: "Name",
    email: "Email",
    company: "Company",
    price: "Price",
    category: "Category",
    quantity: "Quantity",
    status: "Status",
    date: "Date",
    actions: "Actions",

    // Form labels & placeholders
    productName: "Product Name",
    productNamePlaceholder: "Enter product name",
    pricePlaceholder: "Enter price",
    categoryPlaceholder: "Enter category",
    username: "Username",
    password: "Password",
    firstName: "First Name",
    lastName: "Last Name",
    phone: "Phone",
    address: "Address",
    city: "City",
    country: "Country",
    description: "Description",

    // Buttons
    add: "Add",
    edit: "Edit",
    delete: "Delete",
    save: "Save",
    saveProduct: "Save Product",
    cancel: "Cancel",
    search: "Search",
    filter: "Filter",
    export: "Export",
    viewDetails: "View Details",
    seeMore: "See More",

    // Messages
    loading: "Loading...",
    noData: "No data available",
    confirmDelete: "Are you sure you want to delete this item?",
    fillAllFields: "Please fill all fields",
    itemDeleted: "Item deleted successfully",
    itemAdded: "Item added successfully",
    itemUpdated: "Item updated successfully",
    error: "An error occurred",
    errorLoading: "Error loading data",
    success: "Success",

    // Statistics
    totalUsers: "Total Users",
    totalProducts: "Total Products",
    totalOrders: "Total Orders",
    totalRevenue: "Total Revenue",
    pendingOrders: "Pending Orders",
    activeUsers: "Active Users",
    salesThisMonth: "Sales This Month",
    growth: "Growth",
  },

  fr: {
    // Global
    dashboard: "Tableau de bord",
    users: "Utilisateurs",
    products: "Produits",
    statistics: "Statistiques",
    clients: "Clients",
    orders: "Commandes",
    invoices: "Factures",
    logout: "Déconnexion",
    refreshData: "Actualiser",
    latestPosts: "Dernières publications",

    // Page Titles
    dashboardTitle: "Tableau de bord",
    usersTitle: "Gestion des utilisateurs",
    productsTitle: "Gestion des produits",
    statsTitle: "Tableau de statistiques",
    clientsTitle: "Gestion des clients",
    ordersTitle: "Gestion des commandes",
    invoicesTitle: "Gestion des factures",

    // Table headers
    id: "ID",
    name: "Nom",
    email: "Email",
    company: "Entreprise",
    price: "Prix",
    category: "Catégorie",
    quantity: "Quantité",
    status: "Statut",
    date: "Date",
    actions: "Actions",

    // Form labels & placeholders
    productName: "Nom du produit",
    productNamePlaceholder: "Entrez le nom du produit",
    pricePlaceholder: "Entrez le prix",
    categoryPlaceholder: "Entrez la catégorie",
    username: "Nom d'utilisateur",
    password: "Mot de passe",
    firstName: "Prénom",
    lastName: "Nom",
    phone: "Téléphone",
    address: "Adresse",
    city: "Ville",
    country: "Pays",
    description: "Description",

    // Buttons
    add: "Ajouter",
    edit: "Modifier",
    delete: "Supprimer",
    save: "Enregistrer",
    saveProduct: "Enregistrer le produit",
    cancel: "Annuler",
    search: "Rechercher",
    filter: "Filtrer",
    export: "Exporter",
    viewDetails: "Voir détails",
    seeMore: "Voir plus",

    // Messages
    loading: "Chargement...",
    noData: "Aucune donnée disponible",
    confirmDelete: "Êtes-vous sûr de vouloir supprimer cet élément ?",
    fillAllFields: "Veuillez remplir tous les champs",
    itemDeleted: "Élément supprimé avec succès",
    itemAdded: "Élément ajouté avec succès",
    itemUpdated: "Élément mis à jour avec succès",
    error: "Une erreur est survenue",
    errorLoading: "Erreur de chargement des données",
    success: "Succès",

    // Statistics
    totalUsers: "Utilisateurs totaux",
    totalProducts: "Produits totaux",
    totalOrders: "Commandes totales",
    totalRevenue: "Revenu total",
    pendingOrders: "Commandes en attente",
    activeUsers: "Utilisateurs actifs",
    salesThisMonth: "Ventes ce mois-ci",
    growth: "Croissance",
  },

  ar: {
    // Global
    dashboard: "لوحة التحكم",
    users: "المستخدمين",
    products: "المنتجات",
    statistics: "الإحصائيات",
    clients: "العملاء",
    orders: "الطلبات",
    invoices: "الفواتير",
    logout: "تسجيل الخروج",
    refreshData: "تحديث البيانات",
    latestPosts: "أحدث المنشورات",

    // Page Titles
    dashboardTitle: "لوحة التحكم",
    usersTitle: "إدارة المستخدمين",
    productsTitle: "إدارة المنتجات",
    statsTitle: "لوحة الإحصائيات",
    clientsTitle: "إدارة العملاء",
    ordersTitle: "إدارة الطلبات",
    invoicesTitle: "إدارة الفواتير",

    // Table headers
    id: "المعرف",
    name: "الاسم",
    email: "البريد الإلكتروني",
    company: "الشركة",
    price: "السعر",
    category: "الفئة",
    quantity: "الكمية",
    status: "الحالة",
    date: "التاريخ",
    actions: "الإجراءات",

    // Form labels & placeholders
    productName: "اسم المنتج",
    productNamePlaceholder: "أدخل اسم المنتج",
    pricePlaceholder: "أدخل السعر",
    categoryPlaceholder: "أدخل الفئة",
    username: "اسم المستخدم",
    password: "كلمة المرور",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    phone: "الهاتف",
    address: "العنوان",
    city: "المدينة",
    country: "البلد",
    description: "الوصف",

    // Buttons
    add: "إضافة",
    edit: "تعديل",
    delete: "حذف",
    save: "حفظ",
    saveProduct: "حفظ المنتج",
    cancel: "إلغاء",
    search: "بحث",
    filter: "تصفية",
    export: "تصدير",
    viewDetails: "عرض التفاصيل",
    seeMore: "المزيد",

    // Messages
    loading: "جاري التحميل...",
    noData: "لا توجد بيانات متاحة",
    confirmDelete: "هل أنت متأكد من حذف هذا العنصر؟",
    fillAllFields: "يرجى ملء جميع الحقول",
    itemDeleted: "تم حذف العنصر بنجاح",
    itemAdded: "تم إضافة العنصر بنجاح",
    itemUpdated: "تم تحديث العنصر بنجاح",
    error: "حدث خطأ",
    errorLoading: "خطأ في تحميل البيانات",
    success: "نجاح",

    // Statistics
    totalUsers: "إجمالي المستخدمين",
    totalProducts: "إجمالي المنتجات",
    totalOrders: "إجمالي الطلبات",
    totalRevenue: "إجمالي الإيرادات",
    pendingOrders: "الطلبات المعلقة",
    activeUsers: "المستخدمين النشطين",
    salesThisMonth: "المبيعات هذا الشهر",
    growth: "النمو",
  },
};

// Current language
let currentLang = localStorage.getItem("language") || "en";

// Apply translations to all elements
function applyTranslations() {
  console.log("Applying translations for language:", currentLang);

  // Text content
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[currentLang] && translations[currentLang][key]) {
      element.textContent = translations[currentLang][key];
    } else {
      console.warn(
        "Translation missing for key:",
        key,
        "in language:",
        currentLang
      );
    }
  });

  // Placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (translations[currentLang] && translations[currentLang][key]) {
      element.placeholder = translations[currentLang][key];
    }
  });

  // Titles
  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    const key = element.getAttribute("data-i18n-title");
    if (translations[currentLang] && translations[currentLang][key]) {
      element.title = translations[currentLang][key];
    }
  });

  // Update HTML lang attribute
  document.documentElement.lang = currentLang;

  // Update page title
  const pageTitle = document.querySelector("title");
  if (pageTitle) {
    const pageKey = document.body.getAttribute("data-page") || "dashboard";
    const titleKey = pageKey + "Title";
    if (translations[currentLang] && translations[currentLang][titleKey]) {
      pageTitle.textContent = `MyManager | ${translations[currentLang][titleKey]}`;
    }
  }

  // RTL support for Arabic
  if (currentLang === "ar") {
    document.body.style.direction = "rtl";
    document.body.style.textAlign = "right";
    document.querySelectorAll("table, form, .controls-right").forEach((el) => {
      el.style.direction = "rtl";
      el.style.textAlign = "right";
    });
  } else {
    document.body.style.direction = "ltr";
    document.body.style.textAlign = "left";
    document.querySelectorAll("table, form, .controls-right").forEach((el) => {
      el.style.direction = "ltr";
      el.style.textAlign = "left";
    });
  }

  console.log("Translations applied successfully");
}

// Change language
function setLanguage(lang) {
  if (translations[lang]) {
    console.log("Changing language to:", lang);
    currentLang = lang;
    localStorage.setItem("language", lang);

    // Update language selector
    const langSelect = document.getElementById("languageSwitcher");
    if (langSelect) {
      langSelect.value = lang;
    }

    // Apply translations
    applyTranslations();

    // Show notification
    showLanguageNotification(lang);
  } else {
    console.error("Language not supported:", lang);
  }
}

// Show language change notification
function showLanguageNotification(lang) {
  const langNames = {
    en: "English",
    fr: "Français",
    ar: "العربية",
  };

  // Remove existing notification
  const existing = document.querySelector(".lang-notification");
  if (existing) existing.remove();

  // Create new notification
  const notification = document.createElement("div");
  notification.className = "lang-notification";
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 10000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        animation: slideIn 0.3s ease;
        font-weight: bold;
    `;

  notification.textContent = `🌐 ${
    translations[currentLang]["languageChanged"] || "Language changed to"
  } ${langNames[lang]}`;
  document.body.appendChild(notification);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Add CSS animations for notifications
if (!document.querySelector("#i18n-styles")) {
  const style = document.createElement("style");
  style.id = "i18n-styles";
  style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        
        /* RTL adjustments */
        [dir="rtl"] .sidebar a {
            text-align: right;
        }
        [dir="rtl"] table th,
        [dir="rtl"] table td {
            text-align: right;
        }
        [dir="rtl"] .controls-right {
            flex-direction: row-reverse;
        }
    `;
  document.head.appendChild(style);
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("i18n.js loaded, current language:", currentLang);

  // Apply translations immediately
  applyTranslations();

  // Set up language selector
  const langSelect = document.getElementById("languageSwitcher");
  if (langSelect) {
    langSelect.value = currentLang;
    langSelect.addEventListener("change", function (e) {
      setLanguage(e.target.value);
    });
    console.log("Language selector initialized");
  } else {
    console.warn("Language selector (#languageSwitcher) not found");
  }

  // Set page identifier
  const path = window.location.pathname;
  const page = path.split("/").pop().replace(".html", "") || "index";
  document.body.setAttribute("data-page", page);
});

// Export for global use
window.i18n = {
  translations,
  currentLang,
  setLanguage,
  applyTranslations,
  t: function (key) {
    return translations[currentLang] && translations[currentLang][key]
      ? translations[currentLang][key]
      : `[${key}]`;
  },
};

console.log("i18n module loaded");
