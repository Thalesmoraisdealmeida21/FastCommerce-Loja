import React, { useState, useContext } from 'react';

import {
  Categories,
  Footer,
  Header,
  ContentWrapper,
  Drawer,
  Cart,
  CartOrderCard,
  AddressCard,
} from '../../components';
import { GlobalUserContext } from '../../contexts';
import { DRAWER_VALUES } from '../../utils/enums';
import {
  AddressComponentWrapper,
  DrawerSelectedWrapper,
  DrawerWrapper,
  InternWrapper,
  Wrapper,
} from './styles';

const UserArea: React.FC = () => {
  const { user } = useContext(GlobalUserContext);
  const [activeState, setActiveState] = useState<DrawerOptions>(
    'ACCOUNT_INFORMATION',
  );

  const handleNewPress = () => ({});

  const addressesComponent = () => (
    <AddressComponentWrapper>
      <AddressCard key={0} isNew onNewPress={handleNewPress} />
      {user?.adresses.map(address => (
        <AddressCard address={address} key={address.id || 0} />
      ))}
    </AddressComponentWrapper>
  );

  /**
   * This is defined to maintain functions for the selected option in drawer to render
   */
  const SelectedDrawerRenderFunctions = {
    [DRAWER_VALUES.ACCOUNT_INFORMATION]: () => (
      <CartOrderCard text={DRAWER_VALUES.ACCOUNT_INFORMATION} />
    ),
    [DRAWER_VALUES.ADRESSES]: addressesComponent,
    [DRAWER_VALUES.ORDERS]: () => <CartOrderCard text={DRAWER_VALUES.ORDERS} />,
  };

  const renderActiveDrawerSelection =
    SelectedDrawerRenderFunctions[activeState];

  return (
    <Wrapper>
      <Header />
      <Categories />
      <Cart />
      <ContentWrapper>
        <InternWrapper>
          <DrawerWrapper>
            <Drawer onChangeActiveState={setActiveState} />
          </DrawerWrapper>
          <DrawerSelectedWrapper>
            {renderActiveDrawerSelection()}
          </DrawerSelectedWrapper>
        </InternWrapper>
      </ContentWrapper>
      <Footer shouldHaveBottomPadding={100} />
    </Wrapper>
  );
};

export default UserArea;
