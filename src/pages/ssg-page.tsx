import { GetStaticProps, NextPage } from "next";



type Props = {
  buildDate:string
}
const Page : NextPage<Props> = ({buildDate}) => {
  return (
    <div className="">{buildDate}</div>
  )
}
  
export const getStaticProps: GetStaticProps<Props> = async () => {
  const date = new Date().toISOString()
  console.log(date)
  return {
    props:{
      buildDate:date
    }
  }
}

export default Page