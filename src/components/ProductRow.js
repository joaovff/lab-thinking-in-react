import React from 'react';

function ProductRow(props) {
  return (
    <>
      {props.products.map((item) => {
        return (
          <table>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
            <tr>
              {!item.inStock && (
                <>
                  <td style={{ color: 'red' }}>{item.name}</td>
                  <td style={{ color: 'red' }}>{item.price}</td>
                </>
              )}
              {item.inStock && (
                <>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                </>
              )}
            </tr>
          </table>
        );
      })}
    </>
  );
}

export default ProductRow;
