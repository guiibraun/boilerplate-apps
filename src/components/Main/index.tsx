import Image from 'next/image'
import logo from '@/assets/logo.svg'

export default function Main({
  title = 'React Avançado',
  description = 'Crie aplicações reais com NextJS, Strapi, GraphQL e mais!'
}) {
  return (
    <main className="bg-indigo-950 w-full p-8 text-white min-h-screen flex-col gap-8 flex justify-center items-center">
      <Image src="/logo.svg" alt="" width={250} height={250} />
      <h1 className=" text-6xl font-bold ">{title}</h1>
      <p>{description}</p>
    </main>
  )
}
