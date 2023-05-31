import { ReactNode, useEffect, useRef, useState } from "react";
export default function ({ header, children }: { header: string, children: ReactNode }) {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [dragging, setDragging] = useState([false, false]);

    const winRef = useRef<HTMLDivElement>(null);
    const headRef = useRef<HTMLHeadingElement>(null);
    const sizeRef = useRef<HTMLDivElement>(null);

    // Initialization
    useEffect(() => {

        if (!winRef.current) return;
        if (loaded) return;

        const { x, y, width, height } = winRef.current.getBoundingClientRect();

        setX(x);
        setY(y);
        setWidth(width);
        setHeight(height);
        setLoaded(true);


    }, [winRef.current]);

    // Position drag
    useEffect(() => {

        if(!headRef.current) return;
        
        const dragStart = (e: MouseEvent) => {

            setDragging(v => [true, v[1]]);

            const { clientX, clientY } = e;
            const { x, y } = winRef.current!.getBoundingClientRect();
            const offsetX = clientX - x;
            const offsetY = clientY - y;

            const drag = (e: MouseEvent) => {
                const { clientX, clientY } = e;
                
                let clampedX = clientX - offsetX;
                clampedX = Math.max(clampedX, 0);
                clampedX = Math.min(clampedX, window.innerWidth - width);
                
                let clampedY = clientY - offsetY;
                clampedY = Math.max(clampedY, 0);
                clampedY = Math.min(clampedY, window.innerHeight - height);

                setX(clampedX);
                setY(clampedY);
            }

            const dragEnd = () => {
                setDragging(v => [false, v[1]]);
                window.removeEventListener('mousemove', drag);
                window.removeEventListener('mouseup', dragEnd);
            }

            window.addEventListener('mousemove', drag);
            window.addEventListener('mouseup', dragEnd);
        }

        headRef.current.addEventListener('mousedown', dragStart);

        return () => {
            headRef.current?.removeEventListener('mousedown', dragStart);
        }


    }, [headRef.current]);

    // Resize drag
    useEffect(() => {

        if(!sizeRef.current) return;

        const dragStart = (e: MouseEvent) => {

            setDragging(v => [v[0], true]);

            const { clientX, clientY } = e;
            const { width, height } = winRef.current!.getBoundingClientRect();
            const offsetX = clientX - width;
            const offsetY = clientY - height;

            const drag = (e: MouseEvent) => {
                const { clientX, clientY } = e;

                let clampedWidth = clientX - offsetX;
                let clampedHeight = clientY - offsetY;

                setWidth(clampedWidth);
                setHeight(clampedHeight);
            }

            const dragEnd = () => {
                setDragging(v => [v[0], false]);
                window.removeEventListener('mousemove', drag);
                window.removeEventListener('mouseup', dragEnd);
            }

            window.addEventListener('mousemove', drag);
            window.addEventListener('mouseup', dragEnd);
        }

        sizeRef.current.addEventListener('mousedown', dragStart);

        return () => {
            sizeRef.current?.removeEventListener('mousedown', dragStart);
        }

    }, [sizeRef.current]);

    return (
        <div
            ref={winRef}
            style={{
                position: 'absolute',
                width: loaded ? width : undefined, height: loaded ? height : undefined,
                left: loaded ? x : undefined, top: loaded ? y : undefined,
                visibility: loaded ? 'visible' : 'hidden',
                maxWidth: loaded ? undefined : 'min(calc(90vw - 10rem), 55rem)',
                userSelect: dragging[0] || dragging[1] ? 'none' : undefined,
            }}>
            <article className="
                w-full h-full
                flex flex-col
                px-2 pb-4
                border border-neutral-500
                rounded-lg shadow-md
                relative overflow-clip
            ">
                <header className="border-b mb-2 pb-1 flex items-center">
                    <h2 ref={headRef} className="pt-2 flex-1 select-none cursor-move">
                        {header}
                    </h2>
                    <div>
                        <button className="w-6 h-6 bg-transparent hover:bg-neutral-50 rounded hover:shadow grid items-center transition">
                            <span className="text-sm">x</span>
                        </button>
                    </div>
                </header>
                <section>
                    {children}
                </section>
                <div
                    ref={sizeRef}
                    className="
                        absolute bottom-[-0.5rem] right-[-0.5rem]
                        w-4 h-4
                        rounded
                        bg-gradient-to-br from-transparent to-neutral-500
                        cursor-nwse-resize
                "/>
            </article>
        </div>
    )
}