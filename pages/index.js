import { useState } from 'react'
import Header from '../components/Header'
import dynamic from 'next/dynamic'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

// const DynamicComponent1 = dynamic(() => import('../components/hello1'))

// const DynamicComponent2WithCustomLoading = dynamic(
//   () => import('../components/hello2'),
//   { loading: () => <p><img src="/blure.jpg"></img>loading......</p> }
// )

const DynamicComponent3WithNoSSR = dynamic(
  () => import('../components/hello3'),
  { loading: () =>   <div>
    <Skeleton count={15} height={20} width={500} duration={5} />
  
  </div> , ssr: false }
)

// const DynamicComponent4 = dynamic(() => import('../components/hello4'))

// const DynamicComponent5 = dynamic(() => import('../components/hello5'))

const IndexPage = () => {
  const [showMore, setShowMore] = useState(false)
  const [falsyField] = useState(false)

  return (
    <div>
      <Header />
      
      {/* Load immediately, but in a separate bundle */}
      {/* <DynamicComponent1 /> */}

      {/* Show a progress indicator while loading */}
      {/* <DynamicComponent2WithCustomLoading /> */}

      {/* Load only on the client side */}
      <DynamicComponent3WithNoSSR />

      {/* This component will never be loaded */}
      {/* {falsyField && <DynamicComponent4 />} */}

      {/* Load on demand */}
      {/* {showMore && <DynamicComponent5 />}
      <button onClick={() => setShowMore(!showMore)}>Toggle Show More</button> */}
    </div>
  )
}

export default IndexPage
