import React from 'react';

const Filter = ({list, value, settingData}) => {
    return(
        <div>
            <select value={value} onChange={e=>settingData(e.target.value)}>
                {
                    list.map(l => {
                        return(
                            (typeof(l) === 'boolean') ? <option value={l}>{l ? 'O' : 'X'}</option> :
                            <option value={l}>{l}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Filter;