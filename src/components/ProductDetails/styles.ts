import styled from 'styled-components';
// import { FaShoppingCart as BaseFaShoppingCart } from 'react-icons/fa';
import { Colors, Spacings } from '../../utils';

const { small, giant } = Spacings;

const defaultProductImageNotFound =
  'https://www.navigation.com/static/WFS/Shop-Site/-/Shop/en_US/Product%20Not%20Found.png';

type ImgProps = {
  imageURL?: string;
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  min-width: 40vw;
  min-height: 60vh;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const Img = styled.div<ImgProps>`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;

  ${({ imageURL = defaultProductImageNotFound }) =>
    `background-image: url(${imageURL});`}

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 2%;
  padding: ${giant}px;
`;

export const TextWrapper = styled.div``;

export const Title = styled.h3`
  font-size: 2rem;
`;

export const Text = styled.p``;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 ${giant}px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CounterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CounterButton = styled.button`
  background-color: ${Colors.light?.primary.main};
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }
`;

export const CounterValue = styled.div`
  margin: 0 ${small}px;
`;
