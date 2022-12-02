import React, { useState, useMemo, useEffect, Fragment } from 'react';
import { getAll } from '../../RequestApiUtils';
import IsLoading from '../../BasedComponent/IsLoading';
import { isArray } from 'lodash';
import DataTable from '../../BasedComponent/DataTable';

function ProductPage() {
  const [ products, setProducts ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);

  const columns = useMemo(
    () => [
      {
        Header: 'Product ID',
        accessor: 'id',
      },
      {
        Header: 'Product Name',
        accessor: 'name',
      },
      {
        Header: 'Product Price',
        accessor: 'price',
      }
    ], []);
  
  useEffect(() => {
    setIsLoading(true);
    getAll('products').then((products) => {
      let resultProducts = [];
      
      if (isArray(products)) {
        resultProducts = products
      }

      setProducts(resultProducts);
      setIsLoading(false);
    });
  }, []);

  return (
    <IsLoading isLoading={isLoading}>
      <Fragment>
        <h1> Product </h1>
        <DataTable
          data={products}
          columns={columns}
        />
      </Fragment>
    </IsLoading>

  );
}

export default ProductPage;