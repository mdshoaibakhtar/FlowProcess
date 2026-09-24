// NOTE: This file is the ONLY place with hardcoded data. When the backend is
// ready, delete this file and point `services/api.ts` at real endpoints —
// nothing else in the app needs to change.

import type { ChatCounts, ChatListItemData, ContactDetails, MessageGroup } from '../types';

export const mockChatCounts: ChatCounts = {
  all: 30,
  unread: 10,
  draft: 4,
  archived: 5,
};

export const mockPinnedChats: ChatListItemData[] = [
  {
    id: 'chat-dianne',
    name: 'Dianne Russell',
    avatar: { initial: 'D', colorClass: 'bg-rose-400' },
    lastMessage: 'Yes, I can. Thanks you for th...',
    time: '10:00',
    unreadCount: 2,
    isPinned: true,
  },
  {
    id: 'chat-mike',
    name: 'Mike Banner',
    avatar: { initial: 'M', colorClass: 'bg-blue-500' },
    lastMessage: 'Idea from competitor analysis...',
    time: '10:23',
    isPinned: true,
  },
  {
    id: 'chat-tony',
    name: 'Tony Stark',
    avatar: { initial: 'T', colorClass: 'bg-amber-500' },
    lastMessage: "Hey there! I'm new here and rea...",
    time: '11:47',
    isPinned: true,
  },
];

export const mockRecentChats: ChatListItemData[] = [
  {
    id: 'chat-jordan',
    name: 'Jordan Smith',
    avatar: { initial: 'J', colorClass: 'bg-emerald-500' },
    lastMessage: 'This is a friendly reminder that...',
    time: '12:33',
    unreadCount: 2,
  },
  {
    id: 'chat-waker',
    name: 'Waker Den',
    avatar: { initial: 'W', colorClass: 'bg-slate-500' },
    lastMessage: "Hi! I'm currently working on pro...",
    time: '02:30',
  },
  {
    id: 'chat-henry',
    name: 'Henry Cavil',
    avatar: { initial: 'H', colorClass: 'bg-purple-500' },
    lastMessage: 'Yes, I saw your message. I w...',
    time: '03:00',
  },
  {
    id: 'chat-john-harry',
    name: 'John Harry',
    avatar: { initial: 'J', colorClass: 'bg-cyan-600' },
    lastMessage: 'Hello! Thank you for the produc...',
    time: '03:25',
    unreadCount: 2,
  },
  {
    id: 'chat-lio',
    name: 'Lio Ven',
    avatar: { initial: 'L', colorClass: 'bg-pink-500' },
    lastMessage: 'Please check the document an...',
    time: '04:47',
    unreadCount: 2,
  },
  {
    id: 'chat-wick',
    name: 'John Wick',
    avatar: { initial: 'J', colorClass: 'bg-neutral-700' },
    lastMessage: 'Hey there! This Video is record...',
    time: '06:10',
  },
  {
    id: 'chat-franzen',
    name: 'Franzen Den',
    avatar: { initial: 'F', colorClass: 'bg-orange-500' },
    lastMessage: 'Yes, I can. Thanks you for th...',
    time: '06:22',
  },
];

// Keyed by chat id so `getConversation(chatId)` can look it up.
export const mockConversations: Record<string, MessageGroup[]> = {
  'chat-mike': [
    {
      date: '14 April',
      messages: [
        {
          id: 'm1',
          senderName: 'Mike Banner',
          avatar: { initial: 'M', colorClass: 'bg-blue-500' },
          time: '10:23 pm',
          isOwnMessage: false,
          text: "Hey Harry! I'm new here and really curious about the concept of sustainable design. Can anyone explain how it works?",
        },
        {
          id: 'm2',
          senderName: 'Harry Potter',
          avatar: { initial: 'H', colorClass: 'bg-amber-600' },
          time: '10:25 pm',
          isOwnMessage: true,
          text: 'Hey Mike, welcome! Sustainable design focuses on creating products and spaces that minimize environmental impact. It involves using eco-friendly materials and energy-efficient methods.',
        },
      ],
    },
    {
      date: '14 April',
      messages: [
        {
          id: 'm3',
          senderName: 'Mike Banner',
          avatar: { initial: 'M', colorClass: 'bg-blue-500' },
          time: '05:00 pm',
          isOwnMessage: false,
          text: 'That sounds interesting! So, does that mean I can create designs that are both beautiful and environmentally responsible? I found a project idea, what do you think?',
        },
        {
          id: 'm4',
          senderName: 'Harry Potter',
          avatar: { initial: 'H', colorClass: 'bg-amber-600' },
          time: '05:00 pm',
          isOwnMessage: true,
          text: 'Exactly! By applying sustainable design principles, you can develop creative solutions that are both functional and eco-conscious. It offers more innovation and responsibility in design.',
        },
      ],
    },
  ],
};

export const mockContactDetails: Record<string, ContactDetails> = {
  'chat-mike': {
    id: 'chat-mike',
    name: 'Mike Banner',
    title: 'Senior Product Manager',
    company: 'Closr CRM',
    avatar: { initial: 'M', colorClass: 'bg-blue-500' },
    workEmail: 'mikebanner@revoult.com',
    phone: '+0794 9292403',
    location: 'London, United Kingdom',
    languages: ['English', 'French'],
    localTime: 'Mar 04, 2026 10:20 PM',
    firstInteraction: 'Feb 24, 2026',
  },
};
