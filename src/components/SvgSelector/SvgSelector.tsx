import { FC } from 'react'

interface SvgSelectorType {
  id: string
}
export const SvgSelector: FC<SvgSelectorType> = ({ id }) => {
  switch (id) {
    case 'like':
      return (
        <svg
          id="like"
          data-name="like"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 122.88 122.88"
        >
          <title>like-button</title>
          <path d="M61.44,0A61.44,61.44,0,1,1,0,61.44,61.44,61.44,0,0,1,61.44,0Z" fill="#11fa1f" />
          <path
            d="M32.5,53.39H43.06a2.18,2.18,0,0,1,2.17,2.18V84.52a2.19,2.19,0,0,1-2.17,2.18H32.5a2.19,2.19,0,0,1-2.18-2.18V55.57a2.19,2.19,0,0,1,2.18-2.18ZM60.2,31.68c1.14-5.82,10.66-.46,11.29,8.91a40.41,40.41,0,0,1-.81,9.93H84.29c5.65.23,10.59,4.28,7.1,10.93.8,2.9.92,6.3-1.24,7.65.27,4.57-1,7.41-3.37,9.65A11.42,11.42,0,0,1,85,84.63c-1.83,2.58-3.31,2-6.19,2h-23c-3.64,0-5.62-1-8-4V57C54.72,55.17,58.36,45.8,60.2,39.65v-8Z"
            fill="white"
          />
        </svg>
      )
    case 'dislike':
      return (
        <svg
          id="dislike"
          data-name="dislike"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 122.88 122.88"
        >
          <title>dislike-button</title>
          <path d="M61.44,0A61.44,61.44,0,1,1,0,61.44,61.44,61.44,0,0,1,61.44,0Z" fill="red" />
          <path
            d="M32.5,72.66H43.06a2.18,2.18,0,0,0,2.17-2.18V41.53a2.18,2.18,0,0,0-2.17-2.18H32.5a2.19,2.19,0,0,0-2.18,2.18v29a2.19,2.19,0,0,0,2.18,2.18ZM60.2,94.37c1.14,5.82,10.66.46,11.29-8.91a40.41,40.41,0,0,0-.81-9.93H84.29c5.65-.23,10.59-4.28,7.1-10.93.8-2.9.92-6.3-1.24-7.65.27-4.57-1-7.41-3.37-9.65A11.39,11.39,0,0,0,85,41.42c-1.83-2.58-3.31-2-6.19-2h-23c-3.64,0-5.62,1-8,4V69C54.72,70.88,58.36,80.25,60.2,86.4v8Z"
            fill="white"
          />
        </svg>
      )
    default:
      break
  }
}
