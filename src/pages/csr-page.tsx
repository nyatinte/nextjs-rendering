import { NextPage } from 'next';

const Page: NextPage = () => {
  const date = new Date().toISOString();
  console.log(date);
  return <div className=''>{date}</div>;
};
export default Page;
