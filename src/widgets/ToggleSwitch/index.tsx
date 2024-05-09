import { ToggleButton, ToggleButtonGroup } from '@mui/material';
type Alignment = {
    alignment: 'bonds' | 'volume';
    setAlignment: (param: 'bonds' | 'volume') => void
}
const ToggleSwitch = ({ alignment, setAlignment }: Alignment) => {


    const handleChange = (_: React.MouseEvent<HTMLElement, MouseEvent>, newAlignment: 'bonds' | 'volume') => {
        setAlignment(newAlignment);
    };

    return (
        <ToggleButtonGroup
            size='small'
            color="success"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            sx={{
                borderRadius: '50px',
                border: '1px solid #2e7d32',
                '.MuiToggleButton-root': {
                    padding: '5px 10px',
                    borderRadius: '50px',
                    border: 'none',
                    '&.Mui-selected': {
                        backgroundColor: '#2e7d32',
                        color: '#fff',
                    },
                }
            }}
        >
            <ToggleButton value="bonds">Bonds</ToggleButton>
            <ToggleButton value="volume">Volume in ₸</ToggleButton>
        </ToggleButtonGroup>
    );
}

export default ToggleSwitch;