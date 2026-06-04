'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const isHovered = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check if desktop (screen width >= 1024px)
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const handleMediaChange = (e) => {
      if (!e.matches) {
        setVisible(false);
      }
    };
    mediaQuery.addEventListener('change', handleMediaChange);

    if (!mediaQuery.matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Smooth follower animation loop
    let animId;
    const tick = () => {
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.1;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.1;
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x - 6}px, ${cursorPos.current.y - 6}px, 0) scale(${isHovered.current ? 2.5 : 1})`;
      }
      animId = requestAnimationFrame(tick);
    };
    animId = requestAnimationFrame(tick);

    const onMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      if (!visible) setVisible(true);
    };

    const onMouseLeave = () => {
      setVisible(false);
    };

    const onMouseEnter = () => {
      setVisible(true);
    };

    const handleMouseEnterInteractive = () => {
      isHovered.current = true;
    };
    const handleMouseLeaveInteractive = () => {
      isHovered.current = false;
    };

    const attachedElements = new Set();

    const addHoverListeners = () => {
      const interactives = document.querySelectorAll(
        'a, button, input, select, textarea, [role="button"], .gallery-item, .flip-container, .menu-tab'
      );
      interactives.forEach((el) => {
        if (!attachedElements.has(el)) {
          el.addEventListener('mouseenter', handleMouseEnterInteractive);
          el.addEventListener('mouseleave', handleMouseLeaveInteractive);
          attachedElements.add(el);
        }
      });
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Initial setup of hover listeners
    addHoverListeners();

    // Re-run listener setup on dynamic DOM changes
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      mediaQuery.removeEventListener('change', handleMediaChange);
      observer.disconnect();

      // Clean up interactive elements event listeners
      attachedElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterInteractive);
        el.removeEventListener('mouseleave', handleMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '12px',
        height: '12px',
        backgroundColor: '#2BA8A0',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 10000,
        mixBlendMode: 'difference',
        display: visible ? 'block' : 'none',
        transition: 'background-color 0.3s ease, opacity 0.3s ease',
        transform: 'translate3d(-50%, -50%, 0)',
        willChange: 'transform',
      }}
    />
  );
}
