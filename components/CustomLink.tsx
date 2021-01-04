import NextLink, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

interface props extends LinkProps {
  children: (isActive: boolean) => React.ReactNode;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
}

export const CustomLink = ({ href, activeClassName, inactiveClassName, className, children, ...rest }: props) => {
  const router = useRouter();

  let currentClassName = className;
  let isActive = router.pathname === href;
  if (isActive) {
    currentClassName += ` ${activeClassName}`;
  } else {
    currentClassName += ` ${inactiveClassName}`;
  }

  return (
    <NextLink href={href} {...rest} passHref>
      <a className={currentClassName}>{children(isActive)}</a>
    </NextLink>
  );
};
