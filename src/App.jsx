import { useState } from 'react';
import './App.css';

function App() {
  
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [vatRate,setVatRate] = useState('')

  // Convert input strings to numbers safely
  const priceNum = parseFloat(price) || 0;
  const discountNum = parseFloat(discount) || 0;
  const vatPercent = parseFloat(vatRate) || 0;

  const discountAmount = (priceNum * discountNum) / 100;
  const discountedPrice = priceNum - discountAmount;
  const vat = discountedPrice * (vatPercent / 100);
  const total = discountedPrice + vat;

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>VAT Calculator</h2>

      <div
        style={{
          maxWidth: '420px',
          margin: '0 auto',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(112, 19, 19, 0.1)',
        }}
      >
        {/* Price Input */}
        <label style={{ display: 'block', marginBottom: '15px' }}>
          <strong>Price:</strong>
          <input
            type="number"
            value={price}
            placeholder="Enter price"
            onChange={(e) => setPrice(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '5px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '16px',
            }}
          />
        </label>

        {/* Discount Input */}
        <label style={{ display: 'block', marginBottom: '20px' }}>
          <strong>Discount :</strong>
          <input
            type="number"
            value={discount}
            placeholder="Enter discount"
            onChange={(e) => setDiscount(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '5px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '16px',
            }}
          />
        </label>

        {/* Vat Input */}
        <label style={{ display: 'block', marginBottom: '20px' }}>
          <strong>Vat (%):</strong>
          <input
            type="number"
            value={vatRate}
            placeholder="Enter Vat"
            onChange={(e) => setVatRate(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '5px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '16px',
            }}
          />
        </label>

        {/* Result Display */}
        <div
          style={{
            backgroundColor: '#222',
            color: 'white',
            padding: '15px',
            borderRadius: '10px',
            lineHeight: '1.8',
          }}
        >
          <div>💳 <strong>Before discount:</strong> {priceNum.toFixed(2)}</div>
          <div>🔻 <strong>Discount:</strong> {discountNum.toFixed(2)}</div>
          <div>💸 <strong>After Discount:</strong> {discountedPrice.toFixed(2)}</div>
          <div>🧾 <strong>VAT ({(vatPercent).toFixed(2)}%):</strong> {vat.toFixed(2)}</div>
          <div>💰 <strong>Gross Price:</strong> {total.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginTop: '5px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '16px',
};


export default App;
