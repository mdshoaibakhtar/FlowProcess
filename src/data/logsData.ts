export const logsData = [
  {
    id: 'log-001',
    title: 'Slack Integration Connected',
    shortDescription: 'Slack integration was connected successfully.',
    description:
      'The Slack integration was successfully connected to the workspace. Users can now send and receive messages and receive activity notifications directly in Slack.',
    timestamp: '2026-09-28T10:32:15Z',
    type: 'integration',
    status: 'success',
  },
  {
    id: 'log-002',
    title: 'User Login',
    shortDescription: 'John Smith logged into the application.',
    description:
      'John Smith successfully authenticated and logged into the application. No authentication issues were detected during the login process.',
    timestamp: '2026-09-28T10:28:42Z',
    type: 'authentication',
    status: 'success',
  },
  {
    id: 'log-003',
    title: 'Failed Login Attempt',
    shortDescription: 'A login attempt failed due to an invalid password.',
    description:
      'A user attempted to log into the application using an incorrect password. The authentication request was rejected and no session was created.',
    timestamp: '2026-09-28T10:21:07Z',
    type: 'authentication',
    status: 'failed',
  },
  {
    id: 'log-004',
    title: 'Salesforce Sync Completed',
    shortDescription: 'Salesforce data synchronization completed successfully.',
    description:
      'The scheduled Salesforce synchronization completed successfully. A total of 245 records were processed and the latest data is now available in the application.',
    timestamp: '2026-09-28T10:15:31Z',
    type: 'integration',
    status: 'success',
  },
  {
    id: 'log-005',
    title: 'Salesforce Sync Failed',
    shortDescription: 'Salesforce data synchronization could not be completed.',
    description:
      'The Salesforce synchronization failed because the integration access token has expired. The integration needs to be reconnected before another synchronization can be completed.',
    timestamp: '2026-09-28T09:58:12Z',
    type: 'integration',
    status: 'failed',
  },
  {
    id: 'log-006',
    title: 'New User Created',
    shortDescription: 'Tony Stark was added as a new user.',
    description:
      'A new user account was created successfully. The user can now sign in and access the application based on the permissions assigned to their account.',
    timestamp: '2026-09-28T09:45:22Z',
    type: 'user',
    status: 'success',
  },
  {
    id: 'log-007',
    title: 'Google Drive Disconnected',
    shortDescription: 'Google Drive integration was disconnected.',
    description:
      'The Google Drive integration was disconnected from the account. Automated access to files and folders through this integration is no longer available.',
    timestamp: '2026-09-28T09:32:08Z',
    type: 'integration',
    status: 'success',
  },
  {
    id: 'log-008',
    title: 'API Rate Limit Warning',
    shortDescription: 'API usage is approaching the configured rate limit.',
    description:
      'The application has processed 920 requests within the current one-minute window against a configured limit of 1,000 requests. Consider monitoring API usage if the traffic continues to increase.',
    timestamp: '2026-09-28T09:20:45Z',
    type: 'system',
    status: 'warning',
  },
  {
    id: 'log-009',
    title: 'Document Uploaded',
    shortDescription: 'Financial report was uploaded successfully.',
    description:
      'The financial-report.pdf document was uploaded successfully and is now available for processing. The uploaded file is a PDF with a size of approximately 2.4 MB.',
    timestamp: '2026-09-28T09:05:19Z',
    type: 'document',
    status: 'success',
  },
  {
    id: 'log-010',
    title: 'Document Upload Failed',
    shortDescription: 'The document could not be uploaded.',
    description:
      'The customer-data.xlsx file could not be uploaded because its size exceeds the maximum file size allowed by the application. Please reduce the file size and try again.',
    timestamp: '2026-09-28T08:54:37Z',
    type: 'document',
    status: 'failed',
  },
  {
    id: 'log-011',
    title: 'User Role Updated',
    shortDescription: "Liam Anderson's role was changed from Member to Admin.",
    description:
      "An administrator updated Liam Anderson's account permissions. His previous Member role was replaced with the Admin role, providing access to additional administrative functionality.",
    timestamp: '2026-09-28T08:42:11Z',
    type: 'user',
    status: 'success',
  },
  {
    id: 'log-012',
    title: 'Password Changed',
    shortDescription: 'Sophia Taylor changed her account password.',
    description:
      'The account password was successfully changed after the user completed the required authentication and password validation process.',
    timestamp: '2026-09-28T08:30:55Z',
    type: 'security',
    status: 'success',
  },
  {
    id: 'log-013',
    title: 'Integration Token Expiring',
    shortDescription: 'The HubSpot integration token will expire soon.',
    description:
      'The access token associated with the HubSpot integration is scheduled to expire within the next three days. Reconnect the integration to prevent synchronization failures.',
    timestamp: '2026-09-28T08:18:29Z',
    type: 'integration',
    status: 'warning',
  },
  {
    id: 'log-014',
    title: 'API Key Created',
    shortDescription: 'A new production API key was generated.',
    description:
      'A new API key named Production API Key was generated successfully. The key is configured for the production environment and can be used for authorized API requests.',
    timestamp: '2026-09-28T08:02:14Z',
    type: 'security',
    status: 'success',
  },
  {
    id: 'log-015',
    title: 'Webhook Delivery Failed',
    shortDescription: 'A webhook could not be delivered after multiple attempts.',
    description:
      'The customer.updated webhook failed to reach the configured endpoint after three delivery attempts. The endpoint returned an HTTP 500 response, indicating a server-side error.',
    timestamp: '2026-09-28T07:48:03Z',
    type: 'webhook',
    status: 'failed',
  },
];
