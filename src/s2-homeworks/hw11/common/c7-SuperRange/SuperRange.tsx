import React from 'react'
import { alpha, Slider, SliderProps } from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                'width': '400px',
                color: 'success.main',
                '& .MuiSlider-thumb': {
                    borderRadius: '7px',
                },
                '&.Mui-active': {
                    boxShadow: `0px 0px 0px 25px`,
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
