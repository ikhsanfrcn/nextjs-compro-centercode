import React from 'react';

interface TextAreaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  error?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  required,
  error,
}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <textarea
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur} 
      rows={4}
      className={`mt-1 block w-full p-2 border rounded-md focus:ring-2 ${
        error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
      }`}
      required={required}
    ></textarea>
    {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
  </div>
);

export default TextArea;
