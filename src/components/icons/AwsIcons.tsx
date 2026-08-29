import React from 'react';

interface AwsIconProps {
  service: string;
  className?: string;
  size?: number;
}

export const AwsServiceIcon: React.FC<AwsIconProps> = ({
  service,
  className = "w-5 h-5",
  size = 20,
}) => {
  const norm = service.toLowerCase().replace(/[\s\-_]/g, '');

  // EC2 Compute
  if (norm.includes('ec2') || norm.includes('instance')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="6" fill="#FF9900" fillOpacity="0.15"/>
        <rect x="7" y="7" width="18" height="18" rx="2" stroke="#FF9900" strokeWidth="2"/>
        <rect x="11" y="11" width="10" height="10" fill="#FF9900" fillOpacity="0.3"/>
        <path d="M4 12H7M4 16H7M4 20H7M25 12H28M25 16H28M25 20H28M12 4V7M16 4V7M20 4V7M12 25V28M16 25V28M20 25V28" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    );
  }

  // S3 Storage
  if (norm.includes('s3') || norm.includes('storage') || norm.includes('efs')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="6" fill="#569A31" fillOpacity="0.15"/>
        <path d="M7 10L16 6L25 10L16 14L7 10Z" fill="#569A31" fillOpacity="0.3" stroke="#569A31" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M7 16L16 20L25 16" stroke="#569A31" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M7 22L16 26L25 22" stroke="#569A31" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    );
  }

  // RDS Database
  if (norm.includes('rds') || norm.includes('database')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="6" fill="#3B48CC" fillOpacity="0.15"/>
        <ellipse cx="16" cy="9" rx="8" ry="3.5" stroke="#4B69FD" strokeWidth="2"/>
        <path d="M8 9V17C8 18.9 11.6 20.5 16 20.5C20.4 20.5 24 18.9 24 17V9" stroke="#4B69FD" strokeWidth="2"/>
        <path d="M8 17V23C8 24.9 11.6 26.5 16 26.5C20.4 26.5 24 24.9 24 23V17" stroke="#4B69FD" strokeWidth="2"/>
      </svg>
    );
  }

  // VPC / Networking
  if (norm.includes('vpc') || norm.includes('network') || norm.includes('subnet')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="6" fill="#8C4FFF" fillOpacity="0.15"/>
        <circle cx="16" cy="10" r="3" stroke="#A855F7" strokeWidth="2"/>
        <circle cx="10" cy="22" r="3" stroke="#A855F7" strokeWidth="2"/>
        <circle cx="22" cy="22" r="3" stroke="#A855F7" strokeWidth="2"/>
        <path d="M14 12.5L11.5 19.5M18 12.5L20.5 19.5M13 22H19" stroke="#A855F7" strokeWidth="1.8"/>
      </svg>
    );
  }

  // Route 53 DNS
  if (norm.includes('route53') || norm.includes('dns')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="6" fill="#8C4FFF" fillOpacity="0.15"/>
        <circle cx="16" cy="16" r="9" stroke="#8C4FFF" strokeWidth="1.8"/>
        <path d="M7 16H25M16 7C18.5 9.5 20 12.5 20 16C20 19.5 18.5 22.5 16 25C13.5 22.5 12 19.5 12 16C12 12.5 13.5 9.5 16 7Z" stroke="#8C4FFF" strokeWidth="1.5"/>
      </svg>
    );
  }

  // CloudFront CDN
  if (norm.includes('cloudfront') || norm.includes('cdn')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="6" fill="#A855F7" fillOpacity="0.15"/>
        <circle cx="16" cy="16" r="9" stroke="#C084FC" strokeWidth="1.8"/>
        <path d="M11 16C11 13 13.5 11 16 11M21 16C21 19 18.5 21 16 21" stroke="#C084FC" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="16" cy="16" r="2" fill="#C084FC"/>
      </svg>
    );
  }

  // Load Balancer (ELB / ALB)
  if (norm.includes('loadbalancer') || norm.includes('elb') || norm.includes('alb')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="6" fill="#8C4FFF" fillOpacity="0.15"/>
        <rect x="7" y="13" width="6" height="6" rx="1" fill="#A855F7"/>
        <rect x="19" y="8" width="6" height="5" rx="1" fill="#A855F7"/>
        <rect x="19" y="19" width="6" height="5" rx="1" fill="#A855F7"/>
        <path d="M13 16H16V10.5H19M16 16V21.5H19" stroke="#A855F7" strokeWidth="1.8"/>
      </svg>
    );
  }

  // CloudWatch
  if (norm.includes('cloudwatch') || norm.includes('alarm')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="6" fill="#E7157B" fillOpacity="0.15"/>
        <path d="M6 19L11 12L16 17L26 8" stroke="#FF4F8B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26 23H6" stroke="#FF4F8B" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    );
  }

  // IAM Security & CloudTrail
  if (norm.includes('iam') || norm.includes('cloudtrail') || norm.includes('sns')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="6" fill="#DD344C" fillOpacity="0.15"/>
        <path d="M16 6L7 10V16C7 21.5 11 25.5 16 27C21 25.5 25 21.5 25 16V10L16 6Z" fill="#DD344C" fillOpacity="0.25" stroke="#FF4F64" strokeWidth="1.8"/>
        <path d="M13 16L15 18L19 14" stroke="#FF4F64" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  // Auto Scaling
  if (norm.includes('autoscaling') || norm.includes('scaling')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="6" fill="#FF9900" fillOpacity="0.15"/>
        <rect x="11" y="11" width="10" height="10" stroke="#FF9900" strokeWidth="1.8"/>
        <path d="M6 6L10 10M6 6V10M6 6H10M26 6L22 10M26 6V10M26 6H22M6 26L10 22M6 26V22M6 26H10M26 26L22 22M26 26V22M26 26H22" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    );
  }

  // EKS
  if (norm.includes('eks')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="6" fill="#FF9900" fillOpacity="0.15"/>
        <path d="M16 6L25 11V21L16 26L7 21V11L16 6Z" stroke="#FF9900" strokeWidth="2"/>
        <circle cx="16" cy="16" r="3.5" fill="#326CE5"/>
      </svg>
    );
  }

  // Lambda
  if (norm.includes('lambda')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="6" fill="#FF9900" fillOpacity="0.15"/>
        <path d="M10 24L15 13L13 9H10M14.5 14L19 24H23M16 9L21 20" stroke="#FF9900" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  // API Gateway
  if (norm.includes('apigateway') || norm.includes('gateway')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="6" fill="#E7157B" fillOpacity="0.15"/>
        <rect x="7" y="7" width="7" height="7" stroke="#FF4F8B" strokeWidth="1.8"/>
        <rect x="18" y="7" width="7" height="7" stroke="#FF4F8B" strokeWidth="1.8"/>
        <rect x="12.5" y="18" width="7" height="7" stroke="#FF4F8B" strokeWidth="1.8"/>
        <path d="M10.5 14V16H16V18M21.5 14V16H16" stroke="#FF4F8B" strokeWidth="1.5"/>
      </svg>
    );
  }

  // CloudFormation
  if (norm.includes('cloudformation')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="6" fill="#E7157B" fillOpacity="0.15"/>
        <rect x="7" y="11" width="8" height="8" rx="1.5" stroke="#FF4F8B" strokeWidth="1.8"/>
        <rect x="17" y="11" width="8" height="8" rx="1.5" stroke="#FF4F8B" strokeWidth="1.8"/>
        <rect x="12" y="17" width="8" height="8" rx="1.5" stroke="#FF4F8B" strokeWidth="1.8"/>
      </svg>
    );
  }

  // Default AWS Icon
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#FF9900" fillOpacity="0.15"/>
      <path d="M8 20C13 23 19 23 24 20" stroke="#FF9900" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M22.5 19L24.5 20L22.5 21.5" stroke="#FF9900" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
