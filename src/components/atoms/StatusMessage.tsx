import React from 'react';

interface StatusMessageProps {
  status: 'idle' | 'sending' | 'sent' | 'error';
}

const StatusMessage: React.FC<StatusMessageProps> = ({ status }) => {
  if (status === 'sending') {
    return <div className="mt-4 text-blue-500">Sending your message...</div>;
  }

  if (status === 'idle') {
    return null;
  }

  return (
    <div className={`mt-4 ${status === 'sent' ? 'text-green-500' : 'text-red-500'}`}>
      {status === 'sent' ? 'Your message has been sent successfully!' : 'There was an error sending your message. Please try again.'}
    </div>
  );
};

export default StatusMessage;
