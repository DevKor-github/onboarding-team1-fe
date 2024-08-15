const profileVariants = {
  small: 'h-8 w-8',
  normal: 'h-11 w-11',
  large: 'h-15 w-15',
};

type ProfileProps = {
  imgUrl?: string;
  size: 'small' | 'normal' | 'large';
};

export const RoundProfile = (profile: ProfileProps) => {
  return <img className={`${profileVariants[profile.size]} rounded-full bg-purple-500`} src={profile.imgUrl}></img>;
};
