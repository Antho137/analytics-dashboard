import React from 'react'

const SalesMetrics = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 justify-center items-center mb-10 p-5 bg-white">
        <div className="flex justify-between items-center bg-blue-800 text-white p-3 rounded-md">
          <div>
            <h3 className="text-md">Total Sales</h3>
            <p className="text-md pt-1 font-medium">$704.000</p>
            <span className="text-xs">Increased by 11%</span>
          </div>
          <div>
            <img src='./images/sales.png' alt='Sales' className='bg-white rounded-sm' />
          </div>
        </div>
        <div className="flex justify-between items-center bg-red-400/80 text-white p-3 rounded-md">
          <div>
            <h3 className="text-md">Net Profit</h3>
            <p className="text-md pt-1 font-medium">$176.000</p>
            <span className="text-xs">Increased by 18%</span>
          </div>
          <div>
            <img src='./images/net-profit.png' alt='Net Profit' className='bg-white px-0.5 rounded-sm' />  
          </div>           
        </div>
        <div className="flex justify-between items-center bg-blue-300 text-white p-3 rounded-md">
          <div>
            <h3 className="text-md">Top Sale</h3>
            <p className="text-md pt-1 font-mediumt">$79.000</p>
            <span className="text-xs">Decreased by 7%</span>
          </div>
          <div>
            <img src='./images/top-sale.png' alt='Top Sale' className='rounded-sm' />
          </div>
        </div>
        <div className="flex justify-between items-center bg-yellow-500 text-white p-3 rounded-md">
          <div>
            <h3 className="text-md">Online Sales</h3>
            <p className="text-md pt-1 font-medium">$253.000</p>
            <span className="text-xs">Decreased by 15%</span>
          </div>
          <div>
            <img src='./images/online-sales.png' alt='Online Sales' className='bg-white rounded-sm' />
          </div>
        </div>
      </div>    
    </div>
  )
}

export default SalesMetrics;

