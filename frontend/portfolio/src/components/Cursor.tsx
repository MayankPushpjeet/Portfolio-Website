import { useEffect, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

const Cursor: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div
      className="cursor-container absolute z-50 pointer-events-none"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {/* Create multiple concentric circles with varying opacity and gradient */}
      {[...Array(10)].map((_, index) => (
        <div
          key={index} // Important for performance optimization
          className={`circle absolute rounded-full`}
          style={{
            background: `radial-gradient(circle, rgba(0, 0, 255, ${0.04 - index / 250}) 0%, rgba(255, 255, 255, 0) 100%)`,
            width: `${120 + index * 150}px`,
            height: `${120 + index * 150}px`,
            transform: `translate(-50%, -50%)`,
          }}
        />
      ))}
    </div>
  );
};

export default Cursor;
