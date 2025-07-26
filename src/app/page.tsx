'use client'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import { useQuery } from '@tanstack/react-query'


export default function Home() {
  const { data: animes, isLoading, isError } = useQuery({
    queryKey: ['animes'],
    queryFn: async () => {
      const res = await fetch('https://kitsu.io/api/edge/anime')
      const json = await res.json()
      return json.data
    }
  })

  if (isLoading) return <p>loading...</p>
  if (isError) return <p>error to search animes.</p>

  return (
    <div>
      <Navbar/>
    <ul>
      {animes.map((anime) => (
        <li key={anime.id}>{anime.attributes.titles.en_jp}</li>
      ))}
    </ul>
    <Footer/>
    </div>
  )
}
