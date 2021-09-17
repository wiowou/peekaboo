import React from 'react';

import WithPeekaboo from '../with-peekaboo/with-peekaboo.component';

const TheSubtitle = () => {
    return (
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    );
}

export default WithPeekaboo(TheSubtitle, 1000);