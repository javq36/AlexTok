export const Comment = ({ fill = 'currentColor' }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='40'
      height='40'
      fill='currentColor'
      viewBox='0 0 20 20'
    >
      <g clipPath='url(#BubbleEllipsisRightFill_clip0)'>
        <g filter='url(#BubbleEllipsisRightFill_filter0_d)'>
          <path
            fillRule='evenodd'
            d='M16.04 14.714c1.71-1.714 2.71-3.499 2.71-5.577 0-4.218-3.861-7.637-8.625-7.637C5.361 1.5 1.5 4.919 1.5 9.137c0 4.217 3.986 7.113 8.75 7.113v1.399c0 .443.46.728.85.517 1.217-.66 3.473-1.983 4.94-3.452zM5.934 8.107c.681 0 1.233.548 1.233 1.223 0 .676-.552 1.224-1.233 1.224-.68 0-1.231-.548-1.231-1.224 0-.675.552-1.223 1.231-1.223zm5.422 1.223c0-.675-.551-1.223-1.232-1.223-.68 0-1.232.548-1.232 1.223 0 .676.552 1.224 1.232 1.224.68 0 1.232-.548 1.232-1.224zm2.958-1.223c.68 0 1.231.548 1.231 1.223 0 .676-.55 1.224-1.231 1.224s-1.233-.548-1.233-1.224c0-.675.552-1.223 1.233-1.223z'
            clipRule='evenodd'
          />
        </g>
        <path
          fill='url(#BubbleEllipsisRightFill_paint0_linear)'
          fillRule='evenodd'
          d='M10.25 16.25s4.778-.37 6.775-2.927c-1.997 2.813-3.994 4.348-5.742 4.86-1.747.51-1.033-1.933-1.033-1.933z'
          clipRule='evenodd'
          opacity='0.1'
        />
      </g>
      <defs>
        <filter
          id='BubbleEllipsisRightFill_filter0_d'
          width='19.25'
          height='18.737'
          x='0.5'
          y='1.5'
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          />
          <feOffset dy='1' />
          <feGaussianBlur stdDeviation='0.5' />
          <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0' />
          <feBlend
            in2='BackgroundImageFix'
            result='effect1_dropShadow'
          />
          <feBlend
            in='SourceGraphic'
            in2='effect1_dropShadow'
            result='shape'
          />
        </filter>
        <linearGradient
          id='BubbleEllipsisRightFill_paint0_linear'
          x1='8.504'
          x2='9.295'
          y1='15.696'
          y2='18.18'
          gradientUnits='userSpaceOnUse'
        >
          <stop />
          <stop offset='1' stopOpacity='0.01' />
        </linearGradient>
        <clipPath id='BubbleEllipsisRightFill_clip0'>
          <path fill='#fff' d='M0 0H20V20H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}
