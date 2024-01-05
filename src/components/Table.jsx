import React from 'react'
import { useSelector } from 'react-redux'


const Table = () => {
  return (
    <div><table>
    <thead>
      <tr>
        <th>Supplier</th>
        <th>Year</th>
        <th>Emission/Revenue Ratio</th>
        <th>MOM</th>
      </tr>
    </thead>
    <tbody>
      
        <tr >
          <td>Adani</td>
          <td>2023</td>
          <td>24</td>
          <td className='red'>25%↑</td>
        </tr>
        <tr >
          <td>Ambani</td>
          <td>2023</td>
          <td>25</td>
          <td className='green'>25%↓</td>
        </tr>
        <tr >
          <td>PwC</td>
          <td>2023</td>
          <td>32</td>
          <td className='green'>24%↓</td>
        </tr>
        <tr >
          <td>Vijaya steels</td>
          <td>2023</td>
          <td>38</td>
          <td className='green'>28%↓</td>
        </tr>
        <tr >
          <td>Tata</td>
          <td>2023</td>
          <td>37</td>
          <td className='red'>34%↑</td>
        </tr>
        <tr >
          <td>Visaka Steel</td>
          <td>2023</td>
          <td>45</td>
          <td className='red'>67%↑</td>
        </tr>
        <tr >
          <td>Alibaba</td>
          <td>2023</td>
          <td>58</td>
          <td className='green'>54%↓</td>
        </tr>
    </tbody>
  </table></div>
  )
}

export default Table