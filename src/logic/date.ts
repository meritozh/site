import dayjs from 'dayjs'

export const formatDate = (d: string | Date) => {
  const date = dayjs(d)
  if (date.year() === dayjs().year())
    return date.format('MMM D')
  return date.format('MMM D, YYYY')
}