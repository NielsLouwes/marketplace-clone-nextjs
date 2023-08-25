import ProductsOverview from "@/pages/products-overview";
import Layout from "./components/Layout/Layout";


export default function Home() {

  const callAPI = async () => {};

  return (
    <main>
      <Layout>
        <ProductsOverview />
        </Layout>
    </main>
  )
}
