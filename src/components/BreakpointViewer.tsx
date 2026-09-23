import React, { useState, useEffect } from 'react';
import { Monitor, Tablet, Smartphone, Maximize2, ChevronDown, ChevronUp } from 'lucide-react';
import './BreakpointViewer.css';

export type Breakpoint = '375' | '768' | '1024' | '1440' | '1920' | 'fluid';

interface BreakpointViewerProps {
  children: React.ReactNode;
}

export const BreakpointViewer: React.FC<BreakpointViewerProps> = ({ children }) => {
  const [selectedBp, setSelectedBp] = useState<Breakpoint>('fluid');
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1440);
  const [minimized, setMinimized] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const breakpoints: { id: Breakpoint; label: string; icon: React.ReactNode; width?: number }[] = [
    { id: 'fluid', label: 'Fluid', icon: <Maximize2 size={13} /> },
    { id: '375', label: '375px', icon: <Smartphone size={13} />, width: 375 },
    { id: '768', label: '768px', icon: <Tablet size={13} />, width: 768 },
    { id: '1024', label: '1024px', icon: <Monitor size={13} />, width: 1024 },
    { id: '1440', label: '1440px', icon: <Monitor size={13} />, width: 1440 },
    { id: '1920', label: '1920px', icon: <Monitor size={13} />, width: 1920 }
  ];

  const isSimulating = selectedBp !== 'fluid';
  const targetWidth = breakpoints.find(b => b.id === selectedBp)?.width;

  return (
    <div className={`viewport-outer-container ${isSimulating ? 'simulating' : ''}`}>
      {/* Floating Breakpoint Switcher */}
      <div className={`breakpoint-toolbar ${minimized ? 'minimized' : ''}`}>
        {!minimized && (
          <>
            <div className="bp-live-indicator">
              <span className="bp-dot"></span>
              <span>{windowWidth}px</span>
            </div>

            <div className="bp-buttons-group">
              {breakpoints.map((bp) => (
                <button
                  key={bp.id}
                  className={`bp-btn ${selectedBp === bp.id ? 'active' : ''}`}
                  onClick={() => setSelectedBp(bp.id)}
                  title={`Preview at ${bp.label}`}
                >
                  {bp.icon}
                  <span>{bp.label}</span>
                </button>
              ))}
            </div>
          </>
        )}

        <button 
          className="bp-toggle-btn"
          onClick={() => setMinimized(!minimized)}
          title={minimized ? "Expand breakpoint toolbar" : "Minimize toolbar"}
          aria-label="Toggle breakpoint switcher"
        >
          {minimized ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {/* Main Content: Rendered directly or framed inside simulated width */}
      {isSimulating ? (
        <div 
          className="viewport-frame" 
          style={{ width: `${targetWidth}px`, maxWidth: '98vw' }}
        >
          <div className="viewport-frame-header">
            <div className="viewport-dots">
              <span className="viewport-dot"></span>
              <span className="viewport-dot"></span>
              <span className="viewport-dot"></span>
            </div>
            <span className="viewport-dimension-label">
              Figma Breakpoint: {targetWidth}px
            </span>
            <div style={{ width: '30px' }}></div>
          </div>
          <div>
            {children}
          </div>
        </div>
      ) : (
        children
      )}
    </div>
  );
};
