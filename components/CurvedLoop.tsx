'use client';
import { useRef, useEffect, useState, useMemo, useId, FC, PointerEvent } from 'react';

interface CurvedLoopProps {
  marqueeText?: string;
  speed?: number;
  className?: string;
  curveAmount?: number; // Adjust this for wave height (e.g., 100-200)
  direction?: 'left' | 'right';
  interactive?: boolean;
}

const CurvedLoop: FC<CurvedLoopProps> = ({
  marqueeText = '',
  speed = 2,
  className,
  curveAmount = 150,
  direction = 'left',
  interactive = true
}) => {
  const text = useMemo(() => {
    const hasTrailing = /\s|\u00A0$/.test(marqueeText);
    return (hasTrailing ? marqueeText.replace(/\s+$/, '') : marqueeText) + '\u00A0';
  }, [marqueeText]);

  const measureRef = useRef<SVGTextElement | null>(null);
  const textPathRef = useRef<SVGTextPathElement | null>(null);
  const [spacing, setSpacing] = useState(0);
  const [offset, setOffset] = useState(0);
  const uid = useId();
  const pathId = `wave-${uid}`;

  // 1. IMPROVED VIEWBOX & PATH: 
  // We use a taller viewBox (400) so the wave has room to breathe on mobile.
  const viewBoxHeight = 400;
  const centerY = viewBoxHeight / 2;

  const pathD = useMemo(() => {
    const startX = -200;
    const endX = 1640;
    const width = endX - startX;
    const halfWidth = width / 2;
    const quarterWidth = width / 4;

    // Creates a smooth "S" wave (up then down)
    return `M${startX},${centerY} 
            Q${startX + quarterWidth},${centerY - curveAmount} ${startX + halfWidth},${centerY}
            T${endX},${centerY}`;
  }, [curveAmount, centerY]);

  const dragRef = useRef(false);
  const lastXRef = useRef(0);
  const dirRef = useRef<'left' | 'right'>(direction);
  const velRef = useRef(0);

  const textLength = spacing;
  const totalText = textLength
    ? Array(Math.ceil(3000 / textLength) + 3).fill(text).join('')
    : text;
  const ready = spacing > 0;

  useEffect(() => {
    if (measureRef.current) setSpacing(measureRef.current.getComputedTextLength());
  }, [text, className]);

  useEffect(() => {
    if (!spacing || !ready) return;
    let frame = 0;
    const step = () => {
      if (!dragRef.current && textPathRef.current) {
        const delta = dirRef.current === 'right' ? speed : -speed;
        const currentOffset = parseFloat(textPathRef.current.getAttribute('startOffset') || '0');
        let newOffset = currentOffset + delta;
        if (newOffset <= -spacing) newOffset += spacing;
        if (newOffset > 0) newOffset -= spacing;
        textPathRef.current.setAttribute('startOffset', newOffset + 'px');
        setOffset(newOffset);
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [spacing, speed, ready]);

  // Pointer Handlers... (Keep your existing onPointerDown, Move, and endDrag)
  const onPointerDown = (e: PointerEvent) => {
    if (!interactive) return;
    dragRef.current = true;
    lastXRef.current = e.clientX;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: PointerEvent) => {
    if (!interactive || !dragRef.current || !textPathRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    velRef.current = dx;
    const currentOffset = parseFloat(textPathRef.current.getAttribute('startOffset') || '0');
    let newOffset = currentOffset + dx;
    if (newOffset <= -spacing) newOffset += spacing;
    if (newOffset > 0) newOffset -= spacing;
    textPathRef.current.setAttribute('startOffset', newOffset + 'px');
    setOffset(newOffset);
  };

  const endDrag = () => {
    dragRef.current = false;
    if (Math.abs(velRef.current) > 1) dirRef.current = velRef.current > 0 ? 'right' : 'left';
  };

  return (
    <div
      className="flex items-center justify-center w-full min-h-[200px]"
      style={{ visibility: ready ? 'visible' : 'hidden' }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
    >
      <svg
        // Changed: Removed aspect-100/12, increased height via viewBox
        className="select-none w-full h-auto overflow-visible block text-[120px] sm:text-[80px] font-black uppercase"
        viewBox={`0 0 1440 ${viewBoxHeight}`}
      >
        <text ref={measureRef} xmlSpace="preserve" className="opacity-0 pointer-events-none">
          {text}
        </text>
        <defs>
          <path id={pathId} d={pathD} fill="none" />
        </defs>
        {ready && (
          <text className={`fill-current ${className ?? ''}`}>
            <textPath ref={textPathRef} href={`#${pathId}`} startOffset={offset + 'px'}>
              {totalText}
            </textPath>
          </text>
        )}
      </svg>
    </div>
  );
};

export default CurvedLoop;