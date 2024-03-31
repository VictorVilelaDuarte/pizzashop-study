import { api } from '@/lib/axios'

export interface GetDailyRenevueInPeriodQuery {
  from?: Date
  to?: Date
}

export type GetDailyRenevueInPeriodResponse = {
  date: number
  receipt: number
}[]

export async function getDailyRenevueInPeriod({
  from,
  to,
}: GetDailyRenevueInPeriodQuery) {
  const response = await api.get<GetDailyRenevueInPeriodResponse>(
    '/metrics/daily-receipt-in-period',
    {
      params: {
        from,
        to,
      },
    },
  )

  return response.data
}
