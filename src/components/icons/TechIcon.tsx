import React from 'react';

export const TechIcon: React.FC<{ name: string; className?: string; size?: number }> = ({
  name,
  className = "w-4 h-4",
  size = 16,
}) => {
  const norm = name.toLowerCase().replace(/[\s\-_.]/g, '');

  // AWS Generic
  if (norm.includes('aws') && !norm.includes('rds') && !norm.includes('s3') && !norm.includes('ec2')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M6.5 15.5C3.5 13.5 3 10.5 3 8.5C3 5.5 5.5 3 9 3C11.5 3 13.5 4.5 14.5 6.5C15.5 5 17.5 4 20 4C23.5 4 25.5 7 25.5 10C25.5 14 22 17 18.5 17.5" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" transform="scale(0.8) translate(1, 2)"/>
        <path d="M4 17C9 20 15 20 20 17" stroke="#FF9900" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18.5 16L20.5 17L18.5 18.5" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  // Kubernetes
  if (norm.includes('k8s') || norm.includes('kubernetes')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path fill="#326CE5" d="M12 2.5L20.5 7.4V17.2L12 22.1L3.5 17.2V7.4L12 2.5Z"/>
        <path fill="#FFFFFF" d="M12 5.2L18.2 8.7V15.7L12 19.2L5.8 15.7V8.7L12 5.2Z" opacity="0.3"/>
        <circle cx="12" cy="12.2" r="2.8" fill="#FFFFFF"/>
        <path stroke="#FFFFFF" strokeWidth="1.5" d="M12 7.5V9.4M12 15V16.9M8 10L9.6 11M14.4 13.4L16 14.4M16 10L14.4 11M9.6 13.4L8 14.4"/>
      </svg>
    );
  }

  // Docker
  if (norm.includes('docker')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path fill="#2496ED" d="M13.9 10.3h1.8v1.8h-1.8zm-2.4 0h1.8v1.8h-1.8zm-2.4 0h1.8v1.8H9.1zm-2.4 0h1.8v1.8H6.7zm4.8-2.4h1.8v1.8h-1.8zm-2.4 0h1.8v1.8H9.1zm-2.4 0h1.8v1.8H6.7zm7.2 0h1.8v1.8h-1.8zm-4.8-2.4h1.8v1.8H9.1z"/>
        <path fill="#2496ED" d="M22.5 12.8c-.5-.4-1.5-.5-2.2-.2-.2-.8-.7-1.5-1.5-1.9l-.6-.3-.3.6c-.4.8-.4 1.7-.1 2.5-.5.3-1.4.3-2.1.2H1.2c-.4 1.6-.2 4.4 1.8 6.4 2.2 2.2 6.1 2.4 10.1 2.4 5.3 0 9.7-2.3 10.8-6.9.7-.3 1.1-.9 1.1-1.6 0-.5-.5-.9-2.5-1.1z"/>
      </svg>
    );
  }

  // Jenkins
  if (norm.includes('jenkins')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#D24939" opacity="0.15"/>
        <path d="M12 4C9 4 7 6 7 9C7 11.5 8.5 13.5 10.5 14V17H13.5V14C15.5 13.5 17 11.5 17 9C17 6 15 4 12 4Z" fill="#D24939"/>
        <path d="M9 20H15V18H9V20Z" fill="#335061"/>
        <circle cx="10.5" cy="8.5" r="1" fill="#FFFFFF"/>
        <circle cx="13.5" cy="8.5" r="1" fill="#FFFFFF"/>
      </svg>
    );
  }

  // Terraform
  if (norm.includes('terraform')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M14.5 8.5V15L9.5 12V5.5L14.5 8.5Z" fill="#7B42BC"/>
        <path d="M15 8.5L20 5.5V12L15 15V8.5Z" fill="#844FBA"/>
        <path d="M9 12.5V19L4 16V9.5L9 12.5Z" fill="#5C4EE5"/>
        <path d="M9.5 12.5L14.5 15.5V22L9.5 19V12.5Z" fill="#7B42BC"/>
      </svg>
    );
  }

  // GitLab
  if (norm.includes('gitlab')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24">
        <path fill="#E24329" d="M12 21.5L16.2 8.6H7.8L12 21.5Z"/>
        <path fill="#FC6D26" d="M12 21.5L7.8 8.6H2.1L12 21.5Z"/>
        <path fill="#FCA326" d="M2.1 8.6L1 12.1C0.8 12.7 1 13.4 1.5 13.8L12 21.5L2.1 8.6Z"/>
        <path fill="#E24329" d="M2.1 8.6H7.8L5.4 1.3C5.2 0.7 4.4 0.7 4.2 1.3L2.1 8.6Z"/>
        <path fill="#FC6D26" d="M12 21.5L16.2 8.6H21.9L12 21.5Z"/>
        <path fill="#FCA326" d="M21.9 8.6L23 12.1C23.2 12.7 23 13.4 22.5 13.8L12 21.5L21.9 8.6Z"/>
        <path fill="#E24329" d="M21.9 8.6H16.2L18.6 1.3C18.8 0.7 19.6 0.7 19.8 1.3L21.9 8.6Z"/>
      </svg>
    );
  }

  // GitHub / Git
  if (norm.includes('git') || norm.includes('github')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    );
  }

  // SonarQube
  if (norm.includes('sonar')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M4 18C7 11 13 8 20 6" stroke="#4B9FD5" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M4 14C6.5 9 11 6.5 17 5" stroke="#CB3837" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="6" r="2.5" fill="#4B9FD5"/>
      </svg>
    );
  }

  // Python
  if (norm.includes('python')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24">
        <path fill="#3776AB" d="M11.9 2c-3.1 0-5 1.4-5 3.5v2.5h5.1v.8H4.6C2.5 8.8 1 10.7 1 13.5c0 2.9 1.6 4.7 4.1 4.7h2.1v-2.3c0-2.3 2-4.2 4.3-4.2h4.9v-2.7c0-2.2-1.9-4-4.5-4h-5z"/>
        <path fill="#FFD43B" d="M12.1 22c3.1 0 5-1.4 5-3.5V16H12v-.8h7.4c2.1 0 3.6-1.9 3.6-4.7 0-2.9-1.6-4.7-4.1-4.7h-2.1v2.3c0 2.3-2 4.2-4.3 4.2H7.6v2.7c0 2.2 1.9 4 4.5 4h5z"/>
        <circle cx="8.5" cy="4.5" r=".8" fill="#FFF"/>
        <circle cx="15.5" cy="19.5" r=".8" fill="#FFF"/>
      </svg>
    );
  }

  // Linux
  if (norm.includes('linux')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path fill="#FCC624" d="M12 2C8.5 2 7 5 7 8c0 2 .5 3.5 1.5 5.5L7 17c-.5 1-1 1.5-1.5 2-.5.5-.5 1.5 0 2 1 1 4 1 6.5 1s5.5 0 6.5-1c.5-.5.5-1.5 0-2-.5-.5-1-1-1.5-2l-1.5-3.5c1-2 1.5-3.5 1.5-5.5 0-3-1.5-6-5-6z"/>
        <circle cx="10" cy="7" r="1" fill="#000"/>
        <circle cx="14" cy="7" r="1" fill="#000"/>
        <path d="M11 9.5c.5.5 1.5.5 2 0" stroke="#000" strokeWidth="1"/>
      </svg>
    );
  }

  // MongoDB
  if (norm.includes('mongo')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24">
        <path fill="#47A248" d="M12 2C11.5 2 6 7.5 6 13.5c0 4.2 3.2 7.7 5.7 8.5v-7.2h.6v7.2c2.5-.8 5.7-4.3 5.7-8.5C18 7.5 12.5 2 12 2z"/>
      </svg>
    );
  }

  // MySQL
  if (norm.includes('mysql')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M4 14C6 8 13 6 19 8C19 12 16 18 10 18C6.5 18 4.5 16.5 4 14Z" fill="#00758F" opacity="0.8"/>
        <path d="M14 6C16 10 16 15 13 19" stroke="#F29111" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    );
  }

  // Nginx
  if (norm.includes('nginx')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#009639">
        <path d="M12 2L2 7.5V16.5L12 22L22 16.5V7.5L12 2ZM7 16V8L17 16V8" stroke="#009639" strokeWidth="1.5" fill="none"/>
      </svg>
    );
  }

  // Ansible
  if (norm.includes('ansible')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="#EE0000"/>
        <path d="M12 5L7 17H9.2L10.7 13.5H14.8L16.2 17H18.5L13.5 5H12ZM11.4 11.8L12.7 8.5L14.1 11.8H11.4Z" fill="#FFFFFF"/>
      </svg>
    );
  }

  // Node.js / JavaScript
  if (norm.includes('node') || norm.includes('javascript') || norm.includes('js')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24">
        <path fill="#539E43" d="M12 2L2 7.8v11.4L12 25l10-5.8V7.8L12 2zm6.7 15.5L12 21.3l-6.7-3.8V9.2L12 5.4l6.7 3.8v8.3z" transform="scale(0.85) translate(2, -1)"/>
        <path fill="#539E43" d="M12 7.5l5 2.9v5.8l-5 2.9-5-2.9v-5.8l5-2.9z" opacity="0.4"/>
      </svg>
    );
  }

  // CloudWatch
  if (norm.includes('cloudwatch')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#FF4F8B" fillOpacity="0.15"/>
        <path d="M5 14L9 9L13 13L19 6" stroke="#FF4F8B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 18H5" stroke="#FF4F8B" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    );
  }

  // CloudTrail / Security / IAM
  if (norm.includes('iam') || norm.includes('cloudtrail') || norm.includes('security')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 3L4 6.5V12C4 16.5 7.5 20.5 12 22C16.5 20.5 20 16.5 20 12V6.5L12 3Z" fill="#E7157B" fillOpacity="0.2" stroke="#E7157B" strokeWidth="2"/>
        <path d="M9 12L11 14L15 10" stroke="#E7157B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  // Default Tech Node Icon
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
      <line x1="6" y1="6" x2="6.01" y2="6"/>
      <line x1="6" y1="18" x2="6.01" y2="18"/>
    </svg>
  );
};
