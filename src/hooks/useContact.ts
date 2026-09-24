import { useEffect, useState } from 'react';
import { fetchContactDetails } from '../services/api';
import type { ContactDetails } from '../types';

interface UseContactResult {
  contact: ContactDetails | null;
  isLoading: boolean;
  error: string | null;
}

export const useContact = (chatId: string | null): UseContactResult => {
  const [contact, setContact] = useState<ContactDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!chatId) {
      setContact(null);
      return;
    }
    let cancelled = false;
    setIsLoading(true);
    setError(null);

    fetchContactDetails(chatId)
      .then((data) => {
        if (!cancelled) setContact(data);
      })
      .catch((err: Error) => {
        if (!cancelled) setError(err.message ?? 'Failed to load contact');
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [chatId]);

  return { contact, isLoading, error };
};
