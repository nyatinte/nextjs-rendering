import { GetServerSideProps, NextPage } from 'next';

type Props = {
  date: string;
};
const Page: NextPage<Props> = ({ date }) => {
  return <div className=''>{date}</div>;
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  console.log('ctx', ctx);
  const date = new Date().toISOString();
  console.log('date', date);
  return {
    props: {
      date,
    },
  };
};

export default Page;
