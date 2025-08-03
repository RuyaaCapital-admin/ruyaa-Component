"use client"
import React from 'react'

const GlassCards = () => {
  return (
    <div className="glass-cards-container">
      <div className="glass-cards-wrapper">
        <div
          data-text="Clinics & Medical"
          style={{ '--r': '-15deg' } as React.CSSProperties}
          className="glass-card clinics-medical"
        >
          {/* Clinics & Medical image */}
        </div>
        <div
          data-text="Smart Education"
          style={{ '--r': '5deg' } as React.CSSProperties}
          className="glass-card smart-education"
        >
          {/* Smart Education image */}
        </div>
        <div
          data-text="Financial Services"
          style={{ '--r': '25deg' } as React.CSSProperties}
          className="glass-card financial-services"
        >
          {/* Financial Services image */}
        </div>
      </div>

      <style jsx>{`
        .glass-cards-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .glass-cards-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .glass-card {
          position: relative;
          width: 180px;
          height: 200px;
          background: linear-gradient(rgba(255, 255, 255, 0.1), transparent);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.5s;
          border-radius: 10px;
          margin: 0 -45px;
          backdrop-filter: blur(10px);
          transform: rotate(var(--r));
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }

        .glass-card.clinics-medical {
          background-image: url('https://cdn.builder.io/api/v1/image/assets%2F3f570e1f499e489383888e022380825c%2F295dbea9e9c0481d87036f48d1d04e62?format=webp&width=800');
        }

        .glass-card.smart-education {
          background-image: url('https://cdn.builder.io/api/v1/image/assets%2F3f570e1f499e489383888e022380825c%2F002c9a6551674059a6daaa71ae10742f?format=webp&width=800');
        }

        .glass-card.financial-services {
          background-image: url('https://cdn.builder.io/api/v1/image/assets%2F3f570e1f499e489383888e022380825c%2F9925e7c323a843c786955ba53cb7d52c?format=webp&width=800');
        }

        .glass-cards-wrapper:hover .glass-card {
          transform: rotate(0deg);
          margin: 0 10px;
        }

        .glass-card::before {
          content: attr(data-text);
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 40px;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          font-size: 14px;
          font-weight: 500;
        }
      `}</style>
    </div>
  )
}

export default GlassCards
