import type { Avatar } from '../../types';

interface AvatarProps {
  avatar: Avatar;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses: Record<NonNullable<AvatarProps['size']>, string> = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-14 w-14 text-lg',
};

const AvatarIcon = ({ avatar, size = 'md' }: AvatarProps) => {
  const base = `${sizeClasses[size]} shrink-0 rounded-full flex items-center justify-center font-medium text-white overflow-hidden`;

  if (avatar?.url) {
    return <img src={avatar.url} alt='' className={`${base} object-cover`} />;
  }

  return <div className={`${base} ${avatar?.colorClass ?? 'bg-slate-400'}`}>{avatar?.initial}</div>;
};

export default AvatarIcon;
