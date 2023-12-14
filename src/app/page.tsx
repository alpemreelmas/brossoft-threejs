"use client"
import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import Space from "@/src/components/space";

export default function Home() {

    return (
    <>
        <section className={"w-full h-screen bg-black fixed"}>
            <Canvas
                id={"canvas"}
                camera={{fov:60, position:[-4,-4,-4] ,near: 0.1, far:1000}}
            >
                <Suspense fallback={"loading..."}>
                    <Space />
                </Suspense>
            </Canvas>
        </section>
        <div className={"h-[200vh] w-full"}></div>
    </>

  )
}
