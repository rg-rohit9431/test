import React from 'react';
import { useSnackBae } from '../context/SnackBae';

const ToggleSwitch = () => {
    const{isOn, setIsOn} =useSnackBae();

    const toggleSwitch = () => {
        setIsOn(!isOn);
    };

    return (
        <div className="relative">
            <div
                onClick={toggleSwitch}
                className={`w-12 h-6 bg-gray-300 rounded-full shadow-inner cursor-pointer ${isOn ? 'bg-green-500' : 'bg-gray-400'
                    }`}
            >
                <div
                    onClick={toggleSwitch}
                    className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isOn ? 'translate-x-6' : 'translate-x-0'
                        }`}
                ></div>
            </div>
        </div>
    );
};

export default ToggleSwitch;
