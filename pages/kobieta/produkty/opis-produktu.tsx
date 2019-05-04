import React from 'react';
import ProductDescription from '../../../components/productDescriptionFemale/ProductDescription';
import { fetchSingleProduct } from '../../../features/singleProduct/actions';
import { setSingleId, setSingleGender } from '../../../features/singleID/actions';
import getStore from '../../../features/redux/selectors';
import { RootAction } from '../../../features/redux/root-actions';
import { RootState } from '../../../features/redux/root-reducer';
import { NextFunctionComponent } from 'next';
import { Store } from 'redux';

const ProductDescriptionPage: NextFunctionComponent<{}, {}, Store<RootState, RootAction>> = () => {
  return (
    <div>
      <ProductDescription />
    </div>
  );
};

ProductDescriptionPage.getInitialProps = async (store: any) => {
  const action = getStore(store);
  const { _id } = store.query;
  action.dispatch(setSingleGender("female"));
  action.dispatch(setSingleId(_id));
  action.dispatch(fetchSingleProduct());
  return {};
};

export default ProductDescriptionPage;
