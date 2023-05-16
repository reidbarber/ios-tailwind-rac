import dynamic from 'next/dynamic'

const Demo = dynamic(() => import('./Demo'), {
  ssr: false,
})

export default function Home() {  
  return (
    <Demo />
  );
}
