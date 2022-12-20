import React from 'react';

function CreateTimeString(timestamp) {
    const day = new Date(timestamp * 1000)

    return day.toLocaleDateString([], {hour: "2-digit", minute: "2-digit"});
}

export default CreateTimeString;