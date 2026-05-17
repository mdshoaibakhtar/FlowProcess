export type ThemeMode = 'light' | 'dark';

export type AppRole = 'admin';
export type AppLanguage = 'en' | 'hi';
export type AccentColor = 'blue' | 'emerald' | 'amber' | 'rose' | 'violet';
export type FontFamilyOption = 'inter' | 'modern' | 'classic' | 'mono';
export type TrendChartType = 'line' | 'bar';
export type StatusChartType = 'doughnut' | 'pie';

export type IconKey =
  | 'layoutDashboard'
  | 'workflow'
  | 'inbox'
  | 'clipboardList'
  | 'settings'
  | 'userCog'
  | 'logOut'
  | 'users'
  | 'checkCircle2'
  | 'clock3'
  | 'xCircle'
  | 'lineChart'
  | 'moon'
  | 'sun';

export type NavigationItem = {
  id: string;
  label: string;
  path: string;
  icon: IconKey;
  roles: AppRole[];
};

export type FooterAction = {
  id: string;
  label: string;
  icon: IconKey;
  path?: string;
  variant: 'default' | 'danger';
  roles: AppRole[];
};

export type UserProfile = {
  name: string;
  email: string;
  title: string;
};

export type RoleShellConfig = {
  role: AppRole;
  workspaceName: string;
  workspaceTagline: string;
  user: UserProfile;
  navigation: NavigationItem[];
  footerActions: FooterAction[];
};

export type KpiTone = 'blue' | 'emerald' | 'amber' | 'rose';

export type KpiMetric = {
  id: string;
  label: string;
  value: string;
  change: string;
  changeDirection: 'up' | 'down';
  icon: IconKey;
  tone: KpiTone;
  description: string;
  history: {
    title: string;
    labels: string[];
    values: number[];
    borderColor: string;
    backgroundColor: string;
  };
};

export type ChartSeries = {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
};

export type BarSeries = {
  label: string;
  data: number[];
  backgroundColor: string;
};

export type DashboardConfig = {
  title: string;
  subtitle: string;
  kpis: KpiMetric[];
  trendChart: {
    title: string;
    description: string;
    labels: string[];
    series: ChartSeries[];
  };
  workloadChart: {
    title: string;
    description: string;
    labels: string[];
    series: BarSeries[];
  };
  statusChart: {
    title: string;
    description: string;
    labels: string[];
    data: number[];
    colors: string[];
  };
};

export type AppPreferences = {
  mode: ThemeMode;
  accentColor: AccentColor;
  fontFamily: FontFamilyOption;
  defaultTrendChartType: TrendChartType;
  defaultStatusChartType: StatusChartType;
  defaultKpiChartType: TrendChartType;
  language: AppLanguage;
};
