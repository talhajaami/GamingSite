import React from 'react'

const index = () => {
  return (
    <div className='col-xl-12 col-lg-7'>
      <div className='card shadow mb-4'>
        <div className='card-header py-3 d-flex flex-row align-items-center justify-content-between'>
          <h6 className='m-0 font-weight-bold text-primary'>Previous Trades</h6>
        </div>
        <div className='card-body'>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>UTC</th>
                <th scope='col'>Transfer Type</th>
                <th scope='col'>Amount</th>
                <th scope='col'>From</th>
                <th scope='col'>To</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1</th>
                <td>25/03/2022</td>
                <td>Withdraw</td>
                <td>250</td>
                <td>0xbD8299dEE3A62BDD36E716872A3aC9e960193Aa2</td>
                <td>0xbD8299dEE3A62BDD36E716872A3aC9e960193Aa2</td>
              </tr>
              <tr>
                <th scope='row'>2</th>
                <td>25/03/2022</td>
                <td>Withdraw</td>
                <td>250</td>
                <td>0xbD8299dEE3A62BDD36E726872A3aC9e960193Aa2</td>
                <td>0xbD8299dEE3A62BDD36E716872A3aC9e960193Aa2</td>
              </tr>
              <tr>
                <th scope='row'>3</th>
                <td>25/03/2022</td>
                <td>Withdraw</td>
                <td>250</td>
                <td>0xbD8299dEE3A62BDD36E716872A3aC9e960193Aa2</td>
                <td>0xbD8299dEE3A62BDD36E716872A3aC9e960193Aa2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default index
