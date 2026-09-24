import React from 'react';
import { ChevronUp } from 'lucide-react';
import type { ContactDetails } from '../../../types';

interface ContactDetailsSectionProps {
  contact: ContactDetails;
}

interface FieldProps {
  label: string;
  children: React.ReactNode;
}

const Field = ({ label, children }: FieldProps) => {
  return (
    <div>
      <p className='text-xs text-slate-400'>{label}</p>
      <div className='text-sm text-slate-700'>{children}</div>
    </div>
  );
};

export const ContactDetailsSection = ({ contact }: ContactDetailsSectionProps) => {
  return (
    <div className='space-y-4 border-t border-slate-100 pt-4'>
      <div className='flex items-center justify-between'>
        <p className='text-sm font-medium text-slate-800'>Contact Details</p>
        <ChevronUp className='h-4 w-4 text-slate-400' />
      </div>

      <Field label='Work Email'>
        <a href={`mailto:${contact.workEmail}`} className='text-indigo-600 hover:underline'>
          {contact.workEmail}
        </a>
      </Field>

      <Field label='Phone'>
        <a href={`tel:${contact.phone}`} className='text-indigo-600 hover:underline'>
          {contact.phone}
        </a>
      </Field>

      <Field label='Location'>{contact.location}</Field>

      <Field label='Languages'>{contact.languages.join(', ')}</Field>

      <Field label='Local Time'>{contact.localTime}</Field>

      <Field label='First Interaction'>{contact.firstInteraction}</Field>
    </div>
  );
};
