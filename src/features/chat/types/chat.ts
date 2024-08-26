export type ChatProps = {
  text: string;
  isChecked?: boolean;
  time: Date;
  style?: 'tail' | 'none';
  type: 'MY' | 'OTHER';
};
