import { FC } from 'react';
import cx from 'classnames';
import './Button.scss';

type Props = JSX.IntrinsicElements['button'] & {
  primary?: boolean;
  secondary?: boolean;
  backgroundColor?: string;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  onClick?: () => void;
};

const Button: FC<Props> = ({
  primary,
  secondary,
  size = 'md',
  backgroundColor,
  label,
  children,
  onClick,
}) => {
  // const mode = primary ? 'button--primary' : 'button--secondary';
  const classNames = cx('button', `button--${size}`, {
    'button--primary': primary,
    'button--secondary': secondary,
  });
  return (
    <button className={classNames} style={{ backgroundColor }} onClick={onClick}>
      {label || children}
    </button>
  );
};

export default Button;
