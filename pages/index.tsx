import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Meduim Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className=" flex items-center  border-y border-black bg-yellow-400 px-10">
        <div className="">
          <h1 className="max-w-xl font-serif text-6xl">
            <span className="underline">Meduim</span> is a place to write and
            connect
          </h1>
          <h2>
            Its easy and free to post your thinking on any topic and connect to
            millions of people
          </h2>
        </div>
        <div className="">
          <img
            src="https://amitshekhar.me/img/medium.png"
            alt=""
            className="h-30 hidden md:inline-flex lg:h-full"
          />
        </div>
      </main>
      {/* post components */}
    </div>
  )
}
