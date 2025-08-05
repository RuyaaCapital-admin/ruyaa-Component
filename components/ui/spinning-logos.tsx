"use client"

import React from 'react';
import {
  MessageCircle,
  Share2,
  Settings,
  TrendingUp,
  Network,
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SpinningLogosProps {
  isDark?: boolean;
  onIconClick?: (capability: string) => void;
  centerText?: string;
  logos?: Array<{
    Icon: React.ComponentType<any>;
    className: string;
    name: string;
    capability: string;
  }>;
}

export const SpinningLogos: React.FC<SpinningLogosProps> = ({ 
  isDark = false, 
  onIconClick,
  centerText = "AI AGENT",
  logos: customLogos
}) => {
  const radiusToCenterOfIcons = 180;
  const iconWrapperWidth = 60;
  const ringPadding = 40;

  const toRadians = (degrees: number): number => (Math.PI / 180) * degrees;

  const defaultLogos = [
    { Icon: MessageCircle, className: 'bg-green-500 text-white hover:bg-green-600', name: 'Chat Support', capability: 'chat-support' },
    { Icon: Share2, className: 'bg-purple-500 text-white hover:bg-purple-600', name: 'Social Media', capability: 'social-media' },
    { Icon: Settings, className: 'bg-orange-500 text-white hover:bg-orange-600', name: 'Automation', capability: 'automation' },
    { Icon: TrendingUp, className: 'bg-red-500 text-white hover:bg-red-600', name: 'Analytics', capability: 'analytics' },
    { Icon: Network, className: 'bg-indigo-500 text-white hover:bg-indigo-600', name: 'Integration', capability: 'integration' },
    { Icon: Zap, className: 'bg-green-600 text-white hover:bg-green-700', name: 'Optimization', capability: 'optimization' },
  ];

  const logos = customLogos || defaultLogos;

  return (
    <div className="flex justify-center items-center p-8 overflow-hidden">
      <div
        style={{
          width: radiusToCenterOfIcons * 2 + iconWrapperWidth + ringPadding,
          height: radiusToCenterOfIcons * 2 + iconWrapperWidth + ringPadding,
        }}
        className={cn(
          "relative rounded-full shadow-lg border",
          isDark ? "bg-gray-900/50 border-gray-700" : "bg-white/80 border-gray-200"
        )}
      >
        <div className="absolute inset-0 animate-spin-slow">
          {logos.map((logo, index) => {
            const angle = (360 / logos.length) * index;
            return (
              <button
                key={index}
                style={{
                  top: `calc(50% - ${iconWrapperWidth / 2}px + ${radiusToCenterOfIcons * Math.sin(toRadians(angle))}px)`,
                  left: `calc(50% - ${iconWrapperWidth / 2}px + ${radiusToCenterOfIcons * Math.cos(toRadians(angle))}px)`,
                  width: iconWrapperWidth,
                  height: iconWrapperWidth,
                }}
                className={cn(
                  "absolute flex items-center justify-center rounded-full shadow-md border-2 animate-spin-reverse transition-all duration-300 cursor-pointer",
                  isDark ? "border-gray-600" : "border-white",
                  logo.className
                )}
                aria-label={`${logo.name} capability`}
                onClick={() => onIconClick?.(logo.capability)}
              >
                <logo.Icon className="w-6 h-6" />
              </button>
            );
          })}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className={cn(
              "rounded-full w-3/5 h-3/5 flex items-center justify-center shadow-inner border-4",
              isDark 
                ? "bg-gray-900 border-gray-600 text-white" 
                : "bg-white border-gray-200 text-gray-900"
            )}
          >
            <span className="text-xl sm:text-2xl font-bold text-center px-4">
              {centerText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
