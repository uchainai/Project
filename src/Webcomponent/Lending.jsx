import React from 'react'

function Lending() {
    return (
        <div>
            <div class="h-screen overflow-y-auto text-black">
                {/* <header class="flex items-center justify-between p-4">
                    <a href="https://rombo.co/" class="motion-preset-slide-down text-2xl font-black">Rombo</a>
                    <nav class="mr-4 flex gap-6 font-semibold">
                        <a href="https://rombo.co/" class="motion-preset-rebound-down motion-delay-[400ms]">Products</a>
                        <a href="https://rombo.co/" class="motion-preset-rebound-down motion-delay-[450ms]">Learn More</a>
                        <a href="https://rombo.co/" class="motion-preset-rebound-down motion-delay-[500ms]">Contact Us</a>
                    </nav>
                </header> */}

                <main class="mx-auto max-w-4xl overflow-x-hidden px-8 py-4">
                    
                    <div class="mt-10 flex flex-col gap-10 sm:flex-row sm:gap-4">
                        <div class="motion motion-preset-slide-left flex-1 rounded-2xl shadow-md shadow-black bg-lime-800/50 p-4 motion-delay-[1000ms] motion-ease-spring-bouncier">
                            <img alt="shopify logo" class="-mt-12 mb-4 size-20 bg-blend-exclusion shadow-lg shadow-black" src="https://cdn.sanity.io/images/xrq4swux/production/ea11cf5ade02dbf180e5a8c277a281141d58d6f4-110x124.svg?fit=max&auto=format" />
                            <h3 class="mb-2 text-2xl font-bold">Shopify</h3>
                            <p class="text-sm opacity-80">Join thousands of Shopify users bringing their stores to life with Rombo.</p>
                        </div>
                        <div class="motion motion-preset-slide-left flex-1 rounded-2xl shadow-md shadow-black bg-teal-800/50 p-4 motion-delay-[1300ms] motion-ease-spring-bouncier">
                            <img alt="tailwind logo" class="-mt-12 mb-4 size-20 opacity-90 bg-blend-exclusion shadow-lg shadow-black" src="https://cdn.sanity.io/images/xrq4swux/production/49f386e7cb98664a6645577735448c1062daeb57-54x33.svg?fit=max&auto=format" />
                            <h3 class="mb-2 text-2xl font-bold">TailwindCSS</h3>
                            <p class="text-sm opacity-80">Add intricate animations to your frontend in no time at all.</p>
                        </div>
                        <div class="motion motion-preset-slide-left flex-1 rounded-2xl  shadow-md shadow-black bg-gray-800/50 p-4 motion-delay-[1600ms] motion-ease-spring-bouncier">
                            <img alt="figma logo" class="-mt-12 mb-4 size-20 opacity-90 bg-blend-exclusion shadow-lg shadow-black" src="https://cdn.sanity.io/images/xrq4swux/production/8ba9090052032bc90e8cfa9a83583fdf69c7d96b-413x620.svg?fit=max&auto=format" />
                            <h3 class="mb-2 text-2xl font-bold">Figma</h3>
                            <p class="text-sm opacity-80">Add interactivity to your designs without leaving the Figma canvas.</p>
                        </div>
                    </div>
                    <p class="mt-8 flex flex-wrap gap-4 text-4xl font-black md:text-6xl">
                        <span class="motion-preset-blur-left block motion-delay-[2400ms]">MOTION</span>
                        <span class="motion-preset-blur-left block motion-delay-[2800ms]">WITHOUT</span>
                        <span class="motion-preset-blur-left block motion-delay-[3200ms]">COMMOTION</span>
                    </p>
                    <p class="motion-preset-fade-lg mt-4 font-thin motion-delay-[2s] opacity-100 text-black text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <p class="motion-preset-fade-lg mt-4 font-thin motion-delay-[2s] opacity-100 text-black text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </main>
            </div>

        </div>
    )
}

export default Lending