import type { AppLanguage } from '../types/app';

export const translations: Record<AppLanguage, Record<string, string>> = {
  en: {
    app_name: 'Processflow',
    workspace_tagline: 'Operations Console',
    role_admin: 'Admin',

    nav_dashboard: 'Dashboard',
    nav_workflows: 'Workflows',
    nav_inbox: 'Inbox',
    nav_requests: 'Requests',
    nav_users: 'Users',

    action_profile_settings: 'Profile Settings',
    action_settings: 'Settings',
    action_logout: 'Logout',

    page_dashboard: 'Dashboard',
    page_workflows: 'Workflows',
    page_inbox: 'Inbox',
    page_requests: 'Requests',
    page_users: 'Users',
    page_settings: 'Settings',
    page_profile_settings: 'Profile Settings',
    page_kpi_details: 'KPI Details',

    toggle_theme: 'Toggle theme',
    switch_dark: 'Switch to dark mode',
    switch_light: 'Switch to light mode',

    chart_type: 'Chart Type',
    chart_line: 'Line',
    chart_bar: 'Bar',
    chart_doughnut: 'Doughnut',
    chart_pie: 'Pie',

    settings_title: 'Settings',
    settings_subtitle: 'Configure workspace appearance, chart defaults, and language preferences.',
    settings_appearance: 'Appearance',
    settings_charts: 'Charts',
    settings_localization: 'Localization',
    settings_mode_label: 'Mode',
    settings_theme_color_label: 'Theme Color',
    settings_font_label: 'Font Family',
    settings_language_label: 'Language',
    settings_default_trend_chart_label: 'Default Throughput Chart',
    settings_default_status_chart_label: 'Default Status Chart',
    settings_default_kpi_chart_label: 'Default KPI Detail Chart',
    settings_hint: 'Changes are saved automatically and applied instantly.',

    mode_light: 'Light',
    mode_dark: 'Dark',

    accent_blue: 'Blue',
    accent_emerald: 'Emerald',
    accent_amber: 'Amber',
    accent_rose: 'Rose',
    accent_violet: 'Violet',

    font_inter: 'Inter',
    font_modern: 'Modern Sans',
    font_classic: 'Classic Serif',
    font_mono: 'Mono',

    language_en: 'English',
    language_hi: 'Hindi',

    kpi_not_found_title: 'KPI not found',
    kpi_not_found_description: 'The selected KPI does not exist in the current dashboard config.',
    back_to_dashboard: 'Back to Dashboard',
    kpi_current_value: 'Current Value',
    kpi_recent_change: 'Recent Change',
    kpi_history_description: 'Historical view for this KPI from your JSON-based dashboard config.',

    requests_description:
      'Incoming and in-progress approval requests can be tracked from this queue.',
    inbox_description: 'Workflow notifications and pending updates will surface in this inbox.',
    users_description:
      'Admin user management will be added here. Keep it config-driven as roles expand.',
    profile_settings_description:
      'User profile preferences, password controls, and notification settings will appear here.',
    workflows_title: 'Workflow Builder',
    workflows_description: 'Design and connect approval nodes to automate your process pipeline.',

    logout_alert: 'Logout action triggered. Connect this to your auth service.',
  },
  hi: {
    app_name: 'प्रोसेसफ्लो',
    workspace_tagline: 'ऑपरेशन्स कंसोल',
    role_admin: 'एडमिन',

    nav_dashboard: 'डैशबोर्ड',
    nav_workflows: 'वर्कफ़्लोज़',
    nav_inbox: 'इनबॉक्स',
    nav_requests: 'रिक्वेस्ट्स',
    nav_users: 'यूज़र्स',

    action_profile_settings: 'प्रोफ़ाइल सेटिंग्स',
    action_settings: 'सेटिंग्स',
    action_logout: 'लॉगआउट',

    page_dashboard: 'डैशबोर्ड',
    page_workflows: 'वर्कफ़्लोज़',
    page_inbox: 'इनबॉक्स',
    page_requests: 'रिक्वेस्ट्स',
    page_users: 'यूज़र्स',
    page_settings: 'सेटिंग्स',
    page_profile_settings: 'प्रोफ़ाइल सेटिंग्स',
    page_kpi_details: 'KPI विवरण',

    toggle_theme: 'थीम बदलें',
    switch_dark: 'डार्क मोड पर जाएं',
    switch_light: 'लाइट मोड पर जाएं',

    chart_type: 'चार्ट प्रकार',
    chart_line: 'लाइन',
    chart_bar: 'बार',
    chart_doughnut: 'डोनट',
    chart_pie: 'पाई',

    settings_title: 'सेटिंग्स',
    settings_subtitle: 'वर्कस्पेस की थीम, चार्ट डिफ़ॉल्ट और भाषा प्राथमिकताएँ कॉन्फ़िगर करें।',
    settings_appearance: 'दिखावट',
    settings_charts: 'चार्ट्स',
    settings_localization: 'लोकलाइज़ेशन',
    settings_mode_label: 'मोड',
    settings_theme_color_label: 'थीम रंग',
    settings_font_label: 'फ़ॉन्ट परिवार',
    settings_language_label: 'भाषा',
    settings_default_trend_chart_label: 'डिफ़ॉल्ट थ्रूपुट चार्ट',
    settings_default_status_chart_label: 'डिफ़ॉल्ट स्टेटस चार्ट',
    settings_default_kpi_chart_label: 'डिफ़ॉल्ट KPI डिटेल चार्ट',
    settings_hint: 'परिवर्तन अपने-आप सेव होते हैं और तुरंत लागू होते हैं।',

    mode_light: 'लाइट',
    mode_dark: 'डार्क',

    accent_blue: 'नीला',
    accent_emerald: 'एमराल्ड',
    accent_amber: 'एम्बर',
    accent_rose: 'रोज़',
    accent_violet: 'बैंगनी',

    font_inter: 'इंटर',
    font_modern: 'मॉडर्न सैंस',
    font_classic: 'क्लासिक सेरिफ',
    font_mono: 'मोनो',

    language_en: 'अंग्रेज़ी',
    language_hi: 'हिंदी',

    kpi_not_found_title: 'KPI नहीं मिला',
    kpi_not_found_description: 'चयनित KPI वर्तमान डैशबोर्ड कॉन्फ़िग में मौजूद नहीं है।',
    back_to_dashboard: 'डैशबोर्ड पर वापस जाएँ',
    kpi_current_value: 'वर्तमान मान',
    kpi_recent_change: 'हाल का बदलाव',
    kpi_history_description: 'इस KPI का ऐतिहासिक दृश्य आपके JSON-आधारित डैशबोर्ड कॉन्फ़िग से।',

    requests_description: 'आने वाली और प्रोग्रेस में रिक्वेस्ट्स इस क्यू में ट्रैक की जा सकती हैं।',
    inbox_description: 'वर्कफ़्लो नोटिफ़िकेशन और लंबित अपडेट्स इस इनबॉक्स में दिखेंगे।',
    users_description: 'एडमिन यूज़र मैनेजमेंट यहाँ जोड़ा जाएगा। इसे role-config आधारित रखें।',
    profile_settings_description:
      'यूज़र प्रोफ़ाइल प्राथमिकताएँ, पासवर्ड नियंत्रण और नोटिफ़िकेशन सेटिंग्स यहाँ दिखेंगी।',
    workflows_title: 'वर्कफ़्लो बिल्डर',
    workflows_description:
      'प्रोसेस पाइपलाइन ऑटोमेट करने के लिए approval nodes डिज़ाइन और कनेक्ट करें।',

    logout_alert: 'लॉगआउट ट्रिगर हुआ। इसे अपने auth service से कनेक्ट करें।',
  },
};

export const translate = (language: AppLanguage, key: string): string => {
  return translations[language][key] ?? translations.en[key] ?? key;
};
