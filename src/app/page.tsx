"use client"
import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import Space from "@/src/components/space";

export default function Home() {

    return (
    <>
        <section className={"w-full h-screen bg-black relative"}>
            <Canvas
                id={"canvas"}
                camera={{fov:60, position:[-2,-2,-4] ,near: 0.1, far:1000}}
            >
                <Suspense fallback={"loading..."}>
                    <Space />
                </Suspense>
            </Canvas>
            <div className={"absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-screen h-screen backdrop-grayscale-1"}>
                <span className={"text-6xl font-extrabold [text-shadow:_0_1px_0_var(--tw-shadow-color)]"}>Test</span>
            </div>
        </section>
    </>

  )
}
