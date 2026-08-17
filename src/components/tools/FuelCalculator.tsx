'use client';

import React, { useState } from 'react';
import { Fuel, DollarSign, Calculator, ArrowRight, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { ADS_CONFIG } from '@/config/ads';

export default function FuelCalculator() {
  const [unitSystem, setUnitSystem] = useState<'imperial' | 'metric'>('imperial');
  const [vehiclePreset, setVehiclePreset] = useState<'semi' | 'pickup'>('semi');

  // Input states
  const [distance, setDistance] = useState<number>(1200); // Miles
  const [mpg, setMpg] = useState<number>(6.5); // Miles per Gallon
  const [fuelPrice, setFuelPrice] = useState<number>(3.85); // $ per Gallon
  const [tollsAndDefs, setTollsAndDefs] = useState<number>(140); // Tolls & DEF ($)
  const [grossFreightPay, setGrossFreightPay] = useState<number>(3200); // Gross Load Pay ($)

  // Calculations
  const gallonsNeeded = mpg > 0 ? distance / mpg : 0;
  const totalFuelCost = gallonsNeeded * fuelPrice;
  const totalTripExpenses = totalFuelCost + tollsAndDefs;
  const netTripProfit = grossFreightPay - totalTripExpenses;
  const costPerMile = distance > 0 ? totalTripExpenses / distance : 0;
  const netRevenuePerMile = distance > 0 ? netTripProfit / distance : 0;
  const profitMargin = grossFreightPay > 0 ? (netTripProfit / grossFreightPay) * 100 : 0;

  return (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid var(--border-main)',
        borderRadius: 'var(--radius-lg)',
        padding: '32px',
        boxShadow: 'var(--shadow-md)',
      }}
    >
      {/* Unit Toggle & Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', marginBottom: '24px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '16px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="newsfolk-badge badge-amber">
              OWNER-OPERATOR DISPATCH TOOL
            </span>
          </div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginTop: '6px' }}>
            Commercial Diesel & Haul Net Profitability Calculator
          </h2>
        </div>

        {/* Unit Selector */}
        <div style={{ display: 'flex', background: 'var(--bg-surface)', padding: '4px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-subtle)' }}>
          <button
            onClick={() => setUnitSystem('imperial')}
            style={{
              padding: '6px 14px',
              border: 'none',
              borderRadius: 'var(--radius-xs)',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer',
              background: unitSystem === 'imperial' ? 'var(--text-main)' : 'transparent',
              color: unitSystem === 'imperial' ? '#ffffff' : 'var(--text-muted)',
            }}
          >
            US Standard (Miles / Gal / USD $)
          </button>
          <button
            onClick={() => setUnitSystem('metric')}
            style={{
              padding: '6px 14px',
              border: 'none',
              borderRadius: 'var(--radius-xs)',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer',
              background: unitSystem === 'metric' ? 'var(--text-main)' : 'transparent',
              color: unitSystem === 'metric' ? '#ffffff' : 'var(--text-muted)',
            }}
          >
            Metric (KM / Liters / $)
          </button>
        </div>
      </div>

      {/* Inputs Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '32px' }}>
        {/* Total Trip Distance */}
        <div>
          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px', color: 'var(--text-headline)' }}>
            {unitSystem === 'imperial' ? 'Total Trip Distance (Miles)' : 'Total Distance (Kilometers)'}
          </label>
          <input
            type="number"
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
            style={{
              width: '100%',
              padding: '12px 14px',
              borderRadius: 'var(--radius-xs)',
              border: '1px solid var(--border-main)',
              fontSize: '1.05rem',
              fontWeight: 700,
              background: 'var(--bg-surface)',
              outline: 'none',
            }}
          />
        </div>

        {/* Average Fuel Economy (MPG) */}
        <div>
          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px', color: 'var(--text-headline)' }}>
            {unitSystem === 'imperial' ? 'Average Fuel Economy (MPG)' : 'Fuel Consumption (L / 100km)'}
          </label>
          <input
            type="number"
            step="0.1"
            value={mpg}
            onChange={(e) => setMpg(Number(e.target.value))}
            style={{
              width: '100%',
              padding: '12px 14px',
              borderRadius: 'var(--radius-xs)',
              border: '1px solid var(--border-main)',
              fontSize: '1.05rem',
              fontWeight: 700,
              background: 'var(--bg-surface)',
              outline: 'none',
            }}
          />
        </div>

        {/* Diesel Price ($ / gallon) */}
        <div>
          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px', color: 'var(--text-headline)' }}>
            {unitSystem === 'imperial' ? 'Current Diesel Price ($ / Gallon)' : 'Fuel Price ($ / Liter)'}
          </label>
          <input
            type="number"
            step="0.01"
            value={fuelPrice}
            onChange={(e) => setFuelPrice(Number(e.target.value))}
            style={{
              width: '100%',
              padding: '12px 14px',
              borderRadius: 'var(--radius-xs)',
              border: '1px solid var(--border-main)',
              fontSize: '1.05rem',
              fontWeight: 700,
              background: 'var(--bg-surface)',
              outline: 'none',
            }}
          />
        </div>

        {/* Gross Load Revenue ($ USD) */}
        <div>
          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px', color: 'var(--accent-red)' }}>
            Gross Load Pay / Total Dispatch Rate ($ USD)
          </label>
          <input
            type="number"
            value={grossFreightPay}
            onChange={(e) => setGrossFreightPay(Number(e.target.value))}
            style={{
              width: '100%',
              padding: '12px 14px',
              borderRadius: 'var(--radius-xs)',
              border: '1px solid var(--accent-red)',
              fontSize: '1.05rem',
              fontWeight: 800,
              color: 'var(--text-headline)',
              background: 'rgba(250, 44, 55, 0.03)',
              outline: 'none',
            }}
          />
        </div>
      </div>

      {/* Real-time Calculation Result Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-main)',
          borderRadius: 'var(--radius-md)',
          padding: '24px',
        }}
      >
        <div>
          <div className="mono-meta" style={{ marginBottom: '4px' }}>
            ESTIMATED FUEL GALLONS
          </div>
          <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--text-headline)' }}>
            {gallonsNeeded.toFixed(1)} {unitSystem === 'imperial' ? 'gal' : 'liters'}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            ${totalFuelCost.toFixed(2)} total diesel cost
          </div>
        </div>

        <div>
          <div className="mono-meta" style={{ marginBottom: '4px' }}>
            TOTAL TRIP EXPENSES
          </div>
          <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#dc2626' }}>
            ${totalTripExpenses.toFixed(2)}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Fuel + Tolls & DEF included
          </div>
        </div>

        <div>
          <div className="mono-meta" style={{ marginBottom: '4px' }}>
            NET TAKE-HOME PROFIT
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 900, color: netTripProfit >= 0 ? 'var(--accent-green)' : '#dc2626' }}>
            ${netTripProfit.toFixed(2)}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            {profitMargin.toFixed(1)}% net profit margin
          </div>
        </div>

        <div>
          <div className="mono-meta" style={{ marginBottom: '4px' }}>
            NET PAY PER MILE (CPM)
          </div>
          <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--accent-blue)' }}>
            ${netRevenuePerMile.toFixed(2)} / mi
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Total CPM: ${costPerMile.toFixed(2)} / mi
          </div>
        </div>
      </div>

      {/* CTA Smartlink Ad button */}
      <div style={{ marginTop: '24px', textAlign: 'center' }}>
        <a
          href={ADS_CONFIG.adsterra.smartlinkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-newsfolk btn-red"
          style={{ padding: '14px 28px', fontSize: '0.95rem', fontWeight: 800 }}
        >
          Compare 2026 Commercial Diesel Fuel Card Discounts <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}
