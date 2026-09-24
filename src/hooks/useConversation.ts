import { useEffect, useState } from 'react';
import { fetchConversation } from '../services/api';
import type { MessageGroup } from '../types';

interface UseConversationResult {
  messageGroups: MessageGroup[];
  isLoading: boolean;
  error: string | null;
}

export const useConversation = (chatId: string | null): UseConversationResult => {
  const [messageGroups, setMessageGroups] = useState<MessageGroup[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!chatId) {
      setMessageGroups([]);
      return;
    }
    let cancelled = false;
    setIsLoading(true);
    setError(null);

    fetchConversation(chatId)
      .then((groups) => {
        if (!cancelled) setMessageGroups(groups);
      })
      .catch((err: Error) => {
        if (!cancelled) setError(err.message ?? 'Failed to load messages');
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [chatId]);

  return { messageGroups, isLoading, error };
};
