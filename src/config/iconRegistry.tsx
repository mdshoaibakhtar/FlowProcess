import { createElement, type ComponentType } from 'react';
import {
  ClipboardList,
  Clock3,
  Inbox,
  LayoutDashboard,
  LineChart,
  LogOut,
  MoonStar,
  Settings,
  Sun,
  UserCog,
  Users,
  Workflow,
  XCircle,
  CheckCircle2,
} from 'lucide-react';
import type { IconKey } from '../types/app';

type AppIconProps = {
  name: IconKey;
  className?: string;
};

const iconRegistry: Record<IconKey, ComponentType<{ className?: string }>> = {
  layoutDashboard: LayoutDashboard,
  workflow: Workflow,
  inbox: Inbox,
  clipboardList: ClipboardList,
  settings: Settings,
  userCog: UserCog,
  logOut: LogOut,
  users: Users,
  checkCircle2: CheckCircle2,
  clock3: Clock3,
  xCircle: XCircle,
  lineChart: LineChart,
  moon: MoonStar,
  sun: Sun,
};

export const AppIcon = ({ name, className }: AppIconProps) => {
  return createElement(iconRegistry[name], { className });
};
