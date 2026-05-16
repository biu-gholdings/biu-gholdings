import '../../css/app.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import StaticApp from '@/static/StaticApp';

const root = document.getElementById('app');

if (root) {
    createRoot(root).render(
        <StrictMode>
            <BrowserRouter>
                <StaticApp />
            </BrowserRouter>
        </StrictMode>,
    );
}
