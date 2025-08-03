"use client"
import React from 'react'
import styled from 'styled-components'

const GlassCards = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div
          data-text="Clinics & Medical"
          style={{ '--r': '-15' } as React.CSSProperties}
          className="glass"
        >
          {/* Removed SVG icon as requested */}
        </div>
        <div
          data-text="Smart Education"
          style={{ '--r': '5' } as React.CSSProperties}
          className="glass"
        >
          {/* Removed SVG icon as requested */}
        </div>
        <div
          data-text="Financial Services"
          style={{ '--r': '25' } as React.CSSProperties}
          className="glass"
        >
          {/* Removed SVG icon as requested */}
        </div>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container .glass {
    position: relative;
    width: 180px;
    height: 200px;
    background: linear-gradient(#fff2, transparent);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    border-radius: 10px;
    margin: 0 -45px;
    backdrop-filter: blur(10px);
    transform: rotate(calc(var(--r) * 1deg));
  }

  .container:hover .glass {
    transform: rotate(0deg);
    margin: 0 10px;
  }

  .container .glass::before {
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
  }

  .container .glass svg {
    font-size: 2.5em;
    fill: #fff;
  }
`

export default GlassCards
