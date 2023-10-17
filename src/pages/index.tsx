import { Suspense } from "react";
import dynamic from "next/dynamic";

import LayoutMain from "@/layouts/Main";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetStaticProps } from "next";

const ViewHome = dynamic(() => import("@/views/Home"), {
  suspense: true,
  ssr: false,
});

const Home: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewHome />
    </Suspense>
  );
};

Home.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default Home;
