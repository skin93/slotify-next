import { BrandWrapper, Logo } from '@/styles/Brand.styled';
import Link from 'next/link';

const Brand = () => {
  return (
    <BrandWrapper>
      <Link href='/' passHref>
        <Logo>
          <img alt='logo' src='/images/icons/logo.png' />
          <span>Slotify</span>
        </Logo>
      </Link>
    </BrandWrapper>
  );
};

export default Brand;
