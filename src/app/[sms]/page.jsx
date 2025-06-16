import Sms from "./Sms"
import { smskey } from "../lib/cities"
import ErrorPage from "../components/ErrorPage"

export default async function SMS({
  params,
}) {

  const { sms } = await params


  if (!smskey?.includes(sms)) {
    return <ErrorPage/>
  }

  return <Sms />


}