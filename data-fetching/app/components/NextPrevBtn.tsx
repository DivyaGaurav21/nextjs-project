'use client'
import React from 'react';

interface NextPrevBtnProps {
    setSkipuser: (newState: number) => void;
    skipuser: number;
}

const NextPrevBtn: React.FC<NextPrevBtnProps> = ({ setSkipuser, skipuser }) => {
    // console.log(skipuser)

    const decrementSkip = () => {
        setSkipuser((currstate: number) => currstate - 20);
    };

    const incrementSkip = () => {
        setSkipuser((currstate: number) => currstate + 20);
    };

    return (
        <div className="mt-12 flex justify-center">
            <button
                type="button"
                className={`text-red-700 border border-red-600 rounded-full
        w-12 h-12 hover:bg-red-700 hover:text-white mr-3 ${skipuser <= 0 ? "hidden" : "block"}`}
                onClick={decrementSkip}
            >
                <span className="font-bold text-2xl">&lt;</span>
            </button>
            <button
                type="button"
                className={`text-red-700 border border-red-600 rounded-full 
                w-12 h-12 hover:bg-red-700 hover:text-white ${skipuser == 80 ? "hidden" : "block"}`}
                onClick={incrementSkip}
            >
                <span className="font-bold text-2xl">&gt;</span>
            </button>
        </div>
    );
};

export default NextPrevBtn;
