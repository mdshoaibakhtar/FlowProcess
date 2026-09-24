import { useEffect, useState, useCallback } from 'react';
import { fetchChatList } from '../services/api';
import type { ChatCounts, ChatListItemData } from '../types';

interface UseChatListResult {
  pinned: ChatListItemData[];
  recent: ChatListItemData[];
  counts: ChatCounts | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
  filter?: string;
}

const useChatList = ({ filter }: UseChatListResult) => {
  const [pinned, setPinned] = useState<ChatListItemData[]>([]);
  const [recent, setRecent] = useState<ChatListItemData[]>([]);
  const [counts, setCounts] = useState<ChatCounts | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshIndex, setRefreshIndex] = useState(0);

  useEffect(() => {
    let cancelled = false;
    // setIsLoading(true);
    // setError(null);

    fetchChatList()
      .then((res) => {
        if (cancelled) return;
        setPinned(res.pinned);
        setRecent(res.recent);
        setCounts(res.counts);
      })
      .catch((err: Error) => {
        if (!cancelled) setError(err.message ?? 'Failed to load chats');
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [filter, refreshIndex]);

  const refetch = useCallback(() => setRefreshIndex((i) => i + 1), []);

  return { pinned, recent, counts, isLoading, error, refetch };
};

export default useChatList;
