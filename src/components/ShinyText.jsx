// ShinyText.jsx
import './shinytext.css';

export default function ShinyText({
      text,
      shimmerSpeed = 3,
      shimmerWidth = 12,
      gradientSpeed = 8,
      disabled = false,
      className = '',
  }) {
    return (
        <span
            className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}

            style={{
                '--shimmer-speed': `${shimmerSpeed}s`,
                '--shimmer-width': `${shimmerWidth}%`,
                '--gradient-speed': `${gradientSpeed}s`,
            }}
            data-text={text}
        >
      {text}
    </span>
    );
}
