// ── Domain types ────────────────────────────────────────────────────────────
// These mirror the shape you'd expect back from a REST/GraphQL API. Keeping
// dummy data typed against these interfaces means swapping `services/api.ts`
// for real network calls later requires zero changes to components or hooks.

export interface Avatar {
  /** Remote image URL. Omit to fall back to initials. */
  url?: string;
  /** Single-letter fallback shown when `url` is missing/fails to load. */
  initial: string;
  /** Tailwind bg class used behind the initial, e.g. "bg-indigo-500". */
  colorClass?: string;
}

export interface ChatListItemData {
  id: string;
  name: string;
  avatar: Avatar;
  lastMessage: string;
  time: string;
  unreadCount?: number;
  isPinned?: boolean;
}

export type ChatFilter = 'all' | 'unread' | 'draft' | 'archived';

export interface ChatCounts {
  all: number;
  unread: number;
  draft: number;
  archived: number;
}

export interface Message {
  id: string;
  senderName: string;
  avatar: Avatar;
  text: string;
  time: string;
  /** true = right-aligned "me" bubble, false = left-aligned contact bubble */
  isOwnMessage: boolean;
}

export interface MessageGroup {
  /** Section divider label, e.g. "14 April" */
  date: string;
  messages: Message[];
}

export interface ContactDetails {
  id: string;
  name: string;
  title: string;
  company: string;
  avatar: Avatar;
  workEmail: string;
  phone: string;
  location: string;
  languages: string[];
  localTime: string;
  firstInteraction: string;
}

// One entry on the integrations page. Comes straight off the API later —
// GET /api/integrations should return Integration[] matching this shape.
export interface Integration {
  id: string;
  name: string;
  /** Absolute URL to a logo image (svg/png). */
  logoUrl: string;
  description: string;
  /** Short helper text under the description, e.g. "Requires admin access". */
  note?: string;
  /** Connection state, if the page needs to show it (optional). */
  status?: string;
}

export interface Logs {
  id: string;
  timestamp: string;
  level: 'info' | 'warning' | 'error';
  action: string;
  message: string;
  user: {
    id: string;
    name: string;
    email?: string;
  };
  status: 'success' | 'failed' | 'warning';
  integration?: {
    id: string;
    name: string;
  };
  performedBy?: {
    id: string;
    name: string;
    email: string;
  };
  recordsProcessed?: number;
  duration?: string;
  error?: {
    code: string;
    message: string;
  };
  metadata?: Record<string, string | number>;
}
