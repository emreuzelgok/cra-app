import { FC } from 'react';
import './Button.scss';

type Props = {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'sm' | 'md' | 'lg';
  label: string;
  onClick?: () => void;
};

const Button: FC<Props> = ({ primary = false, size = 'md', backgroundColor, label, ...props }) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  return (
    <button
      type="button"
      className={['button', `button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
