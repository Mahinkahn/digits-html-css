import React from 'react';

const For = () => {
    return (
        <div className='mt-[77px]'>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <footer className="footer items-center p-4 text-neutral-content mt-[53px] mb-[107px]">
                <div className="items-center grid-flow-col">
                    <p>Copyright © 2023 - All right reserved</p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a className="link link-hover hover:scale-110 ">Privacy Policy</a>
                    <a className="link link-hover hover:scale-110 ">Terms of Use</a>
                    <a className="link link-hover hover:scale-110 ">GDPR</a>
                </div>
            </footer>
        </div>
    );
};

export default For;