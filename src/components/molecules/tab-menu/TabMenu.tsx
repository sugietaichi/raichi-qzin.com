export const TabMenu = () => {
    return (
        <>
            <div className="w-full bg-white">
                <div className="relative right-0">
                    <ul className="relative flex flex-wrap p-1 list-none rounded-lg bg-blue-gray-50/60" data-tabs="tabs" role="list">
                        <li className="z-30 flex-auto text-center bg-pink-300">
                            <a className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
                                data-tab-target="" role="tab" aria-selected="true">
                                <span className="ml-1">HTML</span>
                            </a>
                        </li>
                        <li className="z-30 flex-auto text-center">
                            <a className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
                                data-tab-target="" role="tab" aria-selected="false">
                                <span className="ml-1">React</span>
                            </a>
                        </li>
                        <li className="z-30 flex-auto text-center">
                            <a className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
                                data-tab-target="" role="tab" aria-selected="false">
                                <span className="ml-1">Vue</span>
                            </a>
                        </li>
                        <li className="z-30 flex-auto text-center">
                            <a className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
                                data-tab-target="" role="tab" aria-selected="true">
                                <span className="ml-1">Angular</span>
                            </a>
                        </li>
                        <li className="z-30 flex-auto text-center">
                            <a className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
                                data-tab-target="" role="tab" aria-selected="true">
                                <span className="ml-1">Svelte</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}