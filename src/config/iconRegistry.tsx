import {
  BarChart3,
  ClipboardList,
  FileText,
  History,
  Inbox,
  LayoutDashboard,
  LogOut,
  Mail,
  MessageSquare,
  Plug,
  Settings,
  ShieldCheck,
  UserCog,
  Users,
  Workflow,
  ClockFading,
  CircleCheck,
  XCircle,
} from 'lucide-react';

export const iconRegistry = {
  layoutDashboard: LayoutDashboard,
  workflow: Workflow,
  fileText: FileText,
  mail: Mail,
  messageSquare: MessageSquare,
  inbox: Inbox,
  clipboardList: ClipboardList,
  users: Users,
  shieldCheck: ShieldCheck,
  history: History,
  plug: Plug,
  barChart3: BarChart3,
  userCog: UserCog,
  settings: Settings,
  logOut: LogOut,
  clockFading: ClockFading,
  checkCircle2: CircleCheck,
  xCircle: XCircle,
};

type AppIconProps = {
  name: keyof typeof iconRegistry;
  className?: string;
};

export const AppIcon = ({ name, className }: AppIconProps) => {
  const Icon = iconRegistry[name];

  if (!Icon) {
    return null;
  }

  return <Icon className={className} />;
};
