import React from 'react'

interface LinkJrIconProps {
  size?: number
  color?: string
  className?: string
}

const LinkJrIcon: React.FC<LinkJrIconProps> = ({
  size = 38,
  color = 'currentColor',
  className = '',
}) => {
  return (
    <svg
      width={size || '38'}
      height={size || '38'}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clip-path="url(#clip0_4125_3219)">
        <path
          d="M17.9602 4.91447C18.1362 4.55547 18.5012 4.32847 18.9002 4.32847C19.2992 4.32847 19.6642 4.55547 19.8402 4.91447C21.5542 8.41247 23.1182 10.7345 25.0702 12.6815C27.0222 14.6285 29.3512 16.1885 32.8582 17.8985C33.2162 18.0735 33.4442 18.4375 33.4442 18.8365C33.4442 19.2345 33.2162 19.5985 32.8582 19.7735C26.1582 23.0415 23.1162 26.0745 19.8392 32.7575C19.6632 33.1165 19.2982 33.3435 18.8992 33.3435C18.5002 33.3435 18.1352 33.1165 17.9592 32.7575C16.2452 29.2595 14.6802 26.9375 12.7292 24.9905C10.7772 23.0435 8.44822 21.4835 4.94122 19.7735C4.58322 19.5985 4.35522 19.2345 4.35522 18.8365C4.35522 18.4375 4.58322 18.0735 4.94122 17.8985C11.6412 14.6305 14.6832 11.5965 17.9602 4.91447Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_4125_3219">
          <rect
            width="30"
            height="30"
            fill="white"
            transform="translate(9.27051) rotate(18)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default LinkJrIcon
