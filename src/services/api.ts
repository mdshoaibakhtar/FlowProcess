import {
  mockPinnedChats,
  mockRecentChats,
  mockChatCounts,
  mockConversations,
  mockContactDetails,
} from '../data/mockData';
import type {
  ChatCounts,
  ChatFilter,
  ChatListItemData,
  ContactDetails,
  MessageGroup,
} from '../types';

// ── Simulated network layer ────────────────────────────────────────────────
// Every function here returns a Promise shaped exactly like a real API call
// would. Components/hooks never touch mockData directly — they only ever
// call these functions. So when the backend is ready, replace each function
// body with a `fetch(...)` call (examples commented below) and nothing
// upstream needs to change.

const SIMULATED_LATENCY_MS = 400;

const delay = <T>(value: T, ms = SIMULATED_LATENCY_MS): Promise<T> => {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
};

export interface ChatListResponse {
  pinned: ChatListItemData[];
  recent: ChatListItemData[];
  counts: ChatCounts;
}

export const fetchChatList = async (filter: ChatFilter = 'all'): Promise<ChatListResponse> => {
  // Real implementation:
  // const res = await fetch(`/api/chats?filter=${filter}`);
  // if (!res.ok) throw new Error('Failed to load chats');
  // return res.json();

  void filter; // filtering logic would live server-side; mock returns "all"
  return delay({
    pinned: mockPinnedChats,
    recent: mockRecentChats,
    counts: mockChatCounts,
  });
};

export const fetchConversation = async (chatId: string): Promise<MessageGroup[]> => {
  // Real implementation:
  // const res = await fetch(`/api/chats/${chatId}/messages`);
  // if (!res.ok) throw new Error('Failed to load conversation');
  // return res.json();

  return delay(mockConversations[chatId] ?? []);
};

export const fetchContactDetails = async (chatId: string): Promise<ContactDetails | null> => {
  // Real implementation:
  // const res = await fetch(`/api/chats/${chatId}/contact`);
  // if (!res.ok) throw new Error('Failed to load contact');
  // return res.json();

  return delay(mockContactDetails[chatId] ?? null);
};

export const sendMessage = async (chatId: string, text: string): Promise<void> => {
  // Real implementation:
  // await fetch(`/api/chats/${chatId}/messages`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ text }),
  // });

  void chatId;
  void text;
  return delay(undefined, 150);
};
