import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
    return (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-2xl bg-slate-950 text-white shadow-2xl">
                <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    <div className="space-y-7">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
                                Github Profile
                            </p>
                            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
                                {data.name}
                            </h1>
                            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                                {data.bio}
                            </p>
                        </div>

                        <div className="grid max-w-xl grid-cols-3 gap-4 text-center">
                            <div className="rounded-xl bg-white/10 p-4">
                                <p className="text-3xl font-bold text-orange-400">{data.followers}</p>
                                <p className="mt-1 text-sm text-slate-300">Followers</p>
                            </div>
                            <div className="rounded-xl bg-white/10 p-4">
                                <p className="text-3xl font-bold text-orange-400">{data.following}</p>
                                <p className="mt-1 text-sm text-slate-300">Following</p>
                            </div>
                            <div className="rounded-xl bg-white/10 p-4">
                                <p className="text-3xl font-bold text-orange-400">{data.public_repos}</p>
                                <p className="mt-1 text-sm text-slate-300">Repos</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3 text-sm text-slate-300">
                            <span className="rounded-full bg-white/10 px-4 py-2">
                                @{data.login}
                            </span>
                            <span className="rounded-full bg-white/10 px-4 py-2">
                                {data.location}
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="absolute -inset-4 rounded-full bg-orange-500/25 blur-2xl"></div>
                            <img
                                className="relative h-72 w-72 rounded-full border-4 border-white/20 object-cover shadow-2xl sm:h-80 sm:w-80"
                                src={data.avatar_url}
                                alt={`${data.name} Github avatar`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/vipinsinghhh')
    return response.json()
}
